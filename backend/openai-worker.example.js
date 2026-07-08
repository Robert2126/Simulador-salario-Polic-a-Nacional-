// Ejemplo de backend seguro para conectar el simulador con IA generativa e internet.
// Pensado para Cloudflare Workers, Vercel Functions, Netlify Functions o entorno serverless similar.
// No coloque OPENAI_API_KEY dentro del index.html. Configure la variable en el panel del proveedor.

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Use POST' }, 405);
    }

    try {
      const body = await request.json();
      const simulacion = body.simulacion || {};
      const historial = body.historial || [];
      const modeloSalarial = body.modeloSalarial || {};
      const fuentes = body.fuentes || [];

      const prompt = `
Actúe como analista técnico salarial. Analice una simulación salarial de integrantes de la Policía Nacional de Colombia.

Reglas:
1. Diferencie hechos, inferencias y aspectos pendientes de corroboración.
2. Priorice fuentes oficiales: decreto vigente, Diario Oficial, Función Pública, SUIN-Juriscol o Presidencia.
3. Si usa fuentes periodísticas, indíquelo como fuente secundaria y recomiende validación normativa.
4. No afirme que un básico es oficial si no está respaldado por fuente normativa.
5. Revise consistencia entre grado, incremento, básico, aumento mensual y acumulado.
6. Entregue respuesta breve, técnica y accionable.

Simulación actual:
${JSON.stringify(simulacion, null, 2)}

Historial local:
${JSON.stringify(historial.slice(-20), null, 2)}

Modelo salarial aprendido por el frontend:
${JSON.stringify(modeloSalarial, null, 2)}

Fuentes sugeridas por el frontend:
${JSON.stringify(fuentes, null, 2)}
      `;

      const response = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: env.OPENAI_MODEL || 'gpt-5.1',
          input: prompt,
          tools: [
            {
              type: 'web_search_preview',
              search_content_types: ['text']
            }
          ]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        return json({ error: 'OpenAI API error', details: errorText }, response.status);
      }

      const data = await response.json();
      const respuesta = extraerTexto(data);
      return json({ respuesta, raw: data });
    } catch (error) {
      return json({ error: error.message }, 500);
    }
  }
};

function extraerTexto(data) {
  if (data.output_text) return data.output_text;
  const partes = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (content.type === 'output_text' && content.text) partes.push(content.text);
    }
  }
  return partes.join('\n').trim() || 'No se recibió texto de respuesta.';
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...corsHeaders()
    }
  });
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  };
}
