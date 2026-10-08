# Gobernanza de agentes de IA: por qué una sola regla falla

La gobernanza de agentes de IA es el conjunto de reglas que define qué puede ver, sugerir o hacer solo cada agente, quién aprueba sus acciones y cómo queda todo registrado. Gartner recomienda una gobernanza proporcional: clasificar los agentes por nivel de autonomía y aplicar a cada nivel los controles que le corresponden, en lugar de una regla única.

Si diriges un área en una empresa grande, es probable que ya tengas agentes de IA funcionando: uno que resume contratos, otro que sugiere respuestas para clientes, tal vez uno que ya envía correos. Un agente de IA es un asistente que, además de responder, ejecuta tareas. La pregunta que llega a tu escritorio siempre es la misma: ¿cuánto control necesita cada uno?

## ¿Por qué una regla única de gobernanza hace fracasar a los agentes de IA?

Porque trata agentes muy distintos como si fueran iguales. Según un comunicado de [Gartner del 5 de junio de 2026](https://www.prnewswire.com/br/comunicados-para-a-imprensa/gartner-aponta-que-a-aplicacao-de-governanca-uniforme-aos-agentes-de-inteligencia-artificial-levara-ao-fracasso-desses-agentes-nas-empresas-302792743.html) (en portugués), "para 2027, el 40% de las empresas degradará o desactivará agentes de IA autónomos debido a brechas de gobernanza" identificadas solo después de incidentes en producción.

Shiva Varma, director analista sénior de Gartner, describe dos modos de falla. En el primero, la empresa restringe demasiado a los agentes simples, lo que "retrasa la entrega e impulsa el desarrollo paralelo". En el segundo, restringe muy poco a los agentes más autónomos, lo que aumenta los riesgos operativos, de seguridad y de cumplimiento. Para él, el error es tratar la gobernanza "como binaria, o totalmente restringida o totalmente confiable".

En nuestra lectura, el "desarrollo paralelo" es algo que todo gerente ya ha visto: el área arma su propio agente por fuera de TI porque el camino oficial se traba. El agente se sale de control justamente porque la regla era demasiado pesada para lo que hacía.

Los grandes bancos ya hablan de esto en público. Según un reportaje de [Funds Society](https://www.fundssociety.com/en/?p=310186) (en inglés), Jane Fraser, CEO de Citi, dijo en Sibos 2026, la conferencia anual del sector financiero, que en el banco ningún agente se crea sin pasar por la capa interna de control (ARC), y anticipó que un mismo agente podrá quedar sujeto a varios mecanismos de supervisión.

## ¿Cuáles son los 4 niveles de autonomía de un agente de IA?

Gartner clasifica a los agentes en cuatro niveles, desde el que solo lee hasta el que actúa por su cuenta, y asocia a cada nivel sus propios controles:

| Nivel | Qué puede hacer el agente | Controles que pide Gartner |
|---|---|---|
| 1. Observación | Solo lee fuentes definidas; el resultado lo ve solo quien lo pidió. Ej.: resumen de documentos, búsqueda de datos | Acceso a datos con alcance definido, autenticación, registro de uso, pruebas básicas de funcionalidad y seguridad |
| 2. Asesoría | Genera recomendaciones y acciones propuestas; una persona revisa todo y lo ejecuta a mano | Todo lo del nivel 1, más pruebas de precisión y de alucinación, evaluación de calidad específica del dominio y capacitación de usuarios |
| 3. Actuar con aprobación | Escribe datos, envía comunicaciones o cambia configuraciones solo después de la aprobación humana explícita de cada acción | Pruebas de seguridad a fondo, flujos de aprobación claros con registro de auditoría y respuesta a incidentes específica para cada agente |
| 4. Actuar de forma autónoma | Actúa solo dentro de controles definidos; las personas revisan excepciones, registros de auditoría y resultados agregados | La gobernanza más rigurosa: monitoreo continuo, controles aplicados, reversión rápida, un mecanismo que detiene al agente si supera sus límites y una definición clara de quién responde por su comportamiento |

Dos términos de la tabla necesitan explicación. Una alucinación es cuando la IA inventa una respuesta que parece verdadera. El registro de auditoría es el registro de quién hizo qué y cuándo. Sobre el nivel 3, Shiva Varma hace una advertencia que vale para todo gerente: "La revisión humana solo es eficaz si sigue siendo un control significativo". Él habla de fatiga de aprobación: aprobar en automático, sin leer, es lo mismo que no tener aprobación.

## ¿Cómo clasificar los agentes que tu empresa ya tiene o planea?

Empieza por el inventario y usa cuatro preguntas simples. Gartner define los niveles; los pasos de abajo son la forma en que, en nuestra evaluación, un área puede aplicarlos en la práctica:

1. **Haz el inventario.** Haz una lista de los agentes en uso y en proyecto, área por área, incluidos los que se armaron por fuera de TI.
2. **Responde cuatro preguntas para cada agente.** ¿Solo lee? ¿Sugiere? ¿Guarda o envía algo? ¿Lo hace sin que nadie apruebe? Las respuestas te dan el nivel.
3. **Revisa qué datos toca.** Si maneja datos personales de clientes o empleados, el cuidado sube.
4. **Mide el daño de un error.** Pregunta qué pasa si se equivoca y si se puede deshacer.
5. **Define un responsable.** Todo agente necesita una persona en el área que responda por él.

Un agente que solo resume informes internos queda en el nivel 1 y puede avanzar rápido. Uno que responde a clientes y modifica registros está en el nivel 3 o 4 y necesita otra vara de medir.

## ¿Qué controles pide cada nivel en la operación diaria?

En la práctica, los controles de la tabla se convierten en cinco cosas que un gerente puede exigir al equipo o al proveedor:

- **Acceso por perfil:** cada agente y cada persona ven solo lo que necesitan.
- **Registro de uso y registro de auditoría:** se puede saber qué hizo el agente, cuándo y con qué datos.
- **Cola de aprobación humana** para acciones de riesgo, como guardar, enviar o modificar.
- **Pruebas antes de pasar a producción**, incluidas las de respuestas equivocadas.
- **Botón de detener y de deshacer**, para frenar al agente y revertir lo que hizo.

Un ejemplo simple de control es el [agente que pasa la conversación a una persona](/es/blog/agente-de-ia-para-whatsapp/) cuando el caso se sale de lo que sabe resolver.

Si tu empresa busca una referencia pública, el [NIST AI RMF](https://www.nist.gov/news-events/news/2023/01/nist-risk-management-framework-aims-improve-trustworthiness-artificial) (en inglés), el marco de gestión de riesgos de IA del instituto de estándares de Estados Unidos, se lanzó el 26 de enero de 2023, es de uso voluntario y se organiza en cuatro funciones: Govern, Map, Measure y Manage (gobernar, mapear, medir y gestionar).

## ¿Dónde entra la LGPD, la ley de datos de Brasil, en la gobernanza de agentes de IA?

Entra siempre que el agente trata datos personales. En Brasil, esa ley es la LGPD (Ley General de Protección de Datos), y tres de sus artículos ([texto completo](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm), en portugués) se relacionan directamente con los controles de arriba:

- **Artículo 20:** el titular puede pedir la revisión de decisiones tomadas únicamente con base en el tratamiento automatizado de datos personales que afecten sus intereses, incluidas las que definen su perfil profesional, de consumo y de crédito. Un agente que decide solo sobre una persona necesita un camino de revisión.
- **Artículo 37:** el controlador y el operador deben mantener un registro de las operaciones de tratamiento. Aquí ayuda el registro de auditoría.
- **Artículo 46:** la ley pide medidas de seguridad técnicas y administrativas contra accesos no autorizados. Aquí ayuda el acceso por perfil.

Un cuidado de vocabulario: en la LGPD, los "agentes de tratamiento" son el controlador y el operador, es decir, empresas y personas, y no agentes de IA. Este texto no es una opinión jurídica; involucra al encargado de protección de datos (el DPO) y al área legal de tu empresa.

## ¿Cómo construye Nocodeia agentes con control desde el primer día?

Construimos [sistemas internos y agentes a la medida](/es/#servicos), programados en código, con la gobernanza diseñada junto con ellos y no después. En la práctica, cada agente nace con:

1. **Nivel de autonomía definido en el alcance:** qué lee, qué sugiere y qué ejecuta.
2. **Reglas de negocio explícitas** sobre lo que puede y lo que no puede hacer.
3. **Aprobación humana en las acciones de riesgo**, como guardar, enviar o modificar.
4. **Registro de auditoría** de cada acción.
5. **Acceso por perfil.**
6. **LGPD considerada desde el diseño.**

El camino empieza con un [diagnóstico gratis de 45 minutos](/es/#como), sigue con un alcance de precio y plazo cerrados y llega al sistema interno en 1 a 3 meses.

Ya construimos Proacta CRM, un CRM (sistema de gestión de clientes) de ventas con un agente de prospección en LinkedIn, y una plataforma de gestión de metas (OKR) para estructuras corporativas. Mira los [proyectos que ya entregamos](/es/#projetos). El fundador tiene más de 25 años en tecnología, en empresas como IBM, Xerox, DHL y Bosch, y hablas directo con él de principio a fin.

## ¿Cuándo no darle autonomía total a un agente de IA?

En nuestra evaluación, no le des autonomía total cuando la acción no se puede deshacer, cuando involucra dinero, datos personales o comunicación con clientes sin revisión, cuando no hay registro de lo que hizo el agente o cuando nadie en el área es responsable de él. En esos casos, empieza en un nivel más bajo y sube al agente de nivel a medida que acumula un historial de aciertos. Esa progresión es postura nuestra; el comunicado de Gartner no trata la promoción de nivel.

## Preguntas frecuentes

### ¿Qué es la gobernanza de la IA?

Es el conjunto de reglas, responsables y controles que define cómo una empresa usa la inteligencia artificial con seguridad. Para los agentes de IA, incluye qué puede hacer solo cada uno, quién aprueba y cómo queda todo registrado.

### ¿Qué son los agentes de IA autónomos?

Son agentes que actúan solos dentro de controles definidos, el nivel 4 de la clasificación de Gartner. Las personas revisan excepciones, registros de auditoría y resultados, en lugar de aprobar cada acción.

### ¿Existe un marco de gobernanza de IA?

Sí. El NIST AI RMF, del instituto de estándares de Estados Unidos, es una referencia pública de uso voluntario, organizada en cuatro funciones: gobernar, mapear, medir y gestionar.

### ¿Qué es human in the loop?

Es tener a una persona que revisa o aprueba la acción del agente antes de que ocurra. En nuestra lectura, eso corresponde a los niveles 2 y 3 de la clasificación de Gartner.

## ¿Tu empresa ya tiene agentes de IA sin reglas claras?

En el diagnóstico gratis de 45 minutos, revisamos los agentes que tu área usa o planea, te ayudamos a clasificar cada uno y te mostramos cómo construir con control desde el inicio. Sales con precio y plazo cerrados. [Agenda tu diagnóstico gratis](/es/#vaga).
