/**
 * login.js - Módulo de Autenticación, Control de Sesión y Diseño de Login
 * Proyecto: Sistema de la Vigilancia de la Calidad del Agua para Consumo Humano (PVCACH Cusco)
 */

(function () {
    const SESSION_KEY = 'sap_app_session';
    const SESSION_TIMEOUT_MS = 60 * 60 * 1000; // 1 hora de inactividad

    const getEl = id => document.getElementById(id);

    /**
     * Gestión del tiempo de inactividad de la sesión
     */
    function setupSessionManagement() {
        const checkSession = () => {
            const sessionData = localStorage.getItem(SESSION_KEY);
            const currentUser = window.APP_STATE && window.APP_STATE.currentUser;
            if (sessionData && currentUser) {
                try {
                    const { lastActivity } = JSON.parse(sessionData);
                    if (Date.now() - lastActivity > SESSION_TIMEOUT_MS) {
                        window.logout(true); // true = expirado por inactividad
                    }
                } catch (e) {
                    console.error("Error al validar expiración de sesión:", e);
                }
            }
        };

        const updateActivity = () => {
            const currentUser = window.APP_STATE && window.APP_STATE.currentUser;
            if (currentUser) {
                const sessionData = localStorage.getItem(SESSION_KEY);
                if (sessionData) {
                    try {
                        const data = JSON.parse(sessionData);
                        data.lastActivity = Date.now();
                        localStorage.setItem(SESSION_KEY, JSON.stringify(data));
                    } catch (e) { }
                }
            }
        };

        let activityTimeout = null;
        const handleActivity = () => {
            if (!activityTimeout) {
                activityTimeout = setTimeout(() => {
                    updateActivity();
                    activityTimeout = null;
                }, 5000);
            }
        };

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('click', handleActivity);
        window.addEventListener('scroll', handleActivity);
        window.addEventListener('touchstart', handleActivity, { passive: true });
        setInterval(checkSession, 60000); // Revisión periódica cada 1 minuto
    }

    /**
     * Restauración de sesión activa almacenada en LocalStorage
     */
    function restoreSession() {
        const sessionData = localStorage.getItem(SESSION_KEY);
        if (sessionData) {
            try {
                const { user, lastActivity } = JSON.parse(sessionData);
                if (Date.now() - lastActivity <= SESSION_TIMEOUT_MS) {
                    if (window.APP_STATE) {
                        window.APP_STATE.currentUser = user;
                    }
                    const welcomeUser = getEl('welcome-user');
                    if (welcomeUser) welcomeUser.textContent = user.usuario;

                    if (typeof window.applyUserRoleUI === 'function') {
                        window.applyUserRoleUI();
                    }

                    const loginView = getEl('login-view');
                    const appView = getEl('app-view');
                    if (loginView) loginView.classList.add('hidden');
                    if (appView) appView.classList.remove('hidden');

                    if (typeof window.renderUserTable === 'function') {
                        window.renderUserTable();
                    }
                    if (typeof window.switchTab === 'function') {
                        window.switchTab('dashboard');
                    }

                    const data = JSON.parse(sessionData);
                    data.lastActivity = Date.now();
                    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
                    return true;
                } else {
                    localStorage.removeItem(SESSION_KEY);
                }
            } catch (e) {
                localStorage.removeItem(SESSION_KEY);
            }
        }
        return false;
    }

    /**
     * Proceso de autenticación de usuario
     */
    window.handleLogin = async function (e) {
        if (e) e.preventDefault();

        const userInput = getEl('login-user');
        const passInput = getEl('login-pass');
        const er = getEl('login-error');
        const errMsg = getEl('login-error-msg');
        const btnLogin = getEl('btn-login');
        const btnText = getEl('btn-login-text');
        const btnLoader = getEl('btn-login-loader');

        if (!userInput || !passInput) return;

        const u = userInput.value.trim();
        const p = passInput.value.trim();

        if (btnText) btnText.classList.add('hidden');
        if (btnLoader) btnLoader.classList.remove('hidden');
        if (btnLogin) btnLogin.disabled = true;
        if (er) er.classList.add('hidden');

        try {
            if (window.syncUsersPromise) {
                await window.syncUsersPromise;
            }
        } catch (err) {
            console.warn("syncUsersPromise error:", err);
        }

        setTimeout(() => {
            const usersList = (window.APP_STATE && window.APP_STATE.usersList) || [{ usuario: 'admin', password: '123', red: 'TODAS' }];
            const f = usersList.find(x => x.usuario && x.usuario.toLowerCase() === u.toLowerCase() && x.password === p);

            if (f) {
                if (window.APP_STATE) {
                    window.APP_STATE.currentUser = f;
                    window.APP_STATE.sapCache = {};
                    window.APP_STATE.resCache = {};
                    window.APP_STATE.fedCache = { ind1: null, ind2: null, ind3: null, ind4: null };
                }

                localStorage.setItem(SESSION_KEY, JSON.stringify({ user: f, lastActivity: Date.now() }));

                const welcomeUser = getEl('welcome-user');
                if (welcomeUser) welcomeUser.textContent = f.usuario;

                if (typeof window.applyUserRoleUI === 'function') {
                    window.applyUserRoleUI();
                }

                const loginView = getEl('login-view');
                const appView = getEl('app-view');
                if (loginView) loginView.classList.add('hidden');
                if (appView) appView.classList.remove('hidden');

                if (typeof window.renderUserTable === 'function') {
                    window.renderUserTable();
                }
                if (typeof window.switchTab === 'function') {
                    window.switchTab('dashboard');
                }
            } else {
                if (er) {
                    er.classList.remove('hidden');
                    if (errMsg) errMsg.textContent = "Credenciales incorrectas o error de red.";
                }
            }

            if (btnText) btnText.classList.remove('hidden');
            if (btnLoader) btnLoader.classList.add('hidden');
            if (btnLogin) btnLogin.disabled = false;
        }, 500);
    };

    /**
     * Cierre de sesión
     */
    window.logout = function (expired = false) {
        if (window.APP_STATE) {
            window.APP_STATE.currentUser = null;
        }
        localStorage.removeItem(SESSION_KEY);

        const appView = getEl('app-view');
        const loginView = getEl('login-view');
        const userInput = getEl('login-user');
        const passInput = getEl('login-pass');
        const er = getEl('login-error');
        const errMsg = getEl('login-error-msg');

        if (appView) appView.classList.add('hidden');
        if (loginView) loginView.classList.remove('hidden');
        if (userInput) userInput.value = '';
        if (passInput) passInput.value = '';

        if (er) {
            if (expired === true) {
                er.classList.remove('hidden');
                if (errMsg) errMsg.textContent = "Sesión expirada por inactividad.";
            } else {
                er.classList.add('hidden');
            }
        }

        if (typeof window.switchTab === 'function') {
            window.switchTab('dashboard');
        }

        if (window.lucide) {
            window.lucide.createIcons();
        }
    };

    /**
     * Inicialización de eventos del módulo Login
     */
    function initLogin() {
        setupSessionManagement();
        restoreSession();

        const loginForm = getEl('login-form');
        if (loginForm) {
            // Evitamos duplicar listeners
            loginForm.removeEventListener('submit', window.handleLogin);
            loginForm.addEventListener('submit', window.handleLogin);
        }

        ['login-user', 'login-pass'].forEach(id => {
            const el = getEl(id);
            if (el) {
                el.addEventListener('input', () => {
                    const er = getEl('login-error');
                    if (er) er.classList.add('hidden');
                });
            }
        });

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Exponer funciones necesarias en el objeto global window
    window.setupSessionManagement = setupSessionManagement;
    window.restoreSession = restoreSession;
    window.initLogin = initLogin;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLogin);
    } else {
        initLogin();
    }
})();
