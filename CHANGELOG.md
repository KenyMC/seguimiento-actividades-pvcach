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
