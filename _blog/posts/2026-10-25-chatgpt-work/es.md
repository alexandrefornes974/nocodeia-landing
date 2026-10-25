# ChatGPT Work para empresas: qué hizo Uber antes de liberarlo

ChatGPT Work es un agente de OpenAI, lanzado en julio de 2026, que ejecuta tareas de varios pasos dentro de ChatGPT: reúne información de apps y archivos y entrega hojas de cálculo, presentaciones y documentos. Uber lo probó con mil empleados antes de liberarlo para cerca de 30 mil. Ese camino sirve de guía para tu empresa.

Si diriges un área, conoces la escena: el equipo pide acceso a la IA, TI pide tiempo para evaluar y, mientras tanto, cada quien usa la cuenta personal que quiere, sin ningún control. La decisión de Uber, anunciada el 22 de octubre, muestra una salida más ordenada.

## ¿Qué es ChatGPT Work y cómo funciona?

ChatGPT Work es un agente: un asistente que ejecuta tareas, no solo responde. Según la [cobertura del lanzamiento de TNW](https://thenextweb.com/news/openai-chatgpt-work-agent-launch), OpenAI lo describe como un agente dentro de ChatGPT capaz de actuar en las apps y los archivos del usuario.

La diferencia con el chat común está en lo que pides. En el chat, haces una pregunta y recibes un texto. En Work, das un objetivo, y el agente divide el trabajo en pasos, ejecuta cada uno y entrega el archivo listo. En la práctica:

- **Reúne contexto de varias fuentes.** Se conecta mediante plugins (conectores que enlazan ChatGPT con otro sistema) a Slack, Microsoft Teams, Google Drive, SharePoint, correo, calendario y CRM (el sistema donde la empresa registra clientes y ventas).
- **Entrega el resultado, no solo la respuesta.** Hojas de cálculo, presentaciones, documentos y hasta pequeñas apps web.
- **Se queda en el proyecto.** Puede trabajar durante horas en la misma tarea y repetir acciones programadas.

El producto salió el 9 de julio con GPT-5.6, según [Fox Business](https://www.foxbusiness.com/technology/openai-unveils-chatgpt-work-automate-workplace-tasks-ai-race-intensifies), en una nota con aportes de Reuters. TNW agrega que usa tecnología de Codex, la herramienta de programación de OpenAI.

## ¿Qué hizo Uber antes de liberar ChatGPT Work para cerca de 30 mil personas?

Uber empezó con un piloto de mil empleados y solo después lo liberó para toda la empresa. Los detalles, publicados por [TechCrunch](https://techcrunch.com/2026/10/22/uber-puts-all-30000-employees-on-chatgpt-work/) el 22 de octubre, sirven de guía:

1. **Piloto pequeño y mixto.** Mil personas de áreas como finanzas, operaciones y producto.
2. **Áreas de negocio al frente.** Según Sumanth Sukumar, vicepresidente de ingeniería de Uber, cerca del 80% de los primeros usuarios no eran ingenieros.
3. **Usos concretos.** Analizar datos de la operación para detectar tendencias y armar recomendaciones, adaptar material de capacitación a otros mercados e idiomas y crear paneles interactivos.
4. **Experiencia previa.** Ese mismo año, Uber juntó a 30 ingenieros de IA con equipos de otras áreas y les dio dos semanas para automatizar partes de su trabajo.
5. **Medición después de liberar.** La empresa dijo que va a seguir cómo usan la herramienta los empleados y si les ayuda en su trabajo.

Lo que Uber no contó: cuánto está gastando. TechCrunch señala que el costo no se divulgó.

Para un gerente, la lección es el orden de los pasos. Primero un grupo pequeño, con gente de la operación, probando tareas reales. Después la liberación general, con la medición del uso ya acordada.

## ¿Cuánto cuesta ChatGPT Work?

OpenAI no divulgó un precio propio para ChatGPT Work en las fuentes que pudimos consultar. Lo que informa la cobertura del lanzamiento es la forma de cobro, y eso cambia la cuenta.

- **Está en todos los planes.** TNW y Fox Business dicen que Work está disponible en todos los planes de ChatGPT, incluido el gratuito; según Fox, desde la app de ChatGPT para computadora.
- **El uso se mide, como en Codex.** Según TNW, cada tarea no cuenta como una pregunta común de chat: las tareas más complejas gastan más de la cuota incluida en el plan.
- **Hay tope de gasto.** Los administradores de los planes Enterprise y Edu (este, para instituciones educativas) pueden definir límites de gasto por grupo.

En la práctica, el costo depende de cuántas tareas largas va a ejecutar el equipo, y eso solo aparece en un piloto. Antes de liberarlo para todos, pide a TI una estimación de consumo basada en el uso real de un grupo pequeño. La misma lógica vale para agentes hechos a la medida, como mostramos en el artículo sobre [cuánto cuesta un agente de IA](/es/blog/cuanto-cuesta-un-agente-de-ia/).

## ¿Qué controles configurar antes de liberar un agente para toda la empresa?

Define quién accede, qué lee el agente, qué puede hacer y cuándo debe pedir aprobación. Según la [cobertura de TNW sobre el lanzamiento](https://thenextweb.com/news/openai-chatgpt-work-agent-launch), estos son los controles que describe OpenAI:

| Control | Lo que describe OpenAI | Pregunta para TI |
|---|---|---|
| Acceso | Los administradores definen quién usa Work | ¿Qué áreas entran al piloto? |
| Contexto de la empresa | Los administradores eligen qué información usa el agente | ¿Qué datos personales de clientes va a leer? |
| Herramientas conectadas | Los administradores eligen los conectores permitidos | ¿Qué sistemas quedan fuera al principio? |
| Acciones permitidas | Los administradores limitan lo que el agente puede ejecutar | ¿Puede enviar correos o solo preparar el borrador? |
| Aprobación | El usuario decide cuándo el agente necesita aprobación antes de actuar | ¿Qué acciones siempre piden aprobación? |
| Supervisión | Una API de Compliance (una puerta para que otro sistema extraiga los registros) sigue conversaciones y acciones | ¿Quién revisa esos registros y con qué frecuencia? |
| Gasto | Límites por grupo en el panel de administración | ¿Cuál es el tope del piloto? |

Los controles de administrador mencionados valen para los planes Enterprise y Edu. Para decidir cuánta autonomía dar a cada tipo de tarea, usa los niveles de nuestra guía de [gobernanza de agentes de IA](/es/blog/gobernanza-de-agentes-de-ia/).

## ¿Por dónde empezar si tu empresa no es Uber?

Empieza por un mapa de tareas, no por la licencia. Uber tenía 30 ingenieros de IA para prestar a las áreas; tu empresa probablemente no. El camino más corto es elegir dónde va a trabajar el agente antes de liberar el acceso.

1. **Elige 1 o 2 áreas** con trabajo de oficina repetitivo: el reporte semanal, la consolidación de hojas de cálculo, material para otros idiomas.
2. **Haz la lista de tareas y estima las horas** que cada una consume por semana.
3. **Haz un piloto pequeño** con los controles de la tabla anterior activados.
4. **Mide el uso y las horas** antes de ampliar a otras áreas.

Los pasos 1 y 2 son lo que hacemos en la [Radiografía de automatización](/es/#servicos): un mapa de las tareas que se pueden automatizar, las horas ahorradas estimadas por tarea y un plan de acción ordenado por retorno, en cerca de una semana. Con ese mapa, el piloto empieza por las tareas que más tiempo le devuelven al equipo.

## ¿Cuándo no basta con ChatGPT Work?

ChatGPT Work resuelve bien el trabajo de oficina de una persona o de un equipo: resumen, hoja de cálculo, presentación, panel, incluso con tareas programadas. Para el proceso central del área, la cuenta cambia.

En nuestra evaluación, conviene otro camino cuando el proceso sigue siempre la misma regla y no puede variar de una ejecución a otra, cuando el sistema del área es antiguo y no tiene conector, o cuando el área necesita una herramienta propia, con permisos por perfil e historial de quién cambió qué. Ahí entran la automatización de procesos o un sistema interno. El mapa de tareas muestra cuál caso es cuál.

## Preguntas frecuentes

### ¿ChatGPT Work es gratis?

Según la cobertura del lanzamiento, ChatGPT Work está disponible en todos los planes, incluido el gratuito, desde la app para computadora. El uso consume la cuota del plan, y las tareas largas gastan más. Para uso en la empresa, los controles de administrador están en el plan Enterprise.

### ¿Se puede descargar ChatGPT Work?

Sí. Según TNW, hay app para computadora en Mac y Windows, disponible en todo el mundo, además de la versión web y la del celular.

### ¿Existe ChatGPT para empresas?

Sí. OpenAI tiene planes para empresas, como Business y Enterprise, y ChatGPT Work se liberó para los dos en el lanzamiento o en los días siguientes. Revisa precios y condiciones en la página oficial de OpenAI antes de decidir.

### ¿Cómo implementar IA en una empresa?

Empieza por un mapa de las tareas repetitivas y de las horas que consumen. Haz un piloto pequeño, con controles de acceso y aprobación activados. Mide el uso y los resultados antes de liberarlo para otras áreas.

## ¿Por dónde empezar en tu área?

Antes de pedir licencias para todos, descubre qué tareas de tu área valen un piloto. Mira [cómo funciona el diagnóstico de 45 minutos](/es/#como) y [agenda tu diagnóstico gratis](/es/#vaga): sales con precio y plazo cerrados para la Radiografía de automatización.
