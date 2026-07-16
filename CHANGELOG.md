# Changelog del Proyecto - Seguimiento de Actividades SAP

## [2026-07-13] - Implementación de Ámbito APNOP
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
\
### Corregido
- **Botón Descargar Excel (Actividades y Resultados):** Se solucionó un problema que impedía descargar el Excel. La llave de caché (`cK`) en la función `exportToExcel` no incluía el estado del nuevo filtro de *Ubicación* (`resFilterUbicaciones`), por lo que no encontraba los datos cacheados para exportar.
```javascript
// script.js - Corrección de la llave de caché en exportToExcel
// Antes: const cK = `${t}_${r}_${a}_${APP_STATE.globalDateFrom}_${APP_STATE.globalDateTo}`;
const cK = `${t}_${r}_${a}_${APP_STATE.globalDateFrom}_${APP_STATE.globalDateTo}_${(APP_STATE.resFilterUbicaciones || []).join(',')}`;
```
- **Desbordamiento de Filtros:** Se corrigió un problema de CSS (\overflow-x-auto\).
- **Filtrado estricto por Año en Riesgos:** Se implementó una regla que omite procesar filas cuyo año no coincida con el rango de fechas seleccionado (\M\).
\\javascript
// script.js - Filtrado de filas fuera del rango de años seleccionado
let ano = iAR !== -1 && r[iAR] ? String(r[iAR]).trim() : '';
if (ano && !fM.some(ym => ym.startsWith(ano + '-'))) return;

let key = \_\;
\