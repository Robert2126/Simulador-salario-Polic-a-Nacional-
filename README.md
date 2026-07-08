# Simulador IA de incremento del básico - Policía Nacional

Página estática para calcular de forma referencial el efecto de un porcentaje de incremento sobre la asignación básica mensual de integrantes de la Policía Nacional.

## Funcionalidades

- Cálculo del básico proyectado después del incremento.
- Diferencia mensual estimada.
- Incremento acumulado por número de meses.
- Comparativo por grado o referencia interna.
- Exportación de resultados en archivo CSV.
- Diseño adaptable a computador y celular.
- Consulta de fuentes salariales públicas en internet.
- Modelo salarial por grado con porcentajes aprendidos desde fuentes web.
- Asistente local que valida consistencia, diferencias y patrones.
- Conector opcional a backend de IA generativa con búsqueda web.

## Fuentes salariales e internet

El simulador incorpora un botón **Actualizar desde internet**. Este intenta leer fuentes públicas sobre incrementos salariales de la Policía Nacional y extraer porcentajes por grado.

La herramienta incluye una base semilla con porcentajes reportados públicamente para 2026. Esta base debe tratarse como orientativa hasta que se contraste con fuente normativa oficial, como decreto vigente, Diario Oficial, Función Pública, SUIN-Juriscol o Presidencia.

## IA avanzada con backend

Una página estática de GitHub Pages no debe contener una API key de IA. Por seguridad, la IA generativa con navegación web debe ejecutarse desde un backend.

Se agregó el archivo:

```text
backend/openai-worker.example.js
```

Ese archivo muestra cómo crear un backend tipo serverless que:

1. Recibe la simulación desde el frontend.
2. Recibe el historial local y el modelo salarial aprendido.
3. Consulta la API de OpenAI desde el servidor.
4. Usa herramienta de búsqueda web.
5. Devuelve un análisis técnico al simulador.

## Uso básico

1. Abra el archivo `index.html` en el navegador.
2. Seleccione el grado o categoría.
3. Ingrese el básico actual mensual.
4. Presione **Actualizar desde internet**.
5. Presione **Aplicar incremento web** si desea usar el porcentaje aprendido para ese grado.
6. Presione **Calcular** para ver el resultado inmediato.
7. Presione **Agregar y aprender** para guardar el caso y alimentar el aprendizaje local.
8. Opcionalmente, configure una URL de backend IA y presione **Consultar backend IA**.

## Privacidad

Los registros de simulación quedan almacenados en el navegador del usuario mediante `localStorage`. Si se configura un backend IA, el frontend enviará al backend la simulación, el historial y el modelo salarial aprendido. Antes de usarlo en producción, debe revisarse la política de tratamiento de datos.

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
