# ¿Cuánto cuesta un agente de IA? Costo real por conversación

El costo de un agente de IA suma cuatro partes: el modelo, cobrado por token (fragmento de texto); el canal, como WhatsApp; el servidor o la plataforma; y el desarrollo. En Zendesk, plataforma lista, la resolución adicional cuesta desde R$ 9.50 en Brasil, más la licencia. Con un agente propio, puedes estimar el costo por conversación.

Quieres poner un agente de IA en la atención al cliente de tu producto, y tu socio o tu inversionista te hace siempre la misma pregunta: ¿cuánto va a costar cuando crezca el volumen? La respuesta ya no cabe en una línea de licencia. Esta guía muestra cómo hacer esa cuenta antes de que el agente salga al aire, sin adivinar.

## ¿Por qué el costo de la atención con IA dejó de ser solo una licencia fija?

Porque el cobro pasó a seguir el uso o el resultado, y no el número de agentes humanos. Antes pagabas una licencia por agente de soporte (el "asiento") o una mensualidad casi fija por un chatbot de menú. Con los agentes de IA, cada conversación consume procesamiento del modelo, y los proveedores trasladan ese consumo.

El fondo de inversión Bessemer Venture Partners registró el cambio en febrero de 2026: en general, las empresas nativas de IA están "abandonando el cobro por asiento a favor de modelos por uso, por entrega y por resultado", en traducción libre de la [guía de precios y monetización de IA de Bessemer](https://www.bvp.com/atlas/the-ai-pricing-and-monetization-playbook) (en inglés).

En la práctica, esto cambia dos cosas para tu startup. El costo sube junto con el volumen de conversaciones. Y se puede estimar por conversación. Un término va a aparecer todo el tiempo a partir de aquí: token es el fragmento de texto, más o menos una parte de palabra, que el modelo lee y escribe. Es la unidad con la que cobran las API de IA (la API es la puerta por la que tu sistema le pide una respuesta al modelo).

## ¿Cuáles son las partes del costo de un agente de IA de atención?

Son cinco: el modelo de IA, el canal, el servidor o la plataforma, el desarrollo y el tiempo del humano de respaldo en los casos que el agente le pasa. Las cuatro primeras son las de la respuesta de arriba.

| Parte | Cómo se cobra | Referencia |
|---|---|---|
| Modelo de IA | Por token de entrada (lo que el modelo lee) y de salida (lo que escribe) | Claude Sonnet 5.5: US$ 2 por millón de tokens de entrada y US$ 10 por millón de salida, en la [página de precios de Claude](https://claude.com/pricing) (en inglés), consultada en octubre de 2026 |
| Canal | En WhatsApp, Meta cobra por mensaje de plantilla entregado | Los mensajes comunes dentro de la ventana de 24 horas abierta por el cliente son gratis, según la [documentación de precios de WhatsApp](https://developers.facebook.com/docs/whatsapp/pricing) |
| Servidor o plataforma | Hosting, base de datos o mensualidad de una herramienta | Depende de cómo se construya el agente |
| Desarrollo y ajustes | Proyecto con alcance definido | Precio cerrado después del diagnóstico |
| Humano de respaldo | Tiempo del equipo en los casos que el agente le pasa | Depende de la regla de traspaso |

El mensaje de plantilla es el texto aprobado de antemano que la empresa usa para iniciar una conversación o avisarle al cliente fuera de la ventana. El detalle de [cuánto cuestan los mensajes de WhatsApp para un agente](/es/blog/agente-de-ia-para-whatsapp/) está en nuestra guía sobre el tema.

Fíjate en que solo la primera fila crece con cada mensaje. En nuestra evaluación, ahí está la mayor parte de las sorpresas en la factura.

## ¿Cómo estimar el costo por conversación antes de lanzar el agente?

Multiplica los tokens de una conversación típica por el precio del modelo. En cuatro pasos:

1. **Cuenta los intercambios.** Toma conversaciones reales de tu soporte y mira cuántos mensajes envía el cliente hasta resolver.
2. **Estima los tokens de cada intercambio.** La entrada incluye las instrucciones del agente, el fragmento de la base de conocimiento consultado y el historial de la conversación. La salida es la respuesta.
3. **Multiplica por el precio** de la página oficial del modelo que vas a usar.
4. **Multiplica por el volumen** de conversaciones del mes.

Ahora un ejemplo hipotético, con números que debes cambiar por los tuyos. Una conversación de 8 intercambios, con 3,000 tokens de entrada y 150 de salida por intercambio, suma 24,000 tokens de entrada y 1,200 de salida.

En Claude Sonnet 5.5, eso da US$ 0.048 de entrada más US$ 0.012 de salida: cerca de US$ 0.06 por conversación, o US$ 60 por cada mil conversaciones. En Claude Haiku 5.5, un modelo más pequeño que cuesta US$ 0.10 y US$ 0.50 por millón de tokens para solicitudes de hasta 100,000 tokens, la misma conversación sale en cerca de US$ 0.003.

Esa cuenta cubre solo el modelo. Canal, servidor y desarrollo van aparte.

## Pagar por resolución o tener un agente propio: ¿qué conviene a una startup?

Depende de tu volumen y de la duración de las conversaciones. Compara el costo por conversación que calculaste con el precio por resolución de las plataformas listas para usar.

| Opción | Cómo cobra | Qué observar |
|---|---|---|
| Intercom Fin | Desde US$ 0.99 por resultado ("outcome"), cobrado una vez por conversación, sin licencia de agente obligatoria, en los [precios de Intercom](https://www.intercom.com/pricing) (en inglés) | Con un helpdesk (sistema de tickets de soporte) de otra empresa, hay un compromiso mínimo, por ejemplo de 50 resultados al mes |
| Zendesk | En Brasil, los planes incluyen 5 o 10 resoluciones automatizadas por agente con licencia, al mes. La adicional cuesta R$ 9.50 con compromiso o R$ 12 sin compromiso, en la [página de precios de Zendesk Brasil](https://www.zendesk.com.br/pricing/) (en portugués) | La cuota crece con el número de licencias de agentes |
| Agente propio | Tokens + canal + servidor + desarrollo | Requiere desarrollo; el costo por conversación sigue la cuenta de la sección anterior |

El cobro por resolución es predecible por unidad y no requiere desarrollo. La otra cara: el precio es el mismo para una conversación corta o larga. La propia Bessemer usa a Fin como ejemplo: "si Fin resuelve un ticket en tres mensajes o en treinta, el cliente paga lo mismo". Y cada proveedor define qué cuenta como resolución. En Intercom, la definición incluye, por ejemplo, la conversación en la que el cliente deja de pedir ayuda.

El agente propio pide una inversión en desarrollo. En nuestra evaluación, tiene más sentido cuando el volumen es alto y el agente necesita conectarse con los sistemas de tu startup, como el CRM (sistema de gestión de clientes), la base de datos y la facturación. La regla práctica: haz la cuenta y compara con tu volumen real, no con el volumen de la presentación para inversionistas.

## ¿Qué hace que el costo de un agente de IA se dispare?

Contexto inflado, un modelo caro para preguntas simples y conversaciones sin fin. Los culpables más comunes, cada uno con su control:

- **Instrucciones y base de conocimiento enormes enviadas en cada intercambio.** Control: caché, que reutiliza la parte fija del texto. En la página de Claude, leer desde la caché en Sonnet 5.5 cuesta US$ 0.10 por millón de tokens, contra US$ 2 de la entrada normal.
- **Un modelo caro respondiendo "¿cuál es su horario?".** Control: un modelo más pequeño hace el triaje y solo llama al más grande cuando hace falta.
- **Conversaciones que dan vueltas.** Control: un límite de intercambios. Después de él, un humano toma el control.
- **Mensajes de plantilla de WhatsApp fuera de la ventana de 24 horas.** Control: concentrar la atención dentro de la ventana abierta por el cliente.
- **Nadie mirando la factura.** Control: una alerta de gasto cuando el mes pasa de un monto acordado.

Un aviso contra la cuenta optimista: Claude da un 50% de descuento en el procesamiento por lotes, pero el lote no sirve para la atención en vivo, porque la respuesta no sale al momento.

## ¿Cómo mantiene Nocodeia bajo control el costo de los agentes?

Poniendo los controles en el proyecto desde el inicio, y no después de la primera factura. Construimos agentes programados a la medida, como el agente de prospección de Proacta CRM y los agentes de contenido de Amore Totale. El camino es siempre el mismo:

1. **Diagnóstico gratis de 45 minutos** para entender tu atención y el volumen de conversaciones.
2. **Alcance con precio y plazo cerrados**, que ya considera el volumen de conversaciones del diagnóstico.
3. **Entrega, en general, en 2 a 4 semanas**, ya con cuatro controles: modelo más pequeño en el triaje, caché de las instrucciones, límite de intercambios con traspaso a un humano y alerta de gasto.

Se suman a las [reglas de control para cada agente](/es/blog/gobernanza-de-agentes-de-ia/) que ya describimos, como la aprobación humana en las acciones de riesgo y el registro de auditoría.

## ¿Cuándo no conviene un agente de IA para tu startup?

Cuando el volumen de conversaciones es bajo o las preguntas son raras y muy distintas entre sí. Otras señales: no existe una base de información organizada para que el agente consulte, o una buena página de preguntas frecuentes ya lo resuelve.

Para nosotros, en esos casos el desarrollo no se paga, y un humano bien capacitado resuelve mejor. Es la misma lógica de [la cuenta del costo por uso de una plataforma no code](/es/blog/plataformas-no-code-vale-la-pena/): haz la cuenta antes de decidir.

## Preguntas frecuentes

### ¿Cuánto cuesta crear un agente de IA?

La creación, o desarrollo, es un costo separado de la operación y depende del alcance: canales, integraciones y reglas. Por eso cerramos el precio después del diagnóstico, y no con un número genérico.

### ¿Cuánto cuesta un chatbot con IA?

Depende del modelo de cobro. Las plataformas listas, como Intercom y Zendesk, cobran por resolución; un chatbot propio paga por token del modelo que usa. El chatbot de menú, sin IA, no consume tokens.

### ¿Cuánto cuesta un token de IA?

Cada modelo tiene su precio, cobrado por millón de tokens. En Claude Sonnet 5.5, son US$ 2 por millón de tokens de entrada y US$ 10 por millón de salida, según la página oficial en octubre de 2026.

### ¿Cuánto cuesta la API de WhatsApp?

Meta cobra por mensaje de plantilla entregado, con un precio que varía por país y categoría. Los mensajes comunes dentro de la ventana de 24 horas abierta por el cliente son gratis.

### ¿Existe un agente de IA gratis?

Hay herramientas con planes gratuitos limitados, buenos para probar. Un agente en producción paga por el modelo y por el canal según el uso.

## ¿Quieres saber cuánto va a costar el agente de tu startup?

En el diagnóstico gratis de 45 minutos, revisamos tu atención y el volumen de conversaciones y te decimos con franqueza si vale la pena tener un agente. Sales con precio y plazo cerrados para [agentes de IA a la medida](/es/#servicos). [Agenda tu diagnóstico gratis de 45 minutos](/es/#vaga).
