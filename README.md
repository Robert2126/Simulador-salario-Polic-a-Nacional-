# Simulador inteligente de incremento del básico - Policía Nacional

Página estática para calcular de forma referencial el efecto de un porcentaje de incremento sobre la asignación básica mensual de integrantes de la Policía Nacional.

## Funcionalidades

- Cálculo del básico proyectado después del incremento.
- Diferencia mensual estimada.
- Incremento acumulado por número de meses.
- Comparativo por grado o referencia interna.
- Exportación de resultados en archivo CSV.
- Diseño adaptable a computador y celular.
- Asistente inteligente local con aprendizaje basado en las simulaciones guardadas en el navegador.

## Asistente IA local

El asistente no usa servidores externos ni API de inteligencia artificial. Su funcionamiento es local y se basa en reglas de análisis y patrones aprendidos del historial registrado en el navegador mediante `localStorage`.

Puede generar:

- Alertas cuando falta el básico, el incremento o el grado.
- Advertencias cuando el básico ingresado se aleja del promedio aprendido.
- Comparaciones entre el incremento actual y el incremento promedio histórico.
- Sugerencias específicas por grado cuando existen suficientes registros comparables.
- Identificación del mayor impacto mensual aprendido.
- Nivel de confianza del análisis: baja, media o alta, según el número de registros guardados.

## Uso

1. Abra el archivo `index.html` en el navegador.
2. Seleccione el grado o categoría.
3. Ingrese el básico actual mensual.
4. Registre el porcentaje de incremento.
5. Defina los meses a proyectar.
6. Presione **Calcular** para ver el resultado inmediato.
7. Presione **Agregar y aprender** para guardar el caso y alimentar el asistente local.
8. Presione **Consultar IA local** para generar recomendaciones con base en el historial.

## Privacidad

Los registros quedan almacenados únicamente en el navegador del usuario. No se envían datos a servidores externos.

## Publicación en GitHub Pages

Para publicar la página:

1. Ingresar al repositorio en GitHub.
2. Abrir **Settings**.
3. Ir a **Pages**.
4. En **Build and deployment**, seleccionar **Deploy from a branch**.
5. Elegir rama `main` y carpeta `/root`.
6. Guardar los cambios.

Después de la activación, GitHub generará la URL pública del sitio.

## Advertencia

Este simulador es únicamente referencial. No liquida nómina oficial. No incluye primas, subsidios, bonificaciones, deducciones, retenciones, aportes, retroactivos normativos ni factores prestacionales. Los resultados deben contrastarse con la normatividad vigente y las tablas oficiales antes de incorporarse en documentos administrativos.
