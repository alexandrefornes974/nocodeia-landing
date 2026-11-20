# Crear un agente de IA para WhatsApp: empieza por tu web

Crear un agente de IA para WhatsApp es armar un asistente que conversa con el cliente y ejecuta tareas. El camino más seguro es empezar con un chat en tu sitio web y conectar la API oficial después. En Brasil, Meta cobra R$ 0.035 (US$ 0.0068) por mensaje de atención, a partir del 1,001.º del mes.

Si quieres poner un agente a atender en WhatsApp, pero aún no sabes cuántas conversaciones tendrás ni qué preguntas llegan, esta guía es para ti. Mostramos los precios oficiales de Meta (la tabla de Brasil), un ejemplo de cuenta y el orden que seguimos en los proyectos de Nocodeia.

## ¿Cómo crear un agente de IA para WhatsApp en 5 pasos?

Para crear un agente de IA para WhatsApp, sigue este orden. Cada paso tiene su propia sección más abajo.

1. **Define el alcance:** haz una lista de las 10 preguntas que más llegan a tu atención al cliente.
2. **Arma el agente en el chat de tu sitio web:** reúne la información, las acciones y la regla para pasar la conversación a una persona.
3. **Entrénalo con conversaciones reales:** prueba, registra los errores y corrige hasta que el agente cumpla tu criterio de "listo".
4. **Conecta la API oficial de WhatsApp:** con número, plantillas de mensaje aprobadas y el paso a una persona.
5. **Sigue el costo de los mensajes:** compara el volumen del mes con la tabla de Meta, con ayuda de la calculadora enlazada en la sección de costos.

## ¿Por qué empezar por el chat del sitio web y no directo por la API de WhatsApp?

Porque el chat del sitio web deja que el agente se equivoque, aprenda y se ajuste antes de que abras WhatsApp a clientes de verdad. Este chat, que los técnicos llaman widget (el nombre de una pequeña ventana de chat incrustada en la página), queda en la esquina de la página. Conversa con el visitante igual que el agente conversaría en WhatsApp, solo que sin pasar por la API de Meta.

La API es el paso siguiente al chat del sitio web, y no una alternativa. El agente es el mismo; solo cambia el canal. En Nocodeia seguimos este orden: primero el chat del sitio web, después el entrenamiento y, por último, la API de WhatsApp para atender al cliente por ahí.

| | Chat del sitio web | API oficial de WhatsApp |
|---|---|---|
| Dónde funciona | En tu sitio web | En WhatsApp, por la plataforma de Meta |
| Qué pagas | Modelo de IA y hosting; ninguna tarifa de mensaje de WhatsApp | Tarifa de Meta por mensaje entregado, más el proveedor (varía, consulta) |
| Para qué sirve | Entrenar, ver las preguntas reales y ajustar | Atender al cliente donde ya está |

## ¿Cuánto cuesta cada mensaje en la API de WhatsApp?

Meta cobra por mensaje entregado, y el valor depende del tipo. No cobra por el mensaje que el cliente envía a la empresa. Los valores de abajo son de Brasil, de la tabla oficial vigente desde el 1 de octubre de 2026, consultada el 20 de noviembre de 2026 en la sección "Rate cards and volume tiers" de la [documentación de precios de Meta](https://developers.facebook.com/docs/whatsapp/pricing). La [calculadora oficial de WhatsApp](https://whatsappbusiness.com/pt-br/products/platform-pricing/#rates) (en portugués) también muestra las tarifas por país.

| Tipo de mensaje | Cuándo se cobra | Valor por mensaje (Brasil) |
|---|---|---|
| Marketing | Cada plantilla de marketing entregada (promoción, novedad, reactivación) | R$ 0.3217 (US$ 0.0625) |
| Utilidad | Cada plantilla de utilidad entregada (confirmación de pedido, aviso de entrega) | R$ 0.035 (US$ 0.0068) |
| Autenticación | Cada código de verificación entregado | R$ 0.035 (US$ 0.0068) |
| Atención | Cada respuesta libre dentro de la ventana de 24 horas, a partir del 1,001.º del mes, por número | R$ 0.035 (US$ 0.0068) |

Mensaje de atención es la respuesta libre que el agente envía dentro de la ventana de 24 horas, que se abre cuando el cliente escribe. Ahí es donde trabaja el agente de IA. Meta no cobra los primeros 1,000 mensajes de atención de cada mes, por número. El de marketing cuesta cerca de 9 veces más que el de atención.

Veamos una cuenta de ejemplo. Es hipotética: cambia los datos por los tuyos. Son 3,000 conversaciones al mes, con 6 mensajes del agente en cada una, y 2,000 mensajes de marketing más.

- Atención: 3,000 × 6 = 18,000 mensajes. Quitando los 1,000 sin cobro por número, quedan 17,000 × R$ 0.035 = R$ 595.00.
- Marketing: 2,000 × R$ 0.3217 = R$ 643.40.
- Total de los mensajes de WhatsApp: R$ 595.00 + R$ 643.40 = R$ 1,238.40 al mes.

Este total no incluye el modelo de IA, el hosting, el armado ni la mensualidad del proveedor, que varía de uno a otro. Los 6 mensajes por conversación son una suposición del ejemplo, y no un promedio del mercado. La cuenta también supone que ninguna conversación vino de un anuncio con ventana gratuita.

Lo que muestra la cuenta: el mensaje de atención es barato, y lo que pesa es el volumen y el marketing. Por eso vale la pena descubrir tu volumen real antes de contratar proveedor y número.

¿Quieres calcular con tus números? Usa nuestra [calculadora de costos de WhatsApp](/calculadora-whatsapp/) (en portugués; trabaja en reales brasileños, no en dólares). Usa las mismas tarifas de Brasil, vigentes desde el 1 de octubre de 2026 y consultadas el 20 de noviembre de 2026. Meta solo puede reajustar los precios el primer día de un trimestre, así que revisa la tabla oficial antes de decidir.

## ¿Cómo armar el agente en el chat de tu sitio web?

Arma el agente con un alcance pequeño y claro. Agente de IA, aquí, es un asistente que responde y también ejecuta tareas, como consultar el catálogo o avisar a una persona. Cinco pasos resuelven la primera versión:

1. **Alcance:** haz una lista de las 10 preguntas que más llegan a tu atención al cliente.
2. **Base de información:** escribe precios, plazos, política de cambios y horarios en lenguaje simple, en un solo lugar.
3. **Acciones:** define qué hace el agente además de responder, como consultar el inventario, agendar una cita o registrar un pedido.
4. **Paso a una persona:** decide cuándo el agente llama al equipo y cómo entrega el resumen de la conversación.
5. **Posición del chat:** pon el chat donde aparece la duda, como la página de producto o la de precios.

Si prefieres no armarlo por tu cuenta, Nocodeia construye [agentes de IA a la medida](/es/#servicos), programados para tu caso. Los costos de un proyecto así se dividen en armado, modelo de IA, hosting y mantenimiento. En Nocodeia, el precio y el plazo salen cerrados del diagnóstico gratis de 45 minutos.

## ¿Cómo entrenar al agente en el chat del sitio web antes de abrir WhatsApp?

Entrena en ciclos cortos, con conversaciones de verdad. Cada ronda tiene cinco movimientos:

1. **Haz pruebas con conversaciones reales:** usa las preguntas de los visitantes y las de conversaciones antiguas de tu atención al cliente.
2. **Prueba al cliente difícil:** pregunta algo fuera del alcance, escribe con enojo, cambia de tema a la mitad.
3. **Registra cada error:** anota la pregunta, la respuesta dada y la respuesta correcta.
4. **Corrige la base y las reglas:** ajusta la información y el límite del agente, y no solo la frase que falló.
5. **Define tu "listo":** por ejemplo, responder bien las 10 preguntas más comunes y pasar a una persona cuando no sepa. Sin prometer un porcentaje de aciertos.

Entrenar directo en WhatsApp costaría poco en tarifas. Con 500 conversaciones de prueba y 6 respuestas en cada una, son 3,000 mensajes: (3,000 − 1,000) × R$ 0.035 = R$ 70.00, sin contar la franquicia que ya usaron los clientes reales en el mes.

La ventaja del chat del sitio web es otra: aprendes antes de abrir el canal y no expones al cliente a un agente todavía sin pulir. La cuenta del modelo de IA, que existe en el chat del sitio web y en WhatsApp, es otro rubro del costo y no entra en estas tarifas.

## ¿Cuándo y cómo conectar la API de WhatsApp?

Conecta la API cuando el agente ya responda bien según tu criterio y haya volumen que justifique el canal. Lo que cambia es poco: el agente es el mismo, y cambias el canal. En general entran estas piezas:

1. **Número y cuenta** en la plataforma de Meta, directo o por un proveedor autorizado (empresa que conecta tu agente a la API).
2. **Plantillas de mensaje aprobadas**, que son textos listos, aprobados por Meta, para hablar con el cliente fuera de la ventana de 24 horas.
3. **El paso a una persona**, ahora dentro de WhatsApp.
4. **El control de volumen**, mirando la cuenta del mes contra la tabla de valores.

Para comparar las opciones de agente antes de elegir, mira [los 3 caminos para tener un agente en WhatsApp](/es/blog/agente-de-ia-para-whatsapp/).

## ¿Y si tu nicho no puede usar la API oficial de WhatsApp?

En ese caso, el chat del sitio web deja de ser una etapa y se vuelve el canal principal. La política de mensajes de WhatsApp Business (Sección 4, consultada el 20 de noviembre de 2026) enumera "productos y servicios para adultos" entre los artículos que no se pueden comprar, vender ni promocionar por WhatsApp Business. La lista incluye también armas de fuego, alcohol y tabaco, entre otros. Consulta la [política completa de WhatsApp Business](https://whatsappbusiness.com/pt-br/policy/) (en portugués).

Nocodeia ya aplicó este camino con clientes de nichos que WhatsApp no acepta en la API oficial. Un ejemplo es Amore Totale, una tienda en línea en la que WhatsApp quedó fuera de las ventas por la política de WhatsApp Business. Amora, el agente de atención de la tienda, atiende en el sitio web las 24 horas y en Instagram y Facebook, en una central de conversaciones (Chatwoot).

Cuando la conversación pide una persona, el equipo recibe una alerta en Telegram con un resumen de la conversación.

En los primeros meses, el 80% de las conversaciones fueron resueltas por Amora sin humano. Es una medición de Nocodeia, con un número autorizado por el cliente. Mira [el caso de Amore Totale](/es/casos/amore-totale/) completo.

## ¿Cuándo no vale la pena empezar por el chat del sitio web?

Cuando tu sitio casi no recibe visitas. Sin conversaciones reales, el entrenamiento se queda sin material. En ese caso, usa las preguntas antiguas de tu atención en WhatsApp como base y prueba el agente en un entorno de prueba, con pocas personas.

Lo mismo vale si tu negocio vive solo en WhatsApp. Se puede entrenar con un grupo pequeño de clientes avisados, antes de abrir a todos. El punto es el mismo: equivocarse con pocos antes de acertar con muchos.

## Preguntas frecuentes

### ¿Cómo crear un agente de IA para WhatsApp gratis?

Se puede empezar sin pagar mensajes de WhatsApp, entrenando al agente en el chat de tu sitio web. El modelo de IA y el hosting tienen costo, y la API oficial cobra por mensaje de atención a partir del 1,001.º del mes. Por eso, toma "gratis" como "sin tarifa de mensaje de WhatsApp durante el entrenamiento".

### ¿Cuánto cuesta cada mensaje en la API de WhatsApp?

En Brasil, la tabla oficial de Meta, vigente desde el 1 de octubre de 2026, cobra R$ 0.035 (US$ 0.0068) por mensaje de atención, utilidad y autenticación, y R$ 0.3217 (US$ 0.0625) por mensaje de marketing. Los primeros 1,000 mensajes de atención de cada mes, por número, no se cobran. Meta solo puede reajustar los valores el primer día de un trimestre, así que revisa la tabla actual antes de decidir.

### ¿Un agente de IA en WhatsApp Business es de pago?

Depende del camino. En la API oficial, Meta cobra por mensaje, con 1,000 mensajes de atención al mes sin cobro, por número. Además de Meta, entran el modelo de IA, el proveedor y el armado del agente.

### ¿Cómo entrenar un agente de IA?

Haz pruebas con conversaciones reales, prueba preguntas difíciles y anota cada error. Corrige la base de información y las reglas del agente, y no solo la frase que falló. Repite hasta que cumpla el criterio de "listo" que definiste.

## Próximo paso

Si quieres diseñar este camino con apoyo, el [diagnóstico gratis de 45 minutos](/es/#vaga) revisa tu atención contigo y te dice con franqueza si vale la pena tener un agente. Agenda tu diagnóstico.
