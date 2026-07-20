# Changelog del Proyecto - Seguimiento de Actividades SAP

## [2026-07-20] - Mejoras en GERESA Actividades y Control de Acceso
### Añadido
- **Control de Acceso por Roles (Red de Salud):** Se implementó una lógica de permisos estricta basada en el valor de "Red de Salud" en el maestro de Usuarios:
  - **Acceso Total:** Los usuarios con el rol `GERESA` (o `TODAS`) tienen acceso completo a todas las secciones del sistema, incluyendo *Calendario*, *GERESA Act.* y *Usuarios*. También pueden ver todas las redes en los filtros.
  - **Acceso Restringido:** Los usuarios de las diversas Redes de Salud específicas (como `CUSCO NORTE`, `CUSCO SUR`, `CHUMBIVILCAS`, etc.) ahora tendrán un menú lateral limitado. Sólo podrán visualizar y acceder a las secciones vitales de consulta: *Inicio*, *Actividades*, *Resultados*, *FED* y *Cerrar Sesión*.
### Añadido
- **Modal de Detalle de Actividad:** Se integró un botón "Ver Detalle" junto a cada actividad en la tabla GERESA. Al hacer clic, se despliega un moderno modal interactivo que presenta:
  - **Gráfico de Avance:** Un gráfico estadístico de barras (implementado con *Chart.js*) que muestra la evolución de la actividad mes a mes.
  - **Métricas Consolidadas:** Estadísticas calculadas automáticamente desde el registro diario, incluyendo total de días realizados, sumatoria de horas trabajadas, total de muestras/sistemas y la lista única de todos los participantes registrados.
  - **Galería Fotográfica Interactiva:** Extrae todas las URLs de Google Drive asociadas a la actividad en los registros diarios y genera un visualizador de imágenes responsivo en formato *grid*.
- **Columna Porcentaje de Ejecución:** Se agregó una nueva columna `% Ejecución` al final de la tabla de GERESA (a la derecha de Diciembre) para las pestañas APNOP y PPORDIT. Ésta suma los valores de los 12 meses y los divide entre la *META ANUAL*, mostrando el progreso porcentual con un decimal. Incluye colores dinámicos: Verde (>=100%), Ámbar (50-99%) y Rojo (<50%).
- **Nueva Pestaña "Otras Activ.":** Se incorporó una nueva sub-pestaña para las actividades que corresponden al Tipo de Matriz `OTRO`. Esta vista se alimenta directamente de los registros diarios (`registro_diario`) saltándose el catálogo fijo de metas, permitiendo listar dinámicamente cualquier actividad personalizada ingresada desde el calendario.
- **Renderizado Adaptativo de Tabla:** Para la pestaña de `Otras Activ.`, la tabla oculta dinámicamente las cabeceras y columnas de *META ANUAL* y *% Ejecución*, mostrando exclusivamente el nombre de la actividad, la unidad y el conteo de los 12 meses.

## [2026-07-19 / 2026-07-20] - Evidencias Fotográficas y Optimización de Webhook
### Añadido
- **Subida de Imágenes a Google Drive:** Se implementó una funcionalidad que permite adjuntar una fotografía (evidencia fotográfica) al momento de crear o actualizar una actividad en el calendario. La imagen se codifica en Base64 desde el cliente, burlando las limitaciones de `FormData` de Apps Script, y se sube exitosamente a una carpeta pública de Google Drive mediante el webhook.
- **Previsualización de Foto en Modal:** Al abrir el "Detalle de Actividad" en el calendario, si la actividad incluye una foto, la interfaz ahora carga un *thumbnail* o miniatura responsiva obtenida dinámicamente usando la API no oficial de Google Drive (`/thumbnail?id=...`), complementada con un botón para ver el archivo a resolución original en una pestaña nueva.

### Modificado
- **Buscador Inteligente de Columnas (Case-Insensitive):** Se incorporaron las funciones `getHeaderIndex` en el servidor Apps Script y `findHeaderIndex` en la UI cliente, las cuales flexibilizan la búsqueda de columnas por nombre independientemente del uso de mayúsculas, minúsculas o espacios adicionales. Esto soluciona de raíz los bugs donde la columna "ID" y "url img" no se identificaban correctamente al guardar nuevas filas en Sheets.
- **Configuración de CORS y OAuth de Apps Script:** Se ajustó el archivo de manifiesto `appsscript.json` del proyecto de Google para inyectar explícitamente el scope `https://www.googleapis.com/auth/drive`, y se fijó el parámetro `"access": "ANYONE_ANONYMOUS"`. Se eliminó de Apps Script el intento redundante de cambiar permisos por archivo (`setSharing`), que causaba excepciones innecesarias.
- **Actualización Optimizada y UI en Tiempo Real:** En el script del frontend, se eliminó temporalmente la restricción de `mode: 'no-cors'` permitiendo leer la respuesta JSON del webhook. Una vez subida la imagen exitosamente, la página detecta la nueva URL de Drive y actualiza el Calendario instantáneamente sin necesidad de esperar a que venza la caché de Sheets.


## [2026-07-18] - Soporte Multidía y Mejoras en Fechas
### Añadido
- **Soporte de Bloques Multidía:** El calendario ahora procesa eventos que abarcan varios días ("Fecha Inicio" a "Fecha Fin"). En la vista de Mes, el evento se muestra como un bloque continuo único (Banner). En las vistas de Día/Semana, el banner superior se oculta dinámicamente mediante JS y en su lugar se generan "bloques diarios discretos" para que el evento se dibuje cada día en su horario específico.
- **Campos Separados de Fechas:** Se ha migrado la columna única "Día" hacia 4 nuevas columnas: "Fecha Inicio", "Fecha Fin", "Hora Inicio", y "Hora Fin". El formulario de la interfaz y los webhooks se actualizaron para leer y enviar estas columnas independientemente.
- **Normalización de Formatos de Hora:** Se integró un parseador avanzado de fechas para decodificar automáticamente el formato de tiempo sin procesar que devuelve la API de Sheets (`Sat Dec 30 1899...`), extrayendo exitosamente las horas en formato `HH:mm`.

### Modificado
- **Lógica de Drag and Drop (Update):** Mover un evento dentro del calendario ahora limpia dinámicamente prefijos técnicos internos (`banner_` o `_multi_`) asegurando que el identificador enviado a la base de datos sea el original. Tras el guardado local, el calendario fuerza una resincronización visual completa para prevenir eventos "fantasma" desfasados.
- **Corrección de Eventos sin Duración (0 minutos):** Si la hora final coincide con la inicial, el código internamente calcula y añade 1 hora de diferencia. Esto arregla el bug visual donde las barras de evento se aplastaban horizontalmente sin mostrar texto.
- **UI Optimista Inteligente:** `saveCalendarEvent` y `deleteCalendarEvent` abandonaron las actualizaciones manuales de bloques aislados. Ahora inyectan los datos actualizados a la memoria cruda (`APP_STATE`) y mandan a reconstruir todo el calendario a través del conducto `initScheduleX()`.

## [2026-07-17] - Integración de Calendario de Actividades y GERESA Act.
### Añadido
- **Módulo de Calendario Interactivo:** Se implementó la librería `Schedule-X` v2.2.0 para visualizar las actividades diarias (Registro_Diario) de forma interactiva. El calendario admite vistas de Mes, Semana y Día, e incluye un botón "+ Añadir Actividad" con un modal de registro rápido. 
- **Flujo de Guardado y Sincronización:** Las nuevas actividades registradas en el calendario se envían a Google Sheets mediante `fetch`. Mientras se procesa la actualización, la pantalla muestra un estado de carga y posteriormente recarga toda la data llamando a `preloadSAPData()`. Esto garantiza que los cambios se reflejen de inmediato tanto en el Calendario como en las demás pestañas.
- **Pestaña GERESA Act.:** Se creó una nueva pestaña que comparte la misma base de datos del Calendario (Registro_Diario) pero que totaliza y consolida la cantidad de actividades realizadas en el mes. Esta tabla resume la sumatoria de actividades ejecutadas por cada tipo, proveyendo una vista tabular y ejecutiva.
- **Pestañas por Tipo de Matriz (APNOP / PPORDIT):** Se ha habilitado la categorización de actividades según su matriz en la sección GERESA Act. Ahora la interfaz presenta sub-pestañas para alternar dinámicamente entre las tablas de APNOP y PPORDIT, ocultando la columna de matriz y mostrando únicamente las actividades correspondientes a la categoría seleccionada.
- **Formulario de Registro Enriquecido:** Se ampliaron los campos en el modal de "Registrar Actividad". Ahora cuenta con un selector de "Tipo Matriz" que filtra dinámicamente las actividades. Se muestra automáticamente la "Unidad de Medida" de la actividad seleccionada. Además, se agregaron los campos opcionales: Cant. Análisis, Cant. SAP, Lista de Participantes y Observaciones, los cuales se envían estructurados al backend y se recuperan al momento de editar una actividad existente.
- **Actividades Manuales (OTRO):** Se incorporó la opción "OTRO" en el selector de "Tipo Matriz". Al seleccionarla, el campo de actividad se transforma en un cuadro de texto libre, permitiendo escribir nombres de actividades personalizadas (ej: Reuniones, Asistencias Técnicas) que no están en la lista predefinida. Estas actividades se registran normalmente en el Calendario y en Google Sheets.
- **Loader para Nuevas Pestañas:** Se modificó `switchTab` para que las pestañas `geresa` y `calendario` respeten el ícono global de carga (sap-loader). Si un usuario intenta acceder a estas vistas antes de que los datos de Google Sheets hayan finalizado su carga, el sistema bloqueará la interfaz con el loader hasta tener la información lista.
- **Modal Personalizado de Actividad:** Se reemplazó la alerta genérica del navegador (`confirm`) por un modal flotante elegante (`modal-event-action`). Al hacer clic en un evento, este modal muestra los detalles (título, fecha, descripción) y ofrece dos opciones: **Eliminar** (que procesa el borrado con el backend) y **Actualizar** (que precarga el formulario de creación para editar la actividad).

### Modificado
- **Lógica de Inicialización (Preact/Schedule-X):** Se solucionó un conflicto de ciclo de vida donde el calendario desaparecía al recargarse. Originalmente, el DOM se destruía para forzar el cálculo del ancho, pero si el calendario ya existía en memoria, nunca se volvía a dibujar. Ahora, si la instancia ya existe, solo se inyectan los nuevos eventos (`events.set()`) y se detiene el flujo, evitando destruir el DOM innecesariamente y mejorando drásticamente el rendimiento de actualización.
- **Limpieza del DOM (Virtual DOM):** Se reemplazó el uso de `container.innerHTML = ''` por una recreación completa del nodo contenedor (`document.createElement`). Esto previene el quiebre silencioso (pantalla en blanco) provocado cuando Preact perdía el rastro de sus nodos en memoria al re-renderizar.
- **Normalización de Fechas (Duración y Formato):** Se corrigió la importación de datos desde Google Sheets. Como el calendario no dibuja eventos de "0 minutos", ahora a las fechas que incluyen hora de inicio se les añade automáticamente 1 hora de duración. Asimismo, se forzó el formato estricto de dos dígitos para horas y minutos (ej. "09:00" en lugar de "9:0") mediante `padStart`, previniendo que el calendario colapse ante formatos truncados de Sheets.

### Fragmento de Código Principal Modificado
```javascript
// script.js (Fragmento de la lógica agregada para recreación del contenedor y padding de fechas)
if (container.offsetWidth === 0) {
    APP_STATE.calendarNeedsInit = true;
    return;
}
APP_STATE.calendarNeedsInit = false;
// Se reemplaza el contenedor para evitar crashes del DOM virtual de Preact
const newContainer = document.createElement('div');
newContainer.id = 'sx-calendar';
newContainer.className = container.className;
container.parentNode.replaceChild(newContainer, container);

// ...
// Asegurar padding de ceros en la fecha
let [h, m] = timePart.split(':');
h = String(h || '00').padStart(2, '0');
m = String(m || '00').padStart(2, '0');
dateRaw = `${datePart} ${h}:${m}`;
```

## [2026-07-13] -   
### Añadido
- Nueva fuente de datos `APNOP` en el objeto `URLS` (Google Sheets).
- Nuevas variables en `APP_STATE` para la caché de Ubigeos e Ids de SAP de APNOP (`apnopUbigeos` y `apnopSapIds`).
- Lógica de descarga y mapeo de datos APNOP durante el proceso inicial `preloadSAPData()`.
- Opciones de filtro "APNOP" agregadas a los menús desplegables de Ámbito en `index.html` para todas las vistas (SAP, Resultados LMP, FED).
- Soporte para el filtro de APNOP en las funciones de procesamiento `runSapLogic` y `Riesgos`, y soporte extendido en `processActiveData` (ahora las lógicas de FED aplican el filtro a nivel de interfaz basado en Sets dinámicos).

### Fragmento de Código Principal Modificado
```javascript
// script.js (Fragmento de la lógica agregada para runSapLogic y Riesgos)
if (ambitoFilter === 'APNOP') { 
    rM = rM.filter(row => 
        APP_STATE.apnopUbigeos.has(formatUbigeo(row[idxUbi])) || 
        APP_STATE.apnopSapIds.has(String(row[idxSap]).trim())
    ); 
}
```

## [2026-07-14] - Ajustes en la Pestaña Caracterización
### Modificado
- Se optimizó el Resumen Consolidado de la pestaña Caracterización para que el conteo de cumplimiento se base **por sistema (SAP)** en lugar de la sumatoria individual de puntos de monitoreo. Si un sistema tiene al menos un punto incompleto, se marca como incompleto; de lo contrario, si todos sus puntos están completos, cuenta como un sistema completo.
- Se eliminaron las columnas de `Ver Detalle Fuente` y `Ver Detalle Red` del Resumen Consolidado para simplificar la vista, excluyendo cualquier columna que inicie con "Ver Detalle".
- Se corrigió un error de desincronización de índices en el renderizado de la tabla consolidada que causaba que la pestaña se quedara atascada en "Procesando matriz..." al omitir procesar las columnas de detalles que ya no se muestran.
- Se removió la columna estática de `Meta Caract. 1er Tramo` del Resumen Consolidado de esta pestaña.

## [2026-07-15] - Ajustes en Pestaña Riesgos
### Añadido
- Se agregó lógica de autocompletado inteligente en la pestaña **Riesgos** para las columnas `Código Ipress`, `Nombre Ipress` y `Red de Salud`. Cuando estas columnas vienen vacías en la hoja `RIESGOS`, la aplicación ahora busca el `Id. SAP` (extraído del nombre del SAP) dentro de la base de datos principal activa (`MAIN` según rango de fechas) y completa automáticamente estos tres datos para no perder la traza al cruzar información.

### Fragmento de Código Principal Modificado
```javascript
// script.js (Dentro del procesador de 'riesgos')
if (!v && extractedId && sapMetaLookup[extractedId]) {
    if (x === 'Código Ipress') v = sapMetaLookup[extractedId].ipressCode;
    if (x === 'Nombre Ipress') v = sapMetaLookup[extractedId].ipressName;
    if (x === 'Red de Salud') v = sapMetaLookup[extractedId].red;
}
```
```javascript
// script.js (Ajuste en renderConsolidatedAndChart para contabilizar por sistema)
let hasIncomplete = false;
keys.forEach(k => { if (pts[k].status === 2) hasIncomplete = true; });
if (hasIncomplete) { sum[red][cIdx].i++; grTot[cIdx].i++; }
else { sum[red][cIdx].c++; grTot[cIdx].c++; sysC++; }
```

## [2026-07-09] - Ajustes en Filtros y Pestaña Riesgos

### Añadido
- **Iconos en Filtros:** Se agregaron iconos de Lucide (\layers\ para Ámbito y \map-pin\ para Ubicación) en la barra de filtros de \index.html\.
- **Filtro Ubicación (Nivel de Riesgo y Riesgo Sanitario):** Se implementó un filtro de opciones múltiples para 'Ubicación'.

### Cambiado
- **Lógica de Ámbito en Pestaña Riesgos:** Se añadió compatibilidad para que el filtro 'Ámbito' soporte opciones como \MIDIS\ y \Meta 2025\. Además, se corrigió el filtro \MEF\ para usar *Ubigeo* como respaldo si no hay *Id. SAP*.
\\javascript
// script.js - Lógica del Filtro MEF en Riesgos
// Antes: if (ambitoFilter === 'MEF' && idxSapR !== -1) lR = lR.filter(row => APP_STATE.mefSapIds.has(String(row[idxSapR]).trim()));
if (ambitoFilter === 'MEF') { 
    lR = lR.filter(row => (idxUbiR !== -1 && APP_STATE.mefUbigeos.has(formatUbigeo(row[idxUbiR]))) || 
                          (idxSapR !== -1 && APP_STATE.mefSapIds.has(String(row[idxSapR]).trim()))); 
}
\
- **Fusión de registros 2025/2026 en Riesgos:** Se modificó la lectura de la columna 'Nombre SAP' (\lNomSAP\). Si el nombre viene concatenado con el ID (ej. r69|CHACAMAYO\), el sistema extrae automáticamente el \Id. SAP\ y limpia el nombre.
\\javascript
// script.js - Extracción de Id. SAP y limpieza de Nombre
let rawNom = lNomSAP !== -1 ? r[lNomSAP] : '';
let extractedId = '';
if (rawNom && String(rawNom).includes('|')) {
    const pts = String(rawNom).split('|');
    extractedId = pts[0].trim();
    rawNom = pts[1].trim();
}
let nom = rawNom ? normalizeHeader(rawNom) : '';
// ...
// Al crear la metadata (meta) de la fila:
if (x === 'Id. SAP' && extractedId) return extractedId;
if (x === 'Nombre SAP' && rawNom) return rawNom;


### Corregido
- **Botón Descargar Excel (Actividades y Resultados):** Se solucionó un problema que impedía descargar el Excel. La llave de caché (`cK`) en la función `exportToExcel` no incluía el estado del nuevo filtro de *Ubicación* (`resFilterUbicaciones`), por lo que no encontraba los datos cacheados para exportar.
- **Desbordamiento de Filtros:** Se corrigió un problema de CSS (`overflow-x-auto`).
- **Filtrado estricto por Año en Riesgos:** Se implementó una regla que omite procesar filas cuyo año no coincida con el rango de fechas seleccionado.

## [2026-07-16] - Mejoras y Correcciones en Pestaña FED
### Modificado
- **Filtro de Fechas:** Se corrigió el comportamiento de los filtros de fecha en la pestaña **FED**. Anteriormente, al cambiar entre los indicadores (AI-01.01, AI-02.01, etc.), el sistema forzaba y sobreescribía la fecha inicial predeterminada por cada indicador, ignorando la selección manual del usuario. Ahora, la selección del rango de fechas se respeta y aplica de manera consistente en todos los sub-indicadores de la sección FED. Además, al modificar el filtro, los datos de la tabla se recalculan automáticamente sin quedar guardados en caché.
- **Lógica de Cumplimiento (>=5 Meses):** Se hizo dinámica la nomenclatura y la lógica de la columna **Seguimiento** en la tabla principal y en el resumen de indicadores de la pestaña **AI-01.01**. Si el filtro de inicio ("Desde") es a partir de Junio 2026, las columnas ahora mostrarán **CUMPLE (>=5)** y **Cumplen >=5 Meses SALUD / VIVIENDA** en lugar de ">=3".
- **Forzado de Valores para Vivienda:** Adicionalmente, para este periodo desde Junio 2026, los valores totales de cumplimiento de **VIVIENDA** y **Ambos** se muestran por defecto en **0**, ya que temporalmente no se tiene información consolidada para la fuente de vivienda en este tramo.

### Añadido
- **Meta Asumida Dinámica (AI-01.01):** Se hizo dinámica la columna **Meta Asumida** en la tabla *Avance Total vs Meta Asumida* para el indicador **AI-01.01**. Ahora su valor se ajusta automáticamente a **200** si el filtro de inicio está antes de junio 2026, y a **285** si el filtro comienza de junio 2026 en adelante.
- **Meta Asumida Dinámica (AI-02.01):** En la pestaña **AI-02.01**, la columna **Meta Asumida** ahora es dinámica. Si el rango es de Dic 2025 a Mayo 2026, muestra **246**. Si es de Jun 2026 a Dic 2026, muestra **525**.

### Fragmento de Código Principal Modificado
```javascript
// script.js (Asignación dinámica de etiquetas, forzado a 0 y Meta Asumida para ind1 e ind2)
let metaAsumidaInd1 = (APP_STATE.globalDateFrom >= '2026-06') ? 285 : 200;
let labelMeses = (APP_STATE.globalDateFrom >= '2026-06') ? "5" : "3";
# Changelog del Proyecto - Seguimiento de Actividades SAP

## [2026-07-13] -   
### Añadido
- Nueva fuente de datos `APNOP` en el objeto `URLS` (Google Sheets).
- Nuevas variables en `APP_STATE` para la caché de Ubigeos e Ids de SAP de APNOP (`apnopUbigeos` y `apnopSapIds`).
- Lógica de descarga y mapeo de datos APNOP durante el proceso inicial `preloadSAPData()`.
- Opciones de filtro "APNOP" agregadas a los menús desplegables de Ámbito en `index.html` para todas las vistas (SAP, Resultados LMP, FED).
- Soporte para el filtro de APNOP en las funciones de procesamiento `runSapLogic` y `Riesgos`, y soporte extendido en `processActiveData` (ahora las lógicas de FED aplican el filtro a nivel de interfaz basado en Sets dinámicos).

### Fragmento de Código Principal Modificado
```javascript
// script.js (Fragmento de la lógica agregada para runSapLogic y Riesgos)
if (ambitoFilter === 'APNOP') { 
    rM = rM.filter(row => 
        APP_STATE.apnopUbigeos.has(formatUbigeo(row[idxUbi])) || 
        APP_STATE.apnopSapIds.has(String(row[idxSap]).trim())
    ); 
}
```

## [2026-07-14] - Ajustes en la Pestaña Caracterización
### Modificado
- Se optimizó el Resumen Consolidado de la pestaña Caracterización para que el conteo de cumplimiento se base **por sistema (SAP)** en lugar de la sumatoria individual de puntos de monitoreo. Si un sistema tiene al menos un punto incompleto, se marca como incompleto; de lo contrario, si todos sus puntos están completos, cuenta como un sistema completo.
- Se eliminaron las columnas de `Ver Detalle Fuente` y `Ver Detalle Red` del Resumen Consolidado para simplificar la vista, excluyendo cualquier columna que inicie con "Ver Detalle".
- Se corrigió un error de desincronización de índices en el renderizado de la tabla consolidada que causaba que la pestaña se quedara atascada en "Procesando matriz..." al omitir procesar las columnas de detalles que ya no se muestran.
- Se removió la columna estática de `Meta Caract. 1er Tramo` del Resumen Consolidado de esta pestaña.

## [2026-07-15] - Ajustes en Pestaña Riesgos
### Añadido
- Se agregó lógica de autocompletado inteligente en la pestaña **Riesgos** para las columnas `Código Ipress`, `Nombre Ipress` y `Red de Salud`. Cuando estas columnas vienen vacías en la hoja `RIESGOS`, la aplicación ahora busca el `Id. SAP` (extraído del nombre del SAP) dentro de la base de datos principal activa (`MAIN` según rango de fechas) y completa automáticamente estos tres datos para no perder la traza al cruzar información.

### Fragmento de Código Principal Modificado
```javascript
// script.js (Dentro del procesador de 'riesgos')
if (!v && extractedId && sapMetaLookup[extractedId]) {
    if (x === 'Código Ipress') v = sapMetaLookup[extractedId].ipressCode;
    if (x === 'Nombre Ipress') v = sapMetaLookup[extractedId].ipressName;
    if (x === 'Red de Salud') v = sapMetaLookup[extractedId].red;
}
```
```javascript
// script.js (Ajuste en renderConsolidatedAndChart para contabilizar por sistema)
let hasIncomplete = false;
keys.forEach(k => { if (pts[k].status === 2) hasIncomplete = true; });
if (hasIncomplete) { sum[red][cIdx].i++; grTot[cIdx].i++; }
else { sum[red][cIdx].c++; grTot[cIdx].c++; sysC++; }
```

## [2026-07-09] - Ajustes en Filtros y Pestaña Riesgos

### Añadido
- **Iconos en Filtros:** Se agregaron iconos de Lucide (\layers\ para Ámbito y \map-pin\ para Ubicación) en la barra de filtros de \index.html\.
- **Filtro Ubicación (Nivel de Riesgo y Riesgo Sanitario):** Se implementó un filtro de opciones múltiples para 'Ubicación'.

### Cambiado
- **Lógica de Ámbito en Pestaña Riesgos:** Se añadió compatibilidad para que el filtro 'Ámbito' soporte opciones como \MIDIS\ y \Meta 2025\. Además, se corrigió el filtro \MEF\ para usar *Ubigeo* como respaldo si no hay *Id. SAP*.
\\javascript
// script.js - Lógica del Filtro MEF en Riesgos
// Antes: if (ambitoFilter === 'MEF' && idxSapR !== -1) lR = lR.filter(row => APP_STATE.mefSapIds.has(String(row[idxSapR]).trim()));
if (ambitoFilter === 'MEF') { 
    lR = lR.filter(row => (idxUbiR !== -1 && APP_STATE.mefUbigeos.has(formatUbigeo(row[idxUbiR]))) || 
                          (idxSapR !== -1 && APP_STATE.mefSapIds.has(String(row[idxSapR]).trim()))); 
}
\
- **Fusión de registros 2025/2026 en Riesgos:** Se modificó la lectura de la columna 'Nombre SAP' (\lNomSAP\). Si el nombre viene concatenado con el ID (ej. r69|CHACAMAYO\), el sistema extrae automáticamente el \Id. SAP\ y limpia el nombre.
\\javascript
// script.js - Extracción de Id. SAP y limpieza de Nombre
let rawNom = lNomSAP !== -1 ? r[lNomSAP] : '';
let extractedId = '';
if (rawNom && String(rawNom).includes('|')) {
    const pts = String(rawNom).split('|');
    extractedId = pts[0].trim();
    rawNom = pts[1].trim();
}
let nom = rawNom ? normalizeHeader(rawNom) : '';
// ...
// Al crear la metadata (meta) de la fila:
if (x === 'Id. SAP' && extractedId) return extractedId;
if (x === 'Nombre SAP' && rawNom) return rawNom;


### Corregido
- **Botón Descargar Excel (Actividades y Resultados):** Se solucionó un problema que impedía descargar el Excel. La llave de caché (`cK`) en la función `exportToExcel` no incluía el estado del nuevo filtro de *Ubicación* (`resFilterUbicaciones`), por lo que no encontraba los datos cacheados para exportar.
- **Desbordamiento de Filtros:** Se corrigió un problema de CSS (`overflow-x-auto`).
- **Filtrado estricto por Año en Riesgos:** Se implementó una regla que omite procesar filas cuyo año no coincida con el rango de fechas seleccionado.

## [2026-07-16] - Mejoras y Correcciones Generales
### Añadido
- **Nuevo Filtro de Ámbito "IIEE":** Se integró una nueva fuente de datos `IIEE` en el objeto `URLS` mediante un Google Sheet externo. Al igual que el filtro `APNOP`, el nuevo filtro **IIEE** cuenta con sus propios Sets para indexar los Ubigeos (`iieeUbigeos`) y Códigos SAP (`iieeSapIds`). Se añadió la opción "IIEE" en los desplegables de Ámbito de todas las pestañas de la interfaz (SAP, Resultados LMP, y FED) para permitir el filtrado exclusivo de los sistemas bajo la gestión de Instituciones Educativas en `runSapLogic`, el procesador de `Riesgos` y los indicadores `FED`.
### Modificado
- **Límites de Fechas Dinámicos por Pestaña FED:** Ahora, al cambiar entre pestañas de la sección FED, las opciones del filtro "Desde" se adaptan al periodo mínimo evaluable de cada indicador. Para **AI-01.01** el filtro empieza en Dic 2025; para **AI-02.01** y **AI-03.01** arranca estrictamente desde **Ene 2026**; y para **AI-05.01** el filtro se limita a comenzar desde **Jun 2026**. Si el usuario tiene seleccionada una fecha previa al cambiar de pestaña, el sistema reajustará automáticamente la selección al límite permitido por ese indicador en específico.
- **Filtro de Fechas:** Se corrigió el comportamiento de los filtros de fecha en la pestaña **FED**. Anteriormente, al cambiar entre los indicadores (AI-01.01, AI-02.01, etc.), el sistema forzaba y sobreescribía la fecha inicial predeterminada por cada indicador, ignorando la selección manual del usuario. Ahora, la selección del rango de fechas se respeta y aplica de manera consistente en todos los sub-indicadores de la sección FED. Además, al modificar el filtro, los datos de la tabla se recalculan automáticamente sin quedar guardados en caché.
- **Lógica de Cumplimiento (>=5 Meses):** Se hizo dinámica la nomenclatura y la lógica de la columna **Seguimiento** en la tabla principal y en el resumen de indicadores de la pestaña **AI-01.01**. Si el filtro de inicio ("Desde") es a partir de Junio 2026, las columnas ahora mostrarán **CUMPLE (>=5)** y **Cumplen >=5 Meses SALUD / VIVIENDA** en lugar de ">=3".
- **Forzado de Valores para Vivienda:** Adicionalmente, para este periodo desde Junio 2026, los valores totales de cumplimiento de **VIVIENDA** y **Ambos** se muestran por defecto en **0**, ya que temporalmente no se tiene información consolidada para la fuente de vivienda en este tramo.

### Añadido
- **Meta Asumida Dinámica (AI-01.01):** Se hizo dinámica la columna **Meta Asumida** en la tabla *Avance Total vs Meta Asumida* para el indicador **AI-01.01**. Ahora su valor se ajusta automáticamente a **200** si el filtro de inicio está antes de junio 2026, y a **285** si el filtro comienza de junio 2026 en adelante.
- **Meta Asumida Dinámica (AI-02.01):** En la pestaña **AI-02.01**, la columna **Meta Asumida** ahora es dinámica. Si el rango es de Dic 2025 a Mayo 2026, muestra **246**. Si es de Jun 2026 a Dic 2026, muestra **525**.
- **Lógica Condicional (AI-03.01):** En la pestaña **AI-03.01**, se implementaron reglas dinámicas según el rango de fechas. Si el filtro es de Enero a Mayo de 2026, la *Meta Asumida* es **50**, y el *Paso 1* (Alertas y Caracterización) evalúa datos de 2025 (Jul-Dic). Si el rango comienza desde Junio 2026, la *Meta Asumida* cambia a **90**, las alertas y la caracterización (Paso 1) pasan a evaluar estrictamente el **primer semestre de 2026** (Enero a Junio), los encabezados cambian a los meses seleccionados, y el *Paso 2* ahora requiere cumplir Cloro y Turbiedad en **al menos 4 meses**. Además, **las columnas mostradas para evaluar el Paso 2 (tanto en la tabla principal como en la tabla por Red de Salud)** ahora se generan y ajustan dinámicamente para calzar de manera exacta con el rango de meses seleccionado (Ej. Ene-May o Jun-Dic).

### Fragmento de Código Principal Modificado
```javascript
// script.js (Asignación dinámica de etiquetas, forzado a 0 y Meta Asumida para ind1, ind2 e ind3)
let metaAsumidaInd1 = (APP_STATE.globalDateFrom >= '2026-06') ? 285 : 200;
let labelMeses = (APP_STATE.globalDateFrom >= '2026-06') ? "5" : "3";
ht += `<td class="px-5 py-4 text-lg text-center font-black text-slate-700 bg-slate-100">${metaAsumidaInd1}</td>`;
ht += `<th ...>Cumplen >=${labelMeses} Meses SALUD</th>`;

if (APP_STATE.globalDateFrom >= '2026-06') { row[idxViv] = 0; }
row[idxAmb] = (row[idxSalud] === 1 && row[idxViv] === 1) ? 1 : 0;

// Para ind2
let metaAsumidaInd2 = (APP_STATE.globalDateFrom >= '2026-06') ? 525 : 246;
const required5p = (APP_STATE.globalDateFrom >= '2026-06') ? 5 : 4;
const em = p5m >= required5p ? 1 : 0;

// Filtro estricto por mes para Caracterización e Inspección
if (ind === 'ind2' && iU1 !== -1 && fM.includes(ym)) { updateCaract(r, h1, id, ub); }
if (m[id] && fM.includes(ym) && !isCellEmpty(r[iFS])) { m[id].i++; }
```
