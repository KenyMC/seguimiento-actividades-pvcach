# Historial de Cambios y Mejoras (Changelog)

Este documento registra todas las modificaciones, mejoras y correcciones realizadas en el código, funcionando como una bitácora para facilitar el entendimiento de ajustes previos y futuras implementaciones.

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