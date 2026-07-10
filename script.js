const getEl = id => document.getElementById(id);

window.APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyfaJM_yxZ08fdMOmtWkEEG_u4BmjDW7GBE05X4KSrZpWVn8E5_IK3kodh60ou219QRDQ/exec';

const URLS = {
    MAIN2022: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRkrnzzFUICs1p_KsTzsNBKgaXmoJ-v6oSnp09xu144k3dngXTKPKcJtaR9FZWkSRhLI6IOspnWmNIm/pub?gid=0&single=true&output=csv',
    MAIN2023: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRbhZ8nHp9bpSW1rcWJ9iF6gF5waF7AIyHG_BC5Z9mYhVRWFWhiKf-w0gFSVsAW3RsgOq168bPK_ENl/pub?gid=0&single=true&output=csv',
    MAIN0: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMzWtKm3ALeXxBxH9DWtQ6Cc4cfJ_2KpuJTP2GU2YVyAC-hoZ_msrUkPBUPekaX5LdK00ApyekTbHd/pub?gid=0&single=true&output=csv',
    MAIN: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsZqnrFcpjOc3VLmzIpjblcQVcoygUs6CfOc8OafqJTWb6eGMEKSBeI1eDnBvoewSSmLYDCeSHpb67/pub?gid=1863124962&single=true&output=csv',
    MAIN2: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vThotzv-QqSJzWYxpawII4yWGqugTKtt1ot7NoPxxx4GuLNB0ZE6_vK5IEP4pDod4dxwu8IWxviUpRv/pub?gid=0&single=true&output=csv',
    SANITARIA: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsZqnrFcpjOc3VLmzIpjblcQVcoygUs6CfOc8OafqJTWb6eGMEKSBeI1eDnBvoewSSmLYDCeSHpb67/pub?gid=284188568&single=true&output=csv',
    RIESGOS: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsZqnrFcpjOc3VLmzIpjblcQVcoygUs6CfOc8OafqJTWb6eGMEKSBeI1eDnBvoewSSmLYDCeSHpb67/pub?gid=1175942303&single=true&output=csv',
    USUARIOS: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsZqnrFcpjOc3VLmzIpjblcQVcoygUs6CfOc8OafqJTWb6eGMEKSBeI1eDnBvoewSSmLYDCeSHpb67/pub?gid=1074724221&single=true&output=csv',
    MEF_UB: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsZqnrFcpjOc3VLmzIpjblcQVcoygUs6CfOc8OafqJTWb6eGMEKSBeI1eDnBvoewSSmLYDCeSHpb67/pub?gid=943272105&single=true&output=csv',
    FED_UB: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsZqnrFcpjOc3VLmzIpjblcQVcoygUs6CfOc8OafqJTWb6eGMEKSBeI1eDnBvoewSSmLYDCeSHpb67/pub?gid=2002511486&single=true&output=csv',
    OBSERVACIONES: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsZqnrFcpjOc3VLmzIpjblcQVcoygUs6CfOc8OafqJTWb6eGMEKSBeI1eDnBvoewSSmLYDCeSHpb67/pub?gid=579471984&single=true&output=csv',
    SAP_REGULARES: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsZqnrFcpjOc3VLmzIpjblcQVcoygUs6CfOc8OafqJTWb6eGMEKSBeI1eDnBvoewSSmLYDCeSHpb67/pub?gid=811630485&single=true&output=csv',
    VIVIENDA: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vThotzv-QqSJzWYxpawII4yWGqugTKtt1ot7NoPxxx4GuLNB0ZE6_vK5IEP4pDod4dxwu8IWxviUpRv/pub?gid=1863536023&single=true&output=csv',
    SAP_ESTADO: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vThotzv-QqSJzWYxpawII4yWGqugTKtt1ot7NoPxxx4GuLNB0ZE6_vK5IEP4pDod4dxwu8IWxviUpRv/pub?gid=1649240916&single=true&output=csv',
    MIDIS: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vThotzv-QqSJzWYxpawII4yWGqugTKtt1ot7NoPxxx4GuLNB0ZE6_vK5IEP4pDod4dxwu8IWxviUpRv/pub?gid=131170297&single=true&output=csv',
    META2025: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsZqnrFcpjOc3VLmzIpjblcQVcoygUs6CfOc8OafqJTWb6eGMEKSBeI1eDnBvoewSSmLYDCeSHpb67/pub?gid=601186067&single=true&output=csv'
};

const CORE_HEADERS = ['Id. SAP', 'Nombre SAP', 'Ubigeo', 'Nombre CCPP', 'Distrito', 'Provincia', 'Código Ipress', 'Nombre Ipress', 'Red de Salud'];
const MONITOR_MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const MONTH_NUM = { 'ENERO': '01', 'FEBRERO': '02', 'MARZO': '03', 'ABRIL': '04', 'MAYO': '05', 'JUNIO': '06', 'JULIO': '07', 'AGOSTO': '08', 'SETIEMBRE': '09', 'SEPTIEMBRE': '09', 'OCTUBRE': '10', 'NOVIEMBRE': '11', 'DICIEMBRE': '12' };
const NUM_MONTH = { '01': 'Ene', '02': 'Feb', '03': 'Mar', '04': 'Abr', '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Oct', '11': 'Nov', '12': 'Dic' };
const MONITOR_5P_PARAMS = ['Cloro', 'Conductividad', 'pH', 'Temperatura', 'Turbiedad'];

const LMP_SCOPES = {
    metales: { 'Aluminio': 0.2, 'Antimonio': 0.02, 'Arsénico': 0.01, 'Bario': 0.7, 'Boro': 1.5, 'Cadmio': 0.003, 'Cianuro': 0.07, 'Cobre': 2.0, 'Cromo total': 0.05, 'Hierro': 0.3, 'Manganeso': 0.4, 'Mercurio': 0.001, 'Molibdeno': 0.07, 'Niquel': 0.02, 'Plomo': 0.01, 'Selenio': 0.01, 'Uranio': 0.015, 'Zinc': 3.0, 'Aluminio_': 0.9, 'Antimonio_': 0.02, 'Arsénico_': 0.01, 'Bario_': 1.0, 'Cianuro libre_': 0.7, 'Cianuro total_': 0.7, 'Cobre_': 2.0, 'Cromo total_': 0.05, 'Hierro_': 1.0, 'Manganeso _': 0.4, 'Mercurio_': 0.002, 'Molibdeno_': 0.07, 'Niquel_': 0.07, 'Plomo_': 0.05, 'Selenio_': 0.04, 'Uranio_': 0.02, 'Zinc_': 3.0 },
    parasitologico: { 'Huevos Larvas Helmintos': 0, 'Formas parasitarias_': 0 },
    bacteriologico: { 'Bacterias Coliformes Fecales (NMP)': 0, 'Bacterias Coliformes Fecales (UFC)': 0, 'Bacterias Coliformes Totales (NMP)': 0, 'Bacterias Coliformes Totales (UFC)': 0, 'BACTERIAS HETEROTRÓFICAS': 500, 'E. Coli (NMP)': 0, 'E. Coli (UFC)': 0, 'Organismos de vida libre': 0, 'Coliformes Termotolerantes _': 20, 'Coliformes Totales _': 50, 'Escherichia Coli _': 0, 'Organismos de vida libre_': 0 }
};

const ANALYSIS_SETS = {
    metales: { A: ['Antimonio', 'Arsénico', 'Bario', 'Boro', 'Cadmio', 'Cianuro', 'Cromo total', 'Mercurio', 'Molibdeno', 'Niquel', 'Nitratos', ['Nitritos (Exposición Corta)', 'Nitritos (Exposición Larga)'], 'Plomo', 'Selenio', 'Uranio'], B: ['Aluminio_', 'Antimonio_', 'Arsénico_', 'Bario_', ['Cianuro libre_', 'Cianuro total_'], 'Cobre_', 'Cromo total_', 'Hierro_', 'Manganeso _', 'Mercurio_', 'Molibdeno_', 'Niquel_', 'Plomo_', 'Selenio_', 'Uranio_', 'Zinc_'] },
    fisico: { A: ['Color', 'Turbiedad', 'pH', 'Conductividad', 'Sólidos Totales disueltos', 'Cloruros', 'Sulfatos', 'Dureza total', 'Hierro', 'Manganeso', 'Aluminio', 'Cobre', 'Zinc', 'Sodio'], B: [['Nitritos (Exposición Corta)', 'Nitritos (Exposición Larga)', 'Nitritos_'], ['Color (después de filtración simple)_', 'Color (después de filtración simple) aguas claras_'], 'Turbiedad_', 'Ph_', 'Conductividad_', 'Sólidos Totales disueltos_', 'Cloruros_', 'Sulfatos_', 'Dureza_', 'Fluoruros_', 'Nitratos_'] },
    parasitologico: { A: ['Huevos Larvas Helmintos'], B: ['Formas parasitarias_'] },
    bacteriologico: { A: [['Bacterias Coliformes Fecales (NMP)', 'Bacterias Coliformes Fecales (UFC)'], ['Bacterias Coliformes Totales (NMP)', 'Bacterias Coliformes Totales (UFC)'], 'BACTERIAS HETEROTRÓFICAS', ['E. Coli (NMP)', 'E. Coli (UFC)']], B: ['Coliformes Termotolerantes _', 'Coliformes Totales _', 'Escherichia Coli _', 'Organismos de vida libre_'] }
};

const CARACT_CAPTACION_SINGLE = ['Aluminio_', 'Antimonio_', 'Arsénico_', 'Bario_', 'Boro_', 'Cadmio_', 'Cianuro total_', 'Cloruros_', 'Cobre_', 'Coliformes Termotolerantes _', 'Coliformes Totales _', 'Conductividad_', 'Cromo total_', 'Dureza_', 'Escherichia Coli _', 'Fluoruros_', 'Formas parasitarias_', 'Hierro_', 'Manganeso _', 'Mercurio_', 'Molibdeno_', 'Niquel_', 'Nitratos_', 'Nitritos_', 'Organismos de vida libre_', 'pH_', 'Plomo_', 'Selenio_', 'Sólidos Totales disueltos_', 'Sulfatos_', 'Turbiedad_', 'Uranio_', 'Zinc_'];
const CARACT_CAPTACION_OR = [['Color (después de filtración simple)_', 'Color (después de filtración simple) aguas claras_']];
const CARACT_PILETA_SINGLE = ['Aluminio', 'Antimonio', 'Arsénico', 'BACTERIAS HETEROTRÓFICAS', 'Bario', 'Boro', 'Cadmio', 'Cianuro', 'Cloro', 'Cloruros', 'Cobre', 'Color', 'Conductividad', 'Cromo total', 'Dureza total', 'Hierro', 'Huevos Larvas Helmintos', 'Manganeso', 'Mercurio', 'Molibdeno', 'Niquel', 'Nitratos', 'Organismos de vida libre', 'pH', 'Plomo', 'Selenio', 'Sodio', 'Sólidos Totales disueltos', 'Sulfatos', 'Turbiedad', 'Uranio', 'Zinc'];
const CARACT_PILETA_OR = [['Bacterias Coliformes Fecales (NMP)', 'Bacterias Coliformes Fecales (UFC)'], ['Bacterias Coliformes Totales (NMP)', 'Bacterias Coliformes Totales (UFC)'], ['E. Coli (NMP)', 'E. Coli (UFC)'], ['Nitritos (Exposición Corta)', 'Nitritos (Exposición Larga)']];

const APP_STATE = {
    currentUser: null, usersList: [{ usuario: 'admin', password: '123', red: 'TODAS' }], rawData: { main2022: [], main2023: [], main0: [], main: [], main2: [], sanitaria: [], riesgos: [], observaciones: [], vivienda: [], sapEstado: [], midis: [] },
    main2022Loaded: false, main2023Loaded: false, main0Loaded: false, sapDataLoaded: false, sapActiveTab: 'monitor', sapFilterRed: 'Todos', sapFilterAmbito: 'Vigilancia',
    sapCache: {}, resActiveTab: 'res_cloro', resFilterRed: 'Todos', resFilterAmbito: 'Vigilancia', resFilterUbicaciones: [], resCache: {},
    fedFilterRed: 'Todos', fedFilterAmbito: 'Vigilancia', fedActiveTab: 'ind1', fedCache: { ind1: null, ind2: null, ind3: null, ind4: null },
    mefUbigeos: new Set(), mefSapIds: new Set(), fedUbigeos: new Set(), sapRegularesIds: new Set(), sapRegularesUbigeos: new Set(), midisUbigeos: new Set(), midisSapIds: new Set(), meta2025Ubigeos: new Set(), meta2025SapIds: new Set(), uniqueRedes: new Set(), currentTableFilters: {},
    globalDateFrom: '2025-12', globalDateTo: null, availableMonitorMonths: [], canvas: null, isDrawing: false,
    metaMefPorRed: {}
};

const generateMonthsUpTo = (l) => { const m = []; if (!l) return m; const [y, mx] = l.split('-').map(Number); for (let i = 2022; i <= y; i++) { const k = (i === y) ? mx : 12; for (let j = 1; j <= k; j++) { const ym = `${i}-${String(j).padStart(2, '0')}`; if (ym >= '2022-01') m.push(ym); } } return m; };

const normalizeHeader = (() => {
    const cache = new Map();
    return (h) => {
        if (!h) return '';
        const s = String(h);
        let r = cache.get(s);
        if (r !== undefined) return r;
        r = s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().replace(/\s+/g, ' ');
        cache.set(s, r);
        return r;
    };
})();

const findHeaderIndex = (() => {
    const cache = new Map();
    return (h, t) => {
        if (!h || !t) return -1;
        let hm = cache.get(h);
        if (!hm) { hm = new Map(); for (let i = 0; i < h.length; i++) { const n = normalizeHeader(h[i]); if (!hm.has(n)) hm.set(n, i); } cache.set(h, hm); }
        const nt = normalizeHeader(t);
        return hm.has(nt) ? hm.get(nt) : -1;
    };
})();

const isCellEmpty = c => c === null || c === undefined || String(c).trim() === '';
const formatUbigeo = u => u ? String(u).trim().padStart(10, '0') : '';
const safeEscape = s => s === null || s === undefined ? '' : String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, "&quot;").replace(/\n/g, " ").replace(/\r/g, "");
const getMeta = (r, h) => CORE_HEADERS.map(x => { let v = r[findHeaderIndex(h, x)] || ''; return x === 'Ubigeo' ? formatUbigeo(v) : v; });
const populateMeta = (map, id, r, h) => {
    if (!id) return;
    if (!map.has(id)) {
        map.set(id, [getMeta(r, h)]);
    } else {
        const mt = map.get(id)[0];
        const iC = CORE_HEADERS.indexOf('Nombre CCPP');
        const iU = CORE_HEADERS.indexOf('Ubigeo');
        const nC = String(r[findHeaderIndex(h, 'Nombre CCPP')] || '').trim();
        const nU = formatUbigeo(r[findHeaderIndex(h, 'Ubigeo')]);
        if (nC && !mt[iC].includes(nC)) mt[iC] += ' | ' + nC;
        if (nU && !mt[iU].includes(nU)) mt[iU] += ' | ' + nU;
    }
};

window.alignRows = (src, tgt, def) => {
    if (!src || src.length <= 1 || !tgt) return [];
    const sh = src[0]; const map = tgt.map(th => findHeaderIndex(sh, th)); const ia = findHeaderIndex(tgt, 'Año');
    return src.slice(1).map(r => { const nr = map.map(i => i !== -1 ? r[i] : ''); if (ia !== -1 && !nr[ia]) nr[ia] = def; return nr; });
};

function parseCSVFast(txt) {
    let res = [], row = [], col = '', inQ = false;
    for (let i = 0; i < txt.length; i++) {
        let c = txt[i];
        if (c === '"') { if (inQ && txt[i + 1] === '"') { col += '"'; i++; } else { inQ = !inQ; } }
        else if (c === ',' && !inQ) { row.push(col.trim()); col = ''; }
        else if (c === '\n' && !inQ) { row.push(col.trim()); res.push(row); row = []; col = ''; }
        else if (c !== '\r' || inQ) { col += c; }
    }
    if (col || row.length) { row.push(col.trim()); res.push(row); }
    return res;
}

window.setTableFilter = (i, v, p) => { if (p === 'viv') APP_STATE.vivFilters[i] = v; else APP_STATE.currentTableFilters[i] = v; reRenderCurrentTable(); };
window.removeTableFilter = (i, p) => { if (p === 'viv') delete APP_STATE.vivFilters[i]; else delete APP_STATE.currentTableFilters[i]; reRenderCurrentTable(); };
window.clearAllTableFilters = (p) => { if (p === 'viv') APP_STATE.vivFilters = {}; else APP_STATE.currentTableFilters = {}; reRenderCurrentTable(); };

window.toggleFilterDropdown = (e, p, i) => {
    e.stopPropagation();
    document.querySelectorAll('.filter-dropdown-menu').forEach(el => { if (el.id !== `dropdown-${p}-${i}`) el.classList.add('hidden'); });
    const m = getEl(`dropdown-${p}-${i}`);
    if (m) { m.classList.toggle('hidden'); if (!m.classList.contains('hidden')) { const inpt = m.querySelector('input'); if (inpt) inpt.focus(); } }
};

window.filterDropdownOptions = (e, p, i) => {
    const t = e.target.value.toLowerCase(); const m = getEl(`dropdown-${p}-${i}`); if (!m) return;
    m.querySelectorAll('.filter-option').forEach(opt => { if (opt.innerText === '[ Todos ]') return; opt.style.display = opt.innerText.toLowerCase().includes(t) ? 'block' : 'none'; });
};

window.applyTableFilter = (p, i, v) => {
    if (p === 'viv') {
        if (!APP_STATE.vivFilters) APP_STATE.vivFilters = {};
        if (v === '') delete APP_STATE.vivFilters[i]; else APP_STATE.vivFilters[i] = v;
    } else {
        if (v === '') delete APP_STATE.currentTableFilters[i]; else APP_STATE.currentTableFilters[i] = v;
    }
    document.querySelectorAll('.filter-dropdown-menu').forEach(el => el.classList.add('hidden')); reRenderCurrentTable();
};

document.addEventListener('click', e => { if (!e.target.closest('.filter-wrapper')) document.querySelectorAll('.filter-dropdown-menu').forEach(el => el.classList.add('hidden')); });

function reRenderCurrentTable() { processActiveData(); }

const SESSION_KEY = 'sap_app_session';
const SESSION_TIMEOUT_MS = 60 * 60 * 1000; // 1 hora de inactividad

function setupSessionManagement() {
    const checkSession = () => {
        const sessionData = localStorage.getItem(SESSION_KEY);
        if (sessionData && APP_STATE.currentUser) {
            try {
                const { lastActivity } = JSON.parse(sessionData);
                if (Date.now() - lastActivity > SESSION_TIMEOUT_MS) {
                    window.logout(true); // true = expirado por inactividad
                }
            } catch (e) { }
        }
    };

    const updateActivity = () => {
        if (APP_STATE.currentUser) {
            const sessionData = localStorage.getItem(SESSION_KEY);
            if (sessionData) {
                try { const data = JSON.parse(sessionData); data.lastActivity = Date.now(); localStorage.setItem(SESSION_KEY, JSON.stringify(data)); } catch (e) { }
            }
        }
    };

    let activityTimeout;
    const handleActivity = () => { if (!activityTimeout) { activityTimeout = setTimeout(() => { updateActivity(); activityTimeout = null; }, 5000); } };

    window.addEventListener('mousemove', handleActivity); window.addEventListener('keydown', handleActivity); window.addEventListener('click', handleActivity); window.addEventListener('scroll', handleActivity); window.addEventListener('touchstart', handleActivity, { passive: true });
    setInterval(checkSession, 60000); // Revisar expiración cada 1 minuto
}

function restoreSession() {
    const sessionData = localStorage.getItem(SESSION_KEY);
    if (sessionData) {
        try {
            const { user, lastActivity } = JSON.parse(sessionData);
            if (Date.now() - lastActivity <= SESSION_TIMEOUT_MS) {
                APP_STATE.currentUser = user; getEl('welcome-user').textContent = user.usuario; if (typeof window.applyUserRoleUI === 'function') window.applyUserRoleUI(); getEl('login-view').classList.add('hidden'); getEl('app-view').classList.remove('hidden'); if (typeof window.renderUserTable === 'function') window.renderUserTable(); window.switchTab('dashboard'); const data = JSON.parse(sessionData); data.lastActivity = Date.now(); localStorage.setItem(SESSION_KEY, JSON.stringify(data)); return true;
            } else { localStorage.removeItem(SESSION_KEY); }
        } catch (e) { localStorage.removeItem(SESSION_KEY); }
    }
    return false;
}

function init() {
    const initLucide = () => {
        if (window.lucide) { lucide.createIcons(); }
        else { setTimeout(initLucide, 100); }
    };
    initLucide();

    setupSessionManagement();
    restoreSession();

    window.syncUsersPromise = syncUsers();
    preloadSAPData();

    const loginForm = getEl('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', window.handleLogin);
    }

    const sapFilterRed = getEl('sap-filter-red');
    if (sapFilterRed) {
        sapFilterRed.addEventListener('change', e => { APP_STATE.sapFilterRed = e.target.value; APP_STATE.currentTableFilters = {}; processActiveData(); });
    }
    const sapFilterAmbito = getEl('sap-filter-ambito');
    if (sapFilterAmbito) {
        sapFilterAmbito.addEventListener('change', e => { APP_STATE.sapFilterAmbito = e.target.value; APP_STATE.currentTableFilters = {}; processActiveData(); });
    }
    const resFilterRed = getEl('res-filter-red');
    if (resFilterRed) {
        resFilterRed.addEventListener('change', e => { APP_STATE.resFilterRed = e.target.value; APP_STATE.currentTableFilters = {}; processActiveData(); });
    }
    
    window.updateResUbicacionFilter = function() {
        const checkboxes = document.querySelectorAll('.res-ubicacion-cb');
        const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
        APP_STATE.resFilterUbicaciones = selected;
        const textEl = document.getElementById('res-filter-ubicacion-text');
        if (textEl) {
            if (selected.length === 0) textEl.textContent = 'Todas';
            else if (selected.length === 1) textEl.textContent = selected[0].charAt(0).toUpperCase() + selected[0].slice(1).split(' ')[0] + '...';
            else textEl.textContent = selected.length + ' selec.';
        }
        APP_STATE.currentTableFilters = {};
        processActiveData();
    };
    
    window.addEventListener('click', (e) => {
        const btn = document.getElementById('res-filter-ubicacion-btn');
        const menu = document.getElementById('res-filter-ubicacion-menu');
        if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });

    const resFilterAmbito = getEl('res-filter-ambito');
    if (resFilterAmbito) {
        resFilterAmbito.addEventListener('change', e => { APP_STATE.resFilterAmbito = e.target.value; APP_STATE.currentTableFilters = {}; processActiveData(); });
    }
    const fedFilterRed = getEl('fed-filter-red');
    if (fedFilterRed) {
        fedFilterRed.addEventListener('change', e => { APP_STATE.fedFilterRed = e.target.value; APP_STATE.currentTableFilters = {}; processActiveData(); });
    }
    const fedFilterAmbito = getEl('fed-filter-ambito');
    if (fedFilterAmbito) {
        fedFilterAmbito.addEventListener('change', e => { APP_STATE.fedFilterAmbito = e.target.value; APP_STATE.currentTableFilters = {}; processActiveData(); });
    }

    if (typeof window.initWhiteboard === 'function') {
        window.initWhiteboard();
    }
}

async function syncUsers(ld = false) {
    const b = getEl('btn-sync-users'); if (ld && b) b.innerHTML = '<i data-lucide="loader-2" class="w-3 h-3 animate-spin"></i> Cargando...';
    try {
        const t = await fetch(`${URLS.USUARIOS}&t=${Date.now()}`).then(r => r.text());
        APP_STATE.usersList = parseCSVFast(t).slice(1).map(r => ({ usuario: r[0]?.trim(), password: r[1]?.trim(), red: r[2]?.trim() || 'TODAS' })).filter(u => u.usuario && u.password);
        if (ld) { renderUserTable(); lucide.createIcons(); }
    } catch (e) {
        console.error("Error al sincronizar usuarios", e);
    } finally {
        // Fallback de seguridad por si falla la conexión a Google Sheets
        if (!APP_STATE.usersList || APP_STATE.usersList.length === 0) {
            APP_STATE.usersList = [{ usuario: 'admin', password: '123', red: 'TODAS' }];
        }
        if (ld && b) b.innerHTML = '<i data-lucide="refresh-cw" class="w-3 h-3"></i> Sincronizar';
    }
}

window.applyUserRoleUI = () => {
    const uR = APP_STATE.currentUser?.red || 'TODAS'; const iR = uR !== 'TODAS'; let h = '';
    if (iR) { h = `<option value="${uR}">${uR}</option>`; } else { h = '<option value="Todos">Todas las Redes</option>'; if (APP_STATE.uniqueRedes) { Array.from(APP_STATE.uniqueRedes).sort().forEach(r => { h += `<option value="${r}">${r}</option>`; }); } }
    ['sap-filter-red', 'res-filter-red', 'fed-filter-red'].forEach(id => { const s = getEl(id); if (s) { s.innerHTML = h; s.disabled = iR; if (iR) s.classList.add('opacity-50', 'cursor-not-allowed'); else s.classList.remove('opacity-50', 'cursor-not-allowed'); } });
    if (iR) { APP_STATE.sapFilterRed = uR; APP_STATE.resFilterRed = uR; APP_STATE.fedFilterRed = uR; } else { APP_STATE.sapFilterRed = 'Todos'; APP_STATE.resFilterRed = 'Todos'; APP_STATE.fedFilterRed = 'Todos'; }
};

async function preloadSAPData() {
    const fw = async (url) => await fetch(`${url}&t=${Date.now()}`).then(r => r.text());
    try {
        const lt = getEl('sap-loader-text'); if (lt) lt.textContent = "Descargando matrices (1/2)...";
        const [m, m2, s] = await Promise.all([fw(URLS.MAIN), fw(URLS.MAIN2), fw(URLS.SANITARIA)]);
        if (lt) lt.textContent = "Descargando complementos (2/2)...";
        const [ri, me, fe, ob, sr, vi, se, mi, m25] = await Promise.all([fw(URLS.RIESGOS), fw(URLS.MEF_UB), fw(URLS.FED_UB), fw(URLS.OBSERVACIONES), fw(URLS.SAP_REGULARES), fw(URLS.VIVIENDA), fw(URLS.SAP_ESTADO), fw(URLS.MIDIS), fw(URLS.META2025)]);
        if (lt) lt.textContent = "Procesando...";

        const rM = parseCSVFast(m); const rM2 = parseCSVFast(m2); const th = rM[0] || [];
        APP_STATE.rawData.main = [th, ...window.alignRows(rM, th, '2025')];
        APP_STATE.rawData.main2 = [th, ...window.alignRows(rM2, th, '2026')];
        APP_STATE.rawData.main2022 = []; APP_STATE.main2022Loaded = false;
        APP_STATE.rawData.main2023 = []; APP_STATE.main2023Loaded = false;
        APP_STATE.rawData.main0 = []; APP_STATE.main0Loaded = false;

        APP_STATE.rawData.sanitaria = parseCSVFast(s); APP_STATE.rawData.riesgos = parseCSVFast(ri); APP_STATE.rawData.observaciones = parseCSVFast(ob); APP_STATE.rawData.vivienda = parseCSVFast(vi); APP_STATE.rawData.sapEstado = parseCSVFast(se); APP_STATE.rawData.midis = parseCSVFast(mi); APP_STATE.rawData.meta2025 = parseCSVFast(m25);
        const mD = parseCSVFast(me); const fD = parseCSVFast(fe);

        let mx = '2025-12';
        const cMx = (dA) => { if (!dA || dA.length <= 1) return; const h = dA[0]; const iM = findHeaderIndex(h, 'Mes'); const iA = findHeaderIndex(h, 'Año'); for (let i = 1; i < dA.length; i++) { let rm = iM !== -1 ? dA[i][iM] : ''; let ra = iA !== -1 ? String(dA[i][iA]).trim() : ''; if (rm && ra) { let mm = MONTH_NUM[normalizeHeader(rm).toUpperCase()]; if (mm) { let y = `${ra}-${mm}`; if (y > mx) mx = y; } } } };
        cMx(APP_STATE.rawData.main); cMx(APP_STATE.rawData.main2);

        APP_STATE.availableMonitorMonths = generateMonthsUpTo(mx);
        APP_STATE.globalDateFrom = '2025-12'; APP_STATE.globalDateTo = mx;

        APP_STATE.mefUbigeos = new Set(); APP_STATE.mefSapIds = new Set(); APP_STATE.metaMefPorRed = {};
        if (mD.length > 1) { let uI = findHeaderIndex(mD[0], 'Ubigeo'); let sI = findHeaderIndex(mD[0], 'Id. SAP'); let rI = findHeaderIndex(mD[0], 'Red de Salud'); mD.slice(1).forEach(r => { if (uI !== -1 && r[uI]) APP_STATE.mefUbigeos.add(formatUbigeo(r[uI])); if (sI !== -1 && r[sI]) APP_STATE.mefSapIds.add(String(r[sI]).trim()); if (rI !== -1 && r[rI]) { const redName = String(r[rI]).trim(); if (redName) APP_STATE.metaMefPorRed[redName] = (APP_STATE.metaMefPorRed[redName] || 0) + 1; } }); }
        APP_STATE.fedUbigeos = new Set();
        if (fD.length > 1) { let uI = findHeaderIndex(fD[0], 'Ubigeo'); fD.slice(1).forEach(r => { if (uI !== -1 && r[uI]) APP_STATE.fedUbigeos.add(formatUbigeo(r[uI])); }); }

        APP_STATE.sapRegularesUbigeos = new Set(); APP_STATE.sapRegularesIds = new Set();
        const srD = parseCSVFast(sr);
        if (srD.length > 1) { let uI = findHeaderIndex(srD[0], 'Ubigeo'); let sI = findHeaderIndex(srD[0], 'Id. SAP'); srD.slice(1).forEach(r => { if (uI !== -1 && r[uI]) APP_STATE.sapRegularesUbigeos.add(formatUbigeo(r[uI])); if (sI !== -1 && r[sI]) APP_STATE.sapRegularesIds.add(String(r[sI]).trim()); }); }

        APP_STATE.midisUbigeos = new Set(); APP_STATE.midisSapIds = new Set();
        const miD = APP_STATE.rawData.midis;
        if (miD.length > 1) { let uI = findHeaderIndex(miD[0], 'Ubigeo'); let sI = findHeaderIndex(miD[0], 'Id. SAP'); miD.slice(1).forEach(r => { if (uI !== -1 && r[uI]) APP_STATE.midisUbigeos.add(formatUbigeo(r[uI])); if (sI !== -1 && r[sI]) APP_STATE.midisSapIds.add(String(r[sI]).trim()); }); }

        APP_STATE.meta2025Ubigeos = new Set(); APP_STATE.meta2025SapIds = new Set();
        const m25D = APP_STATE.rawData.meta2025;
        if (m25D.length > 1) { let uI = findHeaderIndex(m25D[0], 'Ubigeo'); let sI = findHeaderIndex(m25D[0], 'Id. SAP'); m25D.slice(1).forEach(r => { if (uI !== -1 && r[uI]) APP_STATE.meta2025Ubigeos.add(formatUbigeo(r[uI])); if (sI !== -1 && r[sI]) APP_STATE.meta2025SapIds.add(String(r[sI]).trim()); }); }

        const rds = new Set();
        if (APP_STATE.rawData.main.length > 1) { const idx = findHeaderIndex(th, 'Red de Salud'); APP_STATE.rawData.main.slice(1).forEach(r => { if (r[idx]) rds.add(r[idx]); }); }
        if (APP_STATE.rawData.main2.length > 1) { const idx = findHeaderIndex(th, 'Red de Salud'); APP_STATE.rawData.main2.slice(1).forEach(r => { if (r[idx]) rds.add(r[idx]); }); }

        APP_STATE.uniqueRedes = rds; window.applyUserRoleUI(); APP_STATE.sapDataLoaded = true; updateGlobalDateDropdowns();

        const l = getEl('sap-loader');
        if (l && !l.classList.contains('hidden')) {
            l.classList.add('hidden'); const statusHtml = `<span class="bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold inline-flex items-center gap-1 border border-emerald-200 shadow-sm"><i data-lucide="check-circle" class="w-3 h-3"></i>Datos Listos</span>`;
            const sapSt = getEl('sap-status-text'); if (sapSt) sapSt.innerHTML = statusHtml;
            const fedSt = getEl('fed-status-text'); if (fedSt) fedSt.innerHTML = statusHtml;
            const resSt = getEl('res-status-text'); if (resSt) resSt.innerHTML = statusHtml;
            if (window.lucide) window.lucide.createIcons();
            if (APP_STATE.activeTab === 'sap') { renderSapTabs(); processActiveData(); }
            else if (APP_STATE.activeTab === 'resultados') { renderResTabs(); processActiveData(); }
            else if (APP_STATE.activeTab === 'fed') { renderFedTabs(); processActiveData(); }
        }
    } catch (e) {
        console.error("Error", e); const l = getEl('sap-loader');
        if (l) { l.innerHTML = `<div class="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center text-center"><div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4"><svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div><h2 class="text-xl font-black text-slate-800 mb-2">Error de Conexión</h2><button onclick="window.forceRefreshData()" class="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold mt-4">Reintentar</button></div>`; if (window.lucide) window.lucide.createIcons(); }
    }
}

window.forceRefreshData = async () => {
    APP_STATE.sapCache = {}; APP_STATE.resCache = {}; APP_STATE.fedCache = { ind1: null, ind2: null, ind3: null, ind4: null }; APP_STATE.sapDataLoaded = false; APP_STATE.currentTableFilters = {}; APP_STATE.vivFilters = {};
    const l = getEl('sap-loader'); if (l) { l.innerHTML = `<div class="relative"><div class="w-20 h-20 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div><div class="absolute inset-0 flex items-center justify-center"><i data-lucide="activity" class="text-indigo-600"></i></div></div><p id="sap-loader-text" class="mt-6 text-indigo-900 font-bold tracking-wide animate-pulse">Sincronizando...</p>`; lucide.createIcons(); l.classList.remove('hidden'); }
    await preloadSAPData(); processActiveData();
}

window.handleLogin = async e => {
    if (e) e.preventDefault();
    const u = getEl('login-user').value.trim();
    const p = getEl('login-pass').value.trim();
    const er = getEl('login-error');
    getEl('btn-login-text').classList.add('hidden'); getEl('btn-login-loader').classList.remove('hidden');

    try { if (window.syncUsersPromise) await window.syncUsersPromise; } catch (err) { }

    setTimeout(() => {
        const f = APP_STATE.usersList.find(x => x.usuario.toLowerCase() === u.toLowerCase() && x.password === p);
        if (f) {
            APP_STATE.currentUser = f;
            localStorage.setItem(SESSION_KEY, JSON.stringify({ user: f, lastActivity: Date.now() }));
            getEl('welcome-user').textContent = f.usuario;
            window.applyUserRoleUI();
            APP_STATE.sapCache = {}; APP_STATE.resCache = {}; APP_STATE.fedCache = { ind1: null, ind2: null, ind3: null, ind4: null };
            getEl('login-view').classList.add('hidden');
            getEl('app-view').classList.remove('hidden');
            if (typeof window.renderUserTable === 'function') window.renderUserTable();
            window.switchTab('dashboard');
        }
        else { er.classList.remove('hidden'); getEl('login-error-msg').textContent = "Credenciales incorrectas o error de red."; }
        getEl('btn-login-text').classList.remove('hidden'); getEl('btn-login-loader').classList.add('hidden');
    }, 500);
}

window.logout = (expired = false) => { APP_STATE.currentUser = null; localStorage.removeItem(SESSION_KEY); getEl('app-view').classList.add('hidden'); getEl('login-view').classList.remove('hidden'); getEl('login-user').value = ''; getEl('login-pass').value = ''; const er = getEl('login-error'); if (expired === true) { er.classList.remove('hidden'); getEl('login-error-msg').textContent = "Sesión expirada por inactividad."; } else { er.classList.add('hidden'); } window.switchTab('dashboard'); }

window.switchTab = id => {
    APP_STATE.activeTab = id; APP_STATE.currentTableFilters = {}; APP_STATE.vivFilters = {};
    document.querySelectorAll('.sidebar-item').forEach(el => {
        const i = el.querySelector('.active-indicator');
        if (el.id === `nav-${id}`) { el.className = "sidebar-item w-full flex flex-col items-center justify-center py-4 rounded-xl transition-all duration-200 group text-white bg-white/10 shadow-inner"; if (i) i.classList.remove('hidden'); const c = el.querySelector('i'); if (c) { c.classList.remove('text-slate-400'); if (id === 'fed') c.classList.add('text-amber-400'); else c.classList.add('text-indigo-300'); } }
        else { el.className = "sidebar-item w-full flex flex-col items-center justify-center py-4 rounded-xl transition-all duration-200 group text-slate-400 hover:text-white hover:bg-white/5"; if (i) i.classList.add('hidden'); const c = el.querySelector('i'); if (c) { c.classList.add('text-slate-400'); c.classList.remove('text-indigo-300', 'text-amber-400'); } }
    });
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    const v = getEl(`view-${id}`); if (v) v.classList.remove('hidden');
    if (['sap', 'fed', 'resultados'].includes(id)) {
        if (!APP_STATE.sapDataLoaded) getEl('sap-loader').classList.remove('hidden');
        else { getEl('sap-loader').classList.add('hidden'); if (id === 'sap') { renderSapTabs(); updateGlobalDateDropdowns(); processActiveData(); } if (id === 'resultados') { renderResTabs(); updateGlobalDateDropdowns(); processActiveData(); } if (id === 'fed') { renderFedTabs(); updateGlobalDateDropdowns(); processActiveData(); } }
    } else {
        const l = getEl('sap-loader'); if (l) l.classList.add('hidden');
    }
}

function renderSapTabs() { getEl('sap-tabs-container').innerHTML = [{ id: 'monitor', label: 'Monitoreo 5P' }, { id: 'sanitaria', label: 'Insp. Sanitaria' }, { id: 'caracterizacion', label: 'Caracterización' }, { id: 'metales', label: 'Inorgánicos' }, { id: 'fisico', label: 'Físico Químicos' }, { id: 'bacteriologico', label: 'Bacteriológico' }, { id: 'parasitologico', label: 'Parasitológico' }, { id: 'riesgos', label: 'Riesgos' }, { id: 'vigilancia', label: 'Vigilancia' }].map(t => `<button onclick="window.changeSapSubTab('${t.id}')" class="whitespace-nowrap px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${APP_STATE.sapActiveTab === t.id ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200'}">${t.label}</button>`).join(''); }
window.changeSapSubTab = id => { if (APP_STATE.sapActiveTab === id) return; APP_STATE.sapActiveTab = id; APP_STATE.currentTableFilters = {}; renderSapTabs(); const d = getEl('sap-monitor-desc'); if (d) { if (['monitor', 'metales', 'fisico', 'bacteriologico', 'parasitologico', 'sanitaria', 'caracterizacion', 'riesgos', 'vigilancia'].includes(id)) { if (id === 'monitor') d.innerHTML = `<div class="bg-indigo-100 p-1.5 rounded-lg"><i data-lucide="flask-conical" class="w-4 h-4 text-indigo-600"></i></div><span><strong class="text-indigo-800">Parámetros Evaluados:</strong> Monitoreo de Cloro, Conductividad, pH, Temperatura y Turbiedad.</span>`; else if (id === 'sanitaria') d.innerHTML = `<div class="bg-indigo-100 p-1.5 rounded-lg"><i data-lucide="clipboard-check" class="w-4 h-4 text-indigo-600"></i></div><span><strong class="text-indigo-800">Insp. Sanitaria:</strong> Ejecución de inspecciones.</span>`; else if (id === 'caracterizacion') d.innerHTML = `<div class="bg-indigo-100 p-1.5 rounded-lg"><i data-lucide="flask-conical" class="w-4 h-4 text-indigo-600"></i></div><span><strong class="text-indigo-800">Caracterización:</strong> Parámetros completos.</span>`; else if (id === 'riesgos') d.innerHTML = `<div class="bg-indigo-100 p-1.5 rounded-lg"><i data-lucide="alert-triangle" class="w-4 h-4 text-indigo-600"></i></div><span><strong class="text-indigo-800">Evaluación:</strong> Requiere Informe y Cargo aprobados.</span>`; else if (id === 'vigilancia') d.innerHTML = `<div class="bg-indigo-100 p-1.5 rounded-lg"><i data-lucide="shield-check" class="w-4 h-4 text-indigo-600"></i></div><span><strong class="text-indigo-800">Vigilancia Completa:</strong> SAPs que cumplen con todas las actividades principales.</span>`; else d.innerHTML = `<div class="bg-indigo-100 p-1.5 rounded-lg"><i data-lucide="info" class="w-4 h-4 text-indigo-600"></i></div><span><strong class="text-indigo-800">Evaluación:</strong> Presencia de parámetros.</span>`; d.classList.remove('hidden'); } else { d.classList.add('hidden'); } } updateGlobalDateDropdowns(); processActiveData(); }

function renderResTabs() { getEl('res-tabs-container').innerHTML = [{ id: 'res_cloro', label: 'Cloro' }, { id: 'res_nivel_riesgo', label: 'Nivel Riesgo' }, { id: 'res_riesgo', label: 'Riesgo Sanitario' }, { id: 'res_metales', label: 'Inorgánicos' }, { id: 'res_fisico', label: 'Físico Químicos' }, { id: 'res_bacteriologico', label: 'Bacteriológico' }, { id: 'res_parasitologico', label: 'Parasitológico' }].map(t => `<button onclick="window.changeResSubTab('${t.id}')" class="whitespace-nowrap px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${APP_STATE.resActiveTab === t.id ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200'}">${t.label}</button>`).join(''); }
window.changeResSubTab = id => { 
    if (APP_STATE.resActiveTab === id) return; 
    APP_STATE.resActiveTab = id; 
    APP_STATE.currentTableFilters = {}; 
    const ubi = document.getElementById('res-filter-ubicacion-container');
    if (ubi) {
        if (id === 'res_nivel_riesgo' || id === 'res_riesgo') {
            ubi.classList.remove('hidden'); ubi.classList.add('flex');
        } else {
            ubi.classList.add('hidden'); ubi.classList.remove('flex');
        }
    }
    renderResTabs(); 
    updateGlobalDateDropdowns(); 
    processActiveData(); 
}

function renderFedTabs() { getEl('fed-tabs-container').innerHTML = [{ id: 'ind1', label: 'AI-01.01' }, { id: 'ind2', label: 'AI-02.01' }, { id: 'ind3', label: 'AI-03.01' }, { id: 'ind4', label: 'AI-05.01' }].map(t => `<button onclick="window.changeFedSubTab('${t.id}')" class="whitespace-nowrap px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${APP_STATE.fedActiveTab === t.id ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-slate-500 hover:bg-amber-50 hover:text-amber-600 border border-slate-200'}">${t.label}</button>`).join(''); }
window.changeFedSubTab = id => {
    APP_STATE.fedActiveTab = id;
    APP_STATE.currentTableFilters = {}; APP_STATE.vivFilters = {};
    if (id === 'ind2') { APP_STATE.globalDateFrom = '2026-01'; }
    else if (id === 'ind1') { APP_STATE.globalDateFrom = '2025-12'; }
    else if (id === 'ind4') { APP_STATE.globalDateFrom = '2026-06'; }
    updateGlobalDateDropdowns();
    renderFedTabs(); processActiveData();
}

function updateGlobalDateDropdowns() {
    const fs = getEl('global-date-from'); const ts = getEl('global-date-to');
    const fr = getEl('res-global-date-from'); const tr = getEl('res-global-date-to');
    const ff = getEl('fed-global-date-from'); const tf = getEl('fed-global-date-to');

    let hs = ''; let hr = ''; let hf = '';
    APP_STATE.availableMonitorMonths.forEach(m => {
        const l = `${NUM_MONTH[m.split('-')[1]]} ${m.split('-')[0]}`;
        if (m >= '2022-01') hs += `<option value="${m}">${l}</option>`;
        if (APP_STATE.resActiveTab === 'res_cloro' && APP_STATE.activeTab === 'resultados') { hr += `<option value="${m}">${l}</option>`; }
        else { if (m >= '2022-01') hr += `<option value="${m}">${l}</option>`; }
        if (m >= '2025-12') hf += `<option value="${m}">${l}</option>`;
    });

    if (fs) { fs.innerHTML = hs; fs.value = APP_STATE.globalDateFrom; }
    if (ts) { ts.innerHTML = hs; ts.value = APP_STATE.globalDateTo; }
    if (fr) { fr.innerHTML = hr; fr.value = APP_STATE.globalDateFrom; }
    if (tr) { tr.innerHTML = hr; tr.value = APP_STATE.globalDateTo; }
    if (ff) { ff.innerHTML = hf; ff.value = APP_STATE.globalDateFrom < '2025-12' ? '2025-12' : APP_STATE.globalDateFrom; }
    if (tf) { tf.innerHTML = hf; tf.value = APP_STATE.globalDateTo; }
}

window.updateGlobalDateFilter = async (isRes = false, isFed = false) => {
    let pf = isRes ? 'res-global-date-from' : (isFed ? 'fed-global-date-from' : 'global-date-from');
    let pt = isRes ? 'res-global-date-to' : (isFed ? 'fed-global-date-to' : 'global-date-to');
    const nf = getEl(pf).value; const nt = getEl(pt).value;
    APP_STATE.globalDateFrom = nf; APP_STATE.globalDateTo = nt;

    const loadHist = async (url, year, k, lk) => {
        const l = getEl(isRes ? 'res-processing' : (isFed ? 'fed-processing' : 'sap-processing'));
        if (l) { l.classList.remove('hidden'); const p = l.querySelector('p'); if (p) p.textContent = `DESCARGANDO HISTÓRICO ${year}...`; }
        try { const txt = await fetch(url + '&t=' + Date.now()).then(r => r.text()); const rM = parseCSVFast(txt); const th = APP_STATE.rawData.main[0] || []; APP_STATE.rawData[k] = [th, ...window.alignRows(rM, th, String(year))]; APP_STATE[lk] = true; } catch (e) { console.error(e); }
        if (l) { const p = l.querySelector('p'); if (p) p.textContent = "PROCESANDO MATRIZ..."; }
    };
    if (nf < '2025-01' && !APP_STATE.main0Loaded) await loadHist(URLS.MAIN0, 2024, 'main0', 'main0Loaded');
    if (nf < '2024-01' && !APP_STATE.main2023Loaded) await loadHist(URLS.MAIN2023, 2023, 'main2023', 'main2023Loaded');
    if (nf < '2023-01' && !APP_STATE.main2022Loaded) await loadHist(URLS.MAIN2022, 2022, 'main2022', 'main2022Loaded');
    APP_STATE.currentTableFilters = {}; APP_STATE.vivFilters = {}; APP_STATE.sapCache = {}; APP_STATE.resCache = {};
    processActiveData();
}

function processActiveData() {
    if (!APP_STATE.sapDataLoaded) return;
    const iR = APP_STATE.activeTab === 'resultados'; const iF = APP_STATE.activeTab === 'fed';
    const t = iR ? APP_STATE.resActiveTab : (iF ? APP_STATE.fedActiveTab : APP_STATE.sapActiveTab);
    const r = iR ? APP_STATE.resFilterRed : (iF ? APP_STATE.fedFilterRed : APP_STATE.sapFilterRed);
    const a = iR ? APP_STATE.resFilterAmbito : (iF ? APP_STATE.fedFilterAmbito : APP_STATE.sapFilterAmbito);
    const cache = iR ? APP_STATE.resCache : (iF ? APP_STATE.fedCache : APP_STATE.sapCache);
    const prefix = iR ? 'res' : (iF ? 'fed' : 'sap');

    const loader = getEl(`${prefix}-processing`);

    // CORRECCIÓN: Si es FED, filtramos el resultado crudo calculado en lugar de depender únicamente de una clave de cache única por tab.
    if (iF) {
        loader.classList.remove('hidden');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    try {
                        if (!APP_STATE.fedCache[t]) APP_STATE.fedCache[t] = runFedLogic(APP_STATE.rawData, t);

                        const rawResult = APP_STATE.fedCache[t];
                        let filteredData = rawResult.data;

                        const idxRed = rawResult.headers.indexOf('Red de Salud');
                        if (r !== 'Todos' && idxRed !== -1) filteredData = filteredData.filter(x => x[idxRed] === r);

                        const mI = rawResult.headers.indexOf('MEF');
                        const fI = rawResult.headers.indexOf('FED');
                        const srI = rawResult.headers.indexOf('SAP REGULARES');
                        const miI = rawResult.headers.indexOf('MIDIS');
                        if (a === 'MEF') filteredData = filteredData.filter(x => x[mI] === 1);
                        if (a === 'FED') filteredData = filteredData.filter(x => x[fI] === 1);
                        if (a === 'SAP REGULARES') filteredData = filteredData.filter(x => x[srI] === 1);
                        if (a === 'MIDIS' && miI !== -1) filteredData = filteredData.filter(x => x[miI] === 1);

                        const finalFedRes = { headers: rawResult.headers, data: filteredData };
                        renderFedTable(finalFedRes);
                        renderFedConsolidatedAndChart(finalFedRes);
                        updateGlobalDateDropdowns();
                    } catch (error) {
                        console.error("Error al calcular FED:", error);
                    } finally {
                        loader.classList.add('hidden');
                    }
                }, 10);
            });
        });
        return;
    }

    const cK = `${t}_${r}_${a}_${APP_STATE.globalDateFrom}_${APP_STATE.globalDateTo}_${(APP_STATE.resFilterUbicaciones || []).join(',')}`;
    const end = (res) => { renderMainTable(res, prefix); renderConsolidatedAndChart(res, prefix, t); updateGlobalDateDropdowns(); loader.classList.add('hidden'); };

    if (cache[cK]) { end(cache[cK]); return; }

    loader.classList.remove('hidden');
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            setTimeout(() => {
                let res = runSapLogic(t, APP_STATE.rawData, r, a);
                cache[cK] = res;
                end(res);
            }, 10);
        });
    });
}

function checkComplianceSet(h, s, r) { if (!s) return false; return s.every(p => { if (Array.isArray(p)) return p.some(sub => { const i = findHeaderIndex(h, sub); return i !== -1 && !isCellEmpty(r[i]); }); const i = findHeaderIndex(h, p); return i !== -1 && !isCellEmpty(r[i]); }); }
function classifyMonitoringStatus(h, r) { let c = 0; MONITOR_5P_PARAMS.forEach(p => { if (!isCellEmpty(r[findHeaderIndex(h, p)])) c++; }); const cl = !isCellEmpty(r[findHeaderIndex(h, 'Cloro')]); if (c === 5) return 1; if (cl && c === 1) return 2; return c > 0 ? 3 : 0; }
function classifyAnalysisByLoc(h, r, sa, sb) { const ha = checkComplianceSet(h, sa, r), hb = checkComplianceSet(h, sb, r); if (!ha && !hb) return 0; const u = r[findHeaderIndex(h, 'Ubicación Lugar de Muestreo')] || ''; if (u.includes('Fuente de Captación') && u.includes('Red de distribución')) return 3; if (u.includes('Red de distribución')) return 2; if (u.includes('Fuente de Captación')) return 1; return 0; }
function checkParamLMPExceeded(h, r, lSet) { const l = []; for (const k in lSet) { const idx = findHeaderIndex(h, k); if (idx !== -1 && !isCellEmpty(r[idx])) { const v = parseFloat(r[idx]); if (!isNaN(v) && v > lSet[k]) l.push({ metal: k, value: v, lmp: lSet[k] }); } } return l.length > 0 ? l : 0; }

function sortTableData(data, headers) {
    const iRed = headers.indexOf('Red de Salud');
    const iProv = headers.indexOf('Provincia');
    const iDist = headers.indexOf('Distrito');
    const iCcpp = headers.indexOf('Nombre CCPP');
    const iSap = headers.indexOf('Nombre SAP');
    const iAno = headers.indexOf('Año');
    const iMes = headers.indexOf('Mes_Orden_Texto');

    if (iRed === -1 || iProv === -1 || iDist === -1 || iCcpp === -1) return data;

    return data.sort((a, b) => {
        const rA = String(a[iRed] || '').trim(); const rB = String(b[iRed] || '').trim();
        if (rA !== rB) return rA.localeCompare(rB);
        const pA = String(a[iProv] || '').trim(); const pB = String(b[iProv] || '').trim();
        if (pA !== pB) return pA.localeCompare(pB);
        const dA = String(a[iDist] || '').trim(); const dB = String(b[iDist] || '').trim();
        if (dA !== dB) return dA.localeCompare(dB);
        const cA = String(a[iCcpp] || '').trim(); const cB = String(b[iCcpp] || '').trim();
        if (cA !== cB) return cA.localeCompare(cB);
        if (iSap !== -1) { const sA = String(a[iSap] || '').trim(); const sB = String(b[iSap] || '').trim(); if (sA !== sB) return sA.localeCompare(sB); }
        if (iAno !== -1 && iMes !== -1) {
            const aA = String(a[iAno] || '').trim(); const aB = String(b[iAno] || '').trim();
            if (aA !== aB) return aA.localeCompare(aB);
            const mA = String(a[iMes] || '').trim(); const mB = String(b[iMes] || '').trim();
            if (mA !== mB) return mA.localeCompare(mB);
        }
        return 0;
    });
}

function runSapLogic(subTab, dO, redFilter, ambitoFilter = 'Vigilancia') {
    const from = APP_STATE.globalDateFrom; const to = APP_STATE.globalDateTo; const aF = from <= to ? from : to; const aT = from <= to ? to : from; const fM = APP_STATE.availableMonitorMonths.filter(m => m >= aF && m <= aT);
    let h = dO.main[0] || []; let cR = [];
    if (APP_STATE.main2022Loaded && dO.main2022 && dO.main2022.length > 1) cR.push(...dO.main2022.slice(1));
    if (APP_STATE.main2023Loaded && dO.main2023 && dO.main2023.length > 1) cR.push(...dO.main2023.slice(1));
    if (APP_STATE.main0Loaded && dO.main0 && dO.main0.length > 1) cR.push(...dO.main0.slice(1));
    if (dO.main && dO.main.length > 1) cR.push(...dO.main.slice(1));
    if (dO.main2 && dO.main2.length > 1) cR.push(...dO.main2.slice(1));
    const idxRed = findHeaderIndex(h, 'Red de Salud'); let rM = cR;
    if (redFilter !== 'Todos' && idxRed !== -1) rM = rM.filter(row => row[idxRed] === redFilter);
    const idxUbi = findHeaderIndex(h, 'Ubigeo'); const idxSap = findHeaderIndex(h, 'Id. SAP');
    if (ambitoFilter === 'MEF' && idxSap !== -1) rM = rM.filter(row => APP_STATE.mefSapIds.has(String(row[idxSap]).trim()));
    if (ambitoFilter === 'FED' && idxUbi !== -1) rM = rM.filter(row => APP_STATE.fedUbigeos.has(formatUbigeo(row[idxUbi])));
    if (ambitoFilter === 'SAP REGULARES' && idxUbi !== -1) rM = rM.filter(row => APP_STATE.sapRegularesUbigeos.has(formatUbigeo(row[idxUbi])));
    if (ambitoFilter === 'MIDIS') { rM = rM.filter(row => APP_STATE.midisUbigeos.has(formatUbigeo(row[idxUbi])) || APP_STATE.midisSapIds.has(String(row[idxSap]).trim())); }
    if (ambitoFilter === 'Meta 2025') { rM = rM.filter(row => APP_STATE.meta2025Ubigeos.has(formatUbigeo(row[idxUbi])) || APP_STATE.meta2025SapIds.has(String(row[idxSap]).trim())); }
    const idxMes = findHeaderIndex(h, 'Mes'); const idxAno = findHeaderIndex(h, 'Año'); const iLoc = findHeaderIndex(h, 'Ubicación Lugar de Muestreo');
    let dRows = rM.filter(row => { 
        let m = row[idxMes]; if (!m) return true; 
        let mm = MONTH_NUM[normalizeHeader(m).toUpperCase()]; if (!mm) return false; 
        let a = idxAno !== -1 ? row[idxAno] : '2025'; let ym = `${String(a).trim()}-${mm}`; 
        if (ym < aF || ym > aT) return false;
        if (APP_STATE.resFilterUbicaciones && APP_STATE.resFilterUbicaciones.length > 0 && iLoc !== -1 && (subTab === 'res_nivel_riesgo' || subTab === 'res_riesgo')) {
            const loc = String(row[iLoc] || '').trim().toLowerCase();
            if (!APP_STATE.resFilterUbicaciones.some(val => loc.includes(val))) return false;
        }
        return true;
    });
    let fH = [], fD = [], pT = 'status'; const idxId = findHeaderIndex(h, 'Id. SAP');

    if (subTab === 'res_cloro') {
        fH = [...CORE_HEADERS, 'Total Monitoreo', 'Cloro < 0.5', 'Cloro > 5', 'Cloro Rango LMP 0.5 a 5', 'Total Meses Cumplen', 'Consume Agua Clorada'];
        const map = {}; const idxC = findHeaderIndex(h, 'Cloro');

        dRows.forEach(r => { const id = r[idxId]; if (!id) return; let mR = idxMes !== -1 ? r[idxMes] : ''; const mm = MONTH_NUM[normalizeHeader(mR).toUpperCase()]; if (!mm) return; let a = idxAno !== -1 ? r[idxAno] : '2025'; const ym = `${String(a).trim()}-${mm}`; if (!map[id]) map[id] = { meta: getMeta(r, h), tot: 0, low: 0, high: 0, ok: 0, m: {} }; if (!map[id].m[ym]) map[id].m[ym] = { tot: 0, ok: 0 }; if (idxC !== -1 && !isCellEmpty(r[idxC])) { const v = parseFloat(r[idxC]); if (!isNaN(v)) { map[id].tot++; map[id].m[ym].tot++; if (v < 0.5) map[id].low++; else if (v > 5) map[id].high++; else { map[id].ok++; map[id].m[ym].ok++; } } } });
        const aS = new Map(); rM.forEach(r => { const id = r[idxId]; populateMeta(aS, id, r, h); });
        const reqM = Math.ceil(fM.length * 5 / 6);
        fD = Array.from(aS.keys()).flatMap(id => { const sap = map[id]; if (!sap || sap.tot === 0) return []; let mc = 0; Object.values(sap.m).forEach(m => { if (m.tot > 0 && (m.ok / m.tot) >= 0.7) mc++; }); const mtx = [sap.tot, sap.low, sap.high, sap.ok, mc, mc >= reqM ? 1 : 0]; return aS.get(id).map(mt => [...mt, ...mtx]); }); pT = 'cloro';
    } else if (subTab === 'res_nivel_riesgo') {
        const iUbi = findHeaderIndex(h, 'Ubigeo'); const iCCPP = findHeaderIndex(h, 'Nombre CCPP'); const iProv = findHeaderIndex(h, 'Provincia'); const iDist = findHeaderIndex(h, 'Distrito'); const iRed = findHeaderIndex(h, 'Red de Salud'); const iIdProv = findHeaderIndex(h, 'Id. Proveedor de Agua'); const iNomProv = findHeaderIndex(h, 'Nombre Proveedor de Agua'); const iFecha = findHeaderIndex(h, 'Fecha Muestreo'); const iLoc = findHeaderIndex(h, 'Ubicación Lugar de Muestreo');
        const iCloro = findHeaderIndex(h, 'Cloro'); const iTurb = findHeaderIndex(h, 'Turbiedad'); const iCond = findHeaderIndex(h, 'Conductividad'); const iPh = findHeaderIndex(h, 'pH'); const iTemp = findHeaderIndex(h, 'Temperatura'); const iMue = findHeaderIndex(h, '# Muestra');
        const iBcfNmp = findHeaderIndex(h, 'Bacterias Coliformes Fecales (NMP)'); const iBcfUfc = findHeaderIndex(h, 'Bacterias Coliformes Fecales (UFC)'); const iBctNmp = findHeaderIndex(h, 'Bacterias Coliformes Totales (NMP)'); const iBctUfc = findHeaderIndex(h, 'Bacterias Coliformes Totales (UFC)'); const iEcNmp = findHeaderIndex(h, 'E. Coli (NMP)'); const iEcUfc = findHeaderIndex(h, 'E. Coli (UFC)');

        const map = {};
        dRows.forEach(r => {
            const ubi = r[iUbi] ? String(r[iUbi]).trim() : ''; const ccpp = r[iCCPP] ? String(r[iCCPP]).trim() : '';
            if (!ubi || !ccpp) return;

            let mesNorm = '', anoNorm = '';
            const fecha = r[iFecha] ? String(r[iFecha]).trim() : '';
            if (fecha) {
                const parts = fecha.split(/[-/]/);
                if (parts.length >= 3) {
                    if (parts[0].length === 4) { anoNorm = parts[0]; mesNorm = MONITOR_MONTHS[parseInt(parts[1], 10) - 1] || ''; }
                    else { anoNorm = parts[2].substring(0, 4); mesNorm = MONITOR_MONTHS[parseInt(parts[1], 10) - 1] || ''; }
                }
            }
            if (!mesNorm) { const rawM = idxMes !== -1 ? (r[idxMes] || '').trim() : ''; const mm = MONTH_NUM[normalizeHeader(rawM).toUpperCase()]; if (mm) mesNorm = MONITOR_MONTHS[parseInt(mm, 10) - 1]; }
            if (!anoNorm) anoNorm = idxAno !== -1 ? (r[idxAno] || '').trim() : '';
            if (!mesNorm || !anoNorm) return;

            const key = `${ubi}_${ccpp}_${mesNorm}_${anoNorm}`;
            if (!map[key]) {
                map[key] = {
                    ubi, ccpp, prov: r[iProv] || '', dist: r[iDist] || '', red: r[iRed] || '', idProv: iIdProv !== -1 ? r[iIdProv] : '', nomProv: iNomProv !== -1 ? r[iNomProv] : '', mes: mesNorm, ano: anoNorm,
                    muestras: new Set(), cloroOk: 0, cloroTot: 0, turbOk: 0, turbTot: 0, condOk: 0, condTot: 0, phOk: 0, phTot: 0, tempOk: 0, tempTot: 0,
                    bcfNmp: -Infinity, bcfUfc: -Infinity, bctNmp: -Infinity, bctUfc: -Infinity, ecNmp: -Infinity, ecUfc: -Infinity
                };
            }
            const mStr = iMue !== -1 ? String(r[iMue]).trim() : '';
            if (mStr) map[key].muestras.add(mStr); else map[key].muestras.add(`row_${Math.random()}`);

            const parseVal = (idx) => { if (idx === -1) return NaN; const v = r[idx]; if (isCellEmpty(v)) return NaN; return parseFloat(String(v).replace(/</g, '').replace(/>/g, '').trim()); };
            const vCl = parseVal(iCloro); if (!isNaN(vCl)) { map[key].cloroTot++; if (vCl >= 0.5 && vCl <= 5) map[key].cloroOk++; }
            const vTu = parseVal(iTurb); if (!isNaN(vTu)) { map[key].turbTot++; if (vTu >= 0 && vTu <= 5) map[key].turbOk++; }
            const vCo = parseVal(iCond); if (!isNaN(vCo)) { map[key].condTot++; if (vCo <= 1500) map[key].condOk++; }
            const vPh = parseVal(iPh); if (!isNaN(vPh)) { map[key].phTot++; if (vPh >= 6.5 && vPh <= 8.5) map[key].phOk++; }
            const vTe = parseVal(iTemp); if (!isNaN(vTe)) { map[key].tempTot++; if (vTe >= 0 && vTe <= 40) map[key].tempOk++; }

            const vBcfNmp = parseVal(iBcfNmp); if (!isNaN(vBcfNmp) && vBcfNmp > map[key].bcfNmp) map[key].bcfNmp = vBcfNmp;
            const vBcfUfc = parseVal(iBcfUfc); if (!isNaN(vBcfUfc) && vBcfUfc > map[key].bcfUfc) map[key].bcfUfc = vBcfUfc;
            const vBctNmp = parseVal(iBctNmp); if (!isNaN(vBctNmp) && vBctNmp > map[key].bctNmp) map[key].bctNmp = vBctNmp;
            const vBctUfc = parseVal(iBctUfc); if (!isNaN(vBctUfc) && vBctUfc > map[key].bctUfc) map[key].bctUfc = vBctUfc;
            const vEcNmp = parseVal(iEcNmp); if (!isNaN(vEcNmp) && vEcNmp > map[key].ecNmp) map[key].ecNmp = vEcNmp;
            const vEcUfc = parseVal(iEcUfc); if (!isNaN(vEcUfc) && vEcUfc > map[key].ecUfc) map[key].ecUfc = vEcUfc;
        });

        const orderLet = ['a. ', 'b. ', 'c. ', 'd. ', 'e. ', 'f. ', 'g. ', 'h. ', 'i. ', 'j. ', 'k. ', 'l. '];
        const getMesOrd = (m) => { const idx = MONITOR_MONTHS.findIndex(x => x.toLowerCase() === m.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")); if (idx !== -1) return orderLet[idx] + MONITOR_MONTHS[idx]; return m; };
        const evalP = (ok, tot) => { if (tot === 0) return '-'; return ok >= 1 ? 'Cumple' : 'No Cumple'; };

        fD = Object.values(map).map(o => {
            const eCl = evalP(o.cloroOk, o.cloroTot); const eTu = evalP(o.turbOk, o.turbTot); const eCo = evalP(o.condOk, o.condTot); const ePh = evalP(o.phOk, o.phTot); const eTe = evalP(o.tempOk, o.tempTot);

            const hasFecal = o.bcfNmp !== -Infinity || o.bcfUfc !== -Infinity || o.bctNmp !== -Infinity || o.bctUfc !== -Infinity || o.ecNmp !== -Infinity || o.ecUfc !== -Infinity;
            let eFecal = '-';
            if (hasFecal) {
                let excede = false;
                if (o.bcfNmp !== -Infinity && o.bcfNmp > 1.8) excede = true;
                if (o.bcfUfc !== -Infinity && o.bcfUfc > 0) excede = true;
                if (o.bctNmp !== -Infinity && o.bctNmp > 1.8) excede = true;
                if (o.bctUfc !== -Infinity && o.bctUfc > 0) excede = true;
                if (o.ecNmp !== -Infinity && o.ecNmp > 1.8) excede = true;
                if (o.ecUfc !== -Infinity && o.ecUfc > 0) excede = true;
                eFecal = excede ? 'No Cumple' : 'Cumple';
            }

            let riesgo = 'Bajo';
            if (eCl === 'No Cumple' || eTu === 'No Cumple' || eFecal === 'No Cumple') riesgo = 'Alto';
            else if (eCo === 'No Cumple' || ePh === 'No Cumple') riesgo = 'Medio';
            else if (eCl === 'Cumple' || (eCl === '-' && eTu === 'Cumple' && eCo === 'Cumple' && ePh === 'Cumple' && eTe === 'Cumple')) riesgo = 'Bajo';
            else riesgo = 'Sin Monitoreo';

            return [o.ubi, o.ccpp, o.prov, o.dist, o.red, o.idProv, o.nomProv, o.mes, o.muestras.size, eCl, eTu, eCo, ePh, eTe, eFecal, riesgo, getMesOrd(o.mes), o.ano];
        });

        fD.sort((a, b) => {
            if (a[17] !== b[17]) return String(a[17]).localeCompare(String(b[17]));
            return String(a[16]).localeCompare(String(b[16]));
        });

        fH = [
            'Ubigeo', 'Nombre CCPP', 'Provincia', 'Distrito', 'Red de Salud', 'Id. Proveedor de Agua', 'Nombre Proveedor de Agua',
            'Mes', 'Total_Moni', 'Ev_Cloro', 'Ev_Turb.', 'Ev_Cond.', 'Ev_Ph', 'Ev_Temp.', 'Ev_Contam_Fecal', 'Nivel de Riesgo', 'Mes_Orden_Texto', 'Año'
        ];
        pT = 'nivel_riesgo';
    } else if (subTab === 'res_riesgo') {
        const h1 = h;
        const iBcfNmp = findHeaderIndex(h1, 'Bacterias Coliformes Fecales (NMP)');
        const iBcfUfc = findHeaderIndex(h1, 'Bacterias Coliformes Fecales (UFC)');
        const iBctNmp = findHeaderIndex(h1, 'Bacterias Coliformes Totales (NMP)');
        const iBctUfc = findHeaderIndex(h1, 'Bacterias Coliformes Totales (UFC)');
        const iEcNmp = findHeaderIndex(h1, 'E. Coli (NMP)');
        const iEcUfc = findHeaderIndex(h1, 'E. Coli (UFC)');

        const paramsToExtract = [
            'Color', 'Turbiedad', 'pH', 'Conductividad', 'Sólidos Totales disueltos', 'Cloruros', 'Sulfatos', 'Dureza total', 'Hierro', 'Manganeso', 'Aluminio', 'Cobre', 'Zinc', 'Sodio', 'Antimonio', 'Arsénico', 'Bario', 'Boro', 'Cadmio', 'Cianuro', 'Cloro', 'Cromo total', 'Mercurio', 'Niquel', 'Nitratos', 'Nitritos (Exposición Corta)', 'Nitritos (Exposición Larga)', 'Plomo', 'Selenio', 'Molibdeno', 'Uranio'
        ];
        const pIdx = {};
        paramsToExtract.forEach(p => pIdx[p] = findHeaderIndex(h1, p));

        const map = {};

        dRows.forEach(r => {
            const id = r[idxId];
            if (!id) return;

            if (!map[id]) {
                map[id] = {
                    meta: getMeta(r, h),
                    bcfNmp: -Infinity, bcfUfc: -Infinity, bctNmp: -Infinity, bctUfc: -Infinity, ecNmp: -Infinity, ecUfc: -Infinity
                };
                paramsToExtract.forEach(p => map[id][p] = -Infinity);
            }
            const parseVal = (idx) => {
                if (idx === -1) return NaN; const v = r[idx]; if (isCellEmpty(v)) return NaN;
                return parseFloat(String(v).replace(/</g, '').replace(/>/g, '').trim());
            };
            const v1 = parseVal(iBcfNmp); if (!isNaN(v1) && v1 > map[id].bcfNmp) map[id].bcfNmp = v1;
            const v2 = parseVal(iBcfUfc); if (!isNaN(v2) && v2 > map[id].bcfUfc) map[id].bcfUfc = v2;
            const v3 = parseVal(iBctNmp); if (!isNaN(v3) && v3 > map[id].bctNmp) map[id].bctNmp = v3;
            const v4 = parseVal(iBctUfc); if (!isNaN(v4) && v4 > map[id].bctUfc) map[id].bctUfc = v4;
            const v5 = parseVal(iEcNmp); if (!isNaN(v5) && v5 > map[id].ecNmp) map[id].ecNmp = v5;
            const v6 = parseVal(iEcUfc); if (!isNaN(v6) && v6 > map[id].ecUfc) map[id].ecUfc = v6;

            paramsToExtract.forEach(p => {
                const vx = parseVal(pIdx[p]);
                if (!isNaN(vx) && vx > map[id][p]) map[id][p] = vx;
            });
        });

        const extraColsNames = [
            'Color', 'Turbiedad', 'pH', 'Conductividad', 'Sólidos Totales disueltos', 'Cloruros', 'Sulfatos', 'Dureza total', 'Hierro', 'Manganeso', 'Aluminio', 'Cobre', 'Zinc', 'Sodio', 'Antimonio', 'Arsénico', 'Bario', 'Boro', 'Cadmio', 'Cianuro', 'Cloro', 'Cromo total', 'Mercurio', 'Niquel', 'Nitratos', 'Nitritos (Exposición Corta) + Nitritos (Exposición Larga)', 'Plomo', 'Selenio', 'Molibdeno', 'Uranio'
        ];
        const limitsExtra = [
            15, 5, 8.5, 1500, 1000, 250, 250, 500, 0.3, 0.4, 0.2, 2, 3, 200, 0.02, 0.01, 0.7, 1.5, 0.003, 0.07, 5, 0.05, 0.001, 0.02, 50, 0.2, 0.01, 0.01, 0.07, 0.015
        ];

        const aS = new Map(); rM.forEach(r => { const id = r[idxId]; populateMeta(aS, id, r, h); });
        fD = Array.from(aS.keys()).flatMap(id => {
            const s = map[id];
            if (!s) return [];

            let hasAnyData = false;
            if (s.bcfNmp !== -Infinity || s.bcfUfc !== -Infinity || s.bctNmp !== -Infinity || s.bctUfc !== -Infinity || s.ecNmp !== -Infinity || s.ecUfc !== -Infinity) hasAnyData = true;
            paramsToExtract.forEach(p => { if (s[p] !== -Infinity) hasAnyData = true; });

            if (!hasAnyData) return [];

            const bcfNmp = s.bcfNmp !== -Infinity ? s.bcfNmp : '';
            const bcfUfc = s.bcfUfc !== -Infinity ? s.bcfUfc : '';
            const bctNmp = s.bctNmp !== -Infinity ? s.bctNmp : '';
            const bctUfc = s.bctUfc !== -Infinity ? s.bctUfc : '';
            const ecNmp = s.ecNmp !== -Infinity ? s.ecNmp : '';
            const ecUfc = s.ecUfc !== -Infinity ? s.ecUfc : '';

            const getR = (v, limit) => v === '' ? 0 : (v > limit ? 1 : 0);

            const r_bcfNmp = getR(bcfNmp, 1.8);
            const r_bcfUfc = getR(bcfUfc, 0);
            const r_bctNmp = getR(bctNmp, 1.8);
            const r_bctUfc = getR(bctUfc, 0);
            const r_ecNmp = getR(ecNmp, 1.8);
            const r_ecUfc = getR(ecUfc, 0);

            const totParam = r_bcfNmp + r_bcfUfc + r_bctNmp + r_bctUfc + r_ecNmp + r_ecUfc;
            const tiene = totParam >= 1 ? 1 : 0;

            const getPVal = (p) => s[p] !== undefined && s[p] !== -Infinity ? s[p] : '';
            const pValsArr = []; const rValsArr = [];
            const pKeys = ['Color', 'Turbiedad', 'pH', 'Conductividad', 'Sólidos Totales disueltos', 'Cloruros', 'Sulfatos', 'Dureza total', 'Hierro', 'Manganeso', 'Aluminio', 'Cobre', 'Zinc', 'Sodio', 'Antimonio', 'Arsénico', 'Bario', 'Boro', 'Cadmio', 'Cianuro', 'Cloro', 'Cromo total', 'Mercurio', 'Niquel', 'Nitratos'];
            for (let i = 0; i < pKeys.length; i++) {
                const v = getPVal(pKeys[i]); pValsArr.push(v); rValsArr.push(getR(v, limitsExtra[i]));
            }
            const nitC = getPVal('Nitritos (Exposición Corta)'); const nitL = getPVal('Nitritos (Exposición Larga)');
            let nitSum = '';
            if (nitC !== '' || nitL !== '') { nitSum = (nitC !== '' ? nitC : 0) + (nitL !== '' ? nitL : 0); nitSum = Math.round(nitSum * 100000) / 100000; }
            pValsArr.push(nitSum); rValsArr.push(getR(nitSum, limitsExtra[pKeys.length]));
            const pKeys2 = ['Plomo', 'Selenio', 'Molibdeno', 'Uranio'];
            for (let i = 0; i < pKeys2.length; i++) {
                const v = getPVal(pKeys2[i]); pValsArr.push(v); rValsArr.push(getR(v, limitsExtra[pKeys.length + 1 + i]));
            }

            const isOrg = (i) => [0, 1, 2, 3, 4, 5, 6, 7, 13, 20].includes(i);
            let totOrg = 0; let totInorg = 0;
            const totParamMetales = rValsArr.reduce((a, b) => a + b, 0);
            for (let i = 0; i < rValsArr.length; i++) { if (rValsArr[i] === 1) { if (isOrg(i)) totOrg++; else totInorg++; } }
            const tieneOrg = totOrg >= 1 ? 1 : 0;
            const tieneInorg = totInorg >= 1 ? 1 : 0;

            let detMetales = [];
            for (let i = 0; i < rValsArr.length; i++) {
                if (rValsArr[i] === 1) detMetales.push(`${extraColsNames[i]}: ${pValsArr[i]}`);
            }
            const detMetalesStr = detMetales.length > 0 ? detMetales.join(', ') : '-';

            const mtx = [
                bcfNmp, bcfUfc, bctNmp, bctUfc, ecNmp, ecUfc,
                r_bcfNmp, r_bcfUfc, r_bctNmp, r_bctUfc, r_ecNmp, r_ecUfc,
                totParam, tiene,
                ...pValsArr, ...rValsArr, totParamMetales, tieneOrg, tieneInorg, detMetalesStr
            ];
            return aS.get(id).map(mt => [...mt, ...mtx]);
        });

        fH = [
            ...CORE_HEADERS,
            'Bacterias Coliformes Fecales (NMP)', 'Bacterias Coliformes Fecales (UFC)', 'Bacterias Coliformes Totales (NMP)', 'Bacterias Coliformes Totales (UFC)', 'E. Coli (NMP)', 'E. Coli (UFC)',
            'Bacterias Coliformes Fecales (NMP) Resultado', 'Bacterias Coliformes Fecales (UFC) Resultado', 'Bacterias Coliformes Totales (NMP) Resultado', 'Bacterias Coliformes Totales (UFC) Resultado', 'E. Coli (NMP) Resultado', 'E. Coli (UFC) Resultado',
            'Total parámetros con contaminación fecal', 'Tiene al menos una muestra con contaminación fecal',
            ...extraColsNames,
            ...extraColsNames.map(n => n + ' Resultado'),
            'Total parametros organolepticos y/o inorganicos (metales pesados) que exceden el LMP',
            'Tiene al menos un parametro organolepticos que excede el LMP',
            'Tiene al menos un parametro inorganicos (metales pesados) que excede el LMP',
            'Detalle parametro que excede LMP'
        ];
        pT = 'res_riesgo';
    } else if (subTab === 'caracterizacion') {
        const sS = new Set(); fM.forEach(m => { const [y, mm] = m.split('-'); sS.add(`${y}-${parseInt(mm) <= 6 ? 'S1' : 'S2'}`); });
        const sK = Array.from(sS).sort();
        const formatSem = (k) => { const [y, s] = k.split('-'); return s === 'S1' ? `1er Semestre ${y}` : `2do Semestre ${y}`; };

        fH = [...CORE_HEADERS, 'Cloro LMP'];
        sK.forEach(k => { fH.push(`Fuente (${formatSem(k)})`); fH.push(`Ver Detalle Fuente (${formatSem(k)})`); fH.push(`Red (${formatSem(k)})`); fH.push(`Ver Detalle Red (${formatSem(k)})`); });

        const map = {};
        const idxU = findHeaderIndex(h, 'Ubicación Lugar de Muestreo');
        const idxNomMues = findHeaderIndex(h, 'Nombre Lugar de Muestreo');
        const idxCloro = findHeaderIndex(h, 'Cloro'); const idxFecha1 = findHeaderIndex(h, 'Fecha Muestreo'); const idxFecha2 = findHeaderIndex(h, 'Fecha');

        dRows.forEach(r => {
            const id = r[idxId];
            if (!id) return;

            let ano = idxAno !== -1 && r[idxAno] ? String(r[idxAno]).trim() : '';
            let mes = idxMes !== -1 ? r[idxMes] : '';
            const mm = MONTH_NUM[normalizeHeader(mes).toUpperCase()];
            if (!mm) return;
            if (!ano) { if (mes.toLowerCase() === 'diciembre') ano = '2025'; else if (mes.toLowerCase() === 'enero' || mes.toLowerCase() === 'febrero') ano = '2026'; else ano = '2025'; }
            const skey = `${ano}-${parseInt(mm) <= 6 ? 'S1' : 'S2'}`;
            if (!sK.includes(skey)) return;

            if (!map[id]) {
                map[id] = { sem: {}, vCloro: null };
                sK.forEach(k => map[id].sem[k] = { c: { pts: {} }, p: { pts: {} } });
            }

            const u = idxU !== -1 ? (r[idxU] || '').toLowerCase() : '';
            const nomMues = idxNomMues !== -1 && !isCellEmpty(r[idxNomMues]) ? String(r[idxNomMues]).trim() : 'Punto S/N';
            const iC = u.includes('captación') || u.includes('captacion');
            const iP = u.includes('red') || u.includes('pileta');

            const ev = (sin, ors) => {
                let ct = 0; let exp = (sin ? sin.length : 0) + (ors ? ors.length : 0); let mis = []; let fnd = [];
                if (sin) sin.forEach(x => { const i = findHeaderIndex(h, x); if (i !== -1 && !isCellEmpty(r[i])) { ct++; fnd.push(x); } else mis.push(x); });
                if (ors) ors.forEach(pair => { const i1 = findHeaderIndex(h, pair[0]); const i2 = findHeaderIndex(h, pair[1]); if ((i1 !== -1 && !isCellEmpty(r[i1])) || (i2 !== -1 && !isCellEmpty(r[i2]))) { ct++; fnd.push(pair[0]); } else mis.push(pair[0]); });
                return { isC: exp > 0 && ct === exp, ct, exp, mis, fnd };
            };

            const getFecha = () => { if (idxFecha1 !== -1 && !isCellEmpty(r[idxFecha1])) return r[idxFecha1]; if (idxFecha2 !== -1 && !isCellEmpty(r[idxFecha2])) return r[idxFecha2]; return ''; }; const getCloro = () => { if (idxCloro !== -1 && !isCellEmpty(r[idxCloro])) return r[idxCloro]; return ''; };
            const up = (type, e) => {
                if (e.ct > 0) {
                    let st = e.isC ? 1 : 2;
                    let pm = st === 1 ? e.fnd : e.mis.map(m => `Falta: ${m.replace(/_/g, '')}`);
                    if (st === 2 && pm.length > 15) return;
                    if (!map[id].sem[skey][type].pts[nomMues]) {
                        map[id].sem[skey][type].pts[nomMues] = { status: st, params: pm, fnd: e.fnd, ct: e.ct, fecha: getFecha(), cloro: getCloro() };
                    } else {
                        const sl = map[id].sem[skey][type].pts[nomMues];
                        if (sl.status === 2 && st === 1) map[id].sem[skey][type].pts[nomMues] = { status: st, params: pm, fnd: e.fnd, ct: e.ct, fecha: getFecha(), cloro: getCloro() };
                        else if (sl.status === st && sl.params.length > pm.length) map[id].sem[skey][type].pts[nomMues] = { status: st, params: pm, fnd: e.fnd, ct: e.ct, fecha: getFecha(), cloro: getCloro() };
                    }
                }
            };
            let hasCaract = false;
            if (iC) { const eC = ev(CARACT_CAPTACION_SINGLE, CARACT_CAPTACION_OR); up('c', eC); if (eC.ct > 0) hasCaract = true; }
            if (iP) { const eP = ev(CARACT_PILETA_SINGLE, CARACT_PILETA_OR); up('p', eP); if (eP.ct > 0) hasCaract = true; }
            if (iP && hasCaract && idxCloro !== -1 && r[idxCloro] !== undefined && String(r[idxCloro]).trim() !== '') {
                const val = parseFloat(r[idxCloro]);
                if (!isNaN(val) && map[id].vCloro === null) {
                    map[id].vCloro = val;
                }
            }
        });
        const aS = new Map(); rM.forEach(r => { const id = r[idxId]; populateMeta(aS, id, r, h); });
        fD = Array.from(aS.keys()).flatMap(id => {
            const sap = map[id];
            if (!sap) return [];
            let hasAny = false;
            let finalCloroVal = null;
            sK.forEach(k => {
                const cKeys = Object.keys(sap.sem[k].c.pts); const pKeys = Object.keys(sap.sem[k].p.pts);
                if (cKeys.length > 0 || pKeys.length > 0) hasAny = true;
                pKeys.forEach(pt => {
                    const clStr = sap.sem[k].p.pts[pt].cloro;
                    if (clStr !== undefined && clStr !== '') {
                        const cl = parseFloat(clStr);
                        if (!isNaN(cl) && finalCloroVal === null) finalCloroVal = cl;
                    }
                });
            });
            if (!hasAny) return [];

            let cloroLMP = '-';
            let isCloroCumple = false;
            if (finalCloroVal !== null) {
                cloroLMP = (finalCloroVal >= 0.5 && finalCloroVal <= 5) ? '0' : '1';
                if (cloroLMP === '0') isCloroCumple = true;
            }

            const allowedMissing = new Set(['BACTERIAS HETEROTRÓFICAS', 'Bacterias Coliformes Fecales (NMP)', 'Bacterias Coliformes Totales (NMP)', 'E. Coli (NMP)', 'Bacterias Coliformes Fecales (UFC)', 'Bacterias Coliformes Totales (UFC)', 'E. Coli (UFC)', 'Bacterias Coliformes Fecales', 'Bacterias Coliformes Totales', 'E. Coli']);

            const rData = [];
            sK.forEach(k => {
                let obsParts = [];
                const pKeys = Object.keys(sap.sem[k].p.pts);
                pKeys.forEach(pt => {
                    const point = sap.sem[k].p.pts[pt];
                    if (point.status === 2 && isCloroCumple) {
                        let remainingParams = [];
                        let missingAllowedParams = [];
                        let hasOtherFalta = false;
                        for (let i = 0; i < point.params.length; i++) {
                            const m = point.params[i];
                            if (m.startsWith('Falta: ')) {
                                let c = m.substring(7).trim();
                                if (allowedMissing.has(c)) {
                                    missingAllowedParams.push(c);
                                } else {
                                    remainingParams.push(m);
                                    hasOtherFalta = true;
                                }
                            } else {
                                remainingParams.push(m);
                            }
                        }
                        if (missingAllowedParams.length > 0) {
                            point.obs = missingAllowedParams.map(m => `Falta: ${m}`).join(', ');
                            remainingParams.unshift('Exceptuado por Cloro');
                            point.params = remainingParams;
                            if (!hasOtherFalta) {
                                point.status = 1;
                                point.params = ['Exceptuado por Cloro', ...(point.fnd || [])];
                            }
                        }
                    }
                    if (point.obs) {
                        obsParts.push(`${pt}: ${point.obs}`);
                    }
                });

                let obsStr = obsParts.length > 0 ? obsParts.join(' | ') : '-';
                rData.push(JSON.stringify(sap.sem[k].c.pts));
                rData.push(JSON.stringify(sap.sem[k].c.pts));
                rData.push(JSON.stringify(sap.sem[k].p.pts));
                rData.push(JSON.stringify(sap.sem[k].p.pts));
            });
            return aS.get(id).map(mt => [...mt, cloroLMP, ...rData]);
        }); pT = 'caract_points';
    } else if (['metales', 'parasitologico', 'fisico'].includes(subTab)) {
        fH = [...CORE_HEADERS, '1ra Insp. Pileta', '1ra Insp. Captación', '2da Insp. Pileta', '2da Insp. Captación']; const map = {}; const idxU = findHeaderIndex(h, 'Ubicación Lugar de Muestreo');
        dRows.forEach(r => { const id = r[idxId]; if (!id) return; if (!map[id]) map[id] = { meta: getMeta(r, h), s1p: { status: 0, params: [] }, s1c: { status: 0, params: [] }, s2p: { status: 0, params: [] }, s2c: { status: 0, params: [] } }; let mRaw = idxMes !== -1 ? r[idxMes] : ''; const mm = MONTH_NUM[normalizeHeader(mRaw).toUpperCase()]; if (!mm) return; let isS1 = parseInt(mm) >= 1 && parseInt(mm) <= 6; let isS2 = parseInt(mm) >= 7 && parseInt(mm) <= 12; const u = idxU !== -1 ? (r[idxU] || '').toLowerCase() : ''; const isCap = u.includes('captación') || u.includes('captacion'); const isPil = u.includes('red') || u.includes('pileta'); const ev = (pSet) => { let ct = 0; let exp = pSet ? pSet.length : 0; let mis = []; let fnd = []; if (pSet) { pSet.forEach(x => { let f = false; if (Array.isArray(x)) { let match = x.find(sub => { const i = findHeaderIndex(h, sub); return i !== -1 && !isCellEmpty(r[i]); }); if (match) { f = true; fnd.push(match); } } else { const i = findHeaderIndex(h, x); if (i !== -1 && !isCellEmpty(r[i])) { f = true; fnd.push(x); } } if (!f) mis.push(Array.isArray(x) ? x[0] : x); else ct++; }); } return { isC: exp > 0 && ct === exp, ct, exp, mis, fnd }; }; const cSet = ANALYSIS_SETS[subTab]; const eP = ev(cSet?.A); const eC = ev(cSet?.B); const up = (sl, e, isValid) => { if (isValid && e.ct > 0) { let st = e.isC ? 1 : 2; let pm = st === 1 ? e.fnd : e.mis.map(m => `Falta: ${m.replace(/_/g, '')}`); if (sl.status === 0 || (sl.status === 2 && st === 1) || (sl.status === st && sl.params.length > pm.length)) { sl.status = st; sl.params = pm; } } }; up(map[id].s1p, eP, isS1 && isPil); up(map[id].s1c, eC, isS1 && isCap); up(map[id].s2p, eP, isS2 && isPil); up(map[id].s2c, eC, isS2 && isCap); });
        const aS = new Map(); rM.forEach(r => { const id = r[idxId]; populateMeta(aS, id, r, h); });
        fD = Array.from(aS.keys()).flatMap(id => { const s = map[id] || { s1p: { status: 0, params: [] }, s1c: { status: 0, params: [] }, s2p: { status: 0, params: [] }, s2c: { status: 0, params: [] } }; if (s.s1p.status === 0 && s.s1c.status === 0 && s.s2p.status === 0 && s.s2c.status === 0) return []; return aS.get(id).map(mt => [...mt, JSON.stringify(s.s1p), JSON.stringify(s.s1c), JSON.stringify(s.s2p), JSON.stringify(s.s2c)]); }); pT = 'status_json';
    } else if (subTab.startsWith('res_')) {
        const bT = subTab.replace('res_', ''); fH = [...CORE_HEADERS, '1ra Muestra', '2da Muestra', 'Excede LMP', 'Cumple', 'Detalles']; const map = {}; const sLMP = LMP_SCOPES[bT]; const cSet = ANALYSIS_SETS[bT];
        dRows.forEach(r => { const id = r[idxId]; if (!id) return; if (!map[id]) map[id] = { meta: getMeta(r, h), tS: 0, cS: 0, exc: [], ubi: [] }; const hasD = checkComplianceSet(h, cSet?.A, r) || checkComplianceSet(h, cSet?.B, r); if (hasD) { map[id].tS++; map[id].ubi.push(classifyAnalysisByLoc(h, r, cSet?.A, cSet?.B)); const issues = sLMP ? checkParamLMPExceeded(h, r, sLMP) : []; if (issues.length > 0) { let mName = "Sin Mes"; if (idxMes !== -1 && r[idxMes]) { mName = r[idxMes]; } map[id].exc.push(...issues.map(i => ({ ...i, month: mName }))); } else { map[id].cS++; } } });
        const aS = new Map(); rM.forEach(r => { const id = r[idxId]; populateMeta(aS, id, r, h); });
        fD = Array.from(aS.keys()).flatMap(id => { const sap = map[id]; if (!sap || sap.tS === 0) return []; let cp = (sap.cS / sap.tS) > 0.7 ? 1 : 0; const eF = sap.exc.length > 0 ? 1 : 0; const mtx = [sap.ubi[0] || 0, sap.ubi[1] || 0, eF, cp, JSON.stringify(sap.exc)]; return aS.get(id).map(mt => [...mt, ...mtx]); }); pT = 'analysis';
    } else if (subTab === 'monitor') {
        fH = [...CORE_HEADERS, ...fM.map(m => `${NUM_MONTH[m.split('-')[1]]} ${m.split('-')[0]}`)]; const map = {}; const cSet = ANALYSIS_SETS[subTab]; const obsH = dO.observaciones[0] || []; const obsR = dO.observaciones.slice(1); const oMap = {}; let iOId = findHeaderIndex(obsH, 'Id. SAP'); let iOTxt = findHeaderIndex(obsH, 'Observacion');
        if (iOId === -1 && obsH.length > 0) iOId = 0; if (iOTxt === -1 && obsH.length > 4) iOTxt = 4; if (iOId !== -1 && iOTxt !== -1) { obsR.forEach(r => { const id = r[iOId]; if (id) oMap[String(id).trim()] = String(r[iOTxt] || '').trim(); }); } fH.push('Observación'); fH.push('Ver Detalle');

        const getMonitorKey = (r) => {
            const u = formatUbigeo(r[idxUbi]);
            let n = r[findHeaderIndex(h, 'Nombre CCPP')];
            if (!n) n = r[findHeaderIndex(h, 'Nombre SAP')];
            let ids = r[idxId] || '';
            let ns = r[findHeaderIndex(h, 'Nombre SAP')] || '';
            if (!u && !ids) return null;
            return u + '_' + normalizeHeader(n) + '_' + (ids ? String(ids).trim() : normalizeHeader(ns));
        };
        const getCcppKey = (r) => {
            const u = formatUbigeo(r[idxUbi]);
            let n = r[findHeaderIndex(h, 'Nombre CCPP')];
            if (!n) n = r[findHeaderIndex(h, 'Nombre SAP')];
            if (!u || !n) return null;
            return u + '_' + normalizeHeader(n);
        };

        const aS = new Map();
        const ccppMap = new Map();

        rM.forEach(r => {
            const mKey = getMonitorKey(r);
            const cKey = getCcppKey(r);
            if (mKey && cKey) {
                populateMeta(aS, mKey, r, h);
                if (!ccppMap.has(cKey)) ccppMap.set(cKey, new Set());
                ccppMap.get(cKey).add(mKey);
            }
        });

        dRows.forEach(r => {
            const id = getMonitorKey(r); if (!id) return;
            let mRaw = idxMes !== -1 ? r[idxMes] : ''; const mm = MONTH_NUM[normalizeHeader(mRaw).toUpperCase()]; if (!mm) return;
            let a = idxAno !== -1 ? r[idxAno] : '2025'; const ym = `${String(a).trim()}-${mm}`;
            if (!map[id]) { map[id] = { meta: getMeta(r, h), origId: r[idxId] || '', dM: {}, history: [] }; }
            let st = 0; let pCnt = []; MONITOR_5P_PARAMS.forEach(p => { if (!isCellEmpty(r[findHeaderIndex(h, p)])) pCnt.push(p); });
            if (pCnt.length === 5) st = 1; else if (pCnt.length > 0) st = 2;
            const nMue = r[findHeaderIndex(h, '# Muestreo')] || ''; const fMue = r[findHeaderIndex(h, 'Fecha Muestreo')] || r[findHeaderIndex(h, 'Fecha')] || '';
            const fFin = r[findHeaderIndex(h, 'Fecha Finalizado')] || ''; const nLMue = r[findHeaderIndex(h, 'Nombre Lugar de Muestreo')] || '';
            const uMue = r[findHeaderIndex(h, 'Ubicación Lugar de Muestreo')] || ''; const vCl = r[findHeaderIndex(h, 'Cloro')] || ''; const vCo = r[findHeaderIndex(h, 'Conductividad')] || '';
            const vPh = r[findHeaderIndex(h, 'pH')] || ''; const vTe = r[findHeaderIndex(h, 'Temperatura')] || ''; const vTu = r[findHeaderIndex(h, 'Turbiedad')] || '';
            map[id].history.push([nMue, fMue, fFin, mRaw || '', uMue, nLMue, vCl, vCo, vPh, vTe, vTu]);
            if (!map[id].dM[ym]) map[id].dM[ym] = { status: 0, params: [], _m: {} };
            let mK = nMue || fMue || 'UNKNOWN';
            if (st > 0) {
                if (!map[id].dM[ym]._m[mK]) map[id].dM[ym]._m[mK] = [];
                const nMueStr = r[findHeaderIndex(h, '# Muestra')] || ''; const nMueId = parseInt(String(nMueStr).replace(/\D/g, '')) || 0;
                map[id].dM[ym]._m[mK].push({ st: st, id: nMueId });
                let anyC = false;
                for (let k in map[id].dM[ym]._m) {
                    const pts = map[id].dM[ym]._m[k].slice().sort((a, b) => a.id - b.id); let blks = [], cB = [];
                    pts.forEach(p => { if (cB.length === 0) cB.push(p); else if (p.id === 0 && cB[cB.length - 1].id === 0) cB.push(p); else if (p.id !== 0 && cB[cB.length - 1].id !== 0 && Math.abs(p.id - cB[cB.length - 1].id) <= 30) cB.push(p); else { blks.push(cB); cB = [p]; } });
                    if (cB.length > 0) blks.push(cB);
                    blks.forEach(b => { let bSt = 1; b.forEach(p => { if (p.st === 2) bSt = 2; }); if (bSt === 1) anyC = true; });
                }
                map[id].dM[ym].status = anyC ? 1 : 2;
                if (st === 2 && map[id].dM[ym].status === 2) map[id].dM[ym].params = pCnt;
            }
        });

        const sysHasData = new Map();
        Array.from(aS.keys()).forEach(id => {
            const obj = map[id];
            let hasD = false;
            if (obj) {
                fM.forEach(m => { if (obj.dM[m] && obj.dM[m].status > 0) hasD = true; });
            }
            sysHasData.set(id, hasD);
        });

        fD = [];
        ccppMap.forEach((sysSet, cKey) => {
            sysSet.forEach(id => {
                if (sysHasData.get(id)) {
                    const obj = map[id] || { dM: {}, origId: aS.get(id)[0][CORE_HEADERS.indexOf('Id. SAP')] || '' };
                    const mC = fM.map(m => obj.dM[m] ? JSON.stringify(obj.dM[m]) : JSON.stringify({ status: 0, params: [] }));
                    const oTx = (oMap[String(obj.origId).trim()] || '');
                    let mtx = [...mC, oTx, JSON.stringify(obj.history || [])];
                    fD.push(...aS.get(id).map(mt => [...mt, ...mtx]));
                }
            });
        });
        pT = 'status_json';
    } else if (subTab === 'bacteriologico') {
        fH = [...CORE_HEADERS];
        fM.forEach(m => { const mN = NUM_MONTH[m.split('-')[1]]; const yN = m.split('-')[0]; fH.push(`${mN} Red`); fH.push(`${mN} Captacion`); fH.push(`${mN} ${yN} (Total)`); });
        const map = {};
        dRows.forEach(r => {
            const id = r[idxId]; if (!id) return;
            let mRaw = idxMes !== -1 ? r[idxMes] : ''; const mm = MONTH_NUM[normalizeHeader(mRaw).toUpperCase()]; if (!mm) return;
            let a = idxAno !== -1 ? r[idxAno] : '2025'; const ym = `${String(a).trim()}-${mm}`;
            if (!map[id]) map[id] = { dM: {} }; if (!map[id].dM[ym]) map[id].dM[ym] = { red: { st: 0, p: [] }, cap: { st: 0, p: [] } };
            const check = (keys) => { for (let k of keys) { const idx = findHeaderIndex(h, k); if (idx !== -1 && !isCellEmpty(r[idx])) return k; } return null; };

            const f_fec = check(['Bacterias Coliformes Fecales (NMP)', 'Bacterias Coliformes Fecales (UFC)']);
            const f_tot = check(['Bacterias Coliformes Totales (NMP)', 'Bacterias Coliformes Totales (UFC)']);
            const f_eco = check(['E. Coli (NMP)', 'E. Coli (UFC)']);
            const pR_pres = [f_fec, f_tot, f_eco].filter(Boolean);
            let r_st = pR_pres.length === 3 ? 1 : (pR_pres.length > 0 ? 2 : 0);
            let pR = []; if (r_st === 1) pR = pR_pres; else if (r_st === 2) { if (!f_fec) pR.push('Falta: Coliformes Fecales'); if (!f_tot) pR.push('Falta: Coliformes Totales'); if (!f_eco) pR.push('Falta: E. Coli'); }
            const cR = map[id].dM[ym].red;
            if (r_st === 1 && cR.st !== 1) map[id].dM[ym].red = { st: 1, p: pR, ct: pR_pres.length };
            else if (r_st === 2 && cR.st !== 1 && pR_pres.length > (cR.ct || 0)) map[id].dM[ym].red = { st: 2, p: pR, ct: pR_pres.length };

            const c_ter = check(['Coliformes Termotolerantes _']);
            const c_tot_c = check(['Coliformes Totales _']);
            const c_eco_c = check(['Escherichia Coli _']);
            const pC_pres = [c_ter, c_tot_c, c_eco_c].filter(Boolean);
            let c_st = pC_pres.length === 3 ? 1 : (pC_pres.length > 0 ? 2 : 0);
            let pC = []; if (c_st === 1) pC = pC_pres; else if (c_st === 2) { if (!c_ter) pC.push('Falta: Coliformes Termotolerantes'); if (!c_tot_c) pC.push('Falta: Coliformes Totales'); if (!c_eco_c) pC.push('Falta: E. Coli'); }
            const cC = map[id].dM[ym].cap;
            if (c_st === 1 && cC.st !== 1) map[id].dM[ym].cap = { st: 1, p: pC, ct: pC_pres.length };
            else if (c_st === 2 && cC.st !== 1 && pC_pres.length > (cC.ct || 0)) map[id].dM[ym].cap = { st: 2, p: pC, ct: pC_pres.length };
        });
        const aS = new Map(); dRows.forEach(r => { const id = r[idxId]; populateMeta(aS, id, r, h); });
        fD = Array.from(aS.keys()).flatMap(id => {
            const obj = map[id] || { dM: {} }; let hasD = false; const mC = [];
            fM.forEach(m => {
                const dm = obj.dM[m]; const r_st = dm ? dm.red.st : 0; const r_p = dm ? dm.red.p : []; const c_st = dm ? dm.cap.st : 0; const c_p = dm ? dm.cap.p : [];
                let t_st = 0; if (r_st === 1 || c_st === 1) t_st = 1; else if (r_st === 2 || c_st === 2) t_st = 2;
                if (t_st !== 0) hasD = true;
                let t_p = []; if (t_st === 2) { if (r_st === 2) t_p.push(...r_p); if (c_st === 2) t_p.push(...c_p); }
                mC.push(JSON.stringify({ status: r_st, params: r_p })); mC.push(JSON.stringify({ status: c_st, params: c_p })); mC.push(JSON.stringify({ status: t_st, params: [...new Set(t_p)] }));
            });
            if (!hasD) return []; return aS.get(id).map(mt => [...mt, ...mC]);
        });
        pT = 'status_json';
    } else if (subTab === 'riesgos') {
        let lR = dO.riesgos.slice(1); let lH = dO.riesgos[0] || [];

        const mNameMap = { '01': 'Enero', '02': 'Febrero', '03': 'Marzo', '04': 'Abril', '05': 'Mayo', '06': 'Junio', '07': 'Julio', '08': 'Agosto', '09': 'Setiembre', '10': 'Octubre', '11': 'Noviembre', '12': 'Diciembre' };
        fH = [...CORE_HEADERS, ...fM.map(m => `${NUM_MONTH[m.split('-')[1]]} ${m.split('-')[0]}`)];

        const idxRedR = findHeaderIndex(lH, 'Red de Salud');
        const idxUbiR = findHeaderIndex(lH, 'Ubigeo');
        const idxSapR = findHeaderIndex(lH, 'Id. SAP');

        if (redFilter !== 'Todos' && idxRedR !== -1) lR = lR.filter(row => row[idxRedR] === redFilter);
        if (ambitoFilter === 'MEF') { lR = lR.filter(row => (idxUbiR !== -1 && APP_STATE.mefUbigeos.has(formatUbigeo(row[idxUbiR]))) || (idxSapR !== -1 && APP_STATE.mefSapIds.has(String(row[idxSapR]).trim()))); }
        if (ambitoFilter === 'FED' && idxUbiR !== -1) lR = lR.filter(row => APP_STATE.fedUbigeos.has(formatUbigeo(row[idxUbiR])));
        if (ambitoFilter === 'SAP REGULARES' && idxUbiR !== -1) lR = lR.filter(row => APP_STATE.sapRegularesUbigeos.has(formatUbigeo(row[idxUbiR])));
        if (ambitoFilter === 'MIDIS') { lR = lR.filter(row => (idxUbiR !== -1 && APP_STATE.midisUbigeos.has(formatUbigeo(row[idxUbiR]))) || (idxSapR !== -1 && APP_STATE.midisSapIds.has(String(row[idxSapR]).trim()))); }
        if (ambitoFilter === 'Meta 2025') { lR = lR.filter(row => (idxUbiR !== -1 && APP_STATE.meta2025Ubigeos.has(formatUbigeo(row[idxUbiR]))) || (idxSapR !== -1 && APP_STATE.meta2025SapIds.has(String(row[idxSapR]).trim()))); }

        const mapRiesgos = {};
        const iAR = findHeaderIndex(lH, 'Año');
        const lNomSAP = findHeaderIndex(lH, 'Nombre SAP');
        const lNomCCPP = findHeaderIndex(lH, 'Nombre CCPP');

        lR.forEach(r => {
            let rawNom = lNomSAP !== -1 ? r[lNomSAP] : '';
            let extractedId = '';
            if (rawNom && String(rawNom).includes('|')) {
                const pts = String(rawNom).split('|');
                extractedId = pts[0].trim();
                rawNom = pts[1].trim();
            }
            let nom = rawNom ? normalizeHeader(rawNom) : '';
            if (!nom) nom = lNomCCPP !== -1 ? normalizeHeader(r[lNomCCPP]) : '';
            if (!nom) return;
            let ubi = idxUbiR !== -1 ? formatUbigeo(r[idxUbiR]) : '';
            let ano = iAR !== -1 && r[iAR] ? String(r[iAR]).trim() : '';
            if (ano && !fM.some(ym => ym.startsWith(ano + '-'))) return;

            let key = `${ubi}_${nom}`;
            const vM = {};


            if (!mapRiesgos[key]) {
                mapRiesgos[key] = {
                    meta: CORE_HEADERS.map(x => {
                        if (x === 'Id. SAP' && extractedId) return extractedId;
                        let v = r[findHeaderIndex(lH, x)] || '';
                        if (x === 'Nombre SAP' && rawNom) return rawNom;
                        return x === 'Ubigeo' ? formatUbigeo(v) : v;
                    }),
                    vM: {}
                };
                fM.forEach(ym => mapRiesgos[key].vM[ym] = { status: 3, params: [] });
            } else if (extractedId && !mapRiesgos[key].meta[0]) {
                mapRiesgos[key].meta[0] = extractedId;
            }

            fM.forEach(ym => {
                const [y, m] = ym.split('-');
                const mC = mNameMap[m];
                let curAno = ano;
                if (!curAno) {
                    if (mC === 'Diciembre') curAno = '2025';
                    else if (['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].includes(mC)) curAno = '2026';
                    else curAno = '2025';
                }
                if (curAno !== y) return;

                const iInf = findHeaderIndex(lH, `Informe ${mC}`);
                const iCar = findHeaderIndex(lH, `Cargo ${mC}`);
                const vInf = iInf !== -1 ? normalizeHeader(r[iInf]) : '';
                const vCar = iCar !== -1 ? normalizeHeader(r[iCar]) : '';

                let nS = 3;
                let params = [];
                const isRevInf = ['cargado', 'en revision'].includes(vInf);
                const isRevCar = ['cargado', 'en revision'].includes(vCar);

                if (vInf === 'aprobado' && vCar === 'aprobado') {
                    nS = 1;
                } else if (isRevInf) {
                    nS = 2; params.push(`Inf: ${vInf}`);
                } else if (vInf === 'aprobado' && (isRevCar || vCar === '')) {
                    nS = 2; params.push(`Car: ${vCar || 'Falta'}`);
                } else if (vInf !== '' || vCar !== '') {
                    nS = 2;
                    if (vInf !== 'aprobado') params.push(`Inf: ${vInf || 'Falta'}`);
                    if (vCar !== 'aprobado') params.push(`Car: ${vCar || 'Falta'}`);
                }

                if (nS < mapRiesgos[key].vM[ym].status) {
                    mapRiesgos[key].vM[ym] = { status: nS, params: params };
                }
            });
        });

        fD = Object.values(mapRiesgos).map(o => {
            const mC = fM.map(m => JSON.stringify(o.vM[m]));
            return [...o.meta, ...mC];
        });
        pT = 'status_json';
    } else if (subTab === 'sanitaria') {
        let lR = dO.sanitaria.slice(1); let lH = dO.sanitaria[0] || [];
        const sS = new Set(); fM.forEach(m => { const [y, mm] = m.split('-'); sS.add(`${y}-${parseInt(mm) <= 6 ? 'S1' : 'S2'}`); }); const sK = Array.from(sS).sort(); const sL = sK.map(k => { const [y, s] = k.split('-'); return s === 'S1' ? `1ra Inspección ${y}` : `2da Inspección ${y}`; });
        fH = [...CORE_HEADERS, ...sL]; const map = {}; const iA = findHeaderIndex(lH, 'Año'); const iM = findHeaderIndex(lH, 'Mes'); const iF = findHeaderIndex(lH, 'Fecha de inspección');
        const lId = findHeaderIndex(lH, 'Id. SAP');
        lR.forEach(r => {
            const key = lId !== -1 ? String(r[lId]).trim() : '';
            if (!key) return;
            if (!map[key]) { map[key] = { s: {} }; sK.forEach(k => map[key].s[k] = 0); }
            let ano = iA !== -1 && r[iA] ? String(r[iA]).trim() : ''; let mes = iM !== -1 ? r[iM] : ''; const mm = MONTH_NUM[normalizeHeader(mes).toUpperCase()]; if (mm) { if (!ano) { if (mes.toLowerCase() === 'diciembre') ano = '2025'; else if (mes.toLowerCase() === 'enero' || mes.toLowerCase() === 'febrero') ano = '2026'; else ano = '2025'; } const skey = `${ano}-${parseInt(mm) <= 6 ? 'S1' : 'S2'}`; if (sK.includes(skey) && !isCellEmpty(r[iF])) { map[key].s[skey] = 1; } }
        });

        const riesgosUbigeos = new Set();
        const rH = dO.riesgos[0] || [];
        const idxRiesgoUbi = findHeaderIndex(rH, 'Ubigeo');
        if (idxRiesgoUbi !== -1) {
            dO.riesgos.slice(1).forEach(r => {
                const ubi = formatUbigeo(r[idxRiesgoUbi]);
                if (ubi) riesgosUbigeos.add(ubi);
            });
        }

        const aS = new Map();
        rM.forEach(r => { const id = r[idxId]; const ubi = formatUbigeo(r[idxUbi]); if (riesgosUbigeos.has(ubi)) { populateMeta(aS, id, r, h); } });

        fD = Array.from(aS.keys()).flatMap(id => {
            const res = [];
            aS.get(id).forEach(mt => {
                let o = map[id] || { s: {} };
                const sC = sK.map(k => { let st = o.s[k] === 1 ? 1 : 0; return JSON.stringify({ status: st === 1 ? 1 : 3, params: [] }); });
                res.push([...mt, ...sC]);
            });
            return res;
        }); pT = 'status_json';
    } else if (subTab === 'vigilancia') {
        fH = [...CORE_HEADERS, 'Inspección', 'Bacteriológico', 'Parasitológico', 'Físico Químicos', 'Inorgánicos', 'Monitoreo 5P', 'Riesgos', 'Vigilancia Completa'];
        const map = {};
        const sapToCcppId = {};
        const sapNameToCcppId = {};

        const getSapId = (r, h) => {
            const u = formatUbigeo(r[findHeaderIndex(h, 'Ubigeo')]);
            let ccpp = r[findHeaderIndex(h, 'Nombre CCPP')];
            if (!ccpp) ccpp = r[findHeaderIndex(h, 'Nombre SAP')];
            if (!ccpp) ccpp = r[findHeaderIndex(h, 'Sistema de Abastecimiento')];
            if (!u && !ccpp) return null;

            let ids = r[findHeaderIndex(h, 'Id. SAP')] || '';
            let ns = r[findHeaderIndex(h, 'Nombre SAP')];
            if (!ns) ns = r[findHeaderIndex(h, 'Sistema de Abastecimiento')];
            ns = ns || '';
            let id = u + '_' + normalizeHeader(ccpp) + '_' + (ids ? String(ids).trim() : normalizeHeader(ns));
            if (!map[id]) {
                map[id] = { meta: getMeta(r, h), u: u || '', c: ccpp || '', ids: ids || '', ns: ns || '', meses: {}, i: 0, ri: {}, bact: 0, para: 0, fisi: 0, metaPes: 0 };
                fM.forEach(ym => map[id].meses[ym] = { p5: 0 });
            }
            return id;
        };

        const matchSapIds = (r, h) => {
            const u = formatUbigeo(r[findHeaderIndex(h, 'Ubigeo')]);
            let ccpp = r[findHeaderIndex(h, 'Nombre CCPP')];
            if (!ccpp) ccpp = r[findHeaderIndex(h, 'Nombre SAP')];
            if (!ccpp) ccpp = r[findHeaderIndex(h, 'Sistema de Abastecimiento')];

            let ids = r[findHeaderIndex(h, 'Id. SAP')] || '';
            let ns = r[findHeaderIndex(h, 'Nombre SAP')];
            if (!ns) ns = r[findHeaderIndex(h, 'Sistema de Abastecimiento')];
            ns = ns || '';
            let exactId = u + '_' + normalizeHeader(ccpp) + '_' + (ids ? String(ids).trim() : normalizeHeader(ns));

            if (map[exactId]) return [exactId];
            if (ids && sapToCcppId[String(ids).trim()]) return [sapToCcppId[String(ids).trim()]];
            if (ns && u && sapNameToCcppId[u + '_' + normalizeHeader(ns)]) return [sapNameToCcppId[u + '_' + normalizeHeader(ns)]];

            if (!ids && !ns && u && ccpp) {
                const prefix = u + '_' + normalizeHeader(ccpp) + '_';
                const matches = Object.keys(map).filter(k => k.startsWith(prefix));
                if (matches.length > 0) return matches;
            }

            return [getSapId(r, h)];
        };

        dRows.forEach(r => {
            const id = getSapId(r, h); if (!id) return;
            const ubi = formatUbigeo(r[findHeaderIndex(h, 'Ubigeo')]);
            if (findHeaderIndex(h, 'Id. SAP') !== -1) { const sId = r[findHeaderIndex(h, 'Id. SAP')]; if (sId) sapToCcppId[String(sId).trim()] = id; }
            let sNom = r[findHeaderIndex(h, 'Nombre SAP')];
            if (!sNom) sNom = r[findHeaderIndex(h, 'Sistema de Abastecimiento')];
            if (sNom && ubi) sapNameToCcppId[ubi + '_' + normalizeHeader(sNom)] = id;

            let me = findHeaderIndex(h, 'Mes') !== -1 ? normalizeHeader(r[findHeaderIndex(h, 'Mes')]) : '';
            let a = findHeaderIndex(h, 'Año') !== -1 && r[findHeaderIndex(h, 'Año')] ? String(r[findHeaderIndex(h, 'Año')]).trim() : '';
            const mm = MONTH_NUM[me.toUpperCase()];

            if (mm) {
                if (!a) { if (me === 'diciembre') a = '2025'; else if (me === 'enero' || me === 'febrero') a = '2026'; else a = '2025'; }
                const ym = `${a}-${mm}`;
                if (map[id].meses[ym]) { if (classifyMonitoringStatus(h, r) === 1) map[id].meses[ym].p5++; }
            }

            const check = (keys) => { for (let k of keys) { const idx = findHeaderIndex(h, k); if (idx !== -1 && !isCellEmpty(r[idx])) return k; } return null; };

            const f_fec = check(['Bacterias Coliformes Fecales (NMP)', 'Bacterias Coliformes Fecales (UFC)']);
            const f_tot = check(['Bacterias Coliformes Totales (NMP)', 'Bacterias Coliformes Totales (UFC)']);
            const f_eco = check(['E. Coli (NMP)', 'E. Coli (UFC)']);
            const c_ter = check(['Coliformes Termotolerantes _']);
            const c_tot_c = check(['Coliformes Totales _']);
            const c_eco_c = check(['Escherichia Coli _']);
            if ((f_fec && f_tot && f_eco) || (c_ter && c_tot_c && c_eco_c)) map[id].bact = 1;

            if (checkComplianceSet(h, ANALYSIS_SETS.parasitologico.A, r) || checkComplianceSet(h, ANALYSIS_SETS.parasitologico.B, r)) map[id].para = 1;
            if (checkComplianceSet(h, ANALYSIS_SETS.fisico.A, r) || checkComplianceSet(h, ANALYSIS_SETS.fisico.B, r)) map[id].fisi = 1;
            if (checkComplianceSet(h, ANALYSIS_SETS.metales.A, r) || checkComplianceSet(h, ANALYSIS_SETS.metales.B, r)) map[id].metaPes = 1;
        });

        const sS = new Set(); fM.forEach(mStr => { const [y, mm] = mStr.split('-'); sS.add(`${y}-${parseInt(mm) <= 6 ? 'S1' : 'S2'}`); });
        const sK = Array.from(sS);

        const sH = dO.sanitaria[0] || []; const sR = dO.sanitaria.slice(1);
        const iMS = findHeaderIndex(sH, 'Mes'); const iAS = findHeaderIndex(sH, 'Año'); const iFS = findHeaderIndex(sH, 'Fecha de inspección');
        sR.forEach(r => {
            const ids = matchSapIds(r, sH);
            ids.forEach(id => {
                if (!id) return;
                let me = iMS !== -1 ? normalizeHeader(r[iMS]) : '';
                let a = iAS !== -1 ? String(r[iAS]).trim() : '';
                const mm = MONTH_NUM[me.toUpperCase()];
                if (mm) {
                    if (!a) { if (me === 'diciembre') a = '2025'; else if (me === 'enero' || me === 'febrero') a = '2026'; else a = '2025'; }
                    const skey = `${a}-${parseInt(mm) <= 6 ? 'S1' : 'S2'}`;
                    if (map[id] && sK.includes(skey) && !isCellEmpty(r[iFS])) { map[id].i++; }
                }
            });
        });

        const mNameMap = { '01': 'Enero', '02': 'Febrero', '03': 'Marzo', '04': 'Abril', '05': 'Mayo', '06': 'Junio', '07': 'Julio', '08': 'Agosto', '09': 'Setiembre', '10': 'Octubre', '11': 'Noviembre', '12': 'Diciembre' };
        const rH = dO.riesgos[0] || []; const rR = dO.riesgos.slice(1); const iAR = findHeaderIndex(rH, 'Año');
        rR.forEach(r => {
            const ids = matchSapIds(r, rH);
            ids.forEach(id => {
                if (!id) return;
                const a = iAR !== -1 && r[iAR] ? String(r[iAR]).trim() : '';
                fM.forEach(ym => {
                    const [y, mm] = ym.split('-'); const mC = mNameMap[mm]; let curAno = a;
                    if (!curAno) { if (mC === 'Diciembre') curAno = '2025'; else if (['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].includes(mC)) curAno = '2026'; else curAno = '2025'; }
                    if (curAno === y) {
                        const iInf = findHeaderIndex(rH, `Informe ${mC}`); const iCar = findHeaderIndex(rH, `Cargo ${mC}`);
                        const vInf = iInf !== -1 ? normalizeHeader(r[iInf]) : ''; const vCar = iCar !== -1 ? normalizeHeader(r[iCar]) : '';
                        if (vInf === 'aprobado' && vCar === 'aprobado' && map[id]) { map[id].ri[ym] = true; }
                    }
                });
            });
        });

        const aS = new Map(); rM.forEach(r => { const id = getSapId(r, h); populateMeta(aS, id, r, h); });

        fD = Array.from(aS.keys()).map(id => {
            const s = map[id]; if (!s) return null;
            const insp = s.i > 0 ? 1 : 0;
            let p5m = 0; fM.forEach(ym => { if (s.meses[ym]?.p5 > 0) p5m++; }); const mon5p = p5m >= 4 ? 1 : 0;
            let rim = 0; fM.forEach(ym => { if (s.ri[ym]) rim++; }); const riesg = rim >= 3 ? 1 : 0;

            const vig = (insp === 1 && s.bact === 1 && s.para === 1 && s.fisi === 1 && s.metaPes === 1 && mon5p === 1 && riesg === 1) ? 1 : 0;
            return [...aS.get(id)[0], insp, s.bact, s.para, s.fisi, s.metaPes, mon5p, riesg, vig];
        }).filter(Boolean);

        pT = 'vigilancia';
    } else { fH = [...CORE_HEADERS]; fD = []; pT = 'status'; }

    if (subTab !== 'res_nivel_riesgo') {
        fD = sortTableData(fD, fH);
    }
    return { headers: fH, data: fD, type: pT };
}

function runFedLogic(dO, ind) {
    const from = APP_STATE.globalDateFrom; const to = APP_STATE.globalDateTo;
    const aF = from <= to ? from : to; const aT = from <= to ? to : from;
    const fM = APP_STATE.availableMonitorMonths.filter(m => m >= aF && m <= aT);

    const _nCache = new Map();
    const nFst = (t) => {
        if (!t) return '';
        let r = _nCache.get(t);
        if (r !== undefined) return r;
        r = String(t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().replace(/\s+/g, ' ');
        _nCache.set(t, r); return r;
    };

    if (ind === 'ind4') {
        const h2 = dO.main2[0] || []; const r2 = dO.main2.slice(1);
        const iA2 = findHeaderIndex(h2, 'Año');
        const iM2 = findHeaderIndex(h2, 'Mes');
        const iU2 = findHeaderIndex(h2, 'Ubigeo');
        const iN2 = findHeaderIndex(h2, 'Nombre CCPP');
        const iSap2 = findHeaderIndex(h2, 'Id. SAP');
        const iSapN2 = findHeaderIndex(h2, 'Nombre SAP');
        const iProv2 = findHeaderIndex(h2, 'Provincia');
        const iDist2 = findHeaderIndex(h2, 'Distrito');
        const iRed2 = findHeaderIndex(h2, 'Red de Salud');
        const iLug = findHeaderIndex(h2, 'Nombre Lugar de Muestreo');
        const iCl2 = findHeaderIndex(h2, 'Cloro');

        const map = {};
        const availableMonths = fM.filter(m => m >= '2026-06');

        r2.forEach(r => {
            const lug = (iLug !== -1 && r[iLug]) ? String(r[iLug]).trim() : '';
            if (!lug.toLowerCase().includes('colegio')) return;

            const a = iA2 !== -1 && r[iA2] ? String(r[iA2]).trim() : '2026';
            const me = iM2 !== -1 ? nFst(r[iM2]) : '';
            const mm = MONTH_NUM[me.toUpperCase()];
            if (!mm) return;
            const ym = `${a}-${mm}`;
            if (ym < '2026-06') return;
            if (ym < aF || ym > aT) return;

            const u = formatUbigeo(r[iU2]);
            const origCcpp2 = iN2 !== -1 ? String(r[iN2]).trim().toUpperCase() : '';
            const n = nFst(origCcpp2);
            const sapId = iSap2 !== -1 ? String(r[iSap2]).trim() : '';
            if (!u || !n || !sapId) return;

            const id = u + '_' + n + '_' + sapId + '_' + nFst(lug);

            if (!map[id]) {
                map[id] = {
                    u: u,
                    c: r[iN2] ? String(r[iN2]).trim() : '',
                    idSap: sapId,
                    nomSap: iSapN2 !== -1 ? String(r[iSapN2]).trim() : '',
                    prov: iProv2 !== -1 ? String(r[iProv2]).trim() : '',
                    dist: iDist2 !== -1 ? String(r[iDist2]).trim() : '',
                    red: iRed2 !== -1 ? String(r[iRed2]).trim() : '',
                    lug: lug,
                    m: {}
                };
            }

            const clStr = iCl2 !== -1 ? String(r[iCl2]).replace(/[<>]/g, '').trim() : '';
            if (clStr !== '') {
                const cl = parseFloat(clStr);
                if (!isNaN(cl)) {
                    if (map[id].m[ym] === undefined) {
                        map[id].m[ym] = cl;
                    } else {
                        if (cl > map[id].m[ym]) map[id].m[ym] = cl;
                    }
                }
            }
        });

        const dynamicHeaders = availableMonths.map(ym => {
            const [y, m] = ym.split('-');
            return `Mon CL ${NUM_MONTH[m]}`;
        });

        const fH = ['Ubigeo', 'Nombre CCPP', 'Id. SAP', 'Nombre SAP', 'Provincia', 'Distrito', 'Red de Salud', 'Nombre Lugar de Muestreo', 'Tot Mon.', ...dynamicHeaders];

        const fD = Object.values(map).map(item => {
            let totMon = 0;
            const row = [item.u, item.c, item.idSap, item.nomSap, item.prov, item.dist, item.red, item.lug];
            const mValues = [];
            availableMonths.forEach(ym => {
                const val = item.m[ym];
                if (val !== undefined) {
                    totMon++;
                    mValues.push(val);
                } else {
                    mValues.push('');
                }
            });
            row.push(totMon, ...mValues);
            return row;
        });

        return { headers: fH, data: sortTableData(fD, fH), type: 'ind4' };
    }

    if (ind === 'ind3') {
        const rH = dO.riesgos[0] || []; const rR = dO.riesgos.slice(1); const iA = findHeaderIndex(rH, 'Año');

        const h1 = dO.main[0] || []; const r1 = dO.main.slice(1);
        const iBcfNmp = findHeaderIndex(h1, 'Bacterias Coliformes Fecales (NMP)');
        const iBcfUfc = findHeaderIndex(h1, 'Bacterias Coliformes Fecales (UFC)');
        const iBctNmp = findHeaderIndex(h1, 'Bacterias Coliformes Totales (NMP)');
        const iBctUfc = findHeaderIndex(h1, 'Bacterias Coliformes Totales (UFC)');
        const iEcNmp = findHeaderIndex(h1, 'E. Coli (NMP)');
        const iEcUfc = findHeaderIndex(h1, 'E. Coli (UFC)');
        const iU1 = findHeaderIndex(h1, 'Ubigeo');
        let iN1 = findHeaderIndex(h1, 'Nombre CCPP');
        const iM1 = findHeaderIndex(h1, 'Mes');
        const iA1 = findHeaderIndex(h1, 'Año');

        const paramsToExtract = [
            'Color', 'Turbiedad', 'pH', 'Conductividad', 'Sólidos Totales disueltos', 'Cloruros', 'Sulfatos', 'Dureza total', 'Hierro', 'Manganeso', 'Aluminio', 'Cobre', 'Zinc', 'Sodio', 'Antimonio', 'Arsénico', 'Bario', 'Boro', 'Cadmio', 'Cianuro', 'Cloro', 'Cromo total', 'Mercurio', 'Niquel', 'Nitratos', 'Nitritos (Exposición Corta)', 'Nitritos (Exposición Larga)', 'Plomo', 'Selenio', 'Molibdeno', 'Uranio'
        ];
        const pIdx = {};
        paramsToExtract.forEach(p => pIdx[p] = findHeaderIndex(h1, p));

        const mMain = {};
        r1.forEach(r => {
            const a = iA1 !== -1 ? String(r[iA1]).trim() : '2025';
            if (a !== '2025') return;
            const mesRaw = iM1 !== -1 ? nFst(r[iM1]) : '';
            const mm = MONTH_NUM[mesRaw.toUpperCase()];
            if (!mm || parseInt(mm, 10) < 7 || parseInt(mm, 10) > 12) return;

            const u = formatUbigeo(r[iU1]);
            const origCcpp = iN1 !== -1 ? String(r[iN1]).trim().toUpperCase() : '';
            const n = nFst(origCcpp);
            if (!u || !n) return;
            const id = u + '_' + n;
            if (!mMain[id]) {
                mMain[id] = {
                    origCcpp: origCcpp,
                    p: r[findHeaderIndex(h1, 'Provincia')] || '',
                    d: r[findHeaderIndex(h1, 'Distrito')] || '',
                    r: r[findHeaderIndex(h1, 'Red de Salud')] || '',
                    bcfNmp: -Infinity, bcfUfc: -Infinity, bctNmp: -Infinity, bctUfc: -Infinity, ecNmp: -Infinity, ecUfc: -Infinity
                };
                paramsToExtract.forEach(p => mMain[id][p] = -Infinity);
            }
            const parseVal = (idx) => {
                if (idx === -1) return NaN; const v = r[idx]; if (!v) return NaN;
                return parseFloat(v.replace(/[<>]/g, ''));
            };
            const v1 = parseVal(iBcfNmp); if (!isNaN(v1) && v1 > mMain[id].bcfNmp) mMain[id].bcfNmp = v1;
            const v2 = parseVal(iBcfUfc); if (!isNaN(v2) && v2 > mMain[id].bcfUfc) mMain[id].bcfUfc = v2;
            const v3 = parseVal(iBctNmp); if (!isNaN(v3) && v3 > mMain[id].bctNmp) mMain[id].bctNmp = v3;
            const v4 = parseVal(iBctUfc); if (!isNaN(v4) && v4 > mMain[id].bctUfc) mMain[id].bctUfc = v4;
            const v5 = parseVal(iEcNmp); if (!isNaN(v5) && v5 > mMain[id].ecNmp) mMain[id].ecNmp = v5;
            const v6 = parseVal(iEcUfc); if (!isNaN(v6) && v6 > mMain[id].ecUfc) mMain[id].ecUfc = v6;

            paramsToExtract.forEach(p => {
                const vx = parseVal(pIdx[p]);
                if (!isNaN(vx) && vx > mMain[id][p]) mMain[id][p] = vx;
            });
        });

        const m3 = {};
        let iNR = findHeaderIndex(rH, 'Nombre CCPP');
        const iU_R = findHeaderIndex(rH, 'Ubigeo'), iProv_R = findHeaderIndex(rH, 'Provincia');
        const iDist_R = findHeaderIndex(rH, 'Distrito'), iRed_R = findHeaderIndex(rH, 'Red de Salud');
        const iA_Jul = findHeaderIndex(rH, 'Alerta Julio'), iA_Ago = findHeaderIndex(rH, 'Alerta Agosto');
        let iA_Set = findHeaderIndex(rH, 'Alerta Setiembre'); if (iA_Set === -1) iA_Set = findHeaderIndex(rH, 'Alerta Septiembre');
        const iA_Oct = findHeaderIndex(rH, 'Alerta Octubre'), iA_Nov = findHeaderIndex(rH, 'Alerta Noviembre'), iA_Dic = findHeaderIndex(rH, 'Alerta Diciembre');

        rR.forEach(r => {
            const u = iU_R !== -1 ? formatUbigeo(r[iU_R]) : '';
            const origCcppR = iNR !== -1 ? String(r[iNR]).trim().toUpperCase() : '';
            const n = nFst(origCcppR);
            if (!u || !n) return;
            const id = u + '_' + n;
            if (!m3[id]) {
                m3[id] = {
                    u: u || '', c: mMain[id] && mMain[id].origCcpp ? mMain[id].origCcpp : origCcppR,
                    p: (iProv_R !== -1 && r[iProv_R]) ? r[iProv_R] : (mMain[id] ? mMain[id].p : ''),
                    d: (iDist_R !== -1 && r[iDist_R]) ? r[iDist_R] : (mMain[id] ? mMain[id].d : ''),
                    r: (iRed_R !== -1 && r[iRed_R]) ? r[iRed_R] : (mMain[id] ? mMain[id].r : ''),
                    jul: 0, ago: 0, set: 0, oct: 0, nov: 0, dic: 0,
                    m_bcfNmp: mMain[id] ? mMain[id].bcfNmp : -Infinity,
                    m_bcfUfc: mMain[id] ? mMain[id].bcfUfc : -Infinity,
                    m_bctNmp: mMain[id] ? mMain[id].bctNmp : -Infinity,
                    m_bctUfc: mMain[id] ? mMain[id].bctUfc : -Infinity,
                    m_ecNmp: mMain[id] ? mMain[id].ecNmp : -Infinity,
                    m_ecUfc: mMain[id] ? mMain[id].ecUfc : -Infinity,
                    mMain: mMain[id] || {}
                };
            }
            const a = iA !== -1 ? String(r[iA]).trim() : '';
            if (a === '2025' || a === '') {
                if (iA_Jul !== -1 && nFst(r[iA_Jul]) === 'si') m3[id].jul = 1;
                if (iA_Ago !== -1 && nFst(r[iA_Ago]) === 'si') m3[id].ago = 1;
                if (iA_Set !== -1 && nFst(r[iA_Set]) === 'si') m3[id].set = 1;
                if (iA_Oct !== -1 && nFst(r[iA_Oct]) === 'si') m3[id].oct = 1;
                if (iA_Nov !== -1 && nFst(r[iA_Nov]) === 'si') m3[id].nov = 1;
                if (iA_Dic !== -1 && nFst(r[iA_Dic]) === 'si') m3[id].dic = 1;
            }
        });

        const extraColsNames = [
            'Color', 'Turbiedad', 'pH', 'Conductividad', 'Sólidos Totales disueltos', 'Cloruros', 'Sulfatos', 'Dureza total', 'Hierro', 'Manganeso', 'Aluminio', 'Cobre', 'Zinc', 'Sodio', 'Antimonio', 'Arsénico', 'Bario', 'Boro', 'Cadmio', 'Cianuro', 'Cloro', 'Cromo total', 'Mercurio', 'Niquel', 'Nitratos', 'Nitritos (Exposición Corta) + Nitritos (Exposición Larga)', 'Plomo', 'Selenio', 'Molibdeno', 'Uranio'
        ];
        const limitsExtra = [
            15, 5, 8.5, 1500, 1000, 250, 250, 500, 0.3, 0.4, 0.2, 2, 3, 200, 0.02, 0.01, 0.7, 1.5, 0.003, 0.07, 5, 0.05, 0.001, 0.02, 50, 0.2, 0.01, 0.01, 0.07, 0.015
        ];

        const seH = dO.sapEstado[0] || []; const seR = dO.sapEstado.slice(1);
        const idxEst = findHeaderIndex(seH, 'Estado');
        const idxUbiSE = findHeaderIndex(seH, 'Ubigeo');
        const idxCcppSE = findHeaderIndex(seH, 'Nombre CCPP');
        const idxSapSE = findHeaderIndex(seH, 'Nombre SAP');
        const mapEstado = {};
        seR.forEach(r => {
            const u = formatUbigeo(r[idxUbiSE]);
            let c = normalizeHeader(r[idxCcppSE]); if (!c) c = normalizeHeader(r[idxSapSE]);
            if (u && idxEst !== -1) {
                mapEstado[u] = mapEstado[u] || {};
                if (c) mapEstado[u][c] = r[idxEst];
                mapEstado[u]['_def'] = r[idxEst];
            }
        });

        const fM26 = APP_STATE.availableMonitorMonths.filter(m => m >= '2026-01' && m <= (APP_STATE.globalDateTo || '2026-12'));
        const h2 = dO.main2[0] || []; const r2 = dO.main2.slice(1);
        const iM2 = findHeaderIndex(h2, 'Mes');
        const iA2 = findHeaderIndex(h2, 'Año');
        const iU2 = findHeaderIndex(h2, 'Ubigeo');
        let iN2 = findHeaderIndex(h2, 'Nombre CCPP');
        const iCl2 = findHeaderIndex(h2, 'Cloro');
        const iTu2 = findHeaderIndex(h2, 'Turbiedad');

        r2.forEach(r => {
            const u = formatUbigeo(r[iU2]);
            const origCcpp2 = iN2 !== -1 ? String(r[iN2]).trim().toUpperCase() : '';
            const n = nFst(origCcpp2);
            if (!u || !n) return;
            const id = u + '_' + n;

            if (!m3[id]) return;

            const a = iA2 !== -1 && r[iA2] ? String(r[iA2]).trim() : '2026';
            const me = iM2 !== -1 ? nFst(r[iM2]) : '';
            const mm = MONTH_NUM[me.toUpperCase()];
            if (!mm) return;
            const ym = `${a}-${mm}`;
            if (ym < '2026-01') return;

            if (!m3[id].meses26) m3[id].meses26 = {};
            if (!m3[id].meses26[ym]) m3[id].meses26[ym] = { ok: 0 };

            const cl = parseFloat(r[iCl2]); const tu = parseFloat(r[iTu2]);
            if (!isNaN(cl) && !isNaN(tu) && cl >= 0.5 && cl <= 5 && tu <= 5) m3[id].meses26[ym].ok++;
        });

        const fD = Object.values(m3).map(s => {
            let est = '';
            if (mapEstado[s.u]) {
                const cNorm = normalizeHeader(s.c);
                if (mapEstado[s.u][cNorm] !== undefined) est = mapEstado[s.u][cNorm];
                else {
                    const match = Object.keys(mapEstado[s.u]).find(k => k !== '_def' && (k.includes(cNorm) || cNorm.includes(k)));
                    if (match) est = mapEstado[s.u][match]; else est = mapEstado[s.u]['_def'];
                }
            }
            const eVal = String(est).trim().toLowerCase();
            const ccppBueno = (eVal === '1' || eVal === 'si' || eVal === 'bueno' || eVal === 'cumple') ? 1 : 0;

            const totA = s.jul + s.ago + s.set + s.oct + s.nov + s.dic;
            const cumpA = totA >= 2 ? 1 : 0;

            const bcfNmp = s.m_bcfNmp !== -Infinity ? s.m_bcfNmp : '';
            const bcfUfc = s.m_bcfUfc !== -Infinity ? s.m_bcfUfc : '';
            const bctNmp = s.m_bctNmp !== -Infinity ? s.m_bctNmp : '';
            const bctUfc = s.m_bctUfc !== -Infinity ? s.m_bctUfc : '';
            const ecNmp = s.m_ecNmp !== -Infinity ? s.m_ecNmp : '';
            const ecUfc = s.m_ecUfc !== -Infinity ? s.m_ecUfc : '';

            let hasAnyParam = false;
            if (bcfNmp !== '' || bcfUfc !== '' || bctNmp !== '' || bctUfc !== '' || ecNmp !== '' || ecUfc !== '') hasAnyParam = true;

            const getR = (v, limit) => v === '' ? 0 : (v > limit ? 1 : 0);

            const r_bcfNmp = getR(bcfNmp, 1.8);
            const r_bcfUfc = getR(bcfUfc, 0);
            const r_bctNmp = getR(bctNmp, 1.8);
            const r_bctUfc = getR(bctUfc, 0);
            const r_ecNmp = getR(ecNmp, 1.8);
            const r_ecUfc = getR(ecUfc, 0);

            const totParam = r_bcfNmp + r_bcfUfc + r_bctNmp + r_bctUfc + r_ecNmp + r_ecUfc;
            const tiene = totParam >= 1 ? 1 : 0;

            const getPVal = (p) => s.mMain && s.mMain[p] !== undefined && s.mMain[p] !== -Infinity ? s.mMain[p] : '';
            const pValsArr = []; const rValsArr = [];
            const pKeys = ['Color', 'Turbiedad', 'pH', 'Conductividad', 'Sólidos Totales disueltos', 'Cloruros', 'Sulfatos', 'Dureza total', 'Hierro', 'Manganeso', 'Aluminio', 'Cobre', 'Zinc', 'Sodio', 'Antimonio', 'Arsénico', 'Bario', 'Boro', 'Cadmio', 'Cianuro', 'Cloro', 'Cromo total', 'Mercurio', 'Niquel', 'Nitratos'];
            for (let i = 0; i < pKeys.length; i++) {
                const v = getPVal(pKeys[i]); if (v !== '') hasAnyParam = true;
                pValsArr.push(v); rValsArr.push(getR(v, limitsExtra[i]));
            }
            const nitC = getPVal('Nitritos (Exposición Corta)'); const nitL = getPVal('Nitritos (Exposición Larga)');
            let nitSum = '';
            if (nitC !== '' || nitL !== '') { hasAnyParam = true; nitSum = (nitC !== '' ? nitC : 0) + (nitL !== '' ? nitL : 0); nitSum = Math.round(nitSum * 100000) / 100000; }
            pValsArr.push(nitSum); rValsArr.push(getR(nitSum, limitsExtra[pKeys.length]));
            const pKeys2 = ['Plomo', 'Selenio', 'Molibdeno', 'Uranio'];
            for (let i = 0; i < pKeys2.length; i++) {
                const v = getPVal(pKeys2[i]); if (v !== '') hasAnyParam = true;
                pValsArr.push(v); rValsArr.push(getR(v, limitsExtra[pKeys.length + 1 + i]));
            }

            const totParamMetales = rValsArr.reduce((a, b) => a + b, 0);
            const tieneMetales = totParamMetales >= 1 ? 1 : 0;

            let detMetales = [];
            for (let i = 0; i < rValsArr.length; i++) {
                if (rValsArr[i] === 1) detMetales.push(`${extraColsNames[i]}: ${pValsArr[i]}`);
            }
            const detMetalesStr = detMetales.length > 0 ? detMetales.join(', ') : '-';

            const paso1 = (cumpA === 1 && tiene === 1 && tieneMetales === 0 && ccppBueno === 1) ? 1 : 0;
            const iSR = APP_STATE.sapRegularesUbigeos.has(s.u) ? 1 : 0;
            const iMidis = APP_STATE.midisUbigeos.has(s.u) || APP_STATE.midisSapIds.has(s.c) ? 1 : 0;

            let cumpP2_count = 0;
            const m26Vals = fM26.map(ym => {
                const ok = (s.meses26 && s.meses26[ym]) ? s.meses26[ym].ok : 0;
                const val = ok >= 3 ? 1 : 0; if (val === 1) cumpP2_count++; return val;
            });
            const cumplePaso2 = cumpP2_count >= 2 ? 1 : 0;
            const cumplePaso1y2 = (paso1 === 1 && cumplePaso2 === 1) ? 1 : 0;

            if (totA === 0 && !hasAnyParam) return null;

            return [
                s.u, s.c, s.p, s.d, s.r, s.jul, s.ago, s.set, s.oct, s.nov, s.dic, totA, cumpA,
                bcfNmp, bcfUfc, bctNmp, bctUfc, ecNmp, ecUfc,
                r_bcfNmp, r_bcfUfc, r_bctNmp, r_bctUfc, r_ecNmp, r_ecUfc,
                totParam, tiene,
                ...pValsArr, ...rValsArr, totParamMetales, tieneMetales, detMetalesStr, ccppBueno, paso1,
                APP_STATE.mefUbigeos.has(s.u) ? 1 : 0, APP_STATE.fedUbigeos.has(s.u) ? 1 : 0, iSR, iMidis,
                ...m26Vals, cumplePaso2, cumplePaso1y2
            ];
        }).filter(Boolean);
        const fH3 = [
            'Ubigeo', 'Nombre CCPP', 'Provincia', 'Distrito', 'Red de Salud', 'Jul 2025', 'Ago 2025', 'Set 2025', 'Oct 2025', 'Nov 2025', 'Dic 2025', 'Total Alertas', 'Cumple Alerta',
            'Bacterias Coliformes Fecales (NMP)', 'Bacterias Coliformes Fecales (UFC)', 'Bacterias Coliformes Totales (NMP)', 'Bacterias Coliformes Totales (UFC)', 'E. Coli (NMP)', 'E. Coli (UFC)',
            'Bacterias Coliformes Fecales (NMP) Resultado', 'Bacterias Coliformes Fecales (UFC) Resultado', 'Bacterias Coliformes Totales (NMP) Resultado', 'Bacterias Coliformes Totales (UFC) Resultado', 'E. Coli (NMP) Resultado', 'E. Coli (UFC) Resultado',
            'Total parámetros con contaminación fecal', 'Tiene al menos una muestra con contaminación fecal',
            ...extraColsNames,
            ...extraColsNames.map(n => n + ' Resultado'),
            'Total parametros organolepticos y/o inorganicos (metales pesados) que exceden el LMP',
            'Tiene al menos un parametro organolepticos y/o inorganicos (metales pesados) que excede el LMP',
            'Detalle parametro que excede LMP',
            'CCPP Bueno', 'Cumple Paso 1', 'MEF', 'FED', 'SAP REGULARES', 'MIDIS',
            ...fM26.map(m => `P2_${NUM_MONTH[m.split('-')[1]]} ${m.split('-')[0]}`),
            'Cumple paso 2', 'Cumple paso 1 y 2'
        ];
        const sortedFD3 = sortTableData(fD, fH3);
        return { headers: fH3, data: sortedFD3 };
    }

    const m = {}; const h1 = dO.main[0] || []; const r1 = dO.main.slice(1); const h2 = dO.main2[0] || []; const r2 = dO.main2.slice(1);
    const iC = (r, h) => {
        const u = formatUbigeo(r[findHeaderIndex(h, 'Ubigeo')]);
        let ccpp = r[findHeaderIndex(h, 'Nombre CCPP')];

        if (ind === 'ind2') {
            ccpp = ccpp ? String(ccpp).trim().toUpperCase() : '';
            if (!u && !ccpp) return null;
            const id = u + '_' + normalizeHeader(ccpp);
            if (!m[id]) { m[id] = { u: u || '', c: ccpp || '', p: r[findHeaderIndex(h, 'Provincia')] || '', d: r[findHeaderIndex(h, 'Distrito')] || '', r: r[findHeaderIndex(h, 'Red de Salud')] || '', meses: {}, ca: { c: false, p: false, capFound: new Set(), redFound: new Set() }, i: 0, ri: {}, viv: 0 }; fM.forEach(ym => m[id].meses[ym] = { t: 0, p5: 0, cl: 0, tu: 0, cltu: 0 }); }
            return id;
        }

        if (!ccpp) ccpp = r[findHeaderIndex(h, 'Nombre SAP')];
        if (!u && !ccpp) return null;

        let ids = r[findHeaderIndex(h, 'Id. SAP')] || '';
        let ns = r[findHeaderIndex(h, 'Nombre SAP')] || '';
        let id = u + '_' + normalizeHeader(ccpp) + '_' + (ids ? String(ids).trim() : normalizeHeader(ns));
        if (!m[id]) { m[id] = { u: u || '', c: ccpp || '', ids: ids || '', ns: ns || '', p: r[findHeaderIndex(h, 'Provincia')] || '', d: r[findHeaderIndex(h, 'Distrito')] || '', r: r[findHeaderIndex(h, 'Red de Salud')] || '', meses: {}, ca: { c: false, p: false, capFound: new Set(), redFound: new Set() }, i: 0, ri: {}, viv: 0 }; fM.forEach(ym => m[id].meses[ym] = { t: 0, p5: 0, cl: 0, tu: 0, cltu: 0 }); }
        return id;
    };
    const matchId = (r, h) => {
        if (ind === 'ind1') return iC(r, h);
        const u = formatUbigeo(r[findHeaderIndex(h, 'Ubigeo')]);
        const rawCcpp = r[findHeaderIndex(h, 'Nombre CCPP')];
        const ccpp = normalizeHeader(rawCcpp ? String(rawCcpp).trim().toUpperCase() : '');
        const sap = normalizeHeader(r[findHeaderIndex(h, 'Nombre SAP')]);
        if (ccpp && m[u + '_' + ccpp]) return u + '_' + ccpp;
        if (sap && m[u + '_' + sap]) return u + '_' + sap;
        if (u) {
            const pIds = Object.keys(m).filter(k => k.startsWith(u + '_'));
            if (pIds.length === 1) return pIds[0];
            if (pIds.length > 1) { const match = pIds.find(k => { const kn = k.split('_')[1] || ''; return (ccpp && (k.includes(ccpp) || ccpp.includes(kn))) || (sap && (k.includes(sap) || sap.includes(kn))); }); if (match) return match; }
        }
        if (ccpp) {
            const pIdsN = Object.keys(m).filter(k => k.endsWith('_' + ccpp));
            if (pIdsN.length === 1) return pIdsN[0];
        }
        return iC(r, h);
    };
    const gS = (r, h) => { const cI = findHeaderIndex(h, 'Cloro'); const tI = findHeaderIndex(h, 'Turbiedad'); return { is5p: classifyMonitoringStatus(h, r) === 1, c: cI !== -1 ? parseFloat(r[cI]) : NaN, t: tI !== -1 ? parseFloat(r[tI]) : NaN }; };
    const evalCaract = (r, h, isCap) => {
        const s = isCap ? CARACT_CAPTACION_SINGLE : CARACT_PILETA_SINGLE;
        const o = isCap ? CARACT_CAPTACION_OR : CARACT_PILETA_OR;
        let mis = [];
        let fnd = [];
        for (let p of s) { if (isCellEmpty(r[findHeaderIndex(h, p)])) mis.push(p.replace(/_/g, '').trim()); else fnd.push(p.replace(/_/g, '').trim()); }
        for (let p of o) { if (isCellEmpty(r[findHeaderIndex(h, p[0])]) && isCellEmpty(r[findHeaderIndex(h, p[1])])) mis.push(p[0].replace(/_/g, '').trim()); else fnd.push(p[0].replace(/_/g, '').trim()); }
        return { isComplete: mis.length === 0, missing: mis, found: fnd };
    };
    const updateCaract = (r, h, id, ub) => {
        if (ub.includes('captación') || ub.includes('captacion')) {
            const ev = evalCaract(r, h, true);
            if (ev.isComplete) { m[id].ca.c = true; m[id].ca.cMis = []; m[id].ca.capFound = new Set(ev.found); }
            else if (!m[id].ca.c) { if (!m[id].ca.cMis || ev.missing.length < m[id].ca.cMis.length) { m[id].ca.cMis = ev.missing; m[id].ca.capFound = new Set(ev.found); } }
        }
        if (ub.includes('red') || ub.includes('pileta')) {
            const ev = evalCaract(r, h, false);
            if (ev.isComplete) { m[id].ca.p = true; m[id].ca.pMis = []; m[id].ca.redFound = new Set(ev.found); }
            else if (!m[id].ca.p) { if (!m[id].ca.pMis || ev.missing.length < m[id].ca.pMis.length) { m[id].ca.pMis = ev.missing; m[id].ca.redFound = new Set(ev.found); } }
        }
    };

    const iM1 = findHeaderIndex(h1, 'Mes'); const iU1 = findHeaderIndex(h1, 'Ubicación Lugar de Muestreo'); const iA1 = findHeaderIndex(h1, 'Año');
    r1.forEach(r => { const id = iC(r, h1); if (!id) return; const me = iM1 !== -1 ? normalizeHeader(r[iM1]) : ''; const a = iA1 !== -1 && r[iA1] ? String(r[iA1]).trim() : '2025'; const mm = MONTH_NUM[me.toUpperCase()]; if (mm) { const ym = `${a}-${mm}`; if (m[id].meses[ym]) { const s = gS(r, h1); m[id].meses[ym].t++; if (s.is5p) m[id].meses[ym].p5++; const clOk = !isNaN(s.c) && s.c >= 0.5 && s.c <= 5; const tuOk = !isNaN(s.t) && s.t <= 5; if (clOk) m[id].meses[ym].cl++; if (tuOk) m[id].meses[ym].tu++; if (clOk && tuOk) m[id].meses[ym].cltu++; } } if (ind === 'ind2' && iU1 !== -1) { const ub = (r[iU1] || '').toLowerCase(); if (a === '2026') updateCaract(r, h1, id, ub); } });

    const iM2 = findHeaderIndex(h2, 'Mes'); const iU2 = findHeaderIndex(h2, 'Ubicación Lugar de Muestreo'); const iA2 = findHeaderIndex(h2, 'Año');
    r2.forEach(r => {
        const id = matchId(r, h2); if (!id) return;
        const me = iM2 !== -1 ? normalizeHeader(r[iM2]) : '';
        const a = iA2 !== -1 && r[iA2] ? String(r[iA2]).trim() : '2026';
        const mm = MONTH_NUM[me.toUpperCase()];
        if (mm) {
            const ym = `${a}-${mm}`;
            if (m[id].meses[ym]) {
                const s = gS(r, h2); m[id].meses[ym].t++; if (s.is5p) m[id].meses[ym].p5++; const clOk = !isNaN(s.c) && s.c >= 0.5 && s.c <= 5; const tuOk = !isNaN(s.t) && s.t <= 5; if (clOk) m[id].meses[ym].cl++; if (tuOk) m[id].meses[ym].tu++; if (clOk && tuOk) m[id].meses[ym].cltu++;
            }
        }
        if (ind === 'ind2' && iU2 !== -1) { const ub = (r[iU2] || '').toLowerCase(); if (a === '2026') updateCaract(r, h2, id, ub); }
    });

    if (ind === 'ind2') {
        const sapToCcppId = {};
        const sapNameToCcppId = {};

        const id1Idx = findHeaderIndex(h1, 'Id. SAP'); const nom1Idx = findHeaderIndex(h1, 'Nombre SAP'); const ubi1Idx = findHeaderIndex(h1, 'Ubigeo');
        r1.forEach(r => {
            const id = iC(r, h1); if (!id) return;
            const ubi = ubi1Idx !== -1 ? formatUbigeo(r[ubi1Idx]) : '';
            if (id1Idx !== -1) { const sId = r[id1Idx]; if (sId) sapToCcppId[String(sId).trim()] = id; }
            if (nom1Idx !== -1) { const sNom = r[nom1Idx]; if (sNom && ubi) sapNameToCcppId[ubi + '_' + normalizeHeader(sNom)] = id; }
        });

        const id2Idx = findHeaderIndex(h2, 'Id. SAP'); const nom2Idx = findHeaderIndex(h2, 'Nombre SAP'); const ubi2Idx = findHeaderIndex(h2, 'Ubigeo');
        r2.forEach(r => {
            const id = matchId(r, h2); if (!id) return;
            const ubi = ubi2Idx !== -1 ? formatUbigeo(r[ubi2Idx]) : '';
            if (id2Idx !== -1) { const sId = r[id2Idx]; if (sId) sapToCcppId[String(sId).trim()] = id; }
            if (nom2Idx !== -1) { const sNom = r[nom2Idx]; if (sNom && ubi) sapNameToCcppId[ubi + '_' + normalizeHeader(sNom)] = id; }
        });

        const sS = new Set(); fM.forEach(mStr => { const [y, mm] = mStr.split('-'); sS.add(`${y}-${parseInt(mm) <= 6 ? 'S1' : 'S2'}`); });
        const sK = Array.from(sS);

        const sH = dO.sanitaria[0] || []; const sR = dO.sanitaria.slice(1); const iMS = findHeaderIndex(sH, 'Mes'); const iAS = findHeaderIndex(sH, 'Año'); const iFS = findHeaderIndex(sH, 'Fecha de inspección');
        const lIdS = findHeaderIndex(sH, 'Id. SAP');
        const lNomS = findHeaderIndex(sH, 'Nombre SAP');
        const lUbiS = findHeaderIndex(sH, 'Ubigeo');
        sR.forEach(r => {
            let id = null;
            const ubi = lUbiS !== -1 ? formatUbigeo(r[lUbiS]) : '';
            if (lIdS !== -1) { const sapId = String(r[lIdS]).trim(); id = sapToCcppId[sapId]; }
            if (!id && lNomS !== -1 && ubi) { const sapNom = normalizeHeader(r[lNomS]); id = sapNameToCcppId[ubi + '_' + sapNom]; }
            if (!id) id = matchId(r, sH);
            if (!id) return;

            let me = iMS !== -1 ? normalizeHeader(r[iMS]) : '';
            let a = iAS !== -1 ? String(r[iAS]).trim() : '';
            const mm = MONTH_NUM[me.toUpperCase()];
            if (mm) {
                if (!a) { if (me === 'diciembre') a = '2025'; else if (me === 'enero' || me === 'febrero') a = '2026'; else a = '2025'; }
                const skey = `${a}-${parseInt(mm) <= 6 ? 'S1' : 'S2'}`;
                if (m[id] && sK.includes(skey) && !isCellEmpty(r[iFS])) { m[id].i++; }
            }
        });
        const mNameMap = { '01': 'Enero', '02': 'Febrero', '03': 'Marzo', '04': 'Abril', '05': 'Mayo', '06': 'Junio', '07': 'Julio', '08': 'Agosto', '09': 'Setiembre', '10': 'Octubre', '11': 'Noviembre', '12': 'Diciembre' };
        const rH = dO.riesgos[0] || []; const rR = dO.riesgos.slice(1); const iA = findHeaderIndex(rH, 'Año');
        const lIdRi = findHeaderIndex(rH, 'Id. SAP');
        const lNomRi = findHeaderIndex(rH, 'Nombre SAP');
        const lUbiRi = findHeaderIndex(rH, 'Ubigeo');
        rR.forEach(r => {
            let id = null;
            const ubi = lUbiRi !== -1 ? formatUbigeo(r[lUbiRi]) : '';
            if (lIdRi !== -1) { const sapId = String(r[lIdRi]).trim(); id = sapToCcppId[sapId]; }
            if (!id && lNomRi !== -1 && ubi) { const sapNom = normalizeHeader(r[lNomRi]); id = sapNameToCcppId[ubi + '_' + sapNom]; }
            if (!id) id = matchId(r, rH);
            if (!id) return;
            const a = iA !== -1 && r[iA] ? String(r[iA]).trim() : '';
            fM.forEach(ym => {
                const [y, mm] = ym.split('-');
                const mC = mNameMap[mm];
                let curAno = a;
                if (!curAno) {
                    if (mC === 'Diciembre') curAno = '2025';
                    else if (['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].includes(mC)) curAno = '2026';
                    else curAno = '2025';
                }
                if (curAno === y) {
                    const iInf = findHeaderIndex(rH, `Informe ${mC}`);
                    const iCar = findHeaderIndex(rH, `Cargo ${mC}`);
                    const vInf = iInf !== -1 ? normalizeHeader(r[iInf]) : '';
                    const vCar = iCar !== -1 ? normalizeHeader(r[iCar]) : '';
                    if (vInf === 'aprobado' && vCar === 'aprobado') {
                        m[id].ri[ym] = true;
                    }
                }
            });
        });
    }

    if (ind === 'ind1') {
        const vH = dO.vivienda[0] || []; const vR = dO.vivienda.slice(1);
        const idxCumpleViv = findHeaderIndex(vH, 'Cumple');
        const idxEstadoViv = findHeaderIndex(vH, 'ESTADO SAP FED');
        const idxUbiV = findHeaderIndex(vH, 'Ubigeo');
        const idxCcppV = findHeaderIndex(vH, 'Nombre CCPP');
        const vMap = {};
        vR.forEach(r => {
            const ubi = formatUbigeo(r[idxUbiV]);
            const ccpp = normalizeHeader(r[idxCcppV]);
            if (ubi) {
                let cumpleOk = false;
                if (idxCumpleViv !== -1) {
                    const val = String(r[idxCumpleViv]).trim().toLowerCase();
                    if (val === '1') cumpleOk = true;
                }

                let estadoOk = false;
                if (idxEstadoViv !== -1) {
                    const valEst = String(r[idxEstadoViv]).trim().toLowerCase();
                    if (valEst === 'bueno') estadoOk = true;
                }

                if (cumpleOk && estadoOk) {
                    vMap[ubi] = vMap[ubi] || []; vMap[ubi].push(ccpp);
                }
            }
        });

        Object.values(m).forEach(s => {
            if (vMap[s.u]) {
                const sn = normalizeHeader(s.c);
                const match = vMap[s.u].find(c => c === sn || c.includes(sn) || sn.includes(c));
                if (match || vMap[s.u].length === 1) s.viv = 1;
            }
        });

        const eval5p = (x) => (x.p5 >= 3 ? 1 : 0);
        const evalMes = (x, e5) => (e5 === 1 && x.cltu >= 3 ? 1 : 0);
        const mHeaders = fM.flatMap(ym => { const mN = NUM_MONTH[ym.split('-')[1]]; return [`Tot Mon. ${mN}`, `Mon 5P ${mN}`, `EV_5p ${mN}`, `${mN} (Cl>=0.5)`, `${mN} (Turb<=5)`, `Ev_${mN}`]; });
        const fD = Object.values(m).map(s => {
            let sE = 0;
            let hasAnyData = false;
            const mData = fM.flatMap(ym => {
                const x = s.meses[ym];
                if (x && x.t > 0) hasAnyData = true;
                const e5 = eval5p(x); const ev = evalMes(x, e5); sE += ev;
                return [x.t, x.p5, e5, x.cl, x.tu, ev];
            });
            if (!hasAnyData) return null;
            let sg = sE >= 3 ? 'Verde' : (sE > 0 ? 'Naranja' : 'Rojo');
            const cumpSalud = sE >= 3 ? 1 : 0;
            const cumpViv = s.viv || 0;
            const cumpAmbos = (cumpSalud === 1 && cumpViv === 1) ? 1 : 0;
            const iM = (s.ids && APP_STATE.mefSapIds.has(s.ids)) || APP_STATE.mefUbigeos.has(s.u) ? 1 : 0; const iF = APP_STATE.fedUbigeos.has(s.u) ? 1 : 0; const iSR = (s.ids && APP_STATE.sapRegularesIds.has(s.ids)) || APP_STATE.sapRegularesUbigeos.has(s.u) ? 1 : 0;
            const iMidis = (s.ids && APP_STATE.midisSapIds.has(s.ids)) || APP_STATE.midisUbigeos.has(s.u) ? 1 : 0;
            return [s.u, s.c, s.ids, s.ns, s.p, s.d, s.r, ...mData, sg, iM, iF, iSR, iMidis, cumpSalud, cumpViv, cumpAmbos];
        }).filter(Boolean);
        const fH1 = ['Ubigeo', 'Nombre CCPP', 'Id. SAP', 'Nombre SAP', 'Provincia', 'Distrito', 'Red de Salud', ...mHeaders, 'Seguimiento', 'MEF', 'FED', 'SAP REGULARES', 'MIDIS', 'Cumple Salud', 'Cumple Vivienda', 'Cumple Ambos'];
        const sortedFD1 = sortTableData(fD, fH1);
        return { headers: fH1, data: sortedFD1 };
    } else {
        const allCapParams = [...CARACT_CAPTACION_SINGLE.map(p => p.replace(/_/g, '').trim()), ...CARACT_CAPTACION_OR.map(p => p[0].replace(/_/g, '').trim())];
        const allRedParams = [...CARACT_PILETA_SINGLE.map(p => p.replace(/_/g, '').trim()), ...CARACT_PILETA_OR.map(p => p[0].replace(/_/g, '').trim())];

        const capHeaders = allCapParams.map(p => `Cap: ${p}`);
        const redHeaders = allRedParams.map(p => `Red: ${p}`);

        const fD = Object.values(m).map(s => {
            const ei = s.i > 0 ? 1 : 0;
            const ec = (s.ca.c && s.ca.p) ? 1 : 0;
            let obsCaract = [];
            if (!s.ca.c) obsCaract.push('Falta Captación' + (s.ca.cMis ? ` (${s.ca.cMis.length > 5 ? s.ca.cMis.length + ' param.' : s.ca.cMis.join(', ')})` : ' (Sin Muestra)'));
            if (!s.ca.p) obsCaract.push('Falta Red' + (s.ca.pMis ? ` (${s.ca.pMis.length > 5 ? s.ca.pMis.length + ' param.' : s.ca.pMis.join(', ')})` : ' (Sin Muestra)'));
            const obsCaractStr = obsCaract.length > 0 ? obsCaract.join(' | ') : 'Completo';

            const capVals = allCapParams.map(p => s.ca.capFound.has(p) ? 1 : 0);
            const redVals = allRedParams.map(p => s.ca.redFound.has(p) ? 1 : 0);

            let p5m = 0;
            const m5pArr = [];
            fM.forEach(ym => {
                const v = s.meses[ym]?.p5 > 0 ? 1 : 0;
                m5pArr.push(v);
                if (v > 0) p5m++;
            });
            const em = p5m >= 4 ? 1 : 0;

            let rim = 0;
            const mRiArr = [];
            fM.forEach(ym => {
                const v = s.ri[ym] ? 1 : 0;
                mRiArr.push(v);
                if (v > 0) rim++;
            });
            const er = rim >= 3 ? 1 : 0;

            const inF = (ei === 1 && ec === 1 && em === 1 && er === 1) ? 1 : 0;
            const iM = APP_STATE.mefUbigeos.has(s.u) ? 1 : 0; const iF = APP_STATE.fedUbigeos.has(s.u) ? 1 : 0; const iSR = APP_STATE.sapRegularesUbigeos.has(s.u) ? 1 : 0;
            const iMidis = APP_STATE.midisUbigeos.has(s.u) ? 1 : 0;

            return [s.u, s.c, s.p, s.d, s.r, ei, ...capVals, ...redVals, obsCaractStr, ec, ...m5pArr, em, ...mRiArr, er, inF, iM, iF, iSR, iMidis];
        });

        const m5pHeaders = fM.map(ym => `M5P ${NUM_MONTH[ym.split('-')[1]]}`);
        const mRiHeaders = fM.map(ym => `Riesgo ${NUM_MONTH[ym.split('-')[1]]}`);

        const fH2 = [
            'Ubigeo', 'Nombre CCPP', 'Provincia', 'Distrito', 'Red de Salud',
            'Cumple Inspección', ...capHeaders, ...redHeaders, 'Observacion Caract.', 'Cumple Caracterizacion',
            ...m5pHeaders, 'Cumple Monit. 5P',
            ...mRiHeaders, 'Cumple Rep. Riesgo',
            'Cumplimiento Ind. 2', 'MEF', 'FED', 'SAP REGULARES', 'MIDIS'
        ];
        const sortedD = sortTableData(fD, fH2);
        return { headers: fH2, data: sortedD };
    }
}

function renderMainTable(result, prefix) {
    const cont = getEl(`${prefix}-main-table-container`); const fB = getEl(`${prefix}-active-filters`); const dH = result.headers.filter(h => h !== 'Detalles');
    let fD = result.data;
    if (Object.keys(APP_STATE.currentTableFilters).length > 0) { fD = result.data.filter(r => { return Object.entries(APP_STATE.currentTableFilters).every(([i, v]) => { let cV = String(r[i] ?? '').trim(); let hName = result.headers[i]; if (result.type === 'status_json' && parseInt(i) >= CORE_HEADERS.length && hName !== 'Observación' && hName !== 'Ver Detalle' && hName !== 'Cloro LMP') { try { const d = JSON.parse(cV); return String(d.status) === String(v); } catch (e) { return false; } } if (result.type === 'caract_points' && parseInt(i) >= CORE_HEADERS.length && hName !== 'Cloro LMP') { try { const pts = JSON.parse(cV); const keys = Object.keys(pts); if (keys.length === 0) return String(v) === '0'; let hasInc = false; keys.forEach(k => { if (pts[k].status === 2) hasInc = true; }); return (hasInc ? '2' : '1') === String(v); } catch (e) { return false; } } return cV === String(v); }); }); }

    let headerHtml = '';
    if (Object.keys(APP_STATE.currentTableFilters).length > 0) {
        headerHtml = `<div class="bg-indigo-50/80 px-4 py-2.5 border-b border-indigo-100 flex gap-3 items-center overflow-x-auto custom-scroll w-full"><span class="text-[10px] font-black text-indigo-800 uppercase tracking-widest flex-shrink-0"><i data-lucide="filter" class="w-3 h-3 inline"></i> Activos:</span>`;
        Object.entries(APP_STATE.currentTableFilters).forEach(([i, val]) => {
            let dV = val;
            if (result.headers[i] === 'Cumple') dV = val === '1' ? 'CUMPLE' : (val === '0' ? 'NO CUMPLE' : 'SIN DATOS');
            else if (result.headers[i] === 'Consume Agua Clorada') dV = val === '1' ? 'SÍ' : 'NO';
            else if (result.headers[i].includes('Muestra')) dV = val === '1' ? 'CAPTACIÓN' : (val === '2' ? 'PILETA' : (val === '3' ? 'AMBOS' : '-'));
            else if (result.type === 'status_json' && parseInt(i) >= CORE_HEADERS.length && result.headers[i] !== 'Observación' && result.headers[i] !== 'Ver Detalle') { dV = val === '1' ? 'COMPLETO' : (val === '2' ? 'INCOMPLETO' : 'SIN MONITOREO'); }
            else if (result.type === 'caract_points' && parseInt(i) >= CORE_HEADERS.length && result.headers[i] !== 'Cloro LMP') { dV = val === '1' ? 'COMPLETO' : (val === '2' ? 'INCOMPLETO' : 'SIN MONITOREO'); }
            headerHtml += `<span class="bg-indigo-600 text-white text-[10px] px-2.5 py-1 rounded-md flex items-center gap-1 font-bold cursor-pointer hover:bg-red-500 hover:shadow transition-all flex-shrink-0" onclick="window.removeTableFilter(${i})" title="Quitar filtro">${result.headers[i]}: ${dV} <i data-lucide="x" class="w-3 h-3"></i></span>`;
        });
        headerHtml += `<button onclick="window.clearAllTableFilters()" class="text-[10px] text-red-600 hover:text-red-800 font-bold ml-2 underline whitespace-nowrap flex-shrink-0">Borrar todo</button></div>`; fB.innerHTML = headerHtml; fB.classList.remove('hidden');
    } else { fB.innerHTML = ''; fB.classList.add('hidden'); }

    let html = `<table class="min-w-full text-left border-collapse whitespace-nowrap"><thead class="bg-slate-100 sticky top-0 z-20 shadow-sm border-b border-slate-300"><tr>`;
    const fmtV = (h, v, isJ, isC) => {
        if (h === 'Cumple' || h === 'Consume Agua Clorada') return v == 1 || v === '1' ? 'SÍ' : (v == 0 || v === '0' ? 'NO' : '-');
        if (h.includes('Muestra') && !isNaN(parseInt(v))) return v == 1 ? 'CAPTACIÓN' : (v == 2 ? 'PILETA' : (v == 3 ? 'AMBOS' : '-'));
        if (h === 'Excede LMP') return v == 1 ? 'SÍ' : '-';
        if (['Inspección', 'Bacteriológico', 'Parasitológico', 'Físico Químicos', 'Inorgánicos', 'Monitoreo 5P', 'Riesgos', 'Vigilancia Completa'].includes(h)) return v == 1 || v === '1' ? 'CUMPLE' : 'NO CUMPLE';
        if (isJ && h !== 'Observación' && h !== 'Ver Detalle' && h !== 'Nivel de Riesgo' && !h.includes('Ev_')) return v == 1 ? 'COMPLETO' : (v == 2 ? 'INCOMPLETO' : 'SIN MONITOREO');
        if (isC) return v == 1 ? 'COMPLETO' : (v == 2 ? 'INCOMPLETO' : 'SIN MONITOREO');
        return String(v).substring(0, 30);
    };

    dH.forEach((h, idx) => {
        let stC = ""; let lS = ""; if (h === 'Ubigeo') { stC = "sticky z-30 bg-slate-200 border-r border-slate-300 sticky-col-shadow"; lS = "left: 0px; min-width: 110px; max-width: 110px;"; } else if (h === 'Nombre CCPP') { stC = "sticky z-30 bg-slate-200 border-r border-slate-300 sticky-col-shadow"; lS = "left: 110px; min-width: 150px; max-width: 150px;"; }
        if (h.includes('(Total)')) { stC += " bg-indigo-100/60 text-indigo-800"; }

        let dCol = result.data;
        if (Object.keys(APP_STATE.currentTableFilters).length > 0) {
            dCol = result.data.filter(r => {
                return Object.entries(APP_STATE.currentTableFilters).every(([fI, fV]) => {
                    if (parseInt(fI) === idx) return true;
                    let cV = String(r[fI] ?? '').trim();
                    if (result.type === 'status_json' && parseInt(fI) >= CORE_HEADERS.length && result.headers[fI] !== 'Observación' && result.headers[fI] !== 'Ver Detalle') { try { const d = JSON.parse(cV); return String(d.status) === String(fV); } catch (e) { return false; } }
                    if (result.type === 'caract_points' && parseInt(fI) >= CORE_HEADERS.length && result.headers[fI] !== 'Cloro LMP') {
                        try {
                            const pts = JSON.parse(cV); const keys = Object.keys(pts);
                            if (keys.length === 0) return String(fV) === '0';
                            let hasInc = false; keys.forEach(k => { if (pts[k].status === 2) hasInc = true; });
                            return (hasInc ? '2' : '1') === String(fV);
                        } catch (e) { return false; }
                    }
                    return cV === String(fV);
                });
            });
        }

        const uVals = [...new Set(dCol.map(r => {
            let v = String(r[idx] ?? '').trim();
            if (result.type === 'status_json' && idx >= CORE_HEADERS.length && h !== 'Observación' && h !== 'Ver Detalle') { try { const d = JSON.parse(v); return String(d.status); } catch (e) { return '0'; } }
            if (result.type === 'caract_points' && idx >= CORE_HEADERS.length && h !== 'Cloro LMP') {
                try {
                    const pts = JSON.parse(v); const keys = Object.keys(pts);
                    if (keys.length === 0) return '0';
                    let hasInc = false; keys.forEach(k => { if (pts[k].status === 2) hasInc = true; });
                    return hasInc ? '2' : '1';
                } catch (e) { return '0'; }
            }
            return v;
        }))].filter(Boolean).sort();

        const cF = APP_STATE.currentTableFilters[idx] || ""; const isJ = result.type === 'status_json' && idx >= CORE_HEADERS.length && h !== 'Observación' && h !== 'Ver Detalle' && h !== 'Cloro LMP'; const isC = result.type === 'caract_points' && idx >= CORE_HEADERS.length && h !== 'Cloro LMP';
        let sH = `<div class="relative mt-2 filter-wrapper" onclick="event.stopPropagation()"><button onclick="window.toggleFilterDropdown(event, '${prefix}', ${idx})" class="w-full max-w-[120px] text-[9px] font-bold border border-slate-300 rounded shadow-sm outline-none bg-white cursor-pointer py-1 px-2 flex justify-between items-center ${cF ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : ''}"><span class="truncate">${cF ? safeEscape(fmtV(h, cF, isJ, isC)) : 'Todos'}</span><i data-lucide="filter" class="w-3 h-3 ${cF ? 'text-indigo-500' : 'text-slate-400'}"></i></button><div id="dropdown-${prefix}-${idx}" class="filter-dropdown-menu hidden absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-xl z-50 flex flex-col font-normal text-left"><div class="p-2 border-b border-slate-100 bg-slate-50 rounded-t-lg"><input type="text" placeholder="Buscar..." class="w-full text-[10px] p-1.5 border border-slate-300 rounded outline-none focus:border-indigo-500" onkeyup="window.filterDropdownOptions(event, '${prefix}', ${idx})"></div><div class="max-h-48 overflow-y-auto custom-scroll py-1"><div class="filter-option px-3 py-2 text-[10px] cursor-pointer hover:bg-indigo-50 truncate transition-colors ${!cF ? 'bg-indigo-100 font-bold text-indigo-700' : 'text-slate-600'}" onclick="window.applyTableFilter('${prefix}', ${idx}, '')">[ Todos ]</div>${uVals.map(v => { let dV = fmtV(h, v, isJ, isC); return `<div class="filter-option px-3 py-2 text-[10px] cursor-pointer hover:bg-indigo-50 truncate transition-colors ${cF === v ? 'bg-indigo-100 font-bold text-indigo-700' : 'text-slate-600'}" onclick="window.applyTableFilter('${prefix}', ${idx}, '${safeEscape(v)}')" title="${safeEscape(dV)}">${safeEscape(dV)}</div>`; }).join('')}${uVals.length === 0 ? `<div class="px-3 py-4 text-[10px] text-slate-400 italic text-center">Sin opciones</div>` : ''}</div></div></div>`;
        html += `<th class="px-4 py-3 text-[10px] sm:text-xs font-black text-slate-600 uppercase tracking-widest align-top ${stC}" style="${lS}"><div class="flex flex-col h-full justify-between"><span>${h}</span>${sH}</div></th>`;
    });
    html += `</tr></thead><tbody class="divide-y divide-slate-100">`;

    fD.forEach((r, i) => {
        const rB = i % 2 === 0 ? "bg-white" : "bg-slate-50"; html += `<tr class="${rB} hover:bg-indigo-50/60 transition-colors group">`;
        r.filter((_, x) => result.headers[x] !== 'Detalles').forEach((c, idxO) => {
            const h = dH[idxO]; let stC = ""; let lS = "";
            if (h === 'Ubigeo') { stC = `sticky z-10 border-r border-slate-200 ${rB} group-hover:bg-indigo-50/60 sticky-col-shadow truncate`; lS = "left: 0px; min-width: 110px; max-width: 110px;"; }
            else if (h === 'Nombre CCPP') { stC = `sticky z-10 border-r border-slate-200 ${rB} group-hover:bg-indigo-50/60 sticky-col-shadow truncate`; lS = "left: 110px; min-width: 150px; max-width: 150px;"; }

            let tdA = `class="px-4 py-2.5 text-xs ${stC} transition-colors" style="${lS}"`; if (h === 'Nombre CCPP' || h === 'Nombre SAP' || (!stC && typeof c === 'string' && c.length > 10 && !c.startsWith('{') && !c.startsWith('['))) tdA += ` title="${safeEscape(c)}"`; let ctt = c; const v = parseInt(c);
            if (h.includes('(Total)')) { tdA = tdA.replace('class="', 'class="bg-indigo-50/60 '); }

            if (h === 'Observación') {
                const id = r[0]; const nm = r[1]; const ubi = r[2]; const cp = r[3];
                if (c && c.trim() !== '') { ctt = `<div class="w-full min-w-[150px] max-w-[250px] whitespace-normal break-words text-xs text-slate-700 bg-amber-50/50 p-2 rounded-lg border border-amber-100 hover:bg-amber-100 transition-colors flex justify-between items-start gap-2 group"><span class="flex-1 cursor-pointer" onclick="event.stopPropagation(); window.openObsModal('${safeEscape(id)}', '${safeEscape(nm)}', '${safeEscape(ubi)}', '${safeEscape(cp)}', '${safeEscape(c)}')">${safeEscape(c)}</span><div class="flex gap-2 flex-shrink-0 mt-0.5 opacity-100 transition-opacity"><button onclick="event.stopPropagation(); window.openObsModal('${safeEscape(id)}', '${safeEscape(nm)}', '${safeEscape(ubi)}', '${safeEscape(cp)}', '${safeEscape(c)}')" title="Editar"><i data-lucide="edit-3" class="w-3.5 h-3.5 text-amber-600 hover:text-amber-800 transition-colors"></i></button><button onclick="event.stopPropagation(); window.openDeleteObsModal('${safeEscape(id)}', '${safeEscape(nm)}', '${safeEscape(ubi)}', '${safeEscape(cp)}')" title="Eliminar"><i data-lucide="trash-2" class="w-3.5 h-3.5 text-red-500 hover:text-red-700 transition-colors"></i></button></div></div>`; }
                else { ctt = `<button onclick="event.stopPropagation(); window.openObsModal('${safeEscape(id)}', '${safeEscape(nm)}', '${safeEscape(ubi)}', '${safeEscape(cp)}', '')" class="text-[10px] font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors border border-indigo-100 flex items-center justify-center mx-auto whitespace-nowrap"><i data-lucide="plus" class="w-3 h-3 mr-1"></i> Añadir Obs.</button>`; } tdA = `class="px-4 py-2 align-top ${stC}" style="${lS}"`;
            } else if (h === 'Excede LMP') {
                if (v === 1) { const dt = r[result.headers.indexOf('Detalles')]; ctt = `<button onclick="event.stopPropagation(); window.openLMPModal(decodeURIComponent('${encodeURIComponent(dt)}'))" class="bg-red-50 text-red-700 px-3 py-1 rounded-lg text-[10px] hover:bg-red-100 font-bold tracking-widest uppercase shadow-sm flex items-center justify-center mx-auto gap-1 border border-red-200 transition-colors"><i data-lucide="eye" class="w-3 h-3"></i> VER</button>`; tdA = `class="px-4 py-2.5 text-xs ${stC} text-center" style="${lS}"`; } else { ctt = "<span class='text-slate-300'>-</span>"; tdA = `class="px-4 py-2.5 text-xs ${stC} text-center" style="${lS}"`; }
            } else if (h === 'Ver Detalle') {
                const metaJson = encodeURIComponent(JSON.stringify(r.slice(0, 9))); const histJson = encodeURIComponent(c); ctt = `<button onclick="event.stopPropagation(); window.openMonitorDetailModal(decodeURIComponent('${metaJson}'), decodeURIComponent('${histJson}'))" class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-[10px] hover:bg-indigo-100 font-bold tracking-widest uppercase shadow-sm flex items-center justify-center mx-auto gap-1 border border-indigo-200 transition-colors"><i data-lucide="list" class="w-3 h-3"></i> VER</button>`; tdA = `class="px-4 py-2.5 text-xs ${stC} text-center" style="${lS}"`;
            } else if (h === 'Cloro LMP') {
                if (v === 0 || c === '0') ctt = "<span class='inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold border border-emerald-200 text-[10px] tracking-wide'><div class='w-1.5 h-1.5 rounded-full bg-emerald-500'></div>CUMPLE (0)</span>";
                else if (v === 1 || c === '1') ctt = "<span class='inline-flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-1 rounded-full font-bold border border-red-200 text-[10px] tracking-wide'><div class='w-1.5 h-1.5 rounded-full bg-red-500'></div>NO CUMPLE (1)</span>";
                else ctt = "<span class='text-slate-300'>-</span>";
                tdA = `class="px-4 py-2.5 text-xs ${stC} text-center" style="${lS}"`;
            } else if (['Inspección', 'Bacteriológico', 'Parasitológico', 'Físico Químicos', 'Inorgánicos', 'Monitoreo 5P', 'Riesgos', 'Vigilancia Completa'].includes(h)) {
                if (v === 1) ctt = "<span class='inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold border border-emerald-200 text-[10px] tracking-wide'><div class='w-1.5 h-1.5 rounded-full bg-emerald-500'></div>CUMPLE</span>";
                else if (v === 0) ctt = "<span class='inline-flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-1 rounded-full font-bold border border-red-200 text-[10px] tracking-wide'><div class='w-1.5 h-1.5 rounded-full bg-red-500'></div>NO CUMPLE</span>";
                else ctt = "<span class='text-slate-300'>-</span>"; tdA = tdA.replace('class="', 'class="text-center ');
            } else if (h.includes('Ev_') || h === 'Nivel de Riesgo') {
                if (c === 'Cumple') ctt = "<span class='inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold border border-emerald-200 text-[10px] tracking-wide'><div class='w-1.5 h-1.5 rounded-full bg-emerald-500'></div>CUMPLE</span>";
                else if (c === 'No Cumple') ctt = "<span class='inline-flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-1 rounded-full font-bold border border-red-200 text-[10px] tracking-wide'><div class='w-1.5 h-1.5 rounded-full bg-red-500'></div>NO CUMPLE</span>";
                else if (c === 'Alto') ctt = "<span class='inline-flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-1 rounded-full font-bold border border-red-200 text-[10px] tracking-wide'><i data-lucide='alert-triangle' class='w-3 h-3 text-red-500'></i>ALTO</span>";
                else if (c === 'Medio') ctt = "<span class='inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold border border-amber-200 text-[10px] tracking-wide'><i data-lucide='alert-circle' class='w-3 h-3 text-amber-500'></i>MEDIO</span>";
                else if (c === 'Bajo') ctt = "<span class='inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold border border-emerald-200 text-[10px] tracking-wide'><i data-lucide='check' class='w-3 h-3 text-emerald-500'></i>BAJO</span>";
                else if (c === '-') ctt = "<span class='text-slate-300 font-black text-base'>-</span>";
                else ctt = "<span class='text-slate-400 font-bold text-[10px] tracking-widest'>SIN MONITOREO</span>";
                tdA = tdA.replace('class="', 'class="text-center ');
            } else if (h === 'Cumple') {
                if (v === 1) ctt = "<span class='inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold border border-emerald-200 text-[10px] tracking-wide'><div class='w-1.5 h-1.5 rounded-full bg-emerald-500'></div>CUMPLE</span>";
                else if (v === 0) ctt = "<span class='inline-flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-1 rounded-full font-bold border border-red-200 text-[10px] tracking-wide'><div class='w-1.5 h-1.5 rounded-full bg-red-500'></div>NO CUMPLE</span>";
                else ctt = "<span class='text-slate-300'>-</span>"; tdA = tdA.replace('class="', 'class="text-center ');
            } else if (h === 'Consume Agua Clorada') {
                const tot = parseInt(r[result.headers.indexOf('Total Monitoreo')]) || 0;
                if (tot === 0) ctt = "<span class='text-slate-300'>-</span>";
                else if (v === 1) ctt = "<span class='inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold border border-blue-200 text-[10px] tracking-wide'><i data-lucide='droplets' class='w-3 h-3 text-blue-500'></i> SÍ</span>";
                else ctt = "<span class='inline-flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-1 rounded-full font-bold border border-red-200 text-[10px] tracking-wide'><i data-lucide='x-circle' class='w-3 h-3 text-red-500'></i> NO</span>"; tdA = tdA.replace('class="', 'class="text-center ');
            } else if (result.type === 'caract_points' && idxO >= CORE_HEADERS.length && h !== 'Cloro LMP') {
                let pts = {};
                try { pts = JSON.parse(c); } catch (e) { }
                const keys = Object.keys(pts);
                const count = keys.length;
                let isVerDetalle = h.startsWith('Ver Detalle');

                if (count === 0) {
                    if (isVerDetalle) {
                        ctt = `<span class="text-slate-300 text-[10px] italic font-medium">Sin detalle</span>`;
                    } else {
                        ctt = `<div class="mx-auto w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shadow-inner" title="Sin Monitoreo"><i data-lucide="minus" class="w-4 h-4"></i></div>`;
                    }
                } else {
                    let hasIncomplete = false;
                    let htmlStr = '';
                    keys.forEach(pt => {
                        const d = pts[pt];
                        if (d.status === 2) hasIncomplete = true;
                        const stLabel = d.status === 1 ? '<span class="text-emerald-600 font-bold">[Completo]</span>' : '<span class="text-amber-600 font-bold">[Incompleto]</span>';
                        const paramsHtml = d.params.map(p => `<span class="bg-indigo-50 border border-indigo-100 text-indigo-700 px-2 py-1 rounded text-[10px] font-bold">${p}</span>`).join('');

                        htmlStr += `<div class="mb-4 border-b border-slate-100 pb-3 last:border-0">`;
                        htmlStr += `<h4 class="font-black text-slate-800 text-xs mb-2">${pt} ${stLabel}</h4>`;
                        if (d.fecha || d.cloro) {
                            htmlStr += `<div class="text-[10px] text-slate-600 mb-2 bg-slate-50 p-1.5 rounded border border-slate-100 inline-block"><strong>Fecha:</strong> ${safeEscape(d.fecha || '-')} <span class="mx-1 text-slate-300">|</span> <strong>Cloro:</strong> ${safeEscape(String(d.cloro) || '-')}</div>`;
                        }
                        htmlStr += `<div class="flex flex-wrap gap-1">${paramsHtml}</div></div>`;
                    });

                    if (isVerDetalle) {
                        ctt = `<button onclick="event.stopPropagation(); window.openCaractDetailModal(decodeURIComponent('${encodeURIComponent(htmlStr)}'))" class="bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white px-3 py-1.5 rounded-lg shadow-sm text-[10px] font-black tracking-widest transition-colors inline-flex items-center"><i data-lucide="eye" class="w-3.5 h-3.5 mr-1.5"></i>VER DETALLE</button>`;
                    } else {
                        const colorClass = hasIncomplete ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200';
                        const icon = hasIncomplete ? 'info' : 'check';
                        ctt = `<div class="mx-auto px-3 py-1 rounded-full ${colorClass} inline-flex items-center justify-center cursor-pointer shadow-inner transition-colors border ${hasIncomplete ? 'border-amber-300' : 'border-emerald-300'}" onclick="event.stopPropagation(); window.openCaractDetailModal(decodeURIComponent('${encodeURIComponent(htmlStr)}'))" title="Clic para ver detalles"><span class="font-black text-[13px] mr-1.5">${count}</span><i data-lucide="${icon}" class="w-3.5 h-3.5"></i></div>`;
                    }
                }
                tdA = `class="px-4 py-2.5 text-xs ${stC} text-center" style="${lS}"`;
            } else if (result.type === 'cloro' && idxO >= CORE_HEADERS.length && h !== 'Consume Agua Clorada') {
                const from = APP_STATE.globalDateFrom; const to = APP_STATE.globalDateTo; const aF = from <= to ? from : to; const aT = from <= to ? to : from; const reqM = Math.ceil(APP_STATE.availableMonitorMonths.filter(m => m >= aF && m <= aT).length * 5 / 6);
                const vn = parseFloat(c);
                if (!isNaN(vn)) { ctt = `<span class="font-medium text-slate-700">${vn}</span>`; if (h.includes('<') && vn > 0) ctt = `<span class="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">${vn}</span>`; if (h.includes('>') && vn > 0) ctt = `<span class="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">${vn}</span>`; if (h.includes('Rango') && vn > 0) ctt = `<span class="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">${vn}</span>`; if (h.includes('Meses') && vn >= reqM) ctt = `<span class="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">${vn}</span>`; if (h.includes('Meses') && vn < reqM) ctt = `<span class="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">${vn}</span>`; tdA = tdA.replace('class="', 'class="text-center '); } else ctt = c;
            } else if (result.type === 'status_json' && idxO >= CORE_HEADERS.length && h !== 'Observación' && h !== 'Ver Detalle') {
                let d = { status: 0, params: [] }; try { d = JSON.parse(c); } catch (e) { }
                if (d.status === 1) ctt = `<div class="mx-auto w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner" title="Completo"><i data-lucide="check" class="w-4 h-4"></i></div>`;
                else if (d.status === 2) { const ps = safeEscape(d.params.join(', ')); const desc = ps.includes('Falta:') ? 'Parámetros que faltan registrar:' : 'Detalles del registro:'; ctt = `<div class="mx-auto w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 cursor-pointer shadow-inner hover:bg-amber-200 transition-colors" onclick="event.stopPropagation(); window.openParamsModal('${ps}', '${desc}')" title="Incompleto - Clic para ver"><i data-lucide="info" class="w-4 h-4"></i></div>`; }
                else ctt = `<div class="mx-auto w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 shadow-inner" title="No Cumple / Sin Dato"><i data-lucide="x" class="w-4 h-4"></i></div>`; tdA = tdA.replace('class="', 'class="text-center ');
            } else if (result.type === 'boolean' && (h.includes('Visita') || MONITOR_MONTHS.includes(h))) {
                if (v >= 1) ctt = `<span class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold border border-emerald-100 text-[10px]"><i data-lucide="check-circle-2" class="w-3 h-3"></i> ${v}</span>`; else ctt = `<span class="text-slate-300">-</span>`; tdA = tdA.replace('class="', 'class="text-center ');
            } else if (result.type === 'analysis' && h.includes('Muestra')) {
                if (v === 1) ctt = `<span class="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg font-bold text-[10px] border border-blue-200">Captación</span>`; else if (v === 2) ctt = `<span class="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg font-bold text-[10px] border border-amber-200">Pileta</span>`; else if (v === 3) ctt = `<span class="bg-purple-50 text-purple-700 px-2.5 py-1 rounded-lg font-bold text-[10px] border border-purple-200">Pileta y Captación</span>`; else ctt = `<span class="text-slate-300">-</span>`; tdA = tdA.replace('class="', 'class="text-center ');
            } else if (!stC) { tdA = tdA.replace('class="', 'class="text-slate-600 max-w-[150px] truncate '); }
            html += `<td ${tdA}>${ctt}</td>`;
        }); html += `</tr>`;
    });

    html += `</tbody><tfoot class="sticky bottom-0 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"><tr class="bg-indigo-100 border-t-2 border-indigo-300 font-black text-indigo-900">`;
    dH.forEach((h, idx) => {
        let stC = ""; let lS = ""; if (h === 'Ubigeo') { stC = `sticky z-40 border-r border-indigo-300 bg-indigo-100 sticky-col-shadow truncate`; lS = "left: 0px; min-width: 110px; max-width: 110px;"; } else if (h === 'Nombre CCPP') { stC = `sticky z-40 border-r border-indigo-300 bg-indigo-100 sticky-col-shadow truncate`; lS = "left: 110px; min-width: 150px; max-width: 150px;"; }
        if (h.includes('(Total)')) { stC += " bg-indigo-200/60"; }
        let ctt = "";
        if (idx === 0) ctt = "TOTALES:"; else if (idx === 1) ctt = `<span class="text-indigo-600 text-sm">${fD.length}</span> reg.`; else if (h === 'Observación' || h === 'Ver Detalle') ctt = "-";
        else if (result.type === 'nivel_riesgo') {
            if (h === 'Nivel de Riesgo') {
                let a = 0, m = 0, b = 0, s = 0; fD.forEach(r => { if (r[idx] === 'Alto') a++; else if (r[idx] === 'Medio') m++; else if (r[idx] === 'Bajo') b++; else s++; });
                ctt = `<div class="flex justify-center gap-2 text-[10px]"><span class="text-red-500 flex items-center" title="Alto"><i data-lucide="alert-triangle" class="w-3 h-3 mr-0.5"></i>${a}</span> <span class="text-amber-600 flex items-center" title="Medio"><i data-lucide="alert-circle" class="w-3 h-3 mr-0.5"></i>${m}</span> <span class="text-emerald-600 flex items-center" title="Bajo"><i data-lucide="check" class="w-3 h-3 mr-0.5"></i>${b}</span></div>`;
            } else if (h.includes('Ev_')) {
                let c = 0, nc = 0; fD.forEach(r => { if (r[idx] === 'Cumple') c++; else if (r[idx] === 'No Cumple') nc++; });
                ctt = `<div class="flex justify-center gap-2 text-[10px]"><span class="text-emerald-600 flex items-center" title="Cumple"><i data-lucide="check" class="w-3 h-3 mr-0.5"></i>${c}</span> <span class="text-red-500 flex items-center" title="No Cumple"><i data-lucide="x" class="w-3 h-3 mr-0.5"></i>${nc}</span></div>`;
            } else if (h === 'Total_Moni') { let sum = 0; fD.forEach(r => { sum += parseInt(r[idx]) || 0; }); ctt = `<span class="text-slate-600">${sum}</span>`; }
            else ctt = "-";
        } else if (result.type === 'res_riesgo' && idx >= CORE_HEADERS.length) {
            if (h === 'Detalle parametro que excede LMP') {
                ctt = "-";
            } else {
                let sum = 0;
                fD.forEach(r => { let val = parseFloat(r[idx]); if (!isNaN(val)) sum += val; });
                sum = Math.round(sum * 1000) / 1000;
                const highlightCols = [
                    'Tiene al menos una muestra con contaminación fecal',
                    'Tiene al menos un parametro organolepticos que excede el LMP',
                    'Tiene al menos un parametro inorganicos (metales pesados) que excede el LMP'
                ];
                if (highlightCols.includes(h)) {
                    ctt = `<span class="inline-flex items-center justify-center bg-red-500 text-white px-2.5 py-1 rounded shadow-sm text-xs">${sum}</span>`;
                } else {
                    ctt = `<span class="text-indigo-700 font-bold">${sum}</span>`;
                }
            }
        } else if (idx >= CORE_HEADERS.length) {
            if (result.type === 'status_json') { let c = 0, inc = 0, s = 0; fD.forEach(r => { try { const d = JSON.parse(r[idx]); if (d.status === 1) c++; else if (d.status === 2) inc++; else s++; } catch (e) { } }); ctt = `<div class="flex justify-center gap-2 text-[10px]"><span class="text-emerald-600 flex items-center" title="Completos"><i data-lucide="check" class="w-3 h-3 mr-0.5"></i>${c}</span> <span class="text-amber-600 flex items-center" title="Incompletos"><i data-lucide="info" class="w-3 h-3 mr-0.5"></i>${inc}</span> <span class="text-red-500 flex items-center" title="Sin Monitoreo"><i data-lucide="x" class="w-3 h-3 mr-0.5"></i>${s}</span></div>`; }
            else if (result.type === 'caract_points') {
                let c = 0, inc = 0, s = 0;
                fD.forEach(r => {
                    try {
                        const pts = JSON.parse(r[idx]);
                        const keys = Object.keys(pts);
                        if (keys.length === 0) s++;
                        else {
                            keys.forEach(k => {
                                if (pts[k].status === 1) c++;
                                else if (pts[k].status === 2) inc++;
                            });
                        }
                    } catch (e) { }
                });
                ctt = `<div class="flex justify-center gap-2 text-[10px]"><span class="text-emerald-600 flex items-center" title="Completos"><i data-lucide="check" class="w-3 h-3 mr-0.5"></i>${c}</span> <span class="text-amber-600 flex items-center" title="Incompletos"><i data-lucide="info" class="w-3 h-3 mr-0.5"></i>${inc}</span> <span class="text-slate-400 flex items-center" title="Sin Monitoreo"><i data-lucide="minus" class="w-3 h-3 mr-0.5"></i>${s}</span></div>`;
            }
            else if (result.type === 'boolean') { let sum = 0; fD.forEach(r => { let val = parseInt(r[idx]) || 0; if (val >= 1) sum++; }); ctt = `<span class="text-emerald-600 flex items-center justify-center"><i data-lucide="check-circle-2" class="w-3 h-3 mr-1"></i>${sum}</span>`; }
            else if (result.type === 'vigilancia') { let sum = 0; fD.forEach(r => { let val = parseInt(r[idx]) || 0; if (val === 1) sum++; }); ctt = `<span class="text-emerald-600 flex items-center justify-center"><i data-lucide="check-circle-2" class="w-3 h-3 mr-1"></i>${sum}</span>`; }
            else if (result.type === 'cloro') { let sum = 0; fD.forEach(r => { let val = parseInt(r[idx]) || 0; sum += val; }); if (h === 'Consume Agua Clorada') ctt = `<span class="text-blue-600 flex items-center justify-center"><i data-lucide="droplets" class="w-3 h-3 mr-1"></i>${sum}</span>`; else ctt = `<span class="text-slate-600 flex items-center justify-center">${sum}</span>`; }
            else if (result.type === 'analysis') { let sum = 0; fD.forEach(r => { let val = parseInt(r[idx]) || 0; if (val >= 1) sum++; }); if (h === 'Excede LMP') ctt = `<span class="text-red-600 flex items-center justify-center"><i data-lucide="alert-triangle" class="w-3 h-3 mr-1"></i>${sum}</span>`; else ctt = `<span class="text-indigo-600 flex items-center justify-center">${sum}</span>`; }
        }
        html += `<td class="px-4 py-2 text-xs uppercase tracking-widest text-center ${stC}" style="${lS}">${ctt}</td>`;
    }); html += `</tr></tfoot></table>`; cont.innerHTML = html; lucide.createIcons();
}

function renderConsolidatedAndChart(result, prefix, currentTab) {
    if (currentTab === 'res_cloro') { renderCloroConsolidatedAndChart(result, prefix); return; }
    if (currentTab === 'res_riesgo') { renderRiesgoConsolidatedAndChart(result, prefix); return; }
    if (currentTab === 'res_nivel_riesgo') { renderNivelRiesgoConsolidated(result, prefix); return; }
    const vIdx = CORE_HEADERS.length; const idxR = CORE_HEADERS.indexOf('Red de Salud'); const sum = {}; const sapsR = {};
    const avanceR = {}; let gAvance = 0;
    const isA = result.type === 'analysis'; const isJ = result.type === 'status_json'; const isC = result.type === 'caract_points';
    let sumH = isA ? ['Total Análisis', 'Parám. Excedidos', 'SAPs Cumplen'] : result.headers.slice(vIdx).filter(h => h !== 'Detalles' && h !== 'Observación' && h !== 'Ver Detalle' && (currentTab !== 'bacteriologico' || h.includes('(Total)')));
    const colC = sumH.length; const grTot = Array(colC).fill(null).map(() => (isJ || isC) ? { c: 0, i: 0, s: 0 } : 0); let gTSap = 0;
    const isSapPrefix = prefix === 'sap';
    let requiredMonths = Math.max(1, sumH.length >= 10 ? sumH.length - 2 : sumH.length - 1);
    if (currentTab === 'sanitaria') {
        requiredMonths = sumH.length;
    } else if (currentTab === 'bacteriologico') {
        requiredMonths = sumH.length >= 12 ? 10 : (sumH.length >= 6 ? 5 : sumH.length);
    }
    let fD = result.data;
    if (Object.keys(APP_STATE.currentTableFilters).length > 0) { fD = result.data.filter(r => { return Object.entries(APP_STATE.currentTableFilters).every(([i, v]) => { let cV = String(r[i] ?? '').trim(); if (isJ && parseInt(i) >= CORE_HEADERS.length && result.headers[i] !== 'Observación' && result.headers[i] !== 'Ver Detalle') { try { const d = JSON.parse(cV); return String(d.status) === String(v); } catch (e) { return false; } } return cV === String(v); }); }); }

    fD.forEach(r => {
        const red = r[idxR] || 'Sin Red'; if (!sum[red]) sum[red] = Array(colC).fill(null).map(() => (isJ || isC) ? { c: 0, i: 0, s: 0 } : 0); if (!sapsR[red]) sapsR[red] = 0; sapsR[red]++; gTSap++;
        if (avanceR[red] === undefined) avanceR[red] = 0;
        if (isA) { const u1 = parseInt(r[vIdx]) || 0; const u2 = parseInt(r[vIdx + 1]) || 0; const eF = parseInt(r[vIdx + 2]) || 0; const cm = parseInt(r[vIdx + 3]); const dS = r[vIdx + 4]; let det = []; try { det = dS ? JSON.parse(dS) : []; } catch (e) { } if (!Array.isArray(det)) det = []; const hasD = u1 > 0 || u2 > 0 || eF > 0; if (hasD) { sum[red][0] += 1; grTot[0] += 1; sum[red][1] += det.length; grTot[1] += det.length; if (cm === 1) { sum[red][2]++; grTot[2]++; } } }
        else {
            let cIdx = 0; let sysC = 0;
            for (let i = vIdx; i < r.length; i++) {
                if (result.headers[i] === 'Detalles' || result.headers[i] === 'Observación' || result.headers[i] === 'Ver Detalle' || (currentTab === 'bacteriologico' && !result.headers[i].includes('(Total)'))) continue;
                if (isJ) { try { const d = JSON.parse(r[i]); if (d.status === 1) { sum[red][cIdx].c++; grTot[cIdx].c++; sysC++; } else if (d.status === 2) { sum[red][cIdx].i++; grTot[cIdx].i++; } else { sum[red][cIdx].s++; grTot[cIdx].s++; } } catch (e) { } }
                else if (isC) {
                    try {
                        const pts = JSON.parse(r[i]); const keys = Object.keys(pts);
                        if (keys.length === 0) { sum[red][cIdx].s++; grTot[cIdx].s++; }
                        else {
                            keys.forEach(k => {
                                if (pts[k].status === 1) { sum[red][cIdx].c++; grTot[cIdx].c++; sysC++; }
                                else if (pts[k].status === 2) { sum[red][cIdx].i++; grTot[cIdx].i++; }
                            });
                        }
                    } catch (e) { sum[red][cIdx].s++; grTot[cIdx].s++; }
                }
                else { let val = parseInt(r[i]) || 0; if (val >= 1) { sum[red][cIdx]++; grTot[cIdx]++; sysC++; } }
                cIdx++;
            }
            if (sysC >= requiredMonths) { avanceR[red]++; gAvance++; }
        }
    });

    const semesterGroups = {};
    let totalMetaMef = 0;
    let hasSemesters = false;
    sumH.forEach((h, i) => {
        let sem = 'General';
        if (isSapPrefix && currentTab === 'caracterizacion') {
            const match = h.match(/\((.*?)\)/);
            if (match) sem = match[1];
        }
        if (sem !== 'General') hasSemesters = true;
        if (!semesterGroups[sem]) semesterGroups[sem] = [];
        semesterGroups[sem].push({ header: h, colIdx: i });
    });

    let html = '';
    Object.keys(sum).forEach(red => { totalMetaMef += (APP_STATE.metaMefPorRed[red] || 0); });

    if (hasSemesters) {
        Object.entries(semesterGroups).forEach(([semName, cols]) => {
            if (currentTab === 'caracterizacion' && semName === 'General') return;
            html += `<div class="mb-6 last:mb-0 border border-slate-200 rounded-xl overflow-hidden shadow-sm"><div class="bg-indigo-50 px-4 py-2 border-b border-indigo-100 flex items-center gap-2"><i data-lucide="calendar-days" class="w-4 h-4 text-indigo-500"></i><h5 class="font-black text-[11px] text-indigo-800 uppercase tracking-widest">${semName}</h5></div>`;
            html += `<div class="overflow-x-auto"><table class="min-w-full text-left"><thead class="bg-white sticky top-0 shadow-sm border-b border-slate-200"><tr><th class="px-5 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">RED</th><th class="px-5 py-4 text-center text-[10px] font-black text-indigo-600 uppercase bg-indigo-50/50 tracking-widest">CANT. SAP</th><th class="px-5 py-4 text-center text-[10px] font-black text-blue-600 uppercase bg-blue-50/50 tracking-widest">META MEF</th>`;
            if (currentTab === 'caracterizacion' && semName === '1er Semestre 2026') {
                html += `<th class="px-5 py-4 text-center text-[10px] font-black text-indigo-600 uppercase bg-indigo-50/50 tracking-widest">Meta Caract. 1er Tramo</th>`;
            }
            cols.forEach(c => html += `<th class="px-5 py-4 text-center text-[10px] font-black text-slate-500 uppercase tracking-widest">${c.header.replace(/\(.*?\)/g, '').trim()}</th>`);
            html += `</tr></thead><tbody class="divide-y divide-slate-100">`;
            let gMetaCaract = 0;
            Object.entries(sum).forEach(([red, vals]) => {
                const metaMef = APP_STATE.metaMefPorRed[red] || 0;
                let mCaractHtml = '';
                if (currentTab === 'caracterizacion' && semName === '1er Semestre 2026') {
                    const redU = String(red).toUpperCase().trim(); let mCaract = 0;
                    if (redU.includes('CANAS') && redU.includes('ESPINAR')) mCaract = 67;
                    else if (redU.includes('CHUMBIVILCAS')) mCaract = 70;
                    else if (redU.includes('NORTE')) mCaract = 100;
                    else if (redU.includes('SUR')) mCaract = 162;
                    else if (redU.includes('KIMBIRI')) mCaract = 46;
                    else if (redU.includes('CONVENCION') || redU.includes('CONVENCIÓN')) mCaract = 43;
                    gMetaCaract += mCaract;
                    mCaractHtml = `<td class="px-5 py-3.5 text-xs text-center font-bold text-indigo-700 bg-indigo-50/50">${mCaract || '-'}</td>`;
                }
                html += `<tr class="hover:bg-slate-50 transition-colors"><td class="px-5 py-3.5 text-xs text-left font-bold text-slate-700 whitespace-nowrap">${red}</td><td class="px-5 py-3.5 text-xs text-center font-bold text-indigo-700 bg-indigo-50/50">${sapsR[red]}</td><td class="px-5 py-3.5 text-xs text-center font-bold text-blue-700 bg-blue-50/50">${metaMef}</td>${mCaractHtml}`;
                cols.forEach(c => {
                    const v = vals[c.colIdx];
                    if (isJ || isC) { html += `<td class="px-4 py-3.5 text-xs text-center whitespace-nowrap"><span class="inline-flex items-center gap-1 text-emerald-600 font-bold mr-1.5 bg-emerald-50 px-1.5 py-0.5 rounded shadow-sm" title="Completo"><i data-lucide="check" class="w-3 h-3"></i> ${v.c}</span><span class="inline-flex items-center gap-1 text-amber-600 font-bold mr-1.5 bg-amber-50 px-1.5 py-0.5 rounded shadow-sm" title="Incompleto"><i data-lucide="info" class="w-3 h-3"></i> ${v.i}</span><span class="inline-flex items-center gap-1 text-slate-400 font-bold bg-slate-50 px-1.5 py-0.5 rounded shadow-sm" title="Sin Monitoreo"><i data-lucide="minus" class="w-3 h-3"></i> ${v.s}</span></td>`; }
                    else { html += `<td class="px-5 py-3.5 text-xs text-center text-slate-600 font-medium">${v}</td>`; }
                }); html += `</tr>`;
            });
            let gMetaCaractHtml = '';
            if (currentTab === 'caracterizacion' && semName === '1er Semestre 2026') {
                gMetaCaractHtml = `<td class="px-5 py-4 text-xs text-center text-indigo-300 font-black bg-indigo-900/50">${gMetaCaract}</td>`;
            }
            html += `<tr class="bg-slate-800 border-t border-slate-700"><td class="px-5 py-4 text-[10px] text-left text-white font-black uppercase tracking-widest">TOTAL GENERAL</td><td class="px-5 py-4 text-xs text-center text-indigo-300 font-black bg-indigo-900/50">${gTSap}</td><td class="px-5 py-4 text-xs text-center text-blue-300 font-black bg-blue-900/50">${totalMetaMef}</td>${gMetaCaractHtml}`;
            cols.forEach(c => {
                const v = grTot[c.colIdx];
                if (isJ || isC) { html += `<td class="px-4 py-4 text-xs text-center whitespace-nowrap"><span class="inline-flex items-center gap-1 text-emerald-400 font-black mr-1.5"><i data-lucide="check" class="w-3 h-3"></i> ${v.c}</span><span class="inline-flex items-center gap-1 text-amber-400 font-black mr-1.5"><i data-lucide="info" class="w-3 h-3"></i> ${v.i}</span><span class="inline-flex items-center gap-1 text-slate-400 font-black"><i data-lucide="minus" class="w-3 h-3"></i> ${v.s}</span></td>`; }
                else { html += `<td class="px-5 py-4 text-xs text-center text-white font-bold">${v}</td>`; }
            }); html += `</tr></tbody></table></div></div>`;
        });
    } else {
        const showAvance = currentTab === 'monitor' || currentTab === 'bacteriologico' || currentTab === 'riesgos' || currentTab === 'sanitaria';
        html = `<table class="min-w-full text-left"><thead class="bg-white sticky top-0 shadow-sm border-b border-slate-200"><tr><th class="px-5 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">RED</th><th class="px-5 py-4 text-center text-[10px] font-black text-indigo-600 uppercase bg-indigo-50/50 tracking-widest">CANT. SAP</th><th class="px-5 py-4 text-center text-[10px] font-black text-blue-600 uppercase bg-blue-50/50 tracking-widest">META MEF</th>`;
        sumH.forEach(h => html += `<th class="px-5 py-4 text-center text-[10px] font-black text-slate-500 uppercase tracking-widest">${h.substring(0, 15)}</th>`);
        if (showAvance) html += `<th class="px-5 py-4 text-center text-[10px] font-black text-indigo-600 uppercase bg-indigo-50/50 tracking-widest">AVANCE</th>`;
        html += `</tr></thead><tbody class="divide-y divide-slate-100">`;
        Object.entries(sum).forEach(([red, vals]) => {
            const metaMef = APP_STATE.metaMefPorRed[red] || 0;
            html += `<tr class="hover:bg-slate-50 transition-colors"><td class="px-5 py-3.5 text-xs text-left font-bold text-slate-700 whitespace-nowrap">${red}</td><td class="px-5 py-3.5 text-xs text-center font-bold text-indigo-700 bg-indigo-50/50">${sapsR[red]}</td><td class="px-5 py-3.5 text-xs text-center font-bold text-blue-700 bg-blue-50/50">${metaMef}</td>`;
            let avance = avanceR[red] || 0;
            vals.forEach((v, i) => {
                if (isJ || isC) { html += `<td class="px-4 py-3.5 text-xs text-center whitespace-nowrap"><span class="inline-flex items-center gap-1 text-emerald-600 font-bold mr-1.5 bg-emerald-50 px-1.5 py-0.5 rounded shadow-sm" title="Completo"><i data-lucide="check" class="w-3 h-3"></i> ${v.c}</span><span class="inline-flex items-center gap-1 text-amber-600 font-bold mr-1.5 bg-amber-50 px-1.5 py-0.5 rounded shadow-sm" title="Incompleto"><i data-lucide="info" class="w-3 h-3"></i> ${v.i}</span><span class="inline-flex items-center gap-1 text-slate-400 font-bold bg-slate-50 px-1.5 py-0.5 rounded shadow-sm" title="Sin Monitoreo"><i data-lucide="minus" class="w-3 h-3"></i> ${v.s}</span></td>`; } else { let st = "text-slate-600 font-medium"; if (isA) { if (i === 1 && v > 0) st = "text-red-600 font-bold bg-red-50/50 rounded-lg"; if (i === 2) st = "text-emerald-600 font-bold"; } html += `<td class="px-5 py-3.5 text-xs text-center ${st}">${v}</td>` }
            });
            if (showAvance) html += `<td class="px-5 py-3.5 text-xs text-center font-black text-indigo-700 bg-indigo-50/50">${avance}</td>`;
            html += `</tr>`;
        });
        html += `<tr class="bg-slate-800 border-t border-slate-700"><td class="px-5 py-4 text-[10px] text-left text-white font-black uppercase tracking-widest">TOTAL GENERAL</td><td class="px-5 py-4 text-xs text-center text-indigo-300 font-black bg-indigo-900/50">${gTSap}</td><td class="px-5 py-4 text-xs text-center text-blue-300 font-black bg-blue-900/50">${totalMetaMef}</td>`;
        grTot.forEach((v, i) => {
            if (isJ || isC) { html += `<td class="px-4 py-4 text-xs text-center whitespace-nowrap"><span class="inline-flex items-center gap-1 text-emerald-400 font-black mr-1.5"><i data-lucide="check" class="w-3 h-3"></i> ${v.c}</span><span class="inline-flex items-center gap-1 text-amber-400 font-black mr-1.5"><i data-lucide="info" class="w-3 h-3"></i> ${v.i}</span><span class="inline-flex items-center gap-1 text-slate-400 font-black"><i data-lucide="minus" class="w-3 h-3"></i> ${v.s}</span></td>`; } else { html += `<td class="px-5 py-4 text-xs text-center text-white font-bold">${v}</td>`; }
        });
        if (showAvance) html += `<td class="px-5 py-4 text-xs text-center text-indigo-300 font-black bg-indigo-900/50">${gAvance}</td>`;
        html += `</tr></tbody></table>`;
    }
    getEl(`${prefix}-consolidated-container`).innerHTML = html;

    const cnt = [0, 0, 0, 0]; let lbl = [], col = [];
    if (isA) { cnt[0] = grTot[2]; cnt[1] = gTSap - grTot[2]; lbl = ['SAPs Cumplen', 'No Cumplen / Sin Info']; col = ['#10b981', '#ef4444']; }
    else if (result.type === 'vigilancia') {
        let cump = 0, noCump = 0; const vIdxV = result.headers.indexOf('Vigilancia Completa');
        fD.forEach(r => { if (r[vIdxV] === 1) cump++; else noCump++; });
        cnt[0] = cump; cnt[1] = noCump; lbl = ['Cumple Vigilancia', 'No Cumple']; col = ['#10b981', '#ef4444'];
    }
    else { if (isJ || isC) { cnt[0] = grTot.reduce((a, c) => a + c.c, 0); cnt[1] = grTot.reduce((a, c) => a + c.i, 0); cnt[2] = grTot.reduce((a, c) => a + c.s, 0); lbl = ['Completo', 'Incompleto', 'Sin Monitoreo']; col = ['#10b981', '#f59e0b', '#ef4444']; } else if (result.type === 'boolean') { fD.forEach(r => { for (let i = vIdx; i < r.length; i++) { const v = parseInt(r[i]) || 0; if (v >= 0 && v <= 3) cnt[v]++; } }); lbl = ['No Cumple', 'Cumple']; col = ['#fca5a5', '#10b981']; const temp = cnt[0]; cnt[0] = cnt[1] || 0; cnt[1] = temp || 0; } }
    renderDoughnutChart(cnt.slice(0, lbl.length), lbl, col, currentTab.replace('res_', '').toUpperCase(), `${prefix}-chart-container`);
}

function renderCloroConsolidatedAndChart(result, prefix) {
    let fD = result.data;
    if (Object.keys(APP_STATE.currentTableFilters).length > 0) { fD = result.data.filter(r => { return Object.entries(APP_STATE.currentTableFilters).every(([i, v]) => { return String(r[i] ?? '').trim() === String(v); }); }); }
    const sR = {}; const sP = {}; const sD = {}; let gTS = 0, gTM = 0, gL = 0, gH = 0, gO = 0, gCons = 0, gMes = 0;
    fD.forEach(r => {
        const red = r[8] || 'Sin Red'; const pr = r[5] || 'Sin Provincia'; const dt = r[4] || 'Sin Distrito';
        [sR, sP, sD].forEach((obj, idx) => { const k = idx === 0 ? red : (idx === 1 ? pr : dt); if (!obj[k]) obj[k] = { sap: 0, tot: 0, low: 0, high: 0, ok: 0, meses: 0, consume: 0 }; obj[k].sap++; obj[k].tot += parseInt(r[9]) || 0; obj[k].low += parseInt(r[10]) || 0; obj[k].high += parseInt(r[11]) || 0; obj[k].ok += parseInt(r[12]) || 0; obj[k].meses += parseInt(r[13]) || 0; obj[k].consume += parseInt(r[14]) || 0; });
        gTS++; gTM += parseInt(r[9]) || 0; gL += parseInt(r[10]) || 0; gH += parseInt(r[11]) || 0; gO += parseInt(r[12]) || 0; gMes += parseInt(r[13]) || 0; gCons += parseInt(r[14]) || 0;
    });
    const bHtml = (obj, fCol) => {
        let h = `<div class="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-6 last:mb-0"><div class="bg-indigo-50/80 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center"><h5 class="font-bold text-xs text-indigo-900 uppercase tracking-widest">→ Por ${fCol}</h5></div><div class="overflow-x-auto"><table class="min-w-full text-left"><thead class="bg-slate-50 sticky top-0 shadow-sm border-b border-slate-200"><tr><th class="px-5 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">${fCol}</th><th class="px-4 py-3 text-center text-[10px] font-black text-slate-600 uppercase bg-slate-100">Total SAP</th><th class="px-4 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">Muestras Eval.</th><th class="px-4 py-3 text-center text-[10px] font-bold text-red-500 uppercase">Cloro < 0.5</th><th class="px-4 py-3 text-center text-[10px] font-bold text-red-500 uppercase">Cloro > 5</th><th class="px-4 py-3 text-center text-[10px] font-bold text-emerald-600 uppercase">Rango 0.5 a 5</th><th class="px-4 py-3 text-center text-[10px] font-bold text-blue-600 uppercase">Total Meses Cumplen</th><th class="px-5 py-3 text-center text-[10px] font-black text-blue-600 uppercase bg-blue-50/50">SAPs Consumen</th></tr></thead><tbody class="divide-y divide-slate-100">`;
        Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0])).forEach(([k, v]) => { h += `<tr class="hover:bg-slate-50 transition-colors"><td class="px-5 py-2.5 text-[10px] text-left font-bold text-slate-700 uppercase whitespace-nowrap">${k}</td><td class="px-4 py-2.5 text-xs text-center font-bold text-slate-600 bg-slate-50">${v.sap}</td><td class="px-4 py-2.5 text-xs text-center font-medium text-slate-600">${v.tot}</td><td class="px-4 py-2.5 text-xs text-center font-medium text-red-600">${v.low}</td><td class="px-4 py-2.5 text-xs text-center font-medium text-red-600">${v.high}</td><td class="px-4 py-2.5 text-xs text-center font-medium text-emerald-600">${v.ok}</td><td class="px-4 py-2.5 text-xs text-center font-medium text-blue-600">${v.meses}</td><td class="px-5 py-2.5 text-xs text-center font-black text-blue-600 bg-blue-50/50">${v.consume}</td></tr>`; });
        h += `<tr class="bg-slate-800 border-t border-slate-700"><td class="px-5 py-3 text-[10px] text-left text-white font-black uppercase tracking-widest">TOTAL GENERAL</td><td class="px-4 py-3 text-xs text-center text-white font-bold bg-slate-900">${gTS}</td><td class="px-4 py-3 text-xs text-center text-white font-bold">${gTM}</td><td class="px-4 py-3 text-xs text-center text-red-400 font-bold">${gL}</td><td class="px-4 py-3 text-xs text-center text-red-400 font-bold">${gH}</td><td class="px-4 py-3 text-xs text-center text-emerald-400 font-bold">${gO}</td><td class="px-4 py-3 text-xs text-center text-blue-400 font-bold">${gMes}</td><td class="px-5 py-3 text-xs text-center text-blue-400 font-black bg-blue-900/50">${gCons}</td></tr></tbody></table></div></div>`; return h;
    };

    const mapCcpp = {};
    fD.forEach(r => {
        const ubi = r[2] || ''; const ccpp = r[3] || '';
        const prov = r[5] || 'Sin Provincia'; const dist = r[4] || 'Sin Distrito';
        const key = `${ubi}_${ccpp}`;
        if (!mapCcpp[key]) mapCcpp[key] = { prov, dist, consume: 0 };
        if (parseInt(r[14]) === 1) mapCcpp[key].consume = 1;
    });

    const distMap = {};
    Object.values(mapCcpp).forEach(x => {
        const pdKey = `${x.prov}_${x.dist}`;
        if (!distMap[pdKey]) distMap[pdKey] = { prov: x.prov, dist: x.dist, totCcpp: 0, consCcpp: 0 };
        distMap[pdKey].totCcpp++;
        if (x.consume === 1) distMap[pdKey].consCcpp++;
    });

    const provMap = {}; let grandTotCcpp = 0, grandConsCcpp = 0;
    Object.values(distMap).forEach(d => {
        if (!provMap[d.prov]) provMap[d.prov] = { dists: [], totCcpp: 0, consCcpp: 0 };
        provMap[d.prov].dists.push(d); provMap[d.prov].totCcpp += d.totCcpp; provMap[d.prov].consCcpp += d.consCcpp;
        grandTotCcpp += d.totCcpp; grandConsCcpp += d.consCcpp;
    });

    let hCcpp = `<div class="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-6 last:mb-0"><div class="bg-indigo-50/80 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center"><h5 class="font-bold text-xs text-indigo-900 uppercase tracking-widest">→ Por Centro Poblado</h5></div><div class="overflow-x-auto"><table class="min-w-full text-left"><thead class="bg-slate-50 sticky top-0 shadow-sm border-b border-slate-200"><tr><th class="px-5 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">Provincia</th><th class="px-5 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">Distrito</th><th class="px-4 py-3 text-center text-[10px] font-bold text-slate-600 uppercase bg-slate-100">N° Centros Poblados</th><th class="px-4 py-3 text-center text-[10px] font-bold text-blue-600 uppercase bg-blue-50/50">N° CCPP Consumen Agua Clorada</th><th class="px-4 py-3 text-center text-[10px] font-bold text-emerald-600 uppercase">Porcentaje</th></tr></thead><tbody class="divide-y divide-slate-100">`;
    Object.keys(provMap).sort().forEach(prov => {
        const pData = provMap[prov];
        pData.dists.sort((a, b) => a.dist.localeCompare(b.dist)).forEach(d => { const pct = d.totCcpp > 0 ? ((d.consCcpp / d.totCcpp) * 100).toFixed(1) : '0.0'; hCcpp += `<tr class="hover:bg-slate-50 transition-colors"><td class="px-5 py-2.5 text-[10px] text-left font-bold text-slate-700 uppercase whitespace-nowrap">${d.prov}</td><td class="px-5 py-2.5 text-[10px] text-left font-medium text-slate-600 uppercase whitespace-nowrap">${d.dist}</td><td class="px-4 py-2.5 text-xs text-center font-bold text-slate-600 bg-slate-50">${d.totCcpp}</td><td class="px-4 py-2.5 text-xs text-center font-bold text-blue-600 bg-blue-50/50">${d.consCcpp}</td><td class="px-4 py-2.5 text-xs text-center font-bold text-emerald-600">${pct}%</td></tr>`; });
        const subPct = pData.totCcpp > 0 ? ((pData.consCcpp / pData.totCcpp) * 100).toFixed(1) : '0.0'; hCcpp += `<tr class="bg-indigo-50/50 border-y border-indigo-100"><td colspan="2" class="px-5 py-2.5 text-[10px] text-right font-black text-indigo-900 uppercase">TOTAL ${prov}</td><td class="px-4 py-2.5 text-xs text-center font-black text-indigo-900">${pData.totCcpp}</td><td class="px-4 py-2.5 text-xs text-center font-black text-blue-700">${pData.consCcpp}</td><td class="px-4 py-2.5 text-xs text-center font-black text-emerald-700">${subPct}%</td></tr>`;
    });
    const grandPct = grandTotCcpp > 0 ? ((grandConsCcpp / grandTotCcpp) * 100).toFixed(1) : '0.0'; hCcpp += `<tr class="bg-slate-800 border-t border-slate-700"><td colspan="2" class="px-5 py-3 text-[10px] text-right text-white font-black uppercase tracking-widest">TOTAL GENERAL</td><td class="px-4 py-3 text-xs text-center text-white font-bold bg-slate-900">${grandTotCcpp}</td><td class="px-4 py-3 text-xs text-center text-blue-400 font-bold bg-blue-900/50">${grandConsCcpp}</td><td class="px-4 py-3 text-xs text-center text-emerald-400 font-bold">${grandPct}%</td></tr></tbody></table></div></div>`;

    getEl(`${prefix}-consolidated-container`).innerHTML = '<div class="flex flex-col w-full p-4">' + bHtml(sR, "RED DE SALUD") + bHtml(sP, "PROVINCIA") + bHtml(sD, "DISTRITO") + hCcpp + '</div>';
    const from = APP_STATE.globalDateFrom; const to = APP_STATE.globalDateTo; const aF = from <= to ? from : to; const aT = from <= to ? to : from; const reqM = Math.ceil(APP_STATE.availableMonitorMonths.filter(m => m >= aF && m <= aT).length * 5 / 6);
    renderDoughnutChart([gCons, gTS - gCons], [`SAPs Consumen (>= ${reqM} Meses)`, 'SAPs No Consumen / S.D.'], ['#3b82f6', '#ef4444'], 'CONSUMO CLORO', `${prefix}-chart-container`);
}

function renderNivelRiesgoConsolidated(result, prefix) {
    let fD = result.data;
    if (Object.keys(APP_STATE.currentTableFilters).length > 0) { fD = result.data.filter(r => { return Object.entries(APP_STATE.currentTableFilters).every(([i, v]) => String(r[i] ?? '').trim() === String(v)); }); }
    const sR = {}; const sP = {}; const sD = {};
    let gT = 0, gAlto = 0, gMedio = 0, gBajo = 0, gSin = 0;
    const iRiesgo = result.headers.indexOf('Nivel de Riesgo');

    fD.forEach(r => {
        const red = r[4] || 'Sin Red'; const pr = r[2] || 'Sin Provincia'; const dt = r[3] || 'Sin Distrito';
        [sR, sP, sD].forEach((obj, idx) => {
            const k = idx === 0 ? red : (idx === 1 ? pr : dt);
            if (!obj[k]) obj[k] = { ccpp: 0, alto: 0, medio: 0, bajo: 0, sin: 0 };
            obj[k].ccpp++;
            const rr = r[iRiesgo];
            if (rr === 'Alto') obj[k].alto++; else if (rr === 'Medio') obj[k].medio++; else if (rr === 'Bajo') obj[k].bajo++; else obj[k].sin++;
        });
        gT++;
        const rr = r[iRiesgo];
        if (rr === 'Alto') gAlto++; else if (rr === 'Medio') gMedio++; else if (rr === 'Bajo') gBajo++; else gSin++;
    });

    const bHtml = (obj, fCol) => {
        let h = `<div class="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-6 last:mb-0"><div class="bg-indigo-50/80 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center"><h5 class="font-bold text-xs text-indigo-900 uppercase tracking-widest">→ Por ${fCol}</h5></div><div class="overflow-x-auto"><table class="min-w-full text-left"><thead class="bg-slate-50 sticky top-0 shadow-sm border-b border-slate-200"><tr><th class="px-5 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">${fCol}</th><th class="px-4 py-3 text-center text-[10px] font-black text-slate-600 uppercase bg-slate-100">Total CCPP</th><th class="px-4 py-3 text-center text-[10px] font-bold text-red-500 uppercase">Riesgo Alto</th><th class="px-4 py-3 text-center text-[10px] font-bold text-amber-500 uppercase">Riesgo Medio</th><th class="px-4 py-3 text-center text-[10px] font-bold text-emerald-600 uppercase">Riesgo Bajo</th></tr></thead><tbody class="divide-y divide-slate-100">`;
        Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0])).forEach(([k, v]) => { h += `<tr class="hover:bg-slate-50 transition-colors"><td class="px-5 py-2.5 text-[10px] text-left font-bold text-slate-700 uppercase whitespace-nowrap">${k}</td><td class="px-4 py-2.5 text-xs text-center font-bold text-slate-600 bg-slate-50">${v.ccpp}</td><td class="px-4 py-2.5 text-xs text-center font-medium text-red-600">${v.alto}</td><td class="px-4 py-2.5 text-xs text-center font-medium text-amber-600">${v.medio}</td><td class="px-4 py-2.5 text-xs text-center font-medium text-emerald-600">${v.bajo}</td></tr>`; });
        h += `<tr class="bg-slate-800 border-t border-slate-700"><td class="px-5 py-3 text-[10px] text-left text-white font-black uppercase tracking-widest">TOTAL GENERAL</td><td class="px-4 py-3 text-xs text-center text-white font-bold bg-slate-900">${gT}</td><td class="px-4 py-3 text-xs text-center text-red-400 font-bold">${gAlto}</td><td class="px-4 py-3 text-xs text-center text-amber-400 font-bold">${gMedio}</td><td class="px-4 py-3 text-xs text-center text-emerald-400 font-bold">${gBajo}</td></tr></tbody></table></div></div>`; return h;
    };
    getEl(`${prefix}-consolidated-container`).innerHTML = '<div class="flex flex-col w-full p-4">' + bHtml(sR, "RED DE SALUD") + bHtml(sP, "PROVINCIA") + bHtml(sD, "DISTRITO") + '</div>';
    renderDoughnutChart([gAlto, gMedio, gBajo, gSin], ['Alto', 'Medio', 'Bajo', 'Sin Monitoreo'], ['#ef4444', '#f59e0b', '#10b981', '#e2e8f0'], 'NIVEL DE RIESGO', `${prefix}-chart-container`);
}

function renderRiesgoConsolidatedAndChart(result, prefix) {
    let fD = result.data;
    if (Object.keys(APP_STATE.currentTableFilters).length > 0) { fD = result.data.filter(r => { return Object.entries(APP_STATE.currentTableFilters).every(([i, v]) => String(r[i] ?? '').trim() === String(v)); }); }
    const sR = {}; const sP = {}; const sD = {}; let gTS = 0, gFecal = 0, gMetales = 0;

    const iFecal = result.headers.indexOf('Tiene al menos una muestra con contaminación fecal');
    const iOrg = result.headers.indexOf('Tiene al menos un parametro organolepticos que excede el LMP');
    const iMetales = result.headers.indexOf('Tiene al menos un parametro inorganicos (metales pesados) que excede el LMP');

    fD.forEach(r => {
        const red = r[8] || 'Sin Red'; const pr = r[5] || 'Sin Provincia'; const dt = r[4] || 'Sin Distrito';
        [sR, sP, sD].forEach((obj, idx) => {
            const k = idx === 0 ? red : (idx === 1 ? pr : dt);
            if (!obj[k]) obj[k] = { sap: 0, fecal: 0, metales: 0 };
            obj[k].sap++;
            if (r[iFecal] === 1) obj[k].fecal++;
            if (r[iMetales] === 1 || r[iOrg] === 1) obj[k].metales++;
        });
        gTS++;
        if (r[iFecal] === 1) gFecal++;
        if (r[iMetales] === 1 || r[iOrg] === 1) gMetales++;
    });
    const bHtml = (obj, fCol) => {
        let h = `<div class="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-6 last:mb-0"><div class="bg-indigo-50/80 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center"><h5 class="font-bold text-xs text-indigo-900 uppercase tracking-widest">→ Por ${fCol}</h5></div><div class="overflow-x-auto"><table class="min-w-full text-left"><thead class="bg-slate-50 sticky top-0 shadow-sm border-b border-slate-200"><tr><th class="px-5 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">${fCol}</th><th class="px-4 py-3 text-center text-[10px] font-black text-slate-600 uppercase bg-slate-100">Total SAP</th><th class="px-4 py-3 text-center text-[10px] font-bold text-red-500 uppercase">Con Contam. Fecal</th><th class="px-4 py-3 text-center text-[10px] font-bold text-amber-500 uppercase">Con Exc. Metales/Org.</th></tr></thead><tbody class="divide-y divide-slate-100">`;
        Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0])).forEach(([k, v]) => { h += `<tr class="hover:bg-slate-50 transition-colors"><td class="px-5 py-2.5 text-[10px] text-left font-bold text-slate-700 uppercase whitespace-nowrap">${k}</td><td class="px-4 py-2.5 text-xs text-center font-bold text-slate-600 bg-slate-50">${v.sap}</td><td class="px-4 py-2.5 text-xs text-center font-medium text-red-600">${v.fecal}</td><td class="px-4 py-2.5 text-xs text-center font-medium text-amber-600">${v.metales}</td></tr>`; });
        h += `<tr class="bg-slate-800 border-t border-slate-700"><td class="px-5 py-3 text-[10px] text-left text-white font-black uppercase tracking-widest">TOTAL GENERAL</td><td class="px-4 py-3 text-xs text-center text-white font-bold bg-slate-900">${gTS}</td><td class="px-4 py-3 text-xs text-center text-red-400 font-bold">${gFecal}</td><td class="px-4 py-3 text-xs text-center text-amber-400 font-bold">${gMetales}</td></tr></tbody></table></div></div>`; return h;
    };
    getEl(`${prefix}-consolidated-container`).innerHTML = '<div class="flex flex-col w-full p-4">' + bHtml(sR, "RED DE SALUD") + bHtml(sP, "PROVINCIA") + bHtml(sD, "DISTRITO") + '</div>';

    let gAny = 0;
    fD.forEach(r => { if (r[iFecal] === 1 || r[iMetales] === 1 || r[iOrg] === 1) gAny++; });
    renderDoughnutChart([gAny, gTS - gAny], ['Con Riesgo (Fecal o Metales)', 'Sin Riesgo'], ['#ef4444', '#10b981'], 'RIESGO SANITARIO', `${prefix}-chart-container`);
}

function renderFedTable(result) {
    const cont = getEl('fed-main-table-container'); let fD = result.data;
    if (Object.keys(APP_STATE.currentTableFilters).length > 0) { fD = result.data.filter(r => { return Object.entries(APP_STATE.currentTableFilters).every(([i, v]) => { return String(r[i] ?? '').trim() === String(v); }); }); }
    const fB = getEl('fed-active-filters');
    if (Object.keys(APP_STATE.currentTableFilters).length > 0) {
        let html = `<div class="bg-amber-50/80 px-4 py-2.5 border-b border-amber-100 flex gap-3 items-center overflow-x-auto custom-scroll w-full"><span class="text-[10px] font-black text-amber-800 uppercase tracking-widest flex-shrink-0"><i data-lucide="filter" class="w-3 h-3 inline"></i> Activos:</span>`;
        Object.entries(APP_STATE.currentTableFilters).forEach(([i, val]) => { let dV = val; if (result.headers[i] === 'Seguimiento') { if (val === 'Verde') dV = 'CUMPLE (>=3)'; else if (val === 'Naranja') dV = 'CUMPLE PARCIAL'; else if (val === 'Rojo') dV = 'NO CUMPLE'; else dV = 'SIN MONITOREO'; } else if (result.headers[i] === 'MEF' || result.headers[i] === 'FED' || result.headers[i] === 'SAP REGULARES') { dV = val === '1' ? 'SÍ' : '-'; } else if (result.headers[i].includes('Cumple') || result.headers[i].includes('Ev_') || result.headers[i].includes('EV_5p')) { dV = val === '1' ? 'CUMPLE' : 'NO CUMPLE'; } html += `<span class="bg-amber-600 text-white text-[10px] px-2.5 py-1 rounded-md flex items-center gap-1 font-bold cursor-pointer hover:bg-red-500 hover:shadow transition-all flex-shrink-0" onclick="window.removeTableFilter(${i})" title="Quitar filtro">${result.headers[i]}: ${dV} <i data-lucide="x" class="w-3 h-3"></i></span>`; });
        html += `<button onclick="window.clearAllTableFilters()" class="text-[10px] text-red-600 hover:text-red-800 font-bold ml-2 underline whitespace-nowrap flex-shrink-0">Borrar todo</button></div>`; fB.innerHTML = html; fB.classList.remove('hidden');
    } else { fB.innerHTML = ''; fB.classList.add('hidden'); }

    let html = `<table class="min-w-full text-left border-collapse whitespace-nowrap"><thead class="bg-slate-100 sticky top-0 z-20 shadow-sm border-b border-slate-300"><tr>`;
    const fmt = (h, v) => { if (h === 'Seguimiento') { if (v === 'Verde') return 'CUMPLE (>=3)'; if (v === 'Naranja') return 'CUMPLE PARCIAL'; if (v === 'Rojo') return 'NO CUMPLE'; return 'SIN MONITOREO'; } if (h === 'MEF' || h === 'FED' || h === 'SAP REGULARES' || h === 'MIDIS') return v === '1' ? 'SÍ' : '-'; if (h.includes('Cumple') || h === 'CCPP Bueno' || h.includes('Ev_') || h.includes('EV_5p') || h.startsWith('P2_') || h.startsWith('M5P') || h.startsWith('Riesgo') || h.startsWith('Cap:') || h.startsWith('Red:')) return String(v) === '1' ? 'CUMPLE' : 'NO CUMPLE'; return String(v).substring(0, 30); };

    result.headers.forEach((h, idx) => {
        if (['Cumple Salud', 'Cumple Vivienda', 'Cumple Ambos', 'MEF', 'FED', 'SAP REGULARES', 'MIDIS'].includes(h)) return;
        if (h.startsWith('P2_') || h === 'Cumple paso 2' || h === 'Cumple paso 1 y 2') return;
        let st = ""; let ls = ""; if (h === 'Ubigeo') { st = "sticky z-30 bg-slate-200 border-r border-slate-300 sticky-col-shadow"; ls = "left: 0px; min-width: 110px; max-width: 110px;"; } else if (h === 'Nombre CCPP') { st = "sticky z-30 bg-slate-200 border-r border-slate-300 sticky-col-shadow"; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
        let dC = result.data; if (Object.keys(APP_STATE.currentTableFilters).length > 0) { dC = result.data.filter(r => { return Object.entries(APP_STATE.currentTableFilters).every(([fI, fV]) => { if (parseInt(fI) === idx) return true; return String(r[fI] ?? '').trim() === String(fV); }); }); }
        const uV = [...new Set(dC.map(r => String(r[idx] ?? '').trim()))].filter(Boolean).sort(); const cF = APP_STATE.currentTableFilters[idx] || "";
        let sel = `<div class="relative mt-2 filter-wrapper" onclick="event.stopPropagation()"><button onclick="window.toggleFilterDropdown(event, 'fed', ${idx})" class="w-full max-w-[120px] text-[9px] font-bold border border-slate-300 rounded shadow-sm outline-none bg-white cursor-pointer py-1 px-2 flex justify-between items-center ${cF ? 'bg-amber-50 border-amber-300 text-amber-700' : ''}"><span class="truncate">${cF ? safeEscape(fmt(h, cF)) : 'Todos'}</span><i data-lucide="filter" class="w-3 h-3 ${cF ? 'text-amber-500' : 'text-slate-400'}"></i></button><div id="dropdown-fed-${idx}" class="filter-dropdown-menu hidden absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-xl z-50 flex flex-col font-normal text-left"><div class="p-2 border-b border-slate-100 bg-slate-50 rounded-t-lg"><input type="text" placeholder="Buscar..." class="w-full text-[10px] p-1.5 border border-slate-300 rounded outline-none focus:border-amber-500" onkeyup="window.filterDropdownOptions(event, 'fed', ${idx})"></div><div class="max-h-48 overflow-y-auto custom-scroll py-1"><div class="filter-option px-3 py-2 text-[10px] cursor-pointer hover:bg-amber-50 truncate transition-colors ${!cF ? 'bg-amber-100 font-bold text-amber-700' : 'text-slate-600'}" onclick="window.applyTableFilter('fed', ${idx}, '')">[ Todos ]</div>${uV.map(v => `<div class="filter-option px-3 py-2 text-[10px] cursor-pointer hover:bg-amber-50 truncate transition-colors ${cF === v ? 'bg-amber-100 font-bold text-amber-700' : 'text-slate-600'}" onclick="window.applyTableFilter('fed', ${idx}, '${safeEscape(v)}')">${safeEscape(fmt(h, v))}</div>`).join('')}${uV.length === 0 ? `<div class="px-3 py-4 text-[10px] text-slate-400 italic text-center">Sin opciones</div>` : ''}</div></div></div>`;
        html += `<th class="px-4 py-3 text-[10px] font-black text-slate-600 uppercase tracking-widest align-top ${st}" style="${ls}"><div class="flex flex-col h-full justify-between"><span>${h}</span>${sel}</div></th>`;
    }); html += `</tr></thead><tbody class="divide-y divide-slate-100">`;

    fD.forEach((r, i) => {
        const bg = i % 2 === 0 ? "bg-white" : "bg-slate-50"; html += `<tr class="${bg} hover:bg-amber-50/60 transition-colors group">`;
        r.forEach((c, idx) => {
            const h = result.headers[idx]; if (['Cumple Salud', 'Cumple Vivienda', 'Cumple Ambos', 'MEF', 'FED', 'SAP REGULARES', 'MIDIS'].includes(h)) return;
            if (h.startsWith('P2_') || h === 'Cumple paso 2' || h === 'Cumple paso 1 y 2') return;
            let st = ""; let ls = ""; if (h === 'Ubigeo') { st = `sticky z-10 border-r border-slate-200 ${bg} group-hover:bg-amber-50/60 sticky-col-shadow truncate`; ls = "left: 0px; min-width: 110px; max-width: 110px;"; } else if (h === 'Nombre CCPP') { st = `sticky z-10 border-r border-slate-200 ${bg} group-hover:bg-amber-50/60 sticky-col-shadow truncate`; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
            let tA = `class="px-4 py-2.5 text-xs ${st} transition-colors" style="${ls}"`; if (h === 'Nombre CCPP' || h === 'Nombre SAP' || (!st && typeof c === 'string' && c.length > 10 && !c.startsWith('{') && !c.startsWith('['))) tA += ` title="${safeEscape(c)}"`;
            let ctt = c;

            if (h === 'Seguimiento') { if (c === 'Verde') ctt = "<span class='cell-fed-verde px-3 py-1 rounded-full text-[10px]'>CUMPLE (>=3)</span>"; else if (c === 'Naranja') ctt = "<span class='cell-fed-naranja px-3 py-1 rounded-full text-[10px]'>CUMPLE PARCIAL</span>"; else if (c === 'Rojo') ctt = "<span class='cell-fed-rojo px-3 py-1 rounded-full text-[10px]'>NO CUMPLE</span>"; else ctt = "<span class='cell-fed-gris px-3 py-1 rounded-full text-[10px]'>SIN MONITOREO</span>"; }
            else if (h === 'MEF' || h === 'FED' || h === 'SAP REGULARES') { ctt = c === 1 ? `<span class="bg-indigo-100 text-indigo-700 px-2 rounded font-bold border border-indigo-200 text-[10px]">SÍ</span>` : `<span class="text-slate-300">-</span>`; tA = tA.replace('class="', 'class="text-center '); }
            else if (h === 'MEF' || h === 'FED' || h === 'SAP REGULARES' || h === 'MIDIS') { ctt = c === 1 ? `<span class="bg-indigo-100 text-indigo-700 px-2 rounded font-bold border border-indigo-200 text-[10px]">SÍ</span>` : `<span class="text-slate-300">-</span>`; tA = tA.replace('class="', 'class="text-center '); }
            else if (h === 'Cumplimiento Ind. 2' || h === 'Cumple Paso 1' || h.includes('Ev_') || h.includes('EV_5p')) { if (c === 1) ctt = "<span class='inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold border border-emerald-200 text-[10px] tracking-wide'><div class='w-1.5 h-1.5 rounded-full bg-emerald-500'></div>CUMPLE</span>"; else ctt = "<span class='inline-flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-1 rounded-full font-bold border border-red-200 text-[10px] tracking-wide'><div class='w-1.5 h-1.5 rounded-full bg-red-500'></div>NO CUMPLE</span>"; tA = tA.replace('class="', 'class="text-center '); }
            else if (h.includes('Cumple') || h === 'CCPP Bueno' || h.startsWith('M5P') || h.startsWith('Riesgo') || h.startsWith('Cap:') || h.startsWith('Red:')) { ctt = c === 1 ? `<div class="mx-auto w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><i data-lucide="check" class="w-3 h-3"></i></div>` : `<div class="mx-auto w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600"><i data-lucide="x" class="w-3 h-3"></i></div>`; tA = tA.replace('class="', 'class="text-center '); }
            else if (h === 'Observacion Caract.') { tA = tA.replace('class="', 'class="text-slate-600 max-w-[300px] whitespace-normal break-words leading-relaxed text-[10px] '); }
            else if (typeof c === 'number') { tA = tA.replace('class="', 'class="text-center text-slate-600 font-mono '); }
            else if (!st) { tA = tA.replace('class="', 'class="text-slate-600 max-w-[150px] truncate '); }
            html += `<td ${tA}>${ctt}</td>`;
        }); html += `</tr>`;
    });

    html += `</tbody><tfoot class="sticky bottom-0 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"><tr class="bg-amber-100 border-t-2 border-amber-300 font-black text-amber-900">`;
    result.headers.forEach((h, idx) => {
        if (['Cumple Salud', 'Cumple Vivienda', 'Cumple Ambos', 'MEF', 'FED', 'SAP REGULARES', 'MIDIS'].includes(h)) return;
        if (h.startsWith('P2_') || h === 'Cumple paso 2' || h === 'Cumple paso 1 y 2') return;
        let st = ""; let ls = ""; if (h === 'Ubigeo') { st = `sticky z-40 border-r border-amber-300 bg-amber-100 sticky-col-shadow truncate`; ls = "left: 0px; min-width: 110px; max-width: 110px;"; } else if (h === 'Nombre CCPP') { st = `sticky z-40 border-r border-amber-300 bg-amber-100 sticky-col-shadow truncate`; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
        let ctt = "";
        if (idx === 0) ctt = "TOTALES:"; else if (idx === 1) ctt = `<span class="text-amber-600 text-sm">${fD.length}</span> reg.`; else if (idx > 4) {
            if (h === 'Seguimiento') { let v = 0, n = 0, r = 0; fD.forEach(row => { if (row[idx] === 'Verde') v++; else if (row[idx] === 'Naranja') n++; else if (row[idx] === 'Rojo') r++; }); ctt = `<div class="flex justify-center gap-2 text-[10px]"><span class="text-emerald-600 flex items-center"><i data-lucide="check" class="w-3 h-3 mr-0.5"></i>${v}</span> <span class="text-amber-600 flex items-center"><i data-lucide="minus" class="w-3 h-3 mr-0.5"></i>${n}</span> <span class="text-red-500 flex items-center"><i data-lucide="x" class="w-3 h-3 mr-0.5"></i>${r}</span></div>`; }
            else if (h === 'MEF' || h === 'FED' || h === 'SAP REGULARES' || h === 'MIDIS' || h === 'CCPP Bueno' || h.includes('Cumple') || h.includes('Ev_') || h.includes('EV_5p')) { let s = 0; fD.forEach(row => { if (parseInt(row[idx]) === 1) s++; }); ctt = `<span class="text-indigo-600">${s}</span>`; }
            else { let c = 0; fD.forEach(row => { let val = parseFloat(row[idx]); if (!isNaN(val) && val > 0) c++; }); ctt = `<span class="text-amber-700">${c}</span>`; }
        }
        html += `<td class="px-4 py-2 text-xs uppercase tracking-widest text-center ${st}" style="${ls}">${ctt}</td>`;
    }); html += `</tr></tfoot></table>`; cont.innerHTML = html; lucide.createIcons();

    if (APP_STATE.fedActiveTab === 'ind1') {
        let hVivFilters = '';
        if (APP_STATE.vivFilters && Object.keys(APP_STATE.vivFilters).length > 0) {
            hVivFilters += `<div class="bg-emerald-50/80 px-4 py-2.5 border-b border-emerald-100 flex gap-3 items-center overflow-x-auto custom-scroll w-full"><span class="text-[10px] font-black text-emerald-800 uppercase tracking-widest flex-shrink-0"><i data-lucide="filter" class="w-3 h-3 inline"></i> Activos:</span>`;
            Object.entries(APP_STATE.vivFilters).forEach(([i, val]) => {
                if (!result.headers[i]) return;
                let dV = val; if (result.headers[i].includes('Cumple')) { dV = val === '1' ? 'CUMPLE' : 'NO CUMPLE'; }
                hVivFilters += `<span class="bg-emerald-600 text-white text-[10px] px-2.5 py-1 rounded-md flex items-center gap-1 font-bold cursor-pointer hover:bg-red-500 hover:shadow transition-all flex-shrink-0" onclick="window.removeTableFilter(${i}, 'viv')" title="Quitar filtro">${result.headers[i]}: ${dV} <i data-lucide="x" class="w-3 h-3"></i></span>`;
            });
            hVivFilters += `<button onclick="window.clearAllTableFilters('viv')" class="text-[10px] text-red-600 hover:text-red-800 font-bold ml-2 underline whitespace-nowrap flex-shrink-0">Borrar todo</button></div>`;
        }
        const evCols = []; result.headers.forEach((h, i) => { if (h.startsWith('Ev_')) evCols.push(i); });
        let ccppList = fD;
        let mapCcpp = {};
        let idxViv = result.headers.indexOf('Cumple Vivienda');
        let idxAmb = result.headers.indexOf('Cumple Ambos');
        let idxSalud = result.headers.indexOf('Cumple Salud');

        fD.forEach(r => {
            const ubi = r[0]; const ccpp = r[1];
            const key = `${ubi}_${ccpp}`;
            if (!mapCcpp[key]) { mapCcpp[key] = { r: [...r], sapsCount: 0, saludCount: 0, evsCount: Array(evCols.length).fill(0) }; }
            mapCcpp[key].sapsCount++;
            if (r[idxSalud] === 1) mapCcpp[key].saludCount++;
            evCols.forEach((colIdx, i) => { if (r[colIdx] === 1) mapCcpp[key].evsCount[i]++; });
        });
        ccppList = Object.values(mapCcpp).map(x => {
            const row = x.r;
            evCols.forEach((colIdx, i) => { row[colIdx] = (x.evsCount[i] > 0) ? 1 : 0; });
            row[idxSalud] = (x.saludCount > 0) ? 1 : 0;
            row[idxAmb] = (row[idxSalud] === 1 && row[idxViv] === 1) ? 1 : 0;
            return row;
        });

        if (!APP_STATE.vivFilters) APP_STATE.vivFilters = {};
        let fCcppList = ccppList;
        if (Object.keys(APP_STATE.vivFilters).length > 0) {
            fCcppList = ccppList.filter(r => {
                return Object.entries(APP_STATE.vivFilters).every(([fI, fV]) => String(r[fI] ?? '').trim() === String(fV));
            });
        }

        const vivWrapper = getEl('fed-vivienda-table-wrapper');
        if (vivWrapper) vivWrapper.classList.remove('hidden');

        const contViv = getEl('fed-vivienda-table-container');
        let hViv = hVivFilters + `<table class="min-w-full text-left border-collapse whitespace-nowrap"><thead class="bg-slate-100 sticky top-0 z-20 shadow-sm border-b border-slate-300"><tr>`;
        const vHeaders = ['Ubigeo', 'Nombre CCPP', 'Provincia', 'Distrito', 'Red de Salud', 'Cumple Salud', 'Cumple Vivienda', 'Cumple Ambos'];
        const mapIdx = [0, 1, 4, 5, 6, result.headers.indexOf('Cumple Salud'), result.headers.indexOf('Cumple Vivienda'), result.headers.indexOf('Cumple Ambos')];

        vHeaders.forEach((h, j) => {
            const idx = mapIdx[j];
            let dC = ccppList;
            if (Object.keys(APP_STATE.vivFilters).length > 0) { dC = ccppList.filter(r => Object.entries(APP_STATE.vivFilters).every(([fI, fV]) => parseInt(fI) === idx ? true : String(r[fI] ?? '').trim() === String(fV))); }
            const uV = [...new Set(dC.map(r => String(r[idx] ?? '').trim()))].filter(Boolean).sort();
            const cF = APP_STATE.vivFilters[idx] || "";

            const fmtV = (h, v) => { if (h.includes('Cumple')) return String(v) === '1' ? 'CUMPLE' : 'NO CUMPLE'; return String(v).substring(0, 30); };

            let sel = `<div class="relative mt-2 filter-wrapper" onclick="event.stopPropagation()"><button onclick="window.toggleFilterDropdown(event, 'viv', ${idx})" class="w-full max-w-[120px] text-[9px] font-bold border border-slate-300 rounded shadow-sm outline-none bg-white cursor-pointer py-1 px-2 flex justify-between items-center ${cF ? 'bg-emerald-50 border-emerald-300 text-emerald-700' : ''}"><span class="truncate">${cF ? safeEscape(fmtV(h, cF)) : 'Todos'}</span><i data-lucide="filter" class="w-3 h-3 ${cF ? 'text-emerald-500' : 'text-slate-400'}"></i></button><div id="dropdown-viv-${idx}" class="filter-dropdown-menu hidden absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-xl z-50 flex flex-col font-normal text-left"><div class="p-2 border-b border-slate-100 bg-slate-50 rounded-t-lg"><input type="text" placeholder="Buscar..." class="w-full text-[10px] p-1.5 border border-slate-300 rounded outline-none focus:border-emerald-500" onkeyup="window.filterDropdownOptions(event, 'viv', ${idx})"></div><div class="max-h-48 overflow-y-auto custom-scroll py-1"><div class="filter-option px-3 py-2 text-[10px] cursor-pointer hover:bg-emerald-50 truncate transition-colors ${!cF ? 'bg-emerald-100 font-bold text-emerald-700' : 'text-slate-600'}" onclick="window.applyTableFilter('viv', ${idx}, '')">[ Todos ]</div>${uV.map(v => `<div class="filter-option px-3 py-2 text-[10px] cursor-pointer hover:bg-emerald-50 truncate transition-colors ${cF === v ? 'bg-emerald-100 font-bold text-emerald-700' : 'text-slate-600'}" onclick="window.applyTableFilter('viv', ${idx}, '${safeEscape(v)}')">${safeEscape(fmtV(h, v))}</div>`).join('')}${uV.length === 0 ? `<div class="px-3 py-4 text-[10px] text-slate-400 italic text-center">Sin opciones</div>` : ''}</div></div></div>`;

            let st = ""; let ls = "";
            if (h === 'Ubigeo') { st = "sticky z-30 bg-slate-200 border-r border-slate-300 sticky-col-shadow"; ls = "left: 0px; min-width: 110px; max-width: 110px;"; }
            else if (h === 'Nombre CCPP') { st = "sticky z-30 bg-slate-200 border-r border-slate-300 sticky-col-shadow"; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
            hViv += `<th class="px-4 py-3 text-[10px] font-black text-slate-600 uppercase tracking-widest align-top ${st}" style="${ls}"><div class="flex flex-col h-full justify-between"><span>${h}</span>${sel}</div></th>`;
        });
        hViv += `</tr></thead><tbody class="divide-y divide-slate-100">`;

        let sumSalud = 0, sumViv = 0, sumAmbos = 0;
        fCcppList.forEach((r, i) => {
            const bg = i % 2 === 0 ? "bg-white" : "bg-slate-50";
            hViv += `<tr class="${bg} hover:bg-emerald-50/60 transition-colors group">`;
            sumSalud += r[mapIdx[5]] || 0; sumViv += r[mapIdx[6]] || 0; sumAmbos += r[mapIdx[7]] || 0;
            mapIdx.forEach((idx, j) => {
                const h = vHeaders[j]; const c = r[idx];
                let st = ""; let ls = "";
                if (h === 'Ubigeo') { st = `sticky z-10 border-r border-slate-200 ${bg} group-hover:bg-emerald-50/60 sticky-col-shadow truncate`; ls = "left: 0px; min-width: 110px; max-width: 110px;"; }
                else if (h === 'Nombre CCPP') { st = `sticky z-10 border-r border-slate-200 ${bg} group-hover:bg-emerald-50/60 sticky-col-shadow truncate`; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
                let tA = `class="px-4 py-2.5 text-xs ${st} transition-colors" style="${ls}"`; if (h === 'Nombre CCPP' || h === 'Nombre SAP' || (!st && typeof c === 'string' && c.length > 10 && !c.startsWith('{') && !c.startsWith('['))) tA += ` title="${safeEscape(c)}"`;
                let ctt = c;
                if (h.includes('Cumple')) {
                    ctt = c === 1 ? `<div class="mx-auto w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><i data-lucide="check" class="w-3 h-3"></i></div>` : `<div class="mx-auto w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600"><i data-lucide="x" class="w-3 h-3"></i></div>`;
                    tA = tA.replace('class="', 'class="text-center ');
                } else { tA = tA.replace('class="', 'class="text-slate-600 max-w-[150px] truncate '); }
                hViv += `<td ${tA}>${ctt}</td>`;
            });
            hViv += `</tr>`;
        });

        hViv += `</tbody><tfoot class="sticky bottom-0 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"><tr class="bg-emerald-100 border-t-2 border-emerald-300 font-black text-emerald-900">`;
        vHeaders.forEach((h, j) => {
            let st = ""; let ls = "";
            if (h === 'Ubigeo') { st = `sticky z-40 border-r border-emerald-300 bg-emerald-100 sticky-col-shadow truncate`; ls = "left: 0px; min-width: 110px; max-width: 110px;"; }
            else if (h === 'Nombre CCPP') { st = `sticky z-40 border-r border-emerald-300 bg-emerald-100 sticky-col-shadow truncate`; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
            let ctt = "";
            if (j === 0) ctt = "TOTALES:";
            else if (j === 1) ctt = `<span class="text-emerald-700 text-sm">${fCcppList.length}</span> reg.`;
            else if (h === 'Cumple Salud') ctt = `<span class="text-emerald-700 text-sm">${sumSalud}</span>`;
            else if (h === 'Cumple Vivienda') ctt = `<span class="text-emerald-700 text-sm">${sumViv}</span>`;
            else if (h === 'Cumple Ambos') ctt = `<span class="text-emerald-700 text-sm">${sumAmbos}</span>`;
            hViv += `<td class="px-4 py-2 text-xs uppercase tracking-widest text-center ${st}" style="${ls}">${ctt}</td>`;
        }); hViv += `</tr></tfoot></table>`;
        if (contViv) contViv.innerHTML = hViv;
    } else { const vivWrapper = getEl('fed-vivienda-table-wrapper'); if (vivWrapper) vivWrapper.classList.add('hidden'); }

    if (APP_STATE.fedActiveTab === 'ind3') {
        let hP2Filters = '';
        if (APP_STATE.paso2Filters && Object.keys(APP_STATE.paso2Filters).length > 0) {
            hP2Filters += `<div class="bg-indigo-50/80 px-4 py-2.5 border-b border-indigo-100 flex gap-3 items-center overflow-x-auto custom-scroll w-full"><span class="text-[10px] font-black text-indigo-800 uppercase tracking-widest flex-shrink-0"><i data-lucide="filter" class="w-3 h-3 inline"></i> Activos:</span>`;
            Object.entries(APP_STATE.paso2Filters).forEach(([i, val]) => {
                if (!result.headers[i]) return;
                let dV = val; if (['Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1', 'Cumple paso 2', 'Cumple paso 1 y 2'].includes(result.headers[i]) || result.headers[i].startsWith('P2_')) { dV = val === '1' ? 'CUMPLE' : 'NO CUMPLE'; }
                hP2Filters += `<span class="bg-indigo-600 text-white text-[10px] px-2.5 py-1 rounded-md flex items-center gap-1 font-bold cursor-pointer hover:bg-red-500 hover:shadow transition-all flex-shrink-0" onclick="window.removeTableFilter(${i}, 'paso2')" title="Quitar filtro">${result.headers[i].replace('P2_', '')}: ${dV} <i data-lucide="x" class="w-3 h-3"></i></span>`;
            });
            hP2Filters += `<button onclick="window.clearAllTableFilters('paso2')" class="text-[10px] text-red-600 hover:text-red-800 font-bold ml-2 underline whitespace-nowrap flex-shrink-0">Borrar todo</button></div>`;
        }
        const paso2Wrapper = getEl('fed-paso2-table-wrapper');
        if (paso2Wrapper) paso2Wrapper.classList.remove('hidden');
        const contPaso2 = getEl('fed-paso2-table-container');
        let hP2 = hP2Filters + `<table class="min-w-full text-left border-collapse whitespace-nowrap"><thead class="bg-slate-100 sticky top-0 z-20 shadow-sm border-b border-slate-300"><tr>`;
        const p2HeadersNames = ['Ubigeo', 'Nombre CCPP', 'Provincia', 'Distrito', 'Red de Salud', 'Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1'];
        const p2Cols = [];
        result.headers.forEach((h, i) => {
            if (p2HeadersNames.includes(h) || h.startsWith('P2_') || h === 'Cumple paso 2' || h === 'Cumple paso 1 y 2') {
                p2Cols.push({ name: h.replace('P2_', ''), origName: h, idx: i });
            }
        });

        if (!APP_STATE.paso2Filters) APP_STATE.paso2Filters = {};
        let fP2List = fD;
        if (Object.keys(APP_STATE.paso2Filters).length > 0) {
            fP2List = fD.filter(r => {
                return Object.entries(APP_STATE.paso2Filters).every(([fI, fV]) => String(r[fI] ?? '').trim() === String(fV));
            });
        }

        p2Cols.forEach(col => {
            const h = col.name;
            const idx = col.idx;
            let dC = fD;
            if (Object.keys(APP_STATE.paso2Filters).length > 0) { dC = fD.filter(r => Object.entries(APP_STATE.paso2Filters).every(([fI, fV]) => parseInt(fI) === idx ? true : String(r[fI] ?? '').trim() === String(fV))); }
            const uV = [...new Set(dC.map(r => String(r[idx] ?? '').trim()))].filter(Boolean).sort();
            const cF = APP_STATE.paso2Filters[idx] || "";
            const fmtV = (h, v) => { if (['Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1', 'Cumple paso 2', 'Cumple paso 1 y 2'].includes(h) || col.origName.startsWith('P2_')) return String(v) === '1' ? 'CUMPLE' : 'NO CUMPLE'; return String(v).substring(0, 30); };
            let sel = `<div class="relative mt-2 filter-wrapper" onclick="event.stopPropagation()"><button onclick="window.toggleFilterDropdown(event, 'paso2', ${idx})" class="w-full max-w-[120px] text-[9px] font-bold border border-slate-300 rounded shadow-sm outline-none bg-white cursor-pointer py-1 px-2 flex justify-between items-center ${cF ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : ''}"><span class="truncate">${cF ? safeEscape(fmtV(col.origName, cF)) : 'Todos'}</span><i data-lucide="filter" class="w-3 h-3 ${cF ? 'text-indigo-500' : 'text-slate-400'}"></i></button><div id="dropdown-paso2-${idx}" class="filter-dropdown-menu hidden absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-xl z-50 flex flex-col font-normal text-left"><div class="p-2 border-b border-slate-100 bg-slate-50 rounded-t-lg"><input type="text" placeholder="Buscar..." class="w-full text-[10px] p-1.5 border border-slate-300 rounded outline-none focus:border-indigo-500" onkeyup="window.filterDropdownOptions(event, 'paso2', ${idx})"></div><div class="max-h-48 overflow-y-auto custom-scroll py-1"><div class="filter-option px-3 py-2 text-[10px] cursor-pointer hover:bg-indigo-50 truncate transition-colors ${!cF ? 'bg-indigo-100 font-bold text-indigo-700' : 'text-slate-600'}" onclick="window.applyTableFilter('paso2', ${idx}, '')">[ Todos ]</div>${uV.map(v => `<div class="filter-option px-3 py-2 text-[10px] cursor-pointer hover:bg-indigo-50 truncate transition-colors ${cF === v ? 'bg-indigo-100 font-bold text-indigo-700' : 'text-slate-600'}" onclick="window.applyTableFilter('paso2', ${idx}, '${safeEscape(v)}')">${safeEscape(fmtV(col.origName, v))}</div>`).join('')}${uV.length === 0 ? `<div class="px-3 py-4 text-[10px] text-slate-400 italic text-center">Sin opciones</div>` : ''}</div></div></div>`;
            let st = ""; let ls = "";
            if (h === 'Ubigeo') { st = "sticky z-30 bg-slate-200 border-r border-slate-300 sticky-col-shadow"; ls = "left: 0px; min-width: 110px; max-width: 110px;"; }
            else if (h === 'Nombre CCPP') { st = "sticky z-30 bg-slate-200 border-r border-slate-300 sticky-col-shadow"; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
            hP2 += `<th class="px-4 py-3 text-[10px] font-black text-slate-600 uppercase tracking-widest align-top ${st}" style="${ls}"><div class="flex flex-col h-full justify-between"><span>${h}</span>${sel}</div></th>`;
        });
        hP2 += `</tr></thead><tbody class="divide-y divide-slate-100">`;
        const sumsP2 = {}; p2Cols.forEach(col => { sumsP2[col.idx] = 0; });
        fP2List.forEach((r, i) => {
            const bg = i % 2 === 0 ? "bg-white" : "bg-slate-50";
            hP2 += `<tr class="${bg} hover:bg-indigo-50/60 transition-colors group">`;
            p2Cols.forEach(col => {
                const h = col.name; const c = r[col.idx];
                if (['Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1', 'Cumple paso 2', 'Cumple paso 1 y 2'].includes(h) || col.origName.startsWith('P2_')) { sumsP2[col.idx] += c || 0; }
                let st = ""; let ls = "";
                if (h === 'Ubigeo') { st = `sticky z-10 border-r border-slate-200 ${bg} group-hover:bg-indigo-50/60 sticky-col-shadow truncate`; ls = "left: 0px; min-width: 110px; max-width: 110px;"; }
                else if (h === 'Nombre CCPP') { st = `sticky z-10 border-r border-slate-200 ${bg} group-hover:bg-indigo-50/60 sticky-col-shadow truncate`; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
                let tA = `class="px-4 py-2.5 text-xs ${st} transition-colors" style="${ls}"`; if (h === 'Nombre CCPP' || h === 'Nombre SAP' || (!st && typeof c === 'string' && c.length > 10 && !c.startsWith('{') && !c.startsWith('['))) tA += ` title="${safeEscape(c)}"`;
                let ctt = c;
                if (['Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1', 'Cumple paso 2', 'Cumple paso 1 y 2'].includes(h) || col.origName.startsWith('P2_')) {
                    ctt = c === 1 ? `<div class="mx-auto w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><i data-lucide="check" class="w-3 h-3"></i></div>` : `<div class="mx-auto w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600"><i data-lucide="x" class="w-3 h-3"></i></div>`;
                    tA = tA.replace('class="', 'class="text-center ');
                } else { tA = tA.replace('class="', 'class="text-slate-600 max-w-[150px] truncate '); }
                hP2 += `<td ${tA}>${ctt}</td>`;
            });
            hP2 += `</tr>`;
        });
        hP2 += `</tbody><tfoot class="sticky bottom-0 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"><tr class="bg-indigo-100 border-t-2 border-indigo-300 font-black text-indigo-900">`;
        p2Cols.forEach((col, j) => {
            const h = col.name; let st = ""; let ls = "";
            if (h === 'Ubigeo') { st = `sticky z-40 border-r border-indigo-300 bg-indigo-100 sticky-col-shadow truncate`; ls = "left: 0px; min-width: 110px; max-width: 110px;"; }
            else if (h === 'Nombre CCPP') { st = `sticky z-40 border-r border-indigo-300 bg-indigo-100 sticky-col-shadow truncate`; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
            let ctt = ""; if (j === 0) ctt = "TOTALES:"; else if (j === 1) ctt = `<span class="text-indigo-700 text-sm">${fP2List.length}</span> reg.`; else if (['Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1', 'Cumple paso 2', 'Cumple paso 1 y 2'].includes(h) || col.origName.startsWith('P2_')) ctt = `<span class="text-indigo-700 text-sm">${sumsP2[col.idx]}</span>`;
            hP2 += `<td class="px-4 py-2 text-xs uppercase tracking-widest text-center ${st}" style="${ls}">${ctt}</td>`;
        });
        hP2 += `</tr></tfoot></table>`;
        if (contPaso2) contPaso2.innerHTML = hP2;
    } else { const paso2Wrapper = getEl('fed-paso2-table-wrapper'); if (paso2Wrapper) paso2Wrapper.classList.add('hidden'); }

    if (APP_STATE.fedActiveTab === 'ind3') {
        let hP2Filters = '';
        if (APP_STATE.paso2Filters && Object.keys(APP_STATE.paso2Filters).length > 0) {
            hP2Filters += `<div class="bg-indigo-50/80 px-4 py-2.5 border-b border-indigo-100 flex gap-3 items-center overflow-x-auto custom-scroll w-full"><span class="text-[10px] font-black text-indigo-800 uppercase tracking-widest flex-shrink-0"><i data-lucide="filter" class="w-3 h-3 inline"></i> Activos:</span>`;
            Object.entries(APP_STATE.paso2Filters).forEach(([i, val]) => {
                if (!result.headers[i]) return;
                let dV = val; if (['Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1', 'Cumple paso 2', 'Cumple paso 1 y 2'].includes(result.headers[i]) || result.headers[i].startsWith('P2_')) { dV = val === '1' ? 'CUMPLE' : 'NO CUMPLE'; }
                hP2Filters += `<span class="bg-indigo-600 text-white text-[10px] px-2.5 py-1 rounded-md flex items-center gap-1 font-bold cursor-pointer hover:bg-red-500 hover:shadow transition-all flex-shrink-0" onclick="window.removeTableFilter(${i}, 'paso2')" title="Quitar filtro">${result.headers[i].replace('P2_', '')}: ${dV} <i data-lucide="x" class="w-3 h-3"></i></span>`;
            });
            hP2Filters += `<button onclick="window.clearAllTableFilters('paso2')" class="text-[10px] text-red-600 hover:text-red-800 font-bold ml-2 underline whitespace-nowrap flex-shrink-0">Borrar todo</button></div>`;
        }
        const paso2Wrapper = getEl('fed-paso2-table-wrapper');
        if (paso2Wrapper) paso2Wrapper.classList.remove('hidden');
        const contPaso2 = getEl('fed-paso2-table-container');
        let hP2 = hP2Filters + `<table class="min-w-full text-left border-collapse whitespace-nowrap"><thead class="bg-slate-100 sticky top-0 z-20 shadow-sm border-b border-slate-300"><tr>`;
        const p2HeadersNames = ['Ubigeo', 'Nombre CCPP', 'Provincia', 'Distrito', 'Red de Salud', 'Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1'];
        const p2Cols = [];
        result.headers.forEach((h, i) => {
            if (p2HeadersNames.includes(h) || h.startsWith('P2_') || h === 'Cumple paso 2' || h === 'Cumple paso 1 y 2') {
                p2Cols.push({ name: h.replace('P2_', ''), origName: h, idx: i });
            }
        });

        if (!APP_STATE.paso2Filters) APP_STATE.paso2Filters = {};
        let fP2List = fD;
        if (Object.keys(APP_STATE.paso2Filters).length > 0) {
            fP2List = fD.filter(r => {
                return Object.entries(APP_STATE.paso2Filters).every(([fI, fV]) => String(r[fI] ?? '').trim() === String(fV));
            });
        }

        p2Cols.forEach(col => {
            const h = col.name;
            const idx = col.idx;
            let dC = fD;
            if (Object.keys(APP_STATE.paso2Filters).length > 0) { dC = fD.filter(r => Object.entries(APP_STATE.paso2Filters).every(([fI, fV]) => parseInt(fI) === idx ? true : String(r[fI] ?? '').trim() === String(fV))); }
            const uV = [...new Set(dC.map(r => String(r[idx] ?? '').trim()))].filter(Boolean).sort();
            const cF = APP_STATE.paso2Filters[idx] || "";
            const fmtV = (h, v) => { if (['Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1', 'Cumple paso 2', 'Cumple paso 1 y 2'].includes(h) || col.origName.startsWith('P2_')) return String(v) === '1' ? 'CUMPLE' : 'NO CUMPLE'; return String(v).substring(0, 30); };
            let sel = `<div class="relative mt-2 filter-wrapper" onclick="event.stopPropagation()"><button onclick="window.toggleFilterDropdown(event, 'paso2', ${idx})" class="w-full max-w-[120px] text-[9px] font-bold border border-slate-300 rounded shadow-sm outline-none bg-white cursor-pointer py-1 px-2 flex justify-between items-center ${cF ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : ''}"><span class="truncate">${cF ? safeEscape(fmtV(col.origName, cF)) : 'Todos'}</span><i data-lucide="filter" class="w-3 h-3 ${cF ? 'text-indigo-500' : 'text-slate-400'}"></i></button><div id="dropdown-paso2-${idx}" class="filter-dropdown-menu hidden absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-xl z-50 flex flex-col font-normal text-left"><div class="p-2 border-b border-slate-100 bg-slate-50 rounded-t-lg"><input type="text" placeholder="Buscar..." class="w-full text-[10px] p-1.5 border border-slate-300 rounded outline-none focus:border-indigo-500" onkeyup="window.filterDropdownOptions(event, 'paso2', ${idx})"></div><div class="max-h-48 overflow-y-auto custom-scroll py-1"><div class="filter-option px-3 py-2 text-[10px] cursor-pointer hover:bg-indigo-50 truncate transition-colors ${!cF ? 'bg-indigo-100 font-bold text-indigo-700' : 'text-slate-600'}" onclick="window.applyTableFilter('paso2', ${idx}, '')">[ Todos ]</div>${uV.map(v => `<div class="filter-option px-3 py-2 text-[10px] cursor-pointer hover:bg-indigo-50 truncate transition-colors ${cF === v ? 'bg-indigo-100 font-bold text-indigo-700' : 'text-slate-600'}" onclick="window.applyTableFilter('paso2', ${idx}, '${safeEscape(v)}')">${safeEscape(fmtV(col.origName, v))}</div>`).join('')}${uV.length === 0 ? `<div class="px-3 py-4 text-[10px] text-slate-400 italic text-center">Sin opciones</div>` : ''}</div></div></div>`;
            let st = ""; let ls = "";
            if (h === 'Ubigeo') { st = "sticky z-30 bg-slate-200 border-r border-slate-300 sticky-col-shadow"; ls = "left: 0px; min-width: 110px; max-width: 110px;"; }
            else if (h === 'Nombre CCPP') { st = "sticky z-30 bg-slate-200 border-r border-slate-300 sticky-col-shadow"; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
            hP2 += `<th class="px-4 py-3 text-[10px] font-black text-slate-600 uppercase tracking-widest align-top ${st}" style="${ls}"><div class="flex flex-col h-full justify-between"><span>${h}</span>${sel}</div></th>`;
        });
        hP2 += `</tr></thead><tbody class="divide-y divide-slate-100">`;
        const sumsP2 = {}; p2Cols.forEach(col => { sumsP2[col.idx] = 0; });
        fP2List.forEach((r, i) => {
            const bg = i % 2 === 0 ? "bg-white" : "bg-slate-50";
            hP2 += `<tr class="${bg} hover:bg-indigo-50/60 transition-colors group">`;
            p2Cols.forEach(col => {
                const h = col.name; const c = r[col.idx];
                if (['Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1', 'Cumple paso 2', 'Cumple paso 1 y 2'].includes(h) || col.origName.startsWith('P2_')) { sumsP2[col.idx] += c || 0; }
                let st = ""; let ls = "";
                if (h === 'Ubigeo') { st = `sticky z-10 border-r border-slate-200 ${bg} group-hover:bg-indigo-50/60 sticky-col-shadow truncate`; ls = "left: 0px; min-width: 110px; max-width: 110px;"; }
                else if (h === 'Nombre CCPP') { st = `sticky z-10 border-r border-slate-200 ${bg} group-hover:bg-indigo-50/60 sticky-col-shadow truncate`; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
                let tA = `class="px-4 py-2.5 text-xs ${st} transition-colors" style="${ls}"`; if (h === 'Nombre CCPP' || h === 'Nombre SAP' || (!st && typeof c === 'string' && c.length > 10 && !c.startsWith('{') && !c.startsWith('['))) tA += ` title="${safeEscape(c)}"`;
                let ctt = c;
                if (['Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1', 'Cumple paso 2', 'Cumple paso 1 y 2'].includes(h) || col.origName.startsWith('P2_')) {
                    ctt = c === 1 ? `<div class="mx-auto w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><i data-lucide="check" class="w-3 h-3"></i></div>` : `<div class="mx-auto w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600"><i data-lucide="x" class="w-3 h-3"></i></div>`;
                    tA = tA.replace('class="', 'class="text-center ');
                } else { tA = tA.replace('class="', 'class="text-slate-600 max-w-[150px] truncate '); }
                hP2 += `<td ${tA}>${ctt}</td>`;
            });
            hP2 += `</tr>`;
        });
        hP2 += `</tbody><tfoot class="sticky bottom-0 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"><tr class="bg-indigo-100 border-t-2 border-indigo-300 font-black text-indigo-900">`;
        p2Cols.forEach((col, j) => {
            const h = col.name; let st = ""; let ls = "";
            if (h === 'Ubigeo') { st = `sticky z-40 border-r border-indigo-300 bg-indigo-100 sticky-col-shadow truncate`; ls = "left: 0px; min-width: 110px; max-width: 110px;"; }
            else if (h === 'Nombre CCPP') { st = `sticky z-40 border-r border-indigo-300 bg-indigo-100 sticky-col-shadow truncate`; ls = "left: 110px; min-width: 150px; max-width: 150px;"; }
            let ctt = ""; if (j === 0) ctt = "TOTALES:"; else if (j === 1) ctt = `<span class="text-indigo-700 text-sm">${fP2List.length}</span> reg.`; else if (['Cumple Alerta', 'Tiene al menos una muestra con contaminación fecal', 'CCPP Bueno', 'Cumple Paso 1', 'Cumple paso 2', 'Cumple paso 1 y 2'].includes(h) || col.origName.startsWith('P2_')) ctt = `<span class="text-indigo-700 text-sm">${sumsP2[col.idx]}</span>`;
            hP2 += `<td class="px-4 py-2 text-xs uppercase tracking-widest text-center ${st}" style="${ls}">${ctt}</td>`;
        });
        hP2 += `</tr></tfoot></table>`;
        if (contPaso2) contPaso2.innerHTML = hP2;
    } else { const paso2Wrapper = getEl('fed-paso2-table-wrapper'); if (paso2Wrapper) paso2Wrapper.classList.add('hidden'); }
}

function renderFedConsolidatedAndChart(result) {
    if (APP_STATE.fedActiveTab === 'ind4') {
        const s = {};
        let gTotCol = 0; let gTotMon = 0;
        const monColsCount = result.headers.length - 9;
        let gMonCounts = Array(monColsCount).fill(0);
        let fD = result.data;
        if (Object.keys(APP_STATE.currentTableFilters).length > 0) {
            fD = result.data.filter(r => { return Object.entries(APP_STATE.currentTableFilters).every(([i, v]) => String(r[i] ?? '').trim() === String(v)); });
        }
        fD.forEach(r => {
            const red = r[6] || 'Sin Red';
            const key = red;
            if (!s[key]) s[key] = { red, cols: 0, mon: 0, mc: Array(monColsCount).fill(0) };
            s[key].cols++;
            const tM = parseInt(r[8]) || 0;
            s[key].mon += tM;
            gTotCol++;
            gTotMon += tM;
            for (let i = 0; i < monColsCount; i++) {
                if (String(r[9 + i]).trim() !== '') {
                    s[key].mc[i]++;
                    gMonCounts[i]++;
                }
            }
        });
        const monHeaders = result.headers.slice(9);
        const sortedKeys = Object.keys(s).sort();
        let html = `<div class="flex flex-col w-full p-4"><div class="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-6"><div class="bg-indigo-50/80 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center"><h5 class="font-bold text-xs text-indigo-900 uppercase tracking-widest">  Por RED DE SALUD</h5></div><div class="overflow-x-auto"><table class="min-w-full text-left"><thead class="bg-slate-50 sticky top-0 shadow-sm border-b border-slate-200"><tr><th class="px-5 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">Red de Salud</th><th class="px-5 py-3 text-center text-[10px] font-black text-slate-600 uppercase bg-slate-100">Total Colegio</th><th class="px-5 py-3 text-center text-[10px] font-black text-slate-600 uppercase bg-slate-100">Total Mon.</th>`;
        monHeaders.forEach(h => { html += `<th class="px-4 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">${h}</th>`; });
        html += `</tr></thead><tbody class="divide-y divide-slate-100">`;
        sortedKeys.forEach(k => {
            const obj = s[k];
            html += `<tr class="hover:bg-amber-50 transition-colors"><td class="px-5 py-2.5 text-[10px] font-bold text-slate-700">${obj.red}</td><td class="px-5 py-2.5 text-center text-xs font-black text-slate-800 bg-slate-50/50">${obj.cols}</td><td class="px-5 py-2.5 text-center text-xs font-black text-slate-800 bg-slate-50/50">${obj.mon}</td>`;
            obj.mc.forEach(v => { html += `<td class="px-4 py-2 text-center text-[11px] font-bold text-slate-700">${v}</td>`; });
            html += `</tr>`;
        });
        html += `</tbody><tfoot class="bg-indigo-50/80 border-t-2 border-indigo-200 font-black"><tr><td class="px-5 py-3 text-[10px] text-indigo-900 text-right uppercase tracking-widest">TOTAL GENERAL</td><td class="px-5 py-3 text-center text-sm text-indigo-700">${gTotCol}</td><td class="px-5 py-3 text-center text-sm text-indigo-700">${gTotMon}</td>`;
        gMonCounts.forEach(v => { html += `<td class="px-4 py-3 text-center text-sm text-indigo-700">${v}</td>`; });
        html += `</tr></tfoot></table></div></div></div>`;
        getEl('fed-consolidated-container').innerHTML = html;
        getEl('fed-chart-container').innerHTML = '';
        return;
    }
    const sR = {}; const sP = {}; const sD = {}; let gTC = 0, gCI = 0, gI = 0, gC = 0, gM = 0, gRi = 0;
    let gJul = 0, gAgo = 0, gSet = 0, gOct = 0, gNov = 0, gDic = 0;
    const isI1 = APP_STATE.fedActiveTab === 'ind1';
    const isI3 = APP_STATE.fedActiveTab === 'ind3';
    const evCols = []; if (isI1) { result.headers.forEach((h, i) => { if (h.startsWith('Ev_')) evCols.push(i); }); }
    const fM26 = APP_STATE.availableMonitorMonths.filter(m => m >= '2026-01' && m <= (APP_STATE.globalDateTo || '2026-12'));
    const idxPaso1 = result.headers.indexOf('Cumple Paso 1');
    const idxPaso2 = result.headers.indexOf('Cumple paso 2');
    const idxAmbos = result.headers.indexOf('Cumple paso 1 y 2');
    const p2MonthsIdxs = fM26.map(m => result.headers.indexOf(`P2_${NUM_MONTH[m.split('-')[1]]} ${m.split('-')[0]}`));
    let gEvs = []; if (isI1) gEvs = Array(evCols.length).fill(0);
    let fD = result.data; if (Object.keys(APP_STATE.currentTableFilters).length > 0) { fD = result.data.filter(r => { return Object.entries(APP_STATE.currentTableFilters).every(([i, v]) => String(r[i] ?? '').trim() === String(v)); }); }

    let ccppList = fD;
    let mapCcpp = {};
    let gViv = 0, gAmbos = 0;
    let idxViv = -1, idxAmb = -1;
    let idxSalud = -1;
    let gP1 = 0, gP2 = 0, gP1y2 = 0;
    let gM26 = Array(p2MonthsIdxs.length).fill(0);
    if (isI1) {
        idxSalud = result.headers.indexOf('Cumple Salud');
        idxViv = result.headers.indexOf('Cumple Vivienda');
        idxAmb = result.headers.indexOf('Cumple Ambos');

        fD.forEach(r => {
            const ubi = r[0]; const ccpp = r[1];
            const key = `${ubi}_${ccpp}`;
            if (!mapCcpp[key]) { mapCcpp[key] = { r: [...r], sapsCount: 0, saludCount: 0, evsCount: Array(evCols.length).fill(0), saps: [] }; }
            mapCcpp[key].sapsCount++;
            mapCcpp[key].saps.push(r);
            if (r[idxSalud] === 1) mapCcpp[key].saludCount++;
            evCols.forEach((colIdx, i) => { if (r[colIdx] === 1) mapCcpp[key].evsCount[i]++; });
        });
        ccppList = Object.values(mapCcpp).map(x => {
            const row = [...x.r];
            evCols.forEach((colIdx, i) => { row[colIdx] = (x.evsCount[i] > 0) ? 1 : 0; });
            row[idxSalud] = (x.saludCount > 0) ? 1 : 0;
            row[idxAmb] = (row[idxSalud] === 1 && row[idxViv] === 1) ? 1 : 0;
            return row;
        });
    }

    ccppList.forEach(r => {
        let red = r[4] || 'Sin Red'; let pro = r[2] || 'Sin Provincia'; let dis = r[3] || 'Sin Distrito';
        if (isI1) { red = r[6] || 'Sin Red'; pro = r[4] || 'Sin Provincia'; dis = r[5] || 'Sin Distrito'; }
        const isI2 = APP_STATE.fedActiveTab === 'ind2';
        const idxI = isI2 ? result.headers.indexOf('Cumple Inspección') : -1;
        const idxC = isI2 ? result.headers.indexOf('Cumple Caracterizacion') : -1;
        const idxM = isI2 ? result.headers.indexOf('Cumple Monit. 5P') : -1;
        const idxR = isI2 ? result.headers.indexOf('Cumple Rep. Riesgo') : -1;
        const idxCI2 = isI2 ? result.headers.indexOf('Cumplimiento Ind. 2') : -1;

        [sR, sP, sD].forEach((obj, idx) => {
            const k = idx === 0 ? red : (idx === 1 ? pro : dis);
            if (!obj[k]) {
                if (isI1) obj[k] = { cp: 0, c: 0, v: 0, a: 0, evs: Array(evCols.length).fill(0) };
                else if (isI3) obj[k] = { cp: 0, p1: 0, m26: Array(p2MonthsIdxs.length).fill(0), p2: 0, p1y2: 0 };
                else obj[k] = { cp: 0, i: 0, ca: 0, m: 0, ri: 0, c: 0 };
            }
            obj[k].cp++;
            if (isI1) { evCols.forEach((colIdx, i) => { const val = r[colIdx]; if (val === 1) obj[k].evs[i]++; }); if (r[idxSalud] === 1) obj[k].c++; if (r[idxViv] === 1) obj[k].v++; if (r[idxAmb] === 1) obj[k].a++; }
            else if (isI3) {
                if (r[idxPaso1] === 1) obj[k].p1++;
                if (r[idxPaso2] === 1) obj[k].p2++;
                if (r[idxAmbos] === 1) obj[k].p1y2++;
                p2MonthsIdxs.forEach((cI, i) => { if (r[cI] === 1) obj[k].m26[i]++; });
            }
            else if (isI2) { const ei = r[idxI]; const ec = r[idxC]; const em = r[idxM]; const er = r[idxR]; const ef = r[idxCI2]; if (ei === 1) obj[k].i++; if (ec === 1) obj[k].ca++; if (em === 1) obj[k].m++; if (er === 1) obj[k].ri++; if (ef === 1) obj[k].c++; }
        });
        gTC++;
        if (isI1) { evCols.forEach((colIdx, i) => { const val = r[colIdx]; if (val === 1) gEvs[i]++; }); if (r[idxSalud] === 1) gCI++; if (r[idxViv] === 1) gViv++; if (r[idxAmb] === 1) gAmbos++; }
        else if (isI3) {
            if (r[idxPaso1] === 1) gP1++;
            if (r[idxPaso2] === 1) gP2++;
            if (r[idxAmbos] === 1) gP1y2++;
            p2MonthsIdxs.forEach((cI, i) => { if (r[cI] === 1) gM26[i]++; });
        }
        else { if (r[idxI] === 1) gI++; if (r[idxC] === 1) gC++; if (r[idxM] === 1) gM++; if (r[idxR] === 1) gRi++; if (r[idxCI2] === 1) gCI++; }
    });

    const bHtml = (obj, lbl) => {
        let h = `<div class="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-6 last:mb-0"><div class="bg-indigo-50/80 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center"><h5 class="font-bold text-xs text-indigo-900 uppercase tracking-widest">→ Por ${lbl}</h5></div><div class="overflow-x-auto"><table class="min-w-full text-left"><thead class="bg-slate-50 sticky top-0 shadow-sm border-b border-slate-200"><tr><th class="px-5 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">${lbl}</th><th class="px-5 py-3 text-center text-[10px] font-black text-slate-600 uppercase bg-slate-100">Total CCPP</th>`;
        if (isI1) { h += evCols.map(colIdx => `<th class="px-4 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">${result.headers[colIdx].replace('Ev_', '')}</th>`).join(''); h += `<th class="px-5 py-3 text-center text-[10px] font-black text-emerald-600 uppercase bg-emerald-50/50">Cumplen >=3 Meses SALUD</th>`; }
        else if (isI3) {
            h += `<th class="px-4 py-3 text-center text-[10px] font-black text-emerald-600 uppercase">Cumple Paso 1</th>`;
            h += p2MonthsIdxs.map(colIdx => `<th class="px-4 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">${result.headers[colIdx].replace('P2_', '')}</th>`).join('');
            h += `<th class="px-4 py-3 text-center text-[10px] font-black text-blue-600 uppercase bg-blue-50/50">Cumple Paso 2</th><th class="px-5 py-3 text-center text-[10px] font-black text-indigo-600 uppercase bg-indigo-50/50">Cumple paso 1 y 2</th>`;
        }
        else {
            if (lbl === 'RED DE SALUD') h += `<th class="px-5 py-3 text-center text-[10px] font-black text-blue-600 uppercase bg-blue-50/50">META MEF</th><th class="px-5 py-3 text-center text-[10px] font-black text-indigo-600 uppercase bg-indigo-50/50">Meta Caract. 1er Tramo</th>`;
            h += `<th class="px-4 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">Inspección</th><th class="px-4 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">Caracterización</th><th class="px-4 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">Monitoreo 5P</th><th class="px-4 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">Riesgos</th><th class="px-5 py-3 text-center text-[10px] font-black text-emerald-600 uppercase bg-emerald-50/50">Cumplen Ind. 2</th>`;
        }
        h += `</tr></thead><tbody class="divide-y divide-slate-100">`;
        let gMetaMef = 0; let gMetaCaract = 0;
        Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0])).forEach(([k, v]) => {
            h += `<tr class="hover:bg-slate-50 transition-colors"><td class="px-5 py-2.5 text-[10px] text-left font-bold text-slate-700 uppercase whitespace-nowrap">${k}</td><td class="px-5 py-2.5 text-xs text-center font-bold text-slate-600 bg-slate-50">${v.cp}</td>`;
            if (isI1) { h += v.evs.map(ev => `<td class="px-4 py-2.5 text-xs text-center text-slate-700 font-bold">${ev}</td>`).join(''); h += `<td class="px-5 py-2.5 text-xs text-center font-black text-emerald-600 bg-emerald-50/50">${v.c}</td>`; }
            else if (isI3) {
                h += `<td class="px-4 py-2.5 text-xs text-center text-emerald-700 font-bold">${v.p1}</td>`;
                h += v.m26.map(m => `<td class="px-4 py-2.5 text-xs text-center text-slate-700">${m}</td>`).join('');
                h += `<td class="px-4 py-2.5 text-xs text-center text-blue-700 font-bold bg-blue-50/50">${v.p2}</td><td class="px-5 py-2.5 text-xs text-center text-indigo-700 font-black bg-indigo-50/50">${v.p1y2}</td>`;
            }
            else {
                if (lbl === 'RED DE SALUD') {
                    const metaMef = APP_STATE.metaMefPorRed[k] || 0; gMetaMef += metaMef;
                    const redU = String(k).toUpperCase().trim(); let mCaract = 0;
                    if (redU.includes('CANAS') && redU.includes('ESPINAR')) mCaract = 67;
                    else if (redU.includes('CHUMBIVILCAS')) mCaract = 70;
                    else if (redU.includes('NORTE')) mCaract = 100;
                    else if (redU.includes('SUR')) mCaract = 162;
                    else if (redU.includes('KIMBIRI')) mCaract = 46;
                    else if (redU.includes('CONVENCION') || redU.includes('CONVENCIÓN')) mCaract = 43;
                    gMetaCaract += mCaract;
                    h += `<td class="px-5 py-2.5 text-xs text-center font-bold text-blue-700 bg-blue-50/50">${metaMef}</td><td class="px-5 py-2.5 text-xs text-center font-bold text-indigo-700 bg-indigo-50/50">${mCaract || '-'}</td>`;
                }
                h += `<td class="px-4 py-2.5 text-xs text-center text-slate-500">${v.i}</td><td class="px-4 py-2.5 text-xs text-center text-slate-500">${v.ca}</td><td class="px-4 py-2.5 text-xs text-center text-slate-500">${v.m}</td><td class="px-4 py-2.5 text-xs text-center text-slate-500">${v.ri}</td><td class="px-5 py-2.5 text-xs text-center font-black text-emerald-600 bg-emerald-50/50">${v.c}</td>`;
            }
            h += `</tr>`;
        });
        h += `<tr class="bg-slate-800 border-t border-slate-700"><td class="px-5 py-3 text-[10px] text-left text-white font-black uppercase tracking-widest">TOTAL GENERAL</td><td class="px-5 py-3 text-xs text-center text-white font-bold bg-slate-900">${gTC}</td>`;
        if (isI1) { h += gEvs.map(gev => `<td class="px-4 py-3 text-xs text-center text-white font-bold">${gev}</td>`).join(''); h += `<td class="px-5 py-3 text-xs text-center text-emerald-400 font-black bg-emerald-900/50">${gCI}</td>`; }
        else if (isI3) {
            h += `<td class="px-4 py-3 text-xs text-center text-emerald-400 font-bold">${gP1}</td>`;
            h += gM26.map(m => `<td class="px-4 py-3 text-xs text-center text-white font-bold">${m}</td>`).join('');
            h += `<td class="px-4 py-3 text-xs text-center text-blue-400 font-bold bg-blue-900/50">${gP2}</td><td class="px-5 py-3 text-xs text-center text-indigo-400 font-black bg-indigo-900/50">${gP1y2}</td>`;
        }
        else {
            if (lbl === 'RED DE SALUD') h += `<td class="px-5 py-3 text-xs text-center font-black text-blue-300 bg-blue-900/50">${gMetaMef}</td><td class="px-5 py-3 text-xs text-center font-black text-indigo-300 bg-indigo-900/50">${gMetaCaract}</td>`;
            h += `<td class="px-4 py-3 text-xs text-center text-slate-300 font-bold">${gI}</td><td class="px-4 py-3 text-xs text-center text-slate-300 font-bold">${gC}</td><td class="px-4 py-3 text-xs text-center text-slate-300 font-bold">${gM}</td><td class="px-4 py-3 text-xs text-center text-slate-300 font-bold">${gRi}</td><td class="px-5 py-3 text-xs text-center text-emerald-400 font-black bg-emerald-900/50">${gCI}</td>`;
        }
        h += `</tr></tbody></table></div></div>`; return h;
    };

    const bHtmlViv = (obj, lbl) => {
        let h = `<div class="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-6 last:mb-0"><div class="bg-emerald-50/80 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center"><h5 class="font-bold text-xs text-emerald-900 uppercase tracking-widest">→ Emparejamiento Vivienda Por ${lbl}</h5></div><div class="overflow-x-auto"><table class="min-w-full text-left"><thead class="bg-slate-50 sticky top-0 shadow-sm border-b border-slate-200"><tr><th class="px-5 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">${lbl}</th><th class="px-5 py-3 text-center text-[10px] font-black text-slate-600 uppercase bg-slate-100">Total CCPP</th><th class="px-5 py-3 text-center text-[10px] font-black text-emerald-600 uppercase bg-emerald-50/50">Cumple Salud</th><th class="px-5 py-3 text-center text-[10px] font-black text-blue-600 uppercase bg-blue-50/50">Cumple Vivienda</th><th class="px-5 py-3 text-center text-[10px] font-black text-indigo-600 uppercase bg-indigo-50/50">Cumple Ambas</th></tr></thead><tbody class="divide-y divide-slate-100">`;
        Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0])).forEach(([k, v]) => {
            h += `<tr class="hover:bg-slate-50 transition-colors"><td class="px-5 py-2.5 text-[10px] text-left font-bold text-slate-700 uppercase whitespace-nowrap">${k}</td><td class="px-5 py-2.5 text-xs text-center font-bold text-slate-600 bg-slate-50">${v.cp}</td><td class="px-5 py-2.5 text-xs text-center font-black text-emerald-600 bg-emerald-50/50">${v.c}</td><td class="px-5 py-2.5 text-xs text-center font-black text-blue-600 bg-blue-50/50">${v.v}</td><td class="px-5 py-2.5 text-xs text-center font-black text-indigo-600 bg-indigo-50/50">${v.a}</td></tr>`;
        });
        h += `<tr class="bg-slate-800 border-t border-slate-700"><td class="px-5 py-3 text-[10px] text-left text-white font-black uppercase tracking-widest">TOTAL GENERAL</td><td class="px-5 py-3 text-xs text-center text-white font-bold bg-slate-900">${gTC}</td><td class="px-5 py-3 text-xs text-center text-emerald-400 font-black bg-emerald-900/50">${gCI}</td><td class="px-5 py-3 text-xs text-center text-blue-400 font-black bg-blue-900/50">${gViv}</td><td class="px-5 py-3 text-xs text-center text-indigo-400 font-black bg-indigo-900/50">${gAmbos}</td></tr></tbody></table></div></div>`;
        return h;
    };

    let ht = '<div class="flex flex-col w-full p-4">';
    ht += bHtml(sR, "RED DE SALUD");
    if (isI1) {
        ht += `<div class="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mt-2 mb-6"><div class="bg-blue-50/80 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center"><h5 class="font-bold text-xs text-blue-900 uppercase tracking-widest">→ Avance Total vs Meta Asumida</h5></div><div class="overflow-x-auto"><table class="min-w-full text-left"><thead class="bg-slate-50 sticky top-0 shadow-sm border-b border-slate-200"><tr>`;
        ht += evCols.map(colIdx => `<th class="px-5 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">${result.headers[colIdx].replace('Ev_', '')} (Eval. Completa)</th>`).join('');
        ht += `<th class="px-5 py-3 text-center text-[10px] font-black text-emerald-600 uppercase bg-emerald-50/50">Cumplen >=3 Meses SALUD</th>`;
        ht += `<th class="px-5 py-3 text-center text-[10px] font-black text-blue-600 uppercase bg-blue-100">Cumplen >=3 Meses VIVIENDA</th>`;
        ht += `<th class="px-5 py-3 text-center text-[10px] font-black text-indigo-600 uppercase bg-indigo-100">Cumple Ambas</th>`;
        ht += `<th class="px-5 py-3 text-center text-[10px] font-black text-slate-600 uppercase bg-slate-200">Meta Asumida</th></tr></thead><tbody class="divide-y divide-slate-100"><tr class="hover:bg-slate-50 transition-colors">`;
        ht += gEvs.map(gev => `<td class="px-5 py-4 text-sm text-center font-bold text-slate-700">${gev}</td>`).join('');
        ht += `<td class="px-5 py-4 text-sm text-center font-black text-emerald-600 bg-emerald-50/50">${gCI}</td>`;
        ht += `<td class="px-5 py-4 text-sm text-center font-black text-blue-600 bg-blue-50">${gViv}</td>`;
        ht += `<td class="px-5 py-4 text-sm text-center font-black text-indigo-600 bg-indigo-50">${gAmbos}</td>`;
        ht += `<td class="px-5 py-4 text-lg text-center font-black text-slate-700 bg-slate-100">200</td></tr></tbody></table></div></div>`;

        ht += bHtmlViv(sR, "RED DE SALUD");
    } else if (APP_STATE.fedActiveTab === 'ind2') {
        ht += `<div class="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mt-2 mb-6"><div class="bg-blue-50/80 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center"><h5 class="font-bold text-xs text-blue-900 uppercase tracking-widest">→ Avance Total vs Meta Asumida</h5></div><div class="overflow-x-auto"><table class="min-w-full text-left"><thead class="bg-slate-50 sticky top-0 shadow-sm border-b border-slate-200"><tr><th class="px-5 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">Inspección</th><th class="px-5 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">Caracterización</th><th class="px-5 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">Monitoreo 5P</th><th class="px-5 py-3 text-center text-[10px] font-bold text-slate-500 uppercase">Riesgos</th><th class="px-5 py-3 text-center text-[10px] font-black text-emerald-600 uppercase bg-emerald-50/50">Cumplen Ind. 2</th><th class="px-5 py-3 text-center text-[10px] font-black text-slate-600 uppercase bg-slate-200">Meta Asumida</th></tr></thead><tbody class="divide-y divide-slate-100"><tr class="hover:bg-slate-50 transition-colors"><td class="px-5 py-4 text-sm text-center font-bold text-slate-700">${gI}</td><td class="px-5 py-4 text-sm text-center font-bold text-slate-700">${gC}</td><td class="px-5 py-4 text-sm text-center font-bold text-slate-700">${gM}</td><td class="px-5 py-4 text-sm text-center font-bold text-slate-700">${gRi}</td><td class="px-5 py-4 text-sm text-center font-black text-emerald-600 bg-emerald-50/50">${gCI}</td><td class="px-5 py-4 text-lg text-center font-black text-slate-700 bg-slate-100">246</td></tr></tbody></table></div></div>`;
    } else if (APP_STATE.fedActiveTab === 'ind3') {
        ht += `<div class="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mt-2 mb-6"><div class="bg-blue-50/80 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center"><h5 class="font-bold text-xs text-blue-900 uppercase tracking-widest">→ Avance Total vs Meta Asumida</h5></div><div class="overflow-x-auto"><table class="min-w-full text-left"><thead class="bg-slate-50 sticky top-0 shadow-sm border-b border-slate-200"><tr><th class="px-5 py-3 text-center text-[10px] font-black text-emerald-600 uppercase bg-emerald-50/50">Cumple Paso 1</th><th class="px-5 py-3 text-center text-[10px] font-black text-blue-600 uppercase bg-blue-100">Cumple Paso 2</th><th class="px-5 py-3 text-center text-[10px] font-black text-indigo-600 uppercase bg-indigo-100">Cumple Ambos</th><th class="px-5 py-3 text-center text-[10px] font-black text-slate-600 uppercase bg-slate-200">Meta Asumida</th></tr></thead><tbody class="divide-y divide-slate-100"><tr class="hover:bg-slate-50 transition-colors"><td class="px-5 py-4 text-sm text-center font-black text-emerald-600 bg-emerald-50/50">${gP1}</td><td class="px-5 py-4 text-sm text-center font-black text-blue-600 bg-blue-50">${gP2}</td><td class="px-5 py-4 text-sm text-center font-black text-indigo-600 bg-indigo-50">${gP1y2}</td><td class="px-5 py-4 text-lg text-center font-black text-slate-700 bg-slate-100">-</td></tr></tbody></table></div></div>`;
    }
    ht += '</div>'; getEl('fed-consolidated-container').innerHTML = ht;

    let c = [0, 0, 0, 0]; let l = []; let colors = ['#10b981', '#f59e0b', '#ef4444', '#e2e8f0'];
    if (isI1) {
        const segIdx = result.headers.indexOf('Seguimiento');
        Object.values(mapCcpp).forEach(x => {
            let anyVerde = false, anyVerdeNaranja = false, allSinMonitoreo = true;
            x.saps.forEach(sapRow => {
                const s = sapRow[segIdx];
                if (s === 'Verde') anyVerde = true;
                if (s === 'Verde' || s === 'Naranja') anyVerdeNaranja = true;
                if (s !== 'Sin Monitoreo') allSinMonitoreo = false;
            });
            let ccppSg = 'Rojo';
            if (anyVerde) ccppSg = 'Verde'; else if (allSinMonitoreo) ccppSg = 'Sin Monitoreo'; else if (anyVerdeNaranja) ccppSg = 'Naranja';
            if (ccppSg === 'Verde') c[0]++; else if (ccppSg === 'Naranja') c[1]++; else if (ccppSg === 'Rojo') c[2]++; else c[3]++;
        });
        l = ['Cumple Meta (>=3)', 'Cumple Parcial (1-2)', 'No Cumple (0)', 'Sin Monitoreo'];
    }
    else if (isI3) {
        let wA = 0, woA = 0;
        fD.forEach(r => {
            if (r[12] === 1) wA++; else woA++;
        });
        c = [wA, woA]; l = ['Cumple Alerta (>= 2)', 'No Cumple (< 2)']; colors = ['#10b981', '#ef4444'];
    }
    else { const idxCI2 = result.headers.indexOf('Cumplimiento Ind. 2'); fD.forEach(r => { const f = r[idxCI2]; if (f === 1) c[0]++; else c[2]++; }); l = ['SAPs Cumplen Ind 2', '', 'No Cumplen', '']; }
    renderDoughnutChart(c, l, colors, `FED - ${APP_STATE.fedActiveTab.toUpperCase()}`, 'fed-chart-container');
}

window.exportToExcel = (prefix) => {
    const isF = prefix === 'fed'; const isR = prefix === 'res';
    const t = isR ? APP_STATE.resActiveTab : (isF ? APP_STATE.fedActiveTab : APP_STATE.sapActiveTab);
    const r = isR ? APP_STATE.resFilterRed : (isF ? APP_STATE.fedFilterRed : APP_STATE.sapFilterRed);
    const a = isR ? APP_STATE.resFilterAmbito : (isF ? APP_STATE.fedFilterAmbito : APP_STATE.sapFilterAmbito);

    let result;
    if (isF) {
        const raw = APP_STATE.fedCache[t]; if (!raw) return;
        let d = raw.data;
        const idxRedEx = raw.headers.indexOf('Red de Salud');
        if (r !== 'Todos' && idxRedEx !== -1) d = d.filter(x => x[idxRedEx] === r);
        const mI = raw.headers.indexOf('MEF'), fI = raw.headers.indexOf('FED'), srI = raw.headers.indexOf('SAP REGULARES'), midI = raw.headers.indexOf('MIDIS');
        if (a === 'MEF' && mI !== -1) d = d.filter(x => x[mI] === 1);
        if (a === 'FED' && fI !== -1) d = d.filter(x => x[fI] === 1);
        if (a === 'SAP REGULARES' && srI !== -1) d = d.filter(x => x[srI] === 1);
        if (a === 'MIDIS' && midI !== -1) d = d.filter(x => x[midI] === 1);

        result = { headers: raw.headers, data: d, type: 'fed' };
    } else {
        const cache = isR ? APP_STATE.resCache : APP_STATE.sapCache;
        const cK = `${t}_${r}_${a}_${APP_STATE.globalDateFrom}_${APP_STATE.globalDateTo}`;
        result = cache[cK];
    }
    if (!result || !result.data) return;

    let dE = result.data;
    if (Object.keys(APP_STATE.currentTableFilters).length > 0) {
        dE = dE.filter(row => Object.entries(APP_STATE.currentTableFilters).every(([i, v]) => {
            let cV = String(row[i] ?? '').trim();
            if (result.type === 'status_json' && parseInt(i) >= CORE_HEADERS.length && result.headers[i] !== 'Observación' && result.headers[i] !== 'Ver Detalle') {
                try { const d = JSON.parse(cV); return String(d.status) === String(v); } catch (e) { return false; }
            }
            return cV === String(v);
        }));
    }

    const wb = XLSX.utils.book_new();

    // --- HOJA 1: DETALLE (Con formato de texto en lugar de JSON) ---
    const dH = result.headers.filter(h => h !== 'Detalles' && h !== 'Ver Detalle');
    const dD = dE.map(row => {
        return result.headers.map((h, i) => {
            if (h === 'Detalles' || h === 'Ver Detalle') return null;
            let v = row[i];
            if (result.type === 'status_json' && i >= CORE_HEADERS.length && h !== 'Observación') {
                try {
                    const d = JSON.parse(v);
                    if (d.status === 1) return "COMPLETO";
                    if (d.status === 2) return "INCOMPLETO: " + (d.params ? d.params.join(', ') : '');
                    return "SIN MONITOREO";
                } catch (e) { }
            }
            if (result.type === 'caract_points' && i >= CORE_HEADERS.length) {
                try {
                    const pts = JSON.parse(v); const k = Object.keys(pts);
                    if (k.length === 0) return "SIN MONITOREO";
                    return k.map(p => `${p}: ${pts[p].status === 1 ? 'COMPLETO' : 'INCOMPLETO'}`).join(' | ');
                } catch (e) { }
            }
            if (result.type === 'vigilancia' && ['Inspección', 'Bacteriológico', 'Parasitológico', 'Físico Químicos', 'Inorgánicos', 'Monitoreo 5P', 'Riesgos', 'Vigilancia Completa'].includes(h)) {
                return v === 1 ? 'CUMPLE' : 'NO CUMPLE';
            }
            if (result.type === 'vigilancia' && ['Inspección', 'Bacteriológico', 'Parasitológico', 'Físico Químicos', 'Inorgánicos', 'Monitoreo 5P', 'Riesgos', 'Vigilancia Completa'].includes(h)) {
                return v === 1 ? 'CUMPLE' : 'NO CUMPLE';
            }
            if (isF) {
                if (h === 'Seguimiento') {
                    if (v === 'Verde') return 'CUMPLE (>=3)'; if (v === 'Naranja') return 'CUMPLE PARCIAL'; if (v === 'Rojo') return 'NO CUMPLE'; return 'SIN MONITOREO';
                }
                if (t === 'ind2' && (h.includes('Cumple') || h.includes('Cumplimiento') || h.startsWith('M5P') || h.startsWith('Riesgo') || h.startsWith('Cap:') || h.startsWith('Red:') || ['MEF', 'FED', 'SAP REGULARES', 'MIDIS'].includes(h))) {
                    return v === 1 ? 1 : 0;
                }
                if (h === 'Cumple Salud' || h === 'Cumple Vivienda' || h === 'Cumple Ambos' || h === 'MEF' || h === 'FED' || h === 'SAP REGULARES' || h === 'MIDIS' || h.startsWith('Ev_') || h.startsWith('EV_5p') || h.includes('Cumple') || h.startsWith('M5P') || h.startsWith('Riesgo') || h.startsWith('Cap:') || h.startsWith('Red:')) {
                    return v === 1 ? 'CUMPLE' : 'NO CUMPLE';
                }
            }
            return v;
        }).filter(x => x !== null);
    });
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([dH, ...dD]), "Detalle");

    // --- HOJA 2 y 3 PARA FED AI-01.01 ---
    if (isF && t === 'ind1') {
        const mapCcpp = {};
        const evCols = []; result.headers.forEach((h, i) => { if (h.startsWith('Ev_')) evCols.push(i); });
        const ev5pCols = []; result.headers.forEach((h, i) => { if (h.startsWith('EV_5p')) ev5pCols.push(i); });
        const sumCols = []; result.headers.forEach((h, i) => { if (h.startsWith('Tot Mon') || h.startsWith('Mon 5P') || h.includes('(Cl>=0.5)') || h.includes('(Turb<=5)')) sumCols.push(i); });
        const flagCols = ['MEF', 'FED', 'SAP REGULARES', 'MIDIS', 'Cumple Salud'].map(h => result.headers.indexOf(h)).filter(i => i !== -1);

        const idxSalud = result.headers.indexOf('Cumple Salud');
        const idxViv = result.headers.indexOf('Cumple Vivienda');
        const idxAmb = result.headers.indexOf('Cumple Ambos');
        const idxSeg = result.headers.indexOf('Seguimiento');
        const idxIdSap = result.headers.indexOf('Id. SAP');
        const idxNomSap = result.headers.indexOf('Nombre SAP');

        dE.forEach(r => {
            const ubi = r[0]; const ccpp = r[1];
            const key = `${ubi}_${ccpp}`;
            if (!mapCcpp[key]) {
                mapCcpp[key] = { r: [...r], saps: [] };
                sumCols.forEach(idx => mapCcpp[key].r[idx] = 0);
                ev5pCols.forEach(idx => mapCcpp[key].r[idx] = 0);
                evCols.forEach(idx => mapCcpp[key].r[idx] = 0);
                flagCols.forEach(idx => mapCcpp[key].r[idx] = 0);
            }
            mapCcpp[key].saps.push(r);

            sumCols.forEach(idx => { mapCcpp[key].r[idx] += (parseInt(r[idx]) || 0); });
            ev5pCols.forEach(idx => { if (r[idx] === 1) mapCcpp[key].r[idx] = 1; });
            evCols.forEach(idx => { if (r[idx] === 1) mapCcpp[key].r[idx] = 1; });
            flagCols.forEach(idx => { if (r[idx] === 1) mapCcpp[key].r[idx] = 1; });
        });

        const dD_eval = Object.values(mapCcpp).map(x => {
            const row = x.r;
            row[idxIdSap] = '-';
            row[idxNomSap] = '-';

            let anyVerde = false, anyVerdeNaranja = false, allSinMonitoreo = true;
            x.saps.forEach(sapRow => {
                const s = sapRow[idxSeg];
                if (s === 'Verde') anyVerde = true;
                if (s === 'Verde' || s === 'Naranja') anyVerdeNaranja = true;
                if (s !== 'Sin Monitoreo') allSinMonitoreo = false;
            });
            let ccppSg = 'Rojo';
            if (anyVerde) ccppSg = 'Verde'; else if (allSinMonitoreo) ccppSg = 'Sin Monitoreo'; else if (anyVerdeNaranja) ccppSg = 'Naranja';
            row[idxSeg] = ccppSg;

            row[idxAmb] = (row[idxSalud] === 1 && row[idxViv] === 1) ? 1 : 0;

            return result.headers.map((h, i) => {
                if (h === 'Detalles' || h === 'Ver Detalle') return null;
                if (h === 'Cumple Salud' || h === 'Cumple Vivienda' || h === 'Cumple Ambos' || h === 'MEF' || h === 'FED' || h === 'SAP REGULARES' || h === 'MIDIS' || h.startsWith('Ev_') || h.startsWith('EV_5p')) {
                    return row[i] === 1 ? 'CUMPLE' : 'NO CUMPLE';
                }
                if (h === 'Seguimiento') {
                    if (row[i] === 'Verde') return 'CUMPLE (>=3)'; if (row[i] === 'Naranja') return 'CUMPLE PARCIAL'; if (row[i] === 'Rojo') return 'NO CUMPLE'; return 'SIN MONITOREO';
                }
                return row[i];
            }).filter(v => v !== null);
        });

        XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([dH, ...dD_eval]), "Evaluacion");

        const sumR = {};
        let grandCcpp = 0;
        const evColIdxsEval = evCols.map(c => dH.indexOf(result.headers[c]));
        const idxSaludEval = dH.indexOf('Cumple Salud');
        const idxVivEval = dH.indexOf('Cumple Vivienda');
        const idxAmbEval = dH.indexOf('Cumple Ambos');

        dD_eval.forEach(r => {
            const red = r[dH.indexOf('Red de Salud')] || 'Sin Red';
            if (!sumR[red]) { sumR[red] = { ccpp: 0, evs: Array(evCols.length).fill(0), salud: 0, viv: 0, ambos: 0 }; }
            sumR[red].ccpp++;
            evColIdxsEval.forEach((colIdx, i) => { if (r[colIdx] === 'CUMPLE') sumR[red].evs[i]++; });
            if (r[idxSaludEval] === 'CUMPLE') sumR[red].salud++;
            if (r[idxVivEval] === 'CUMPLE') sumR[red].viv++;
            if (r[idxAmbEval] === 'CUMPLE') sumR[red].ambos++;
            grandCcpp++;
        });

        const consHeaders = ['Red de Salud', 'Total CCPP'];
        evColIdxsEval.forEach(c => consHeaders.push(dH[c].replace('Ev_', '') + ' (Eval. Completa)'));
        consHeaders.push('Cumplen >=3 Meses SALUD', 'Cumplen >=3 Meses VIVIENDA', 'Cumple Ambas', 'Meta Asumida');

        const consData = [consHeaders];
        const grandEvs = Array(evCols.length).fill(0);
        let grandSalud = 0, grandViv = 0, grandAmbos = 0;

        Object.keys(sumR).sort().forEach(red => {
            const v = sumR[red];
            const row = [red, v.ccpp];
            v.evs.forEach((evC, i) => { row.push(evC); grandEvs[i] += evC; });
            row.push(v.salud, v.viv, v.ambos, APP_STATE.metaMefPorRed[red] || 0);
            grandSalud += v.salud; grandViv += v.viv; grandAmbos += v.ambos;
            consData.push(row);
        });

        let totalMeta = 0;
        Object.values(APP_STATE.metaMefPorRed).forEach(m => totalMeta += m);

        const grandRow = ['TOTAL GENERAL', grandCcpp];
        grandEvs.forEach(evC => grandRow.push(evC));
        grandRow.push(grandSalud, grandViv, grandAmbos, totalMeta);
        consData.push(grandRow);

        XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(consData), "Consolidado");
    }
    // --- HOJA RESUMEN (Para las demás pestañas) ---
    else if (!isF) {
        const excludeColsExcelArr = [];
        const vIdx = CORE_HEADERS.length; const idxR = CORE_HEADERS.indexOf('Red de Salud');
        const sum = {}; const sapsR = {}; const avanceR = {};
        const isA = result.type === 'analysis'; const isJ = result.type === 'status_json'; const isC = result.type === 'caract_points';
        let sumH = isA ? ['Total Análisis', 'Parám. Excedidos', 'SAPs Cumplen'] : result.headers.slice(vIdx).filter(h => !excludeColsExcelArr.includes(h) && h !== 'Observación' && h !== 'Ver Detalle' && (t !== 'bacteriologico' || h.includes('(Total)')));
        const colC = sumH.length;
        const requiredMonths = Math.max(1, sumH.length >= 10 ? sumH.length - 2 : sumH.length - 1);

        dE.forEach(r => {
            const red = r[idxR] || 'Sin Red';
            if (!sum[red]) sum[red] = Array(colC).fill(null).map(() => (isJ || isC) ? { c: 0, i: 0, s: 0 } : 0);
            if (sapsR[red] === undefined) sapsR[red] = 0; sapsR[red]++;
            if (avanceR[red] === undefined) avanceR[red] = 0;
            if (isA) {
                const u1 = parseInt(r[vIdx]) || 0; const eF = parseInt(r[vIdx + 2]) || 0; const cm = parseInt(r[vIdx + 3]);
                if (u1 > 0 || eF > 0) { sum[red][0]++; sum[red][1] += (r[vIdx + 4] ? JSON.parse(r[vIdx + 4]).length : 0); if (cm === 1) sum[red][2]++; }
            } else {
                let cIdx = 0; let sysC = 0;
                for (let i = vIdx; i < r.length; i++) {
                    const hN = result.headers[i];
                    if (hN === 'Detalles' || hN === 'Observación' || hN === 'Ver Detalle' || (t === 'bacteriologico' && !hN.includes('(Total)'))) continue;
                    if (isJ) { try { const d = JSON.parse(r[i]); if (d.status === 1) { sum[red][cIdx].c++; sysC++; } else if (d.status === 2) sum[red][cIdx].i++; else sum[red][cIdx].s++; } catch (e) { } }
                    else if (isC) { try { const pts = JSON.parse(r[i]); const ks = Object.keys(pts); if (ks.length === 0) sum[red][cIdx].s++; else ks.forEach(k => { if (pts[k].status === 1) { sum[red][cIdx].c++; sysC++; } else sum[red][cIdx].i++; }); } catch (e) { } }
                    else { let val = parseInt(r[i]) || 0; if (val >= 1) { sum[red][cIdx]++; sysC++; } }
                    cIdx++;
                }
                if (sysC >= requiredMonths) { avanceR[red]++; }
            }
        });
        const showAvance = t === 'monitor' || t === 'bacteriologico' || t === 'riesgos';
        const summaryHeaders = ['Red de Salud', 'Cant. SAP', 'Meta MEF'];
        sumH.forEach(h => { if (isJ || isC) { summaryHeaders.push(`${h} (Compl.)`); } else { summaryHeaders.push(h); } });
        if (showAvance) summaryHeaders.push('Avance');

        const summaryData = [summaryHeaders];
        const finalTotals = Array(summaryHeaders.length - 3).fill(0);
        let grandSap = 0, grandMeta = 0;

        Object.entries(sum).sort((a, b) => a[0].localeCompare(b[0])).forEach(([red, vals]) => {
            const meta = APP_STATE.metaMefPorRed[red] || 0; grandSap += sapsR[red]; grandMeta += meta;
            const row = [red, sapsR[red], meta];
            let avance = avanceR[red] || 0;
            vals.forEach((v, i) => {
                if (isJ || isC) { row.push(v.c); } else { row.push(v); }
            });
            if (showAvance) row.push(avance);
            for (let k = 3; k < row.length; k++) finalTotals[k - 3] += row[k];
            summaryData.push(row);
        });
        summaryData.push(['TOTAL GENERAL', grandSap, grandMeta, ...finalTotals]);
        XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(summaryData), "Resumen");

        if (t === 'res_cloro') {
            const mapCcpp = {};
            dE.forEach(r => {
                const ubi = r[2] || ''; const ccpp = r[3] || '';
                const prov = r[5] || 'Sin Provincia'; const dist = r[4] || 'Sin Distrito';
                const key = `${ubi}_${ccpp}`;
                if (!mapCcpp[key]) mapCcpp[key] = { prov, dist, consume: 0 };
                if (parseInt(r[14]) === 1) mapCcpp[key].consume = 1;
            });

            const distMap = {};
            Object.values(mapCcpp).forEach(x => {
                const pdKey = `${x.prov}_${x.dist}`;
                if (!distMap[pdKey]) distMap[pdKey] = { prov: x.prov, dist: x.dist, totCcpp: 0, consCcpp: 0 };
                distMap[pdKey].totCcpp++;
                if (x.consume === 1) distMap[pdKey].consCcpp++;
            });

            const provMap = {}; let grandTotCcpp = 0, grandConsCcpp = 0;
            Object.values(distMap).forEach(d => {
                if (!provMap[d.prov]) provMap[d.prov] = { dists: [], totCcpp: 0, consCcpp: 0 };
                provMap[d.prov].dists.push(d); provMap[d.prov].totCcpp += d.totCcpp; provMap[d.prov].consCcpp += d.consCcpp;
                grandTotCcpp += d.totCcpp; grandConsCcpp += d.consCcpp;
            });

            const ccppSheetData = [['Provincia', 'Distrito', 'N° Centros Poblados', 'N° CCPP Consumen Agua Clorada', 'Porcentaje']];
            Object.keys(provMap).sort().forEach(prov => {
                const pData = provMap[prov];
                pData.dists.sort((a, b) => a.dist.localeCompare(b.dist)).forEach(d => {
                    const pct = d.totCcpp > 0 ? ((d.consCcpp / d.totCcpp) * 100).toFixed(1) : '0.0';
                    ccppSheetData.push([d.prov, d.dist, d.totCcpp, d.consCcpp, `${pct}%`]);
                });
                const subPct = pData.totCcpp > 0 ? ((pData.consCcpp / pData.totCcpp) * 100).toFixed(1) : '0.0';
                ccppSheetData.push([`TOTAL ${prov}`, '', pData.totCcpp, pData.consCcpp, `${subPct}%`]);
            });
            const grandPct = grandTotCcpp > 0 ? ((grandConsCcpp / grandTotCcpp) * 100).toFixed(1) : '0.0';
            ccppSheetData.push(['TOTAL GENERAL', '', grandTotCcpp, grandConsCcpp, `${grandPct}%`]);
            XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(ccppSheetData), "Consol. Centros Poblados");
        }
    }

    XLSX.writeFile(wb, `Reporte_${prefix.toUpperCase()}_${t}.xlsx`);
};

window.openLMPModal = (json) => { const dt = JSON.parse(json); getEl('modal-lmp-content').innerHTML = dt.map(d => `<div class="bg-white p-5 rounded-2xl border border-red-100 shadow-sm flex justify-between items-center hover:border-red-300"><div><span class="font-black text-slate-800 text-sm block mb-1.5">${d.metal}</span><span class="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-1 rounded-md">${d.month}</span></div><div class="text-right"><span class="text-red-600 font-black text-xl block mb-1.5">${d.value}</span><span class="text-[10px] font-bold text-slate-400">LMP: ${d.lmp}</span></div></div>`).join(''); getEl('modal-lmp').classList.remove('hidden'); };
window.closeModal = () => { getEl('modal-lmp').classList.add('hidden'); };

window.openParamsModal = (str, desc = "Detalles del registro:") => { getEl('modal-params-desc').textContent = desc; getEl('modal-params-content').innerHTML = str.split(',').filter(p => p.trim() !== '').map(p => `<span class="bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-bold">${p.trim().replace(/^Falta:\s*/, '')}</span>`).join(''); getEl('modal-params').classList.remove('hidden'); };
window.openCaractDetailModal = (html) => { getEl('modal-params-desc').textContent = "Puntos de muestreo evaluados:"; getEl('modal-params-content').innerHTML = html; getEl('modal-params').classList.remove('hidden'); };
window.closeParamsModal = () => { getEl('modal-params').classList.add('hidden'); };

window.openObsModal = (i, n, u, c, txt) => { getEl('obs-meta-idsap').innerText = i; getEl('obs-input-idsap').value = i; getEl('obs-meta-nomsap').innerText = n; getEl('obs-input-nomsap').value = n; getEl('obs-input-ubi').value = u; getEl('obs-meta-ccpp').innerText = c; getEl('obs-input-ccpp').value = c; getEl('obs-input-text').value = txt; getEl('btn-save-obs-text').innerText = txt ? 'Actualizar' : 'Guardar'; getEl('modal-obs').classList.remove('hidden'); };
window.closeObsModal = () => { getEl('modal-obs').classList.add('hidden'); };

window.openDeleteObsModal = (i, n, u, c) => { getEl('del-obs-idsap').value = i; getEl('del-obs-nomsap').value = n; getEl('del-obs-ubi').value = u; getEl('del-obs-ccpp-val').value = c; getEl('del-obs-ccpp').innerText = `${c} (${i})`; getEl('modal-delete-obs').classList.remove('hidden'); };
window.closeDeleteObsModal = () => { getEl('modal-delete-obs').classList.add('hidden'); };

window.confirmDeleteObservation = async () => {
    const i = getEl('del-obs-idsap').value; const n = getEl('del-obs-nomsap').value; const u = getEl('del-obs-ubi').value; const c = getEl('del-obs-ccpp-val').value;
    const b = getEl('btn-confirm-delete'); b.disabled = true; b.classList.add('opacity-50'); getEl('btn-confirm-delete-text').innerText = "Eliminando..."; getEl('btn-confirm-delete-loader').classList.remove('hidden');
    let obs = APP_STATE.rawData.observaciones;
    if (obs && obs.length > 0) { const h = obs[0]; let idx = findHeaderIndex(h, 'Id. SAP'); if (idx === -1) idx = 0; for (let j = 1; j < obs.length; j++) { if (String(obs[j][idx]).trim() === String(i).trim()) { obs.splice(j, 1); break; } } }
    try { if (window.APP_SCRIPT_URL) await fetch(window.APP_SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'DELETE', idSap: i, nomSap: n, ubi: u, ccpp: c, obsText: '' }) }); } catch (e) { }
    finally { APP_STATE.sapCache = {}; processActiveData(); window.closeDeleteObsModal(); getEl('btn-confirm-delete-text').innerText = "Sí, Eliminar"; getEl('btn-confirm-delete-loader').classList.add('hidden'); b.disabled = false; b.classList.remove('opacity-50'); }
};

window.saveObservation = async () => {
    const i = getEl('obs-input-idsap').value; const n = getEl('obs-input-nomsap').value; const u = getEl('obs-input-ubi').value; const c = getEl('obs-input-ccpp').value; const t = getEl('obs-input-text').value.trim();
    const a = t === '' ? 'DELETE' : 'SAVE';
    const b = getEl('btn-save-obs'); b.disabled = true; b.classList.add('opacity-50'); getEl('btn-save-obs-text').innerText = "Guardando..."; getEl('btn-save-obs-loader').classList.remove('hidden');
    let obs = APP_STATE.rawData.observaciones; if (!obs || obs.length === 0) { obs = [['Id. SAP', 'Nombre SAP', 'Ubigeo', 'Nombre CCPP', 'Observacion']]; APP_STATE.rawData.observaciones = obs; }
    const h = obs[0]; let idx = findHeaderIndex(h, 'Id. SAP'); let tIdx = findHeaderIndex(h, 'Observacion'); if (idx === -1) idx = 0; if (tIdx === -1) tIdx = 4;
    if (idx !== -1 && tIdx !== -1) { let fnd = false; for (let j = 1; j < obs.length; j++) { if (String(obs[j][idx]).trim() === String(i).trim()) { obs[j][tIdx] = t; fnd = true; break; } } if (!fnd && a === 'SAVE') { let nr = Array(h.length).fill(''); nr[idx] = i; let nI = findHeaderIndex(h, 'Nombre SAP'); if (nI !== -1) nr[nI] = n; let uI = findHeaderIndex(h, 'Ubigeo'); if (uI !== -1) nr[uI] = u; let cI = findHeaderIndex(h, 'Nombre CCPP'); if (cI !== -1) nr[cI] = c; nr[tIdx] = t; obs.push(nr); } }
    try { if (window.APP_SCRIPT_URL) await fetch(window.APP_SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: a, idSap: i, nomSap: n, ubi: u, ccpp: c, obsText: t }) }); } catch (e) { alert("Error al guardar"); }
    finally { APP_STATE.sapCache = {}; processActiveData(); window.closeObsModal(); getEl('btn-save-obs-text').innerText = "Guardar"; getEl('btn-save-obs-loader').classList.add('hidden'); b.disabled = false; b.classList.remove('opacity-50'); }
};

window.openMonitorDetailModal = (metaJson, histJson) => {
    const meta = JSON.parse(metaJson); window.currentMonitorHistory = JSON.parse(histJson); window.monitorDetailFilters = {};
    getEl('md-id').textContent = meta[0] || '-'; getEl('md-nombre').textContent = meta[1] || '-'; getEl('md-ccpp').textContent = meta[3] || '-'; getEl('md-prov').textContent = meta[5] || '-'; getEl('md-dist').textContent = meta[4] || '-'; getEl('md-red').textContent = meta[8] || '-';
    window.renderMonitorDetailTable();
    getEl('modal-monitor-detail').classList.remove('hidden'); if (window.lucide) window.lucide.createIcons();
};

window.setMonitorDetailFilter = (idx, val) => { window.monitorDetailFilters[idx] = val; window.renderMonitorDetailTable(); };
window.renderMonitorDetailTable = () => {
    const headers = ['# Muestreo', 'Fecha Muestreo', 'Fecha Finalizado', 'Mes', 'Ubicación', 'Nombre Lugar de Muestreo', 'Cloro', 'Cond.', 'pH', 'Temp.', 'Turb.'];
    let data = window.currentMonitorHistory || [];
    Object.entries(window.monitorDetailFilters).forEach(([idx, val]) => { if (val) data = data.filter(row => String(row[idx] || '').trim() === val); });

    let theadHtml = '<tr>';
    headers.forEach((h, idx) => {
        const uVals = [...new Set((window.currentMonitorHistory || []).map(r => String(r[idx] || '').trim()))].filter(Boolean).sort();
        let selHtml = '';
        if (uVals.length > 0) { const sV = window.monitorDetailFilters[idx] || ''; selHtml = `<select onchange="window.setMonitorDetailFilter(${idx}, this.value)" class="mt-1.5 w-full max-w-[120px] text-[10px] border border-slate-300 rounded outline-none cursor-pointer py-1 px-1 font-bold text-slate-700 bg-white shadow-sm hover:border-indigo-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"><option value="">Todos</option>${uVals.map(v => `<option value="${safeEscape(v)}" ${sV === v ? 'selected' : ''}>${safeEscape(v)}</option>`).join('')}</select>`; }
        theadHtml += `<th class="px-4 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-100 sticky top-0 align-top"><div class="mb-1">${h}</div>${selHtml}</th>`;
    }); theadHtml += '</tr>'; getEl('modal-monitor-detail-head').innerHTML = theadHtml;

    const tbody = getEl('modal-monitor-detail-body');
    if (data.length === 0) tbody.innerHTML = `<tr><td colspan="${headers.length}" class="px-4 py-8 text-center text-slate-400 text-sm font-medium">No hay registros que coincidan con el filtro.</td></tr>`;
    else {
        const cEmpty = (v) => isCellEmpty(v) ? '-' : v; const st = (v) => isCellEmpty(v) ? 'text-slate-300' : 'text-slate-700 font-medium text-center';
        tbody.innerHTML = data.map(h => `<tr class="hover:bg-indigo-50/30 transition-colors">
                <td class="px-4 py-2.5 text-xs text-slate-600">${cEmpty(h[0])}</td>
                <td class="px-4 py-2.5 text-xs text-slate-600">${cEmpty(h[1])}</td>
                <td class="px-4 py-2.5 text-xs text-slate-600">${cEmpty(h[2])}</td>
                <td class="px-4 py-2.5 text-xs text-indigo-700 font-black uppercase tracking-wider">${cEmpty(h[3])}</td>
                <td class="px-4 py-2.5 text-xs text-slate-600 max-w-[200px] truncate" title="${safeEscape(cEmpty(h[4]))}">${cEmpty(h[4])}</td>
                <td class="px-4 py-2.5 text-xs text-slate-600 max-w-[200px] truncate" title="${safeEscape(cEmpty(h[5]))}">${cEmpty(h[5])}</td>
                <td class="px-4 py-2.5 text-xs ${st(h[6])}">${cEmpty(h[6])}</td>
                <td class="px-4 py-2.5 text-xs ${st(h[7])}">${cEmpty(h[7])}</td>
                <td class="px-4 py-2.5 text-xs ${st(h[8])}">${cEmpty(h[8])}</td>
                <td class="px-4 py-2.5 text-xs ${st(h[9])}">${cEmpty(h[9])}</td>
                <td class="px-4 py-2.5 text-xs ${st(h[10])}">${cEmpty(h[10])}</td>
            </tr>`).join('');
    }
};

window.closeMonitorDetailModal = () => { getEl('modal-monitor-detail').classList.add('hidden'); };

window.renderUserTable = () => {
    const tb = getEl('users-table-body'); if (!tb) return;
    if (APP_STATE.usersList.length === 0) { tb.innerHTML = '<tr><td colspan="4" class="px-6 py-4 text-center text-sm text-slate-400">No hay usuarios</td></tr>'; return; }
    const lbl = getEl('users-count-label'); if (lbl) lbl.textContent = `${APP_STATE.usersList.length} Accesos Activos`;
    tb.innerHTML = APP_STATE.usersList.map((u, i) => `<tr class="${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-indigo-50 transition-colors"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold mr-3">${u.usuario.charAt(0).toUpperCase()}</div><span class="text-sm font-bold text-slate-700">${u.usuario}</span></div></td><td class="px-6 py-4 whitespace-nowrap"><span class="text-xs font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded">••••••••</span></td><td class="px-6 py-4 whitespace-nowrap"><span class="text-xs font-bold ${u.red === 'TODAS' ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-100 text-indigo-700'} px-2.5 py-1 rounded-full">${u.red}</span></td><td class="px-6 py-4 whitespace-nowrap"><span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-600"><div class="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Activo</span></td></tr>`).join('');
};

window.initWhiteboard = () => {
    const cv = getEl('wb-canvas'); if (!cv) return; const ctx = cv.getContext('2d'); APP_STATE.canvas = cv; APP_STATE.isDrawing = false;
    const resize = () => { const r = cv.parentElement.getBoundingClientRect(); cv.width = r.width; cv.height = r.height; ctx.fillStyle = 'white'; ctx.fillRect(0, 0, cv.width, cv.height); };
    window.addEventListener('resize', resize); setTimeout(resize, 100);
    const start = (e) => { APP_STATE.isDrawing = true; draw(e); };
    const end = () => { APP_STATE.isDrawing = false; ctx.beginPath(); };
    const draw = (e) => {
        if (!APP_STATE.isDrawing) return; const r = cv.getBoundingClientRect(); const x = (e.clientX || e.touches?.[0].clientX) - r.left; const y = (e.clientY || e.touches?.[0].clientY) - r.top;
        ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.strokeStyle = '#4f46e5'; ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y);
    };
    cv.addEventListener('mousedown', start); cv.addEventListener('mousemove', draw); cv.addEventListener('mouseup', end);
    cv.addEventListener('touchstart', start, { passive: true }); cv.addEventListener('touchmove', draw, { passive: true }); cv.addEventListener('touchend', end);
    window.clearCanvas = () => { ctx.clearRect(0, 0, cv.width, cv.height); ctx.fillStyle = 'white'; ctx.fillRect(0, 0, cv.width, cv.height); };
};

function renderDoughnutChart(data, labels, colors, title, containerId) {
    const container = getEl(containerId);
    if (!container) return;
    if (typeof Chart === 'undefined') {
        container.innerHTML = '<div class="flex items-center justify-center h-full text-slate-400 text-xs text-center p-4">Gráfico no disponible</div>';
        return;
    }
    container.innerHTML = '<div class="w-full h-full relative" style="min-height: 200px;"><canvas id="' + containerId + '-canvas"></canvas></div>';
    const ctx = document.getElementById(containerId + '-canvas').getContext('2d');
    if (window.currentCharts && window.currentCharts[containerId]) {
        window.currentCharts[containerId].destroy();
    }
    if (!window.currentCharts) window.currentCharts = {};

    window.currentCharts[containerId] = new Chart(ctx, {
        type: 'doughnut',
        data: { labels: labels, datasets: [{ data: data, backgroundColor: colors, borderWidth: 0, hoverOffset: 4 }] },
        options: {
            responsive: true, maintainAspectRatio: false, cutout: '70%',
            plugins: {
                legend: { position: 'bottom', labels: { padding: 15, boxWidth: 10, font: { size: 10 } } },
                title: { display: true, text: title, padding: { bottom: 15 }, font: { size: 12, weight: 'bold' }, color: '#334155' }
            }
        }
    });
}

// Inicializar la aplicación de manera segura
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}    