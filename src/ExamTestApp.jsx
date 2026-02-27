import React, { useState } from "react";
import { Check, X, RotateCcw, BookOpen, Award, ChevronLeft, ChevronRight } from "lucide-react";

const ExamTestApp = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const subjects = {
    ingles: {
      name: "Inglés",
      description: "Tests de gramática y vocabulario en inglés",
      exams: {
        semestral: {
          name: "Prueba Semestral",
          questions: [
            {
              q: "AUN NO TENEMOS PREGUNTAS:",
              options: [
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS"
              ],
              correct: 0,
              explanation: "AUN NO TENEMOS PREGUNTAS."
            },
          
          ]
        },

        unidad1: {
          name: "Unidad 1: Living in the present",
          questions: [
            {
              q: "Choose the correct sentence in the Present Simple.",
              options: [
                "She go always to the gym.",
                "She goes always to the gym.",
                "She always goes to the gym.",
                "She always go to the gym."
              ],
              correct: 2,
              explanation: "La respuesta correcta es: She always goes to the gym. El adverbio de frecuencia debe ir antes del verbo principal, y en tercera persona singular el verbo debe terminar en -s."
            },
            {
              q: "Choose the right answer.",
              options: [
                "She be a doctor.",
                "She is a doctor.",
                "She are a doctor.",
                "She am a doctor."
              ],
              correct: 1,
              explanation: "La respuesta correcta es: She is a doctor. El verbo 'to be' en tercera persona singular se conjuga como 'is'."
            },
            {
              q: "Choose the right answer.",
              options: [
                "I have not got a pet.",
                "I haven't got a pet",
                "I don't have a pet.",
                "All the above are correct."
              ],
              correct: 3,
              explanation: "La respuesta correcta es: All the above are correct. Las tres formas son válidas para expresar la negación con 'have/have got'."
            },
            {
              q: "In which of the following sentences is the adverb of frequency correctly placed?",
              options: [
                "They never are late for work.",
                "They are late never for work.",
                "They are never late for work.",
                "They are late for work never."
              ],
              correct: 2,
              explanation: "La respuesta correcta es: They are never late for work. Con el verbo 'to be', el adverbio de frecuencia va después del verbo."
            },
            {
              q: "Which gerund form is correct?",
              options: [
                "Crying",
                "Runing",
                "Makeing",
                "Swiming"
              ],
              correct: 0,
              explanation: "La respuesta correcta es: Crying. Es la única forma correcta. 'Running' tiene doble consonante, 'making' no usa 'e', y 'swimming' tiene doble consonante pero está mal escrito aquí como 'swiming'."
            },
            {
              q: "Which of the following is NOT a use of the Present Continuous?",
              options: [
                "To describe actions happening at the moment of speaking.",
                "To express temporary actions.",
                "To talk about future arrangements or plans.",
                "To talk about habits and routines."
              ],
              correct: 3,
              explanation: "La respuesta correcta es: To talk about habits and routines. El Present Continuous no se usa para hablar de hábitos y rutinas; para eso se usa el Present Simple."
            },
            {
              q: "Which of the following sentences correctly uses a stative verb?",
              options: [
                "She is knowing the answer",
                "I remember your name",
                "They are believing in ghosts.",
                "I'm wanting pizza"
              ],
              correct: 1,
              explanation: "La respuesta correcta es: I remember your name. Los verbos estativos (como 'remember') no se pueden usar en Present Continuous; deben usarse en Present Simple."
            },
            {
              q: "Which of the following sentences is in the Present Continuous?",
              options: [
                "He studies for his exam.",
                "He study for his exam.",
                "He is studying for his exam.",
                "He studying for his exam."
              ],
              correct: 2,
              explanation: "La respuesta correcta es: He is studying for his exam. El Present Continuous se forma con el auxiliar 'to be' + gerundio (-ing)."
            },
            {
              q: "Which of the following statements about the verb 'to have got' is correct?",
              options: [
                "It is commonly used in British English.",
                "It is only used in the present tense.",
                "For the other verb tenses we use the verb 'to have'.",
                "All the above are correct."
              ],
              correct: 3,
              explanation: "La respuesta correcta es: All the above are correct. 'Have got' es común en inglés británico, solo se usa en presente, y para otros tiempos se usa 'have'."
            },
            {
              q: "Which sentence correctly follows the spelling rules for third-person singular verbs in the Present Simple?",
              options: [
                "She watches TV in the evening.",
                "She go to school early.",
                "He study at the library.",
                "He fix his car every Sunday."
              ],
              correct: 0,
              explanation: "La respuesta correcta es: She watches TV in the evening. Cuando la tercera persona singular termina en una sílaba tónica con consonante-vocal-consonante, se duplica la consonante final. En este caso, 'watch' se convierte en 'watches'."
            }
          ]
        },

        unidad2: {
          name: "Unidad 2: What do you like?",
          questions: [
            {
              q: "Choose the correct sentence to express your preference:",
              options: [
                "I like pizza",
                "I liking pizza",
                "I am like pizza",
                "I likes pizza"
              ],
              correct: 0,
              explanation: "La respuesta correcta es: I like pizza. El verbo 'like' en primera persona singular no lleva 's' y se usa en forma simple para expresar preferencias."
            },
            {
              q: "Choose the correct sentence with some/any/no:",
              options: [
                "There isn't no milk in the fridge.",
                "There is no milk in the fridge.",
                "There is any food left.",
                "I don't have some pencils."
              ],
              correct: 1,
              explanation: "La respuesta correcta es: There is no milk in the fridge. 'No' se usa en oraciones afirmativas, mientras que 'any' en negativas y 'some' en positivas."
            },
            {
              q: "Choose the correct wh-question.",
              options: [
                "Where are you going?",
                "Where you are going?",
                "Are you where going?",
                "Are where going you?"
              ],
              correct: 0,
              explanation: "La respuesta correcta es: Where are you going? En las preguntas con wh-words, el orden es: wh-word + verbo auxiliar + sujeto + verbo principal."
            },
            {
              q: "Choose the sentence with the correct order of events using these connectors: \"first,\" \"then,\" and \"however\"",
              options: [
                "First, we went to the store. Then, we bought some groceries. However, we forgot the milk.",
                "Then, we forgot the milk. First, we went to the store. However, we bought some groceries.",
                "However, we went to the store first. Then, we bought some groceries.",
                "Then, we went to the store first. However, we forgot the milk."
              ],
              correct: 0,
              explanation: "La respuesta correcta es: First, we went to the store. Then, we bought some groceries. However, we forgot the milk. Los conectores deben seguir el orden lógico de los eventos."
            },
            {
              q: "Complete the sentence I have a meeting ____ Monday morning.",
              options: [
                "In",
                "At",
                "On",
                "By"
              ],
              correct: 2,
              explanation: "La respuesta correcta es: On. Se usa 'on' con días de la semana y fechas específicas (on Monday, on Friday, etc.)."
            },
            {
              q: "Find the CORRECT sentence.",
              options: [
                "There is some apples on the table.",
                "Are there any apples on the table?",
                "There isn´t some milk in the fridge",
                "Is there some oranges in the box?"
              ],
              correct: 1,
              explanation: "La respuesta correcta es: Are there any apples on the table? Es la única oración gramaticalmente correcta según las reglas de 'some/any'."
            },
            {
              q: "Find the INCORRECT question.",
              options: [
                "Why do you study in the library?",
                "When she takes her last exam?",
                "Who is your brother?",
                "Where does he live?"
              ],
              correct: 1,
              explanation: "La respuesta correcta es: When she takes her last exam? Debería ser: When does she take her last exam? (falta el auxiliar 'does' con la tercera persona singular)."
            },
            {
              q: "What is the correct question to express quantity?",
              options: [
                "How apples do you buy in the supermarket?",
                "How much apples do you buy in the supermarket?",
                "How many apples do you buy in the supermarket?",
                "How often apples do you buy in the supermarket?"
              ],
              correct: 2,
              explanation: "La respuesta correcta es: How many apples do you buy in the supermarket? Se usa 'how many' para sustantivos contables."
            },
            {
              q: "What is the most appropriate connector for adding information?",
              options: [
                "Although",
                "Besides",
                "Instead",
                "Therefore"
              ],
              correct: 1,
              explanation: "La respuesta correcta es: Besides. 'Besides' es un conector que añade información adicional, mientras que 'although' indica contraste, 'instead' indica alternativa y 'therefore' indica consecuencia."
            },
            {
              q: "Which of these words is a possessive pronoun?",
              options: [
                "Me",
                "She",
                "Their",
                "Theirs"
              ],
              correct: 3,
              explanation: "La respuesta correcta es: Theirs. Los pronombres posesivos son: mine, yours, his, hers, ours, theirs. 'Their' es un determinante posesivo, no un pronombre."
            }
          ]
        },

        unidad3: {
      name: "Unidad 3: Exploring the past",
      questions: [
        {
          q: "Choose the correct preposition of place for this sentence: \"The cat is ______ the sofa.\"",
          options: [
            "On",
            "Between",
            "At",
            "next"
          ],
          correct: 0,
          explanation: "La respuesta correcta es: On. Se usa 'on' para indicar que algo está sobre una superficie."
        },
        {
          q: "Choose the correct question tag for this sentence: \"Let's go for a walk, __________?\"",
          options: [
            "did we",
            "shall we",
            "don't we",
            "haven't we"
          ],
          correct: 1,
          explanation: "La respuesta correcta es: shall we. Cuando se usa 'let's', el question tag es 'shall we'."
        },
        {
          q: "Choose the correct question tag. \"She didn't call you, ______?\"",
          options: [
            "did she",
            "will she",
            "does she",
            "has she"
          ],
          correct: 0,
          explanation: "La respuesta correcta es: did she. El verbo principal está en pasado (didn't), así que el question tag también debe estar en pasado."
        },
        {
          q: "Choose the correct sentence in the Past Simple tense.",
          options: [
            "We watch a great movie yesterday.",
            "She study for the exam last night.",
            "They played football in the park last week.",
            "He stops at the supermarket on his way home."
          ],
          correct: 2,
          explanation: "La respuesta correcta es: They played football in the park last week. Es la única oración correctamente conjugada en Past Simple."
        },
        {
          q: "Choose the correct sentence in the Past Simple tense.",
          options: [
            "She buyed a new dress last weekend.",
            "We ate lunch at 2 p.m. yesterday.",
            "He has seen that film before.",
            "They gived me a present for my birthday."
          ],
          correct: 1,
          explanation: "La respuesta correcta es: We ate lunch at 2 p.m. yesterday. Es la única oración con Past Simple correctamente formada."
        },
        {
          q: "Choose the correct sentence using the verb To Be in the past tense.",
          options: [
            "They wasn't at home last night.",
            "We was at the cinema.",
            "I was late for the meeting.",
            "She were very tired after work."
          ],
          correct: 2,
          explanation: "La respuesta correcta es: I was late for the meeting. Con el pronombre 'I', el verbo 'to be' en pasado es 'was'."
        },
        {
          q: "Choose the sentence that is NOT correct in the Past Continuous tense.",
          options: [
            "While I was walking home, I saw an accident.",
            "He was cooking when I called him.",
            "We were playing soccer at 6 p.m. yesterday.",
            "She were reading a book when I arrived."
          ],
          correct: 3,
          explanation: "La respuesta correcta es: She were reading a book when I arrived. Debería ser 'She was reading' (el pronombre 'she' requiere 'was', no 'were')."
        },
        {
          q: "Complete the sentence in the Present Perfect Simple tense: \"She __________ London several times.\"",
          options: [
            "have visit",
            "has visited",
            "have visited",
            "has visit"
          ],
          correct: 1,
          explanation: "La respuesta correcta es: has visited. Con la tercera persona singular ('she') se usa 'has' + verbo en participio pasado."
        },
        {
          q: "Complete the sentences using the Present Perfect and Past Simple tenses: \"She __________ Lilly yesterday, but she __________ her today.\"",
          options: [
            "seed / haven't seen",
            "has seen / saw",
            "saw / hasn't seen",
            "sees / hasn't seen"
          ],
          correct: 2,
          explanation: "La respuesta correcta es: saw / hasn't seen. 'Saw' (Past Simple) va con 'yesterday' y 'hasn't seen' (Present Perfect) va con 'today'."
        },
        {
          q: "Complete this sentence: \"When we were kids, we ______ cartoons every morning.\"",
          options: [
            "used to watch",
            "use to watched",
            "was used to watch",
            "using to watch"
          ],
          correct: 0,
          explanation: "La respuesta correcta es: used to watch. La estructura 'used to + verbo' se usa para expresar acciones habituales en el pasado."
        }
      ]
    },

    unidad4: {
      name: "Unidad 4: What's next?",
      questions: [
        {
          q: "Choose the correct form of the future simple: She _________you as soon as she arrives.",
          options: [
            "will called",
            "is calling",
            "calls",
            "will call"
          ],
          correct: 3,
          explanation: "El futuro simple se forma utilizando 'will' seguido de la forma base del verbo. Por lo tanto, 'will call' es la única opción correcta."
        },
        {
          q: "Choose the correct imperative sentence:",
          options: [
            "You must to turn left.",
            "Stop talking and listen carefully.",
            "You turning left now.",
            "Turns left quickly!"
          ],
          correct: 1,
          explanation: "El imperativo se forma con la forma base del verbo sin la partícula 'to' y sin sujeto explícito. 'Stop talking and listen carefully' es la única que cumple esta regla."
        },
        {
          q: "Choose the correct sentence using the future perfect tense:",
          options: [
            "I will have finished my homework before 6 PM.",
            "I finish my homework before 6 PM.",
            "I will finish my homework before 6 PM.",
            "I am finishing my homework before 6 PM."
          ],
          correct: 0,
          explanation: "La estructura correcta para el futuro perfecto es: Sujeto + will have + participio pasado. Se usa para hablar de una acción que estará terminada antes de un momento específico en el futuro."
        },
        {
          q: "Choose the correct superlative adjective to complete the sentence: That was ___________ movie I have ever seen!",
          options: [
            "Funnier",
            "the most funny",
            "the funniest",
            "funnier tan"
          ],
          correct: 2,
          explanation: "Para formar el superlativo de 'funny' (palabra de dos sílabas que termina en 'y'), se cambia la 'y' por 'i', se añade '-est' y se coloca 'the' delante. La forma correcta es 'the funniest'."
        },
        {
          q: "Complete the sentence with the correct comparative adjective: This hotel is __________ than the one we stayed in last year.",
          options: [
            "more expensive",
            "most expensive",
            "expensiver",
            "the more expensive"
          ],
          correct: 0,
          explanation: "Para adjetivos largos de dos o más sílabas (como 'expensive'), se debe añadir 'more' antes del adjetivo. Por lo tanto, 'more expensive' es la forma comparativa correcta."
        },
        {
          q: "Fill in the gap with the correct option to express purpose. This tool is useful ________ cutting paper.",
          options: [
            "In",
            "to",
            "for",
            "By"
          ],
          correct: 2,
          explanation: "Para expresar el propósito general o la función de un objeto cuando le sigue un verbo en gerundio (terminado en -ing), se debe utilizar 'for'. La estructura es: 'for + gerundio'."
        },
        {
          q: "Pick the correct preposition of movement to complete the sentence: She walked _________the bridge to get to the other side.",
          options: [
            "Off",
            "into",
            "through",
            "Across"
          ],
          correct: 3,
          explanation: "La preposición de movimiento 'across' significa ir 'al otro lado de' e indica un movimiento hacia el lado opuesto. Es la preposición correcta para cruzar un puente."
        },
        {
          q: "Select the correct sentence using the present simple for scheduled events:",
          options: [
            "The train leaves at 8 AM.",
            "The train is leaving at 8 AM.",
            "The train will leave at 8 AM.",
            "The train going to leave at 8 AM"
          ],
          correct: 0,
          explanation: "Para hablar de eventos programados en el futuro que siguen horarios fijos (como el transporte público), se debe emplear el presente simple. 'The train leaves at 8 AM' es la forma correcta."
        },
        {
          q: "Use the correct verb form to complete this sentence: I like_____________ my bills online",
          options: [
            "paying",
            "payed",
            "pay",
            "Pays"
          ],
          correct: 0,
          explanation: "Después del verbo 'like', se debe usar el gerundio (verbo terminado en '-ing'). Por lo tanto, 'paying' es la forma correcta."
        },
        {
          q: "Which of these is an irregular adjective?",
          options: [
            "Taller",
            "better",
            "happier",
            "Slower"
          ],
          correct: 1,
          explanation: "'Better' es la forma comparativa del adjetivo irregular 'good', que no sigue las reglas ortográficas habituales. Los demás son adjetivos regulares que simplemente añaden '-er' o '-ier'."
        }
      ]
    },

    unidad5: {
      name: "Unidad 5: What would you do if?",
      questions: [
        {
          q: "Choose the correct relative pronoun:",
          options: [
            "She has a friend which works in a hospital.",
            "She has a friend who works in a hospital.",
            "She has a friend where works in a hospital.",
            "She has a friend whose works in a hospital."
          ],
          correct: 1,
          explanation: "Según las reglas de las oraciones de relativo, el pronombre 'who' se utiliza exclusivamente para referirse a personas. Como 'friend' (amigo/a) es una persona, 'who' es el único pronombre relativo adecuado en este caso."
        },
        {
          q: "Choose the correct Second conditional sentence:",
          options: [
            "If I have a million dollars, I buy a big house.",
            "If I had a million dollars, I would buy a big house.",
            "If I has a million dollars, I bought a big house.",
            "If I had a million dollars, I buy a big house."
          ],
          correct: 1,
          explanation: "La estructura gramatical del Segundo Condicional (Second Conditional) se forma usando If + sujeto + past simple, would + verbo. Se usa para describir situaciones imaginarias o improbables. 'Had' es el pasado simple de 'have', y se acompaña correctamente de 'would buy'."
        },
        {
          q: "Choose the right answer below:",
          options: [
            "I can't buy this jacket because I don't have too much money.",
            "I can't buy this jacket because I don't have too many money.",
            "I can't buy this jacket because I don't have very much money.",
            "I can't buy this jacket because I don't have too money."
          ],
          correct: 0,
          explanation: "En inglés, 'too much' se utiliza con sustantivos incontables (uncountable nouns). Como 'money' (dinero) es un sustantivo incontable, 'too much' es la única forma gramaticalmente correcta. ('too many' se usaría solo para sustantivos contables en plural)."
        },
        {
          q: "Complete the sentence with the correct demonstrative:",
          options: [
            "This book on the table is mine.",
            "These book on the table is mine.",
            "Those book on the table is mine.",
            "Them book on the table is mine."
          ],
          correct: 0,
          explanation: "Los demostrativos deben concordar en número con el sustantivo al que acompañan. 'This' se utiliza para indicar objetos singulares. Puesto que 'book' está en singular, no se pueden usar 'these' ni 'those', ya que ambos se usan con plurales."
        },
        {
          q: "Find below the right relative pronoun:",
          options: [
            "I will never forget the day who I met my best friend.",
            "I will never forget the day which I met my best friend.",
            "I will never forget the day when I met my best friend.",
            "I will never forget the day where I met my best friend."
          ],
          correct: 2,
          explanation: "De acuerdo con las reglas de los pronombres relativos, 'when' se utiliza específicamente para referirse al tiempo o a un momento definido (en este caso, 'the day' o 'el día')."
        },
        {
          q: "Choose the correct sentence using 'too' and 'enough':",
          options: [
            "The dress is enough small for me.",
            "The dress is too small for me.",
            "The dress is small too for me.",
            "The dress is small enough for me."
          ],
          correct: 1,
          explanation: "Se utiliza la estructura 'too + adjetivo' (en este caso, 'too small') para indicar que algo es excesivo o supone un problema. La opción D sería correcta para expresar 'small enough', pero la respuesta más clara es 'too small'."
        },
        {
          q: "Choose the correct Third Conditional sentence:",
          options: [
            "If we had left earlier, we would have missed the flight.",
            "If we had left earlier, we wouldn't have missed the flight.",
            "If we left earlier, we wouldn't have missed the flight.",
            "If we would have left earlier, we wouldn't have missed the flight."
          ],
          correct: 1,
          explanation: "La estructura correcta del Tercer Condicional (Third Conditional) se forma con If + past perfect simple, would have + past participle. La opción B es la única que sigue esta regla al usar 'had left' (pasado perfecto) y 'wouldn't have missed' (would have + participio pasado) para hablar de una situación imaginaria en el pasado."
        },
        {
          q: "Choose the correct use of 'too many':",
          options: [
            "There are too many people in the room. We need more space.",
            "There are too much people in the room. We need more space.",
            "There are too people in the room. We need more space.",
            "There are many too people in the room. We need more space."
          ],
          correct: 0,
          explanation: "Para expresar una cantidad excesiva con sustantivos contables en plural (como es el caso de 'people'), se debe utilizar el cuantificador 'too many'. La opción B es incorrecta porque 'too much' se utiliza exclusivamente con sustantivos incontables."
        },
        {
          q: "Choose the correct sentence with -ed and -ing adjectives:",
          options: [
            "I was very frightened after watching that horror film.",
            "I was very frightening after watching that horror film.",
            "I was very frightened while watching that horror film.",
            "I am very frightened when watching that horror film."
          ],
          correct: 0,
          explanation: "Los adjetivos terminados en '-ed' se utilizan para describir cómo se siente una persona internamente (en este caso, asustada tras ver la película). Los adjetivos que terminan en '-ing' se usan para describir la cosa o situación externa que causa ese sentimiento. Por lo tanto, para referirse a la emoción del sujeto 'I', lo correcto es 'frightened'."
        },
        {
          q: "Choose the correct sentence using 'whose':",
          options: [
            "My grandparents, whose house is in the town, love gardening.",
            "My grandparents, that house is in the countryside, love gardening.",
            "My grandparents, whose house is in the countryside, love gardening.",
            "My grandparents, where house is in the countryside, love gardening."
          ],
          correct: 2,
          explanation: "El pronombre relativo 'whose' se emplea para indicar posesión, tanto para personas como para cosas (en este caso, se refiere a la casa que pertenece a los abuelos). Al tratarse de una oración de relativo explicativa (non-defining relative clause), esta información extra va correctamente enmarcada entre comas."
        }
      ]
    },

        unidad6: {
          name: "Unidad 6: Work smarter",
          questions: [
            {
              q: "Choose the correct passive form of the active sentence: \"The manager wrote the email\".",
              options: [
                "The email writes the manager.",
                "The email was written by the manager.",
                "The email is wrote by the manager.",
                "The email was writing by the manager."
              ],
              correct: 1,
              explanation: "Para formar la voz pasiva, el objeto de la oración activa ('the email') pasa a ser el sujeto. El verbo 'to be' debe ir en el mismo tiempo que el verbo principal activo (pasado simple: 'was'), seguido del participio pasado del verbo principal ('written'), y finalmente el agente introducido por la preposición 'by' ('by the manager')."
            },
            {
              q: "Choose the correct reported speech for the sentence: Sarah said: \"I called Mark yesterday\".",
              options: [
                "Sarah said that she had called Mark the previous day.",
                "Sarah said that she calls Mark yesterday.",
                "Sarah said that Mark called her yesterday.",
                "Sarah said that she was calling Mark the previous day."
              ],
              correct: 0,
              explanation: "Al pasar al estilo indirecto (Reported Speech) con un verbo introductorio en pasado ('said'), se aplica el backshift. El pasado simple ('called') cambia a pasado perfecto ('had called'). Además, las expresiones de tiempo también cambian; 'yesterday' se convierte en 'the previous day' o 'the day before'."
            },
            {
              q: "Choose the correct sentence using \"much\":",
              options: [
                "There are much people at the event.",
                "There is much information online.",
                "I have much friends on social media.",
                "Much companies use digital tools."
              ],
              correct: 1,
              explanation: "La palabra 'much' se utiliza para indicar una cantidad grande, pero exclusivamente con sustantivos incontables. 'Information' es incontable, mientras que 'people', 'friends' y 'companies' son contables y deberían usar 'many'."
            },
            {
              q: "The agent in the passive voice uses the preposition:",
              options: [
                "by",
                "for",
                "to",
                "All answers are incorrect"
              ],
              correct: 0,
              explanation: "En la voz pasiva, el sujeto que realiza la acción original se convierte en el complemento agente, el cual siempre se introduce con la preposición 'by'."
            },
            {
              q: "What is a quantifier?",
              options: [
                "A word that describes a noun",
                "A word that indicates quantity without an exact number",
                "A word that replaces a noun",
                "A word that shows possession"
              ],
              correct: 1,
              explanation: "Un cuantificador (quantifier) se define como una palabra que se utiliza para indicar la cantidad o porción de algo, pero sin dar una cifra numérica exacta."
            },
            {
              q: "Which of the following is an example of the Saxon genitive?",
              options: [
                "Maria's phone",
                "The phone of Maria",
                "The phone's Maria",
                "The Maria phone"
              ],
              correct: 0,
              explanation: "La regla general del genitivo sajón consiste en añadir \"'s\" al sustantivo que posee algo (el poseedor). Por lo tanto, 'Maria's phone' indica correctamente que el teléfono pertenece a María."
            },
            {
              q: "Which of these indefinite pronouns refer to people?",
              options: [
                "Something",
                "Anywhere",
                "Nobody",
                "Everything"
              ],
              correct: 2,
              explanation: "Los pronombres indefinidos que se refieren a personas son aquellos compuestos por some-, any-, no- o every- seguidos de -one o -body (como someone, anybody, nobody, everyone). 'Something' y 'Everything' se refieren a cosas, y 'Anywhere' se refiere a lugares."
            },
            {
              q: "Which quantifier is used with countable nouns?",
              options: [
                "Much",
                "Little",
                "Many",
                "A little"
              ],
              correct: 2,
              explanation: "La palabra 'many' se utiliza exclusivamente con sustantivos contables para indicar una cantidad grande. Las opciones 'much', 'little' y 'a little' se emplean con sustantivos incontables."
            },
            {
              q: "Which sentence correctly uses a modal verb?",
              options: [
                "She must to finish the report today.",
                "He can speaks three languages.",
                "You should take a break.",
                "They might goes to the party."
              ],
              correct: 2,
              explanation: "Los verbos modales no cambian su forma dependiendo del sujeto (no se les añade '-s' en la tercera persona) y siempre van seguidos por la forma base del verbo principal (infinitivo sin 'to'). La opción C es la única correcta; la opción A usa incorrectamente la partícula 'to', y las opciones B y D conjugan el verbo principal terminando en '-s' o '-es', lo cual es un error."
            },
            {
              q: "Which type of speech uses quotation marks (\"\")? ",
              options: [
                "Reported speech",
                "Direct speech",
                "Indirect speech",
                "All answers are correct"
              ],
              correct: 1,
              explanation: "El estilo directo (Direct speech) es aquel en el que reproducimos las palabras literales que alguien ha dicho utilizando comillas (quotation marks). El estilo indirecto (Reported/Indirect speech) cuenta lo dicho sin reproducir las palabras exactas y sin comillas."
            }
          ]
        }
      }
    },
    
    asignatura2: {
      name: "Ampliación y planificación de empresas",
      description: "Tests de Ampliación y planificación de empresas",
      exams: {
        semestral: {
          name: "Prueba Semestral",
          questions: [
            {
              q: "AUN NO TENEMOS PREGUNTAS:",
              options: [
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS"
              ],
              correct: 0,
              explanation: "AUN NO TENEMOS PREGUNTAS."
            }
          ]
        },

        unidad1: {
          name: "Unidad 1: Economía y administración | nociones básicas de economía",
          questions: [
            {
              q: "¿Cuál de las siguientes no es una característica del préstamo hipotecario?",
              options: [
                "La cuantía concedida dependerá del valor de la vivienda",
                "Habitualmente la cuantía concedida no superará el 80% del valor de tasación",
                "Su plazo máximo de amortización no suele exceder de 8 años",
                "Suele utilizarse para la compra de bienes inmuebles"
              ],
              correct: 2,
              explanation: "El plazo máximo de amortización de un préstamo hipotecario suele exceder ampliamente los 8 años, normalmente oscila entre 15 y 30 años. Las otras opciones sí son características del préstamo hipotecario."
            },
            {
              q: "¿Cuál de los siguientes es un agente que actúa en la economía?",
              options: [
                "Familias",
                "Empresas",
                "Estado",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "Familias, empresas y estado son los tres agentes económicos principales que participan en la economía de mercado."
            },
            {
              q: "¿En qué se basa la decisión que se toma para cubrir necesidades?",
              options: [
                "En un impulso",
                "En una comparativa",
                "En una encuesta",
                "En una imitación de lo que hace la sociedad"
              ],
              correct: 1,
              explanation: "Las decisiones racionales para cubrir necesidades se basan en una comparativa entre opciones disponibles, considerando beneficios, costes y disponibilidad de recursos."
            },
            {
              q: "Cuando se toma una decisión, los costes del pasado que no deben influir en la decisión futura se denominan:",
              options: [
                "El coste operacional",
                "El coste duplicado",
                "El coste irrecuperable",
                "El coste de ahorro"
              ],
              correct: 2,
              explanation: "Los costes irrecuperables son gastos pasados que ya se han realizado y no pueden recuperarse, por lo que no deben considerarse al tomar decisiones futuras."
            },
            {
              q: "El coste total de un préstamo será la suma de:",
              options: [
                "Capital inicial e intereses",
                "Interés fijo e interés variable",
                "Nominal, amortización, comisiones y tasas",
                "Nominal, intereses, comisiones y gastos"
              ],
              correct: 3,
              explanation: "El coste total de un préstamo incluye el importe nominal solicitado, más los intereses generados, más las comisiones del banco y los gastos asociados (tasación, seguros, etc.)."
            },
            {
              q: "El presupuesto familiar se compone de:",
              options: [
                "Gastos fijos",
                "Gastos corrientes",
                "Gastos ocasionales",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "Un presupuesto familiar integra gastos fijos (hipoteca, servicios), gastos corrientes (alimentación, transporte) y gastos ocasionales (reparaciones, ocio), junto con los ingresos."
            },
            {
              q: "La capacidad de endeudamiento:",
              options: [
                "Será como máximo del 35% de los ingresos netos",
                "Será como máximo del 45% de los ingresos netos",
                "Es equivalente al límite de endeudamiento",
                "Es el total de los ingresos netos"
              ],
              correct: 0,
              explanation: "La capacidad de endeudamiento recomendada es como máximo del 35% de los ingresos netos mensuales para mantener una situación financiera saludable."
            },
            {
              q: "La cuantía recomendada para el fondo de emergencia es aquella que permite mantener todos los gastos durante:",
              options: [
                "6 meses",
                "3 meses",
                "12 meses",
                "Toda la vida del individuo"
              ],
              correct: 0,
              explanation: "Se recomienda tener un fondo de emergencia que cubra entre 3 y 6 meses de gastos, siendo 6 meses el nivel más conservador y seguro para afrontar imprevistos."
            },
            {
              q: "Las tarjetas revolving:",
              options: [
                "Son las que emiten las empresas comerciales",
                "Se consideran una deuda eterna",
                "Realizan el cargo de manera inmediata en la cuenta bancaria",
                "Todas son correctas"
              ],
              correct: 1,
              explanation: "Las tarjetas revolving generan intereses muy altos sobre el saldo pendiente, lo que puede convertirlas en una deuda prácticamente eterna si solo se pagan los intereses mínimos."
            },
            {
              q: "Renunciar a consumir hoy para consumir más en el futuro, ¿a qué concepto hace referencia?",
              options: [
                "Consumo",
                "Financiación",
                "Planificación",
                "Ahorro"
              ],
              correct: 3,
              explanation: "El ahorro es el acto de renunciar al consumo presente para acumular recursos y poder consumir más en el futuro, generando riqueza y seguridad económica."
            }
          ]
        },

        unidad2: {
          name: "Unidad 2: El sistema fiscal",
          questions: [
            {
              q: "¿Cómo se crea valor en un producto?",
              options: [
                "Incrementando la cuota de mercado",
                "Mediante una buena cadena de proveedores en el aprovisionamiento",
                "Utilizando nuevas tecnologías y personal de élite",
                "Añadiéndole utilidad para que satisfaga necesidades"
              ],
              correct: 3,
              explanation: "El valor se crea en un producto añadiéndole utilidad, es decir, haciéndolo capaz de satisfacer necesidades o deseos de los consumidores de forma más efectiva."
            },
            {
              q: "¿Qué tipo de tributo es aquel que no conlleva contraprestación directa y que se dedica a la financiación general del gasto público?",
              options: [
                "Impuestos",
                "Contribuciones especiales",
                "Tasas",
                "Sablazos"
              ],
              correct: 0,
              explanation: "Los impuestos son tributos que no exigen contraprestación directa y se destinan a financiar el gasto público general del Estado."
            },
            {
              q: "Cuando el vendedor quiere dejar constancia de la oferta de un determinado bien o servicio y sus condiciones de entrega, utilizará:",
              options: [
                "La factura",
                "El presupuesto",
                "El albarán",
                "El pedido"
              ],
              correct: 1,
              explanation: "El presupuesto es el documento que el vendedor presenta para dejar constancia de su oferta, especificando el bien o servicio, cantidad, precio y condiciones de entrega."
            },
            {
              q: "El documento formal que incorpora una orden de pago, por la que una persona ordena pagar una determinada cantidad de dinero al poseedor de esta a su vencimiento:",
              options: [
                "Cheque",
                "Letra de cambio",
                "Recibo normalizado",
                "Transferencia bancaria"
              ],
              correct: 1,
              explanation: "La letra de cambio es un documento mercantil que contiene una orden incondicional de pago de una cantidad determinada, en una fecha convenida, al tenedor del documento."
            },
            {
              q: "El documento que recoge los cobros y pagos que tiene previstos la empresa, en base a las operaciones que va a realizar a corto plazo, se denomina:",
              options: [
                "Plan de marketing",
                "Plan de tesorería",
                "Plan contable",
                "Sistema tributario"
              ],
              correct: 1,
              explanation: "El plan de tesorería es un documento que proyecta los cobros y pagos previstos de la empresa a corto plazo, permitiendo gestionar la liquidez financiera."
            },
            {
              q: "El Estado puede conseguir los ingresos públicos de:",
              options: [
                "Las donaciones y la deuda pública",
                "La extracción o expropiación",
                "Los ingresos contractuales",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "El Estado obtiene ingresos públicos de múltiples fuentes: tributos, donaciones, deuda pública, expropiaciones e ingresos por servicios contractuales."
            },
            {
              q: "El impuesto que se encarga de gravar el consumo es:",
              options: [
                "El IVA",
                "El IRPF",
                "El Impuesto sobre Sociedades",
                "La declaración censal"
              ],
              correct: 0,
              explanation: "El IVA (Impuesto sobre el Valor Añadido) es el tributo directo que grava el consumo de bienes y servicios en cada fase de la cadena de distribución."
            },
            {
              q: "El impuesto que se encarga de gravar las rentas de cada persona física es:",
              options: [
                "El IVA",
                "El IRPF",
                "El Impuesto sobre Sociedades",
                "La declaración censal"
              ],
              correct: 1,
              explanation: "El IRPF (Impuesto sobre la Renta de las Personas Físicas) grava los ingresos y rentas obtenidas por personas físicas procedentes del trabajo, capital o actividades económicas."
            },
            {
              q: "La base liquidable del IRPF es:",
              options: [
                "Igual a la base imponible",
                "La parte que queda exenta de la aplicación del tributo",
                "La cantidad que finalmente es sometida al gravamen",
                "El tipo impositivo progresivo"
              ],
              correct: 2,
              explanation: "La base liquidable del IRPF es la cantidad que finalmente se somete al tipo de gravamen después de restar de la base imponible las reducciones y deducciones aplicables."
            },
            {
              q: "Según el análisis PESTEL, el factor ecológico del macroentorno hace referencia a:",
              options: [
                "Inflación, política monetaria, desempleo",
                "Demografía, educación, estilo de vida",
                "Contabilidad, legislación, salubridad",
                "Energía, concienciación ambiental, restricción de emisiones"
              ],
              correct: 3,
              explanation: "En PESTEL, el factor ecológico (E) analiza aspectos ambientales como el consumo energético, la conciencia ambiental de los consumidores y las restricciones en emisiones de CO2."
            }
          ]
        },

        unidad3: {
          name: "Unidad 3: Concepto de marketing y análisis de mercado",
          questions: [
            {
              q: "¿Cuál de las siguientes no es una orientación para la actividad comercial según el enfoque del marketing?",
              options: [
                "Orientación hacia el producto",
                "Orientación hacia las ventas",
                "Orientación hacia el cliente o consumidor",
                "Orientación hacia la innovación tecnológica"
              ],
              correct: 3,
              explanation: "Las orientaciones principales del marketing son: hacia el producto, hacia las ventas y hacia el cliente/consumidor. La innovación tecnológica no es una orientación básica del marketing."
            },
            {
              q: "¿Cuál de los siguientes elementos no pertenece al concepto de mercado?",
              options: [
                "Beneficios obtenidos por la empresa",
                "Conjunto de individuos con necesidades",
                "Recursos y capacidad de compra",
                "Lugar de intercambio comercial"
              ],
              correct: 0,
              explanation: "El mercado está compuesto por individuos con necesidades, recursos y capacidad de compra en un lugar de intercambio. Los beneficios no son un elemento constitutivo del mercado."
            },
            {
              q: "¿Cuál es el objetivo principal del marketing relacional?",
              options: [
                "Incrementar las ventas a corto plazo",
                "Mantener una relación significativa a largo plazo con el público objetivo",
                "Realizar promociones y descuentos",
                "Atraer nuevos clientes a través de la publicidad masiva"
              ],
              correct: 1,
              explanation: "El marketing relacional se enfoca en construir y mantener relaciones duraderas y significativas con los clientes a lo largo del tiempo, buscando lealtad y retención."
            },
            {
              q: "¿Cuál es la definición más completa de marketing?",
              options: [
                "El proceso de ventas de productos y servicios",
                "El estudio de competencia y comportamiento del consumidor",
                "La actividad de publicidad y análisis de mercado",
                "La planificación y ejecución de la concepción del producto, fijación de precios, promoción y distribución de ideas, bienes y servicios para crear relaciones de intercambio que satisfagan objetivos individuales y organizacionales"
              ],
              correct: 3,
              explanation: "El marketing es un proceso integral que incluye la concepción del producto, fijación de precios, promoción, distribución y creación de relaciones de intercambio benéficas."
            },
            {
              q: "¿Cuál es la principal diferencia entre marketing estratégico y marketing operativo?",
              options: [
                "El marketing estratégico se centra en el corto plazo, mientras que el operativo se centra en el largo plazo",
                "El marketing estratégico se ocupa de la implementación de acciones, mientras que el operativo se ocupa del análisis de necesidades",
                "El marketing estratégico se ocupa de la publicidad, mientras que el marketing operativo se centra en las ventas",
                "El marketing estratégico se centra en el análisis continuo y la identificación de necesidades del público objetivo, mientras que el marketing operativo se focaliza en la puesta en marcha de medidas para aprovechar oportunidades"
              ],
              correct: 3,
              explanation: "El marketing estratégico analiza el mercado y define objetivos a largo plazo, mientras que el marketing operativo ejecuta las acciones y tácticas para implementar la estrategia."
            },
            {
              q: "¿Cuáles son las funciones del marketing en la empresa?",
              options: [
                "Funciones de producción y funciones de comercialización",
                "Funciones de dirección y gestión y funciones de acción",
                "Funciones de evaluación del mercado",
                "Funciones de análisis y funciones de planificación y decisión"
              ],
              correct: 3,
              explanation: "Las funciones clave del marketing son: análisis (investigación de mercado, comportamiento del consumidor) y planificación/decisión (estrategia, objetivos, tácticas)."
            },
            {
              q: "¿Qué caracteriza al marketing emocional?",
              options: [
                "La segmentación del mercado basada en datos demográficos",
                "El uso intensivo de técnicas de venta agresivas",
                "La implementación de estrategias de precios competitivos",
                "La creación de una conexión emocional entre el producto y el consumidor"
              ],
              correct: 3,
              explanation: "El marketing emocional busca generar una conexión emocional fuerte entre el consumidor y el producto o marca, apelando a sentimientos y valores."
            },
            {
              q: "¿Qué enfoque de marketing se centra en la anticipación de problemas y necesidades futuras del mercado?",
              options: [
                "Orientación hacia el producto",
                "Orientación hacia las ventas",
                "Orientación hacia la competencia",
                "Orientación hacia el mercado"
              ],
              correct: 3,
              explanation: "La orientación hacia el mercado implica escuchar continuamente al consumidor, anticipar sus necesidades futuras y adaptar la oferta de la empresa proactivamente."
            },
            {
              q: "¿Qué es el Producto Mínimo Viable (PMV) en el contexto del método Lean Startup?",
              options: [
                "Una versión de prueba del producto con características básicas necesarias para satisfacer las necesidades de los clientes",
                "Un producto final completo",
                "Un concepto teórico sin implementación real",
                "Un plan de marketing detallado"
              ],
              correct: 0,
              explanation: "El PMV es una versión simplificada del producto con solo las características esenciales, diseñada para validar la idea con clientes reales y realizar aprendizajes rápidos."
            },
            {
              q: "El marketing interno se refiere a:",
              options: [
                "Las acciones del marketing dentro de la organización dirigidas a sus propios integrantes",
                "Las estrategias de comunicación de la empresa hacia su público objetivo",
                "La publicidad realizada dentro del país de origen de la empresa",
                "Las ventas directas a los empleados de la empresa"
              ],
              correct: 0,
              explanation: "El marketing interno incluye acciones de comunicación y motivación dirigidas a los empleados para alinearlos con los objetivos y valores de la empresa."
            }
          ]
        },

        unidad4: {
          name: "Unidad 4: Plan de Marketing",
          questions: [
            {
              q: "¿Cuál de las siguientes NO es una estrategia según la ventaja competitiva?",
              options: [
                "Estrategia de costes",
                "Estrategia de diferenciación",
                "Estrategia de enfoque",
                "Estrategia de diversificación"
              ],
              correct: 3,
              explanation: "Las estrategias genéricas de ventaja competitiva según Michael Porter son: costes, diferenciación y enfoque. La diversificación no es una estrategia de ventaja competitiva."
            },
            {
              q: "¿Cuál de los siguientes no es un criterio para clasificar los datos en el análisis de mercado?",
              options: [
                "Por su naturaleza",
                "Por su ubicación",
                "Por su fuente",
                "Por su costo"
              ],
              correct: 3,
              explanation: "Los datos se clasifican por su naturaleza (cualitativos/cuantitativos), por su fuente (primarios/secundarios) y por su ubicación (internos/externos), no por su costo."
            },
            {
              q: "¿Cuál es la primera fase en el proceso de análisis de mercados?",
              options: [
                "Análisis de la información",
                "Búsqueda y obtención de la información",
                "Planteamiento de la investigación",
                "Obtención y presentación de resultados"
              ],
              correct: 2,
              explanation: "La primera fase es el planteamiento de la investigación, donde se definen objetivos, variables y la metodología a seguir en el análisis de mercado."
            },
            {
              q: "¿Cuál es la principal herramienta del marketing estratégico?",
              options: [
                "Análisis DAFO",
                "Plan de marketing",
                "Investigación de mercado",
                "Estrategia de precios"
              ],
              correct: 1,
              explanation: "El plan de marketing es la herramienta principal que integra el análisis DAFO, la investigación de mercado y define las estrategias y acciones a ejecutar."
            },
            {
              q: "¿Qué análisis no forma parte del análisis de la situación en el plan de marketing?",
              options: [
                "Análisis de la demanda",
                "Análisis de la competencia",
                "Análisis del producto",
                "Análisis interno de la empresa"
              ],
              correct: 2,
              explanation: "El análisis de la situación incluye: análisis de la demanda, competencia e interno de la empresa. El análisis del producto forma parte de la definición estratégica, no de la situación."
            },
            {
              q: "¿Qué apartado del plan de marketing se enfoca en definir las metas comerciales a medio y largo plazo?",
              options: [
                "Análisis de la situación",
                "Evaluación y control",
                "Definición estratégica",
                "Implantación de la estrategia"
              ],
              correct: 2,
              explanation: "La definición estratégica es el apartado donde se establecen los objetivos comerciales a medio y largo plazo, así como las estrategias para alcanzarlos."
            },
            {
              q: "¿Qué herramienta permite analizar las debilidades, amenazas, fortalezas y oportunidades de una empresa?",
              options: [
                "Análisis PEST",
                "Análisis DAFO",
                "Investigación de mercado",
                "Matriz de crecimiento"
              ],
              correct: 1,
              explanation: "El análisis DAFO (Debilidades, Amenazas, Fortalezas, Oportunidades) es la herramienta que integra el análisis interno y externo de la empresa."
            },
            {
              q: "¿Qué política del marketing mix se relaciona con la forma y el lugar en el que los bienes y servicios se ponen a disposición del público?",
              options: [
                "Política de precio",
                "Política de producto",
                "Política de distribución",
                "Política de comunicación"
              ],
              correct: 2,
              explanation: "La política de distribución (Place) define cómo, dónde y cuándo los consumidores acceden a los productos o servicios."
            },
            {
              q: "El informe final de la investigación:",
              options: [
                "Tendrá un carácter formal, público y subjetivo",
                "Es un vídeo de presentación",
                "Se centra en clasificar las opiniones que se hayan obtenido y valorarlas en base a los criterios",
                "Debe ser ordenado, preciso, objetivo y confidencial"
              ],
              correct: 3,
              explanation: "El informe debe tener carácter formal, privado/confidencial, ser objetivo basándose en datos, estar bien estructurado y ser preciso en sus conclusiones."
            },
            {
              q: "La política de comunicación:",
              options: [
                "Se relaciona con la forma y el lugar en el que los bienes y servicios se ponen a disposición del público",
                "Tiene como fin informar, recordar y persuadir a los consumidores potenciales",
                "Es sinónimo de hacer publicidad",
                "Permite determinar las secciones del mercado más afines y adecuadas"
              ],
              correct: 1,
              explanation: "La política de comunicación (Promotion) busca informar sobre el producto, recordar su existencia y persuadir a través de publicidad, relations públicas y promociones."
            }
          ]
        },

        unidad5: {
          name: "Unidad 5: Los Recursos Humanos en la empresa",
          questions: [
            {
              q: "Al responsable de recursos humanos se le presuponen varias habilidades, entre ellas:",
              options: [
                "Tener motivación y ser capaz de trasmitirla al equipo",
                "Comunicar efectivamente",
                "Ser resolutivo y determinado en la toma de decisiones",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "El responsable de RRHH debe poseer múltiples habilidades: liderazgo y motivación, comunicación efectiva, capacidad de decisión, entre otras."
            },
            {
              q: "Calcular las nóminas y realizar el pago a los trabajadores se ubica dentro de la siguiente función:",
              options: [
                "Función de empleo",
                "Función de administración del personal",
                "Función de retribución o contraprestación de servicios",
                "Función de desarrollo y servicios sociales"
              ],
              correct: 2,
              explanation: "La función de retribución o contraprestación de servicios incluye todas las acciones relacionadas con la compensación al trabajador: nóminas, beneficios sociales, etc."
            },
            {
              q: "El modelo de gestión por competencias forma parte de los:",
              options: [
                "Modelos tradicionales",
                "Modelos actuales",
                "Modelos históricos",
                "Ninguna es correcta"
              ],
              correct: 1,
              explanation: "La gestión por competencias es un enfoque moderno que evalúa a los trabajadores según sus capacidades, habilidades y conocimientos específicos, no solo su experiencia."
            },
            {
              q: "El plan de actuación, para que el personal esté ajustado tanto cuantitativa como cualitativamente a los objetivos que se hayan planteado en la previsión previa, incluirá:",
              options: [
                "Prioridades y temporalización",
                "Asignación de presupuestos",
                "Responsabilidades",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "El plan de actuación debe especificar qué acciones se realizarán, cuándo, quién es responsable de cada una y cuál es el presupuesto asignado."
            },
            {
              q: "La función de desarrollo y servicios sociales del departamento de RRHH se encarga de:",
              options: [
                "Proveer a la empresa de personal",
                "La gestión burocrática de contratos, justificantes, bajas, etc.",
                "Motivación, satisfacción y correcto desempeño en el puesto",
                "Nóminas y realización del pago a los trabajadores"
              ],
              correct: 2,
              explanation: "Esta función busca mejorar las condiciones de trabajo, motivación y bienestar de los empleados, promoviendo su desarrollo profesional y personal."
            },
            {
              q: "La metodología de análisis de puestos de trabajo en la que el empleado que desempeña el puesto responde a un test sobre sus funciones y tareas, se denomina:",
              options: [
                "Observación directa",
                "Cuestionarios",
                "Entrevista",
                "Diarios de trabajo"
              ],
              correct: 1,
              explanation: "Los cuestionarios son instrumentos estandarizados donde los trabajadores registran por escrito información sobre sus tareas y funciones de manera estructurada."
            },
            {
              q: "La metodología de análisis de puestos de trabajo en la que los empleados registran cada jornada sus tareas, el tiempo dedicado a ellas, las personas a las que dan feedback de su trabajo y todas las observaciones que consideren relevantes, se denomina:",
              options: [
                "Observación directa",
                "Cuestionarios",
                "Entrevista",
                "Diarios de trabajo"
              ],
              correct: 3,
              explanation: "Los diarios de trabajo permiten recopilar información detallada y continua sobre las actividades diarias, tiempos y observaciones relevantes de cada puesto."
            },
            {
              q: "Los grupos profesionales se definen por:",
              options: [
                "Las características del trabajador",
                "La titulación del trabajador",
                "Las aptitudes del trabajador",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "Los grupos profesionales consideran múltiples factores: características personales, titulación académica, experiencia y aptitudes específicas de cada trabajador."
            },
            {
              q: "Para la planificación de los recursos humanos:",
              options: [
                "Es necesario plantear constantes aumentos de personal",
                "Se marcan objetivos logísticos y estratégicos",
                "Las desviaciones tienen siempre motivos extraordinarios",
                "Todas son correctas"
              ],
              correct: 1,
              explanation: "La planificación de RRHH establece objetivos tanto operativos (logísticos) como estratégicos, alineándose con los objetivos generales de la empresa."
            },
            {
              q: "Una organización informal:",
              options: [
                "Es aquella donde la estructura organizativa la define la dirección y se refleja en un organigrama con los puestos de trabajo, relaciones jerárquicas y funciones",
                "Es aquella donde la estructura organizativa está conformada según las relaciones personales que surgen de forma natural entre los trabajadores",
                "Es aquella que procura que su estructura esté en todo momento provista de personal, en sentido tanto cuantitativo como cualitativo",
                "Es aquella que impulsa la transformación digital implicando a todos los integrantes en el uso de la tecnología para fomentar un ecosistema abierto y digitalizado"
              ],
              correct: 1,
              explanation: "La organización informal es aquella que surge naturalmente de las relaciones interpersonales entre los trabajadores, sin estar planificada por la dirección."
            }
          ]
        },

        unidad6: {
          name: "Unidad 6: Liderazgo y Motivación",
          questions: [
            {
              q: "A las personas que, sin haber sido dotadas de autoridad, tienen la capacidad de influenciar sobre los demás por su carisma y personalidad, se les denomina:",
              options: [
                "Líderes",
                "Directores",
                "Jefes",
                "Mandos"
              ],
              correct: 0,
              explanation: "Los líderes son personas con capacidad natural de influencia y carisma, sin necesidad de autoridad formal. Se diferencian de los jefes y directores que tienen autoridad delegada."
            },
            {
              q: "¿Cuál de las siguientes es una tendencia actual relativa a la comunicación interna?",
              options: [
                "Motor de digitalización",
                "Employer Branding",
                "Apps internas",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "Las tendencias actuales en comunicación interna incluyen la transformación digital, el employer branding (marca empleadora) y el uso de aplicaciones internas para mejorar la conexión con empleados."
            },
            {
              q: "El estilo de liderazgo en el que el líder interviene solo cuando lo cree conveniente, dejando máxima libertad a sus empleados y controlando lo mínimo imprescindible, se denomina:",
              options: [
                "Liderazgo laissez faire",
                "Liderazgo democrático",
                "Liderazgo paternalista",
                "Liderazgo visionario"
              ],
              correct: 0,
              explanation: "El liderazgo laissez faire se caracteriza por baja intervención, máxima autonomía del equipo y mínimo control, confiando en la responsabilidad de los empleados."
            },
            {
              q: "El estilo de liderazgo en el que el líder tiene claro dónde quiere ir e intenta que el equipo visualice su meta y la comparta, se denomina:",
              options: [
                "Liderazgo laissez faire",
                "Liderazgo democrático",
                "Liderazgo paternalista",
                "Liderazgo visionario"
              ],
              correct: 3,
              explanation: "El liderazgo visionario inspira al equipo con una visión clara del futuro, comunicando objetivos aspiracionales y motivando a trabajar conjuntamente hacia esa meta."
            },
            {
              q: "El enfoque de liderazgo que defiende que la efectividad del liderazgo depende de la naturaleza de la circunstancia en la que se ejerza, lo conocemos como:",
              options: [
                "Enfoque situacional",
                "Enfoque funcional",
                "Enfoque empírico",
                "Ninguna es correcta"
              ],
              correct: 0,
              explanation: "El enfoque situacional propone que no existe un único estilo de liderazgo efectivo, sino que depende del contexto, el equipo y la situación específica."
            },
            {
              q: "Según la teoría de Herzberg, las variables que por sí mismas no producen motivación, pero cuya ausencia sí produce insatisfacción, se conocen como:",
              options: [
                "Factores motivacionales",
                "Factores higiénicos",
                "Factores laborales",
                "Factores de afiliación"
              ],
              correct: 1,
              explanation: "Los factores higiénicos (salario, condiciones de trabajo, seguridad) no motivan por sí solos, pero su ausencia crea insatisfacción e inconformidad."
            },
            {
              q: "La teoría que describe el estilo de liderazgo mediante la identificación de cinco niveles que mezclan diferentes rangos de preocupación por las personas y las tareas, se denomina:",
              options: [
                "Teoría del gran hombre o de rasgos",
                "Teoría X e Y de McGregor",
                "Teoría de Boyatzis y McKee",
                "Teoría de la malla gerencial de Blake y Mouton"
              ],
              correct: 3,
              explanation: "La teoría de la malla gerencial de Blake y Mouton presenta una matriz con dos dimensiones: preocupación por la producción (tareas) y preocupación por las personas, con distintos estilos."
            },
            {
              q: "Este autor diseñó una pirámide de necesidades en la que las necesidades expuestas en la base eran de supervivencia y, a medida que se ascendía, se desarrollaban nociones relativas al crecimiento personal y social del individuo:",
              options: [
                "Abraham Maslow",
                "McClelland",
                "Herzberg",
                "McGregor"
              ],
              correct: 0,
              explanation: "Abraham Maslow desarrolló la pirámide de necesidades que va desde necesidades fisiológicas hasta autorrealización, mostrando la jerarquía de motivaciones humanas."
            },
            {
              q: "Las habilidades interpersonales, también conocidas como habilidades ________,se refieren a la capacidad de una persona para interactuar de manera efectiva con los demás:",
              options: [
                "Duras",
                "Ásperas",
                "Blandas",
                "Opacas"
              ],
              correct: 2,
              explanation: "Las habilidades blandas o soft skills incluyen comunicación, empatía, trabajo en equipo y liderazgo, esenciales para interacciones interpersonales efectivas."
            },
            {
              q: "La capacidad de comprender y compartir los sentimientos de otros se denomina:",
              options: [
                "Comunicación efectiva",
                "Empatía",
                "Resolución de conflictos",
                "Adaptabilidad"
              ],
              correct: 1,
              explanation: "La empatía es la capacidad de ponerse en el lugar del otro, entender sus emociones y perspectivas, fundamental para relaciones interpersonales saludables."
            }
          ]
        }
      }
    },
    
    asignatura3: {
      name: "Programación",
      description: "Tests de Programación - 15 Unidades",
      exams: {
        semestral: {
          name: "Prueba Semestral",
          questions: [
            {
              q: "AUN NO TENEMOS PREGUNTAS:",
              options: [
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS"
              ],
              correct: 0,
              explanation: "AUN NO TENEMOS PREGUNTAS."
            }
          ]
        },

        unidad1: {
          name: "Unidad 1: Introducción a la programación",
          questions: [
            {
              q: "Acoplamiento patológico:",
              options: [
                "Se produce siempre que entre dos o más módulos se usen las mismas fuentes externas de datos.",
                "Se produce siempre que los módulos usen los mismos datos globales.",
                "Se produce siempre que un módulo acceda a otro para leer o modificar los datos internos del último.",
                "Todas las anteriores son correctas."
              ],
              correct: 2,
              explanation: "La respuesta correcta es C. Se produce siempre que un módulo acceda a otro para leer o modificar los datos internos del último. El acoplamiento patológico o por contenido se refiere precisamente a cuando un módulo modifica o depende directamente de los datos o el funcionamiento interno de otro, dificultando el mantenimiento."
            },
            {
              q: "Dentro de la simbología de los diagramas de flujo cuál de estas afirmaciones es falsa:",
              options: [
                "Las operaciones que se vayan realizando deben de seguir un orden en concreto, y este orden se indica con flechas.",
                "Las decisiones se indican en un rombo donde pondremos tantas líneas de flujo como alternativas finales tengamos.",
                "Las operaciones de cálculo interno del programa se describen con una bandera.",
                "Cada uno de los diagramas de flujo comienzan y terminan con terminal que se representa con un óvalo o elipse."
              ],
              correct: 2,
              explanation: "La respuesta correcta es C. Las operaciones de cálculo interno del programa se describe con una bandera. Esta afirmación es falsa porque las operaciones o instrucciones de cálculo interno se representan mediante rectángulos, no con banderas."
            },
            {
              q: "El valor Booleano:",
              options: [
                "Es numérico.",
                "Es secuencial.",
                "Es modular.",
                "Ninguna de las anteriores."
              ],
              correct: 3,
              explanation: "La respuesta correcta es D. Ninguna de las anteriores. Un valor booleano es un tipo de valor que tiene solo dos opciones: verdadero o falso. No es numérico, ni secuencial, ni modular."
            },
            {
              q: "En la cohesión comunicacional:",
              options: [
                "Los elementos software que constituyen el módulo tienen una sola tarea definida.",
                "La salida de una instrucción debe de coincidir de manera estricta con la entrada.",
                "Conviven varias actividades paralelas que no siguen un orden específico y que comparten los mismos datos de entrada y salida.",
                "Ninguna de las anteriores es correcta."
              ],
              correct: 2,
              explanation: "La respuesta correcta es C. Conviven varias actividades paralelas que no siguen un orden específico y que comparten los mismos datos de entrada y salida. La cohesión comunicacional ocurre cuando un módulo no realiza una única función, sus actividades están relacionadas por datos compartidos y la secuencia no es importante."
            },
            {
              q: "En la cohesión lógica:",
              options: [
                "Los elementos software que constituyen el módulo tienen una sola tarea definida.",
                "La salida de una instrucción debe de coincidir de manera estricta con la entrada.",
                "Conviven varias actividades paralelas que no siguen un orden específico y que comparten los mismos datos de entrada y salida.",
                "Ninguna de las anteriores es correcta."
              ],
              correct: 3,
              explanation: "La respuesta correcta es D. Ninguna de las anteriores es correcta. La cohesión lógica ocurre cuando un módulo no realiza una función única, sus actividades están relacionadas por otros motivos (ni por datos ni por flujo) y la secuencia sí es importante. Ninguna de las otras opciones describe correctamente la cohesión lógica."
            },
            {
              q: "Es una representación gráfica de elementos y sus relaciones:",
              options: [
                "Paradigma.",
                "Diagrama.",
                "Iteración.",
                "Todas las anteriores son incorrectas."
              ],
              correct: 1,
              explanation: "La respuesta correcta es B. Diagrama. En los conceptos fundamentales de programación, un diagrama se define explícitamente como la representación gráfica de elementos y sus relaciones."
            },
            {
              q: "La cohesión es una cualidad de la estructura:",
              options: [
                "Secuencial.",
                "Alternativa.",
                "Iterativa.",
                "Ninguna de las anteriores."
              ],
              correct: 3,
              explanation: "La respuesta correcta es D. Ninguna de las anteriores. La cohesión es una cualidad propia de la programación modular, que hace referencia a la relación entre los distintos elementos de software albergados en cada módulo. Las estructuras secuencial, alternativa e iterativa son tipos de estructuras de control."
            },
            {
              q: "La cohesión funcional, secuencial y comunicacional son cohesiones:",
              options: [
                "Procedurales.",
                "Fuertes.",
                "Débiles.",
                "Ninguna de las anteriores."
              ],
              correct: 1,
              explanation: "La respuesta correcta es B. Fuertes. La cohesión funcional, secuencial y comunicacional se consideran las cohesiones de nivel alto o fuertes en la ingeniería de software, siendo las más deseables para la calidad del código."
            },
            {
              q: "La estructura basada en bucles es:",
              options: [
                "Secuencial.",
                "Alternativa.",
                "Iterativa.",
                "Ninguna de las anteriores."
              ],
              correct: 2,
              explanation: "La respuesta correcta es C. Iterativa. La estructura iterativa es aquella que crea un bucle en el que se repiten diferentes instrucciones mientras se cumpla una condición propuesta."
            },
            {
              q: "La programación surgió como un intento para:",
              options: [
                "Automatizar procesos.",
                "Dividir problemas en subproblemas más simples.",
                "Con paradigmas resolver otros problemas.",
                "Ninguno de los anteriores."
              ],
              correct: 0,
              explanation: "La respuesta correcta es A. Automatizar procesos. La programación se define como el proceso de agrupar, diseñar y codificar instrucciones para implementar un algoritmo generalmente con la intención de automatizar algún proceso."
            }
          ]
        },

        unidad2: {
          name: "Unidad 2: POO",
          questions: [
            {"q": "De una clase podemos extraer las … que necesitemos", "options": ["Instancias", "Variables", "Métodos", "Ninguna de las anteriores"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "De una clase podemos obtener la cantidad de objetos instanciados que se requieran", "options": ["Es cierto.", "Es falso.", "Depende del lenguaje.", "Solo en lenguajes compilados."], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "El encapsulamiento:", "options": ["Agrupación en un mismo elemento", "Es solo para datos privados", "Es un tipo de herencia", "No permite proteger la información"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Elementos que actúan como variables propias", "options": ["Propiedad", "Método", "Constructor", "Ninguna de las anteriores"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "En el área intermedia de los diagramas de clase:", "options": ["Se encuentra el nombre", "Se encuentran los campos", "Se encuentran los métodos", "Se encuentra el constructor"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Es el elemento principal de POO:", "options": ["Clase.", "Campo.", "Objeto.", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Están formados por datos primitivos:", "options": ["Objetos primitivos", "Objetos instanciados", "Objetos simples y compuestos", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "La forma de declarar las propiedades en Java:", "options": ["Es sencilla", "No es sencilla", "No es sencilla ni permite reutilizar", "Java no ofrece mecanismos"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "La visión pública se representa con el símbolo:", "options": ["+", "-", "#", "&"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "No es una forma de polimorfismo:", "options": ["Asignación polimorfa", "Ejecución polimorfa", "Herencia polimorfa", "Todas son incorrectas"], "correct": 2, "explanation": "La respuesta correcta es C."}
          ]
        },

        unidad3: {
          name: "Unidad 3: Lenguajes",
          questions: [
            {"q": ".war es una extensión que:", "options": ["Almacena texto plano", "Almacena bytecode", "Es un archivo comprimido", "Ninguna de las anteriores"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Código traducido para que pueda ser interpretado:", "options": ["Código fuente", "Código máquina", "Código intermedio", "Todas"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "CIL o MSIL es una forma de .NET", "options": ["El código fuente", "El código intermedio", "El código máquina", "Ninguno"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "El recolector de basura se ejecuta", "options": ["Compilar", "Borrar", "Compactar", "Marcar"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "El lenguaje informático de alto nivel", "options": ["El microprocesador lee", "Es semejante al humano", "Se encuentra compilado", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "En la configuración de NetBeans Keymap", "options": ["Simbología", "Establece shortcuts", "Configurar depurador", "Todas"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Es una versión de Java:", "options": ["J2ME", "J2SE", "J2EE", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "GNU General Public License", "options": ["JDK", "Java", "OpenJDK", "JRE"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Un compilador JIT:", "options": ["Compilar alto nivel", "Ahorrar tiempo", "Codificar código", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Una de las desventajas del recolector de basura:", "options": ["No se puede ejecutar", "Consume recursos", "Solo cuando queda memoria", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."}
          ]
        },

        unidad4: {
          name: "Unidad 4: Elementos",
          questions: [
            {"q": "Estos, continue, default, else y try, son:", "options": ["Palabras reservadas", "Notaciones", "Constantes", "Secuencias"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Estos, <, %, !, y ||, son:", "options": ["Constantes", "Tipos de datos", "Operadores", "Variables"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Estos, char, int, boolean y double, son:", "options": ["Constantes", "Tipos de datos primitivos", "Operadores", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Las palabras reservadas son:", "options": ["Palabras con significado propio", "Palabras que permiten operaciones", "Palabras que mantienen valor", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Los comentarios pueden iniciarse con:", "options": ["//", "/*", "/**", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Los datos primitivos al realizar casting:", "options": ["Declarados y no declarados", "Implícitos y explícitos", "Autoboxing y unboxing", "Compilatorio"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Palabras que cuentan con su propio significado:", "options": ["Constantes", "Identificadores", "String", "Ninguna"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Sistemas de signos destinado a representar:", "options": ["lowercase", "UpperCamelCase", "Datos primitivos", "Notación"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Un identificador puede emplear el símbolo:", "options": ["&", "%", "$", "#"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Un paquete:", "options": ["Identifica las clases", "Mantiene independientes", "Puede controlar visibilidad", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."}
          ]
        },

        unidad5: {
          name: "Unidad 5: Depuración",
          questions: [
            {"q": "La depuración", "options": ["Pruebas unitarias", "Inspeccionar código", "Resultado aplicación", "Todas"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "La entrada de datos puede ser:", "options": ["Mediante argumentos", "Por consola", "Otros", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "La estructura for", "options": ["Repetición", "Condicional", "Salto incondicional", "Flujo"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "La estructura if", "options": ["Saltos incondicionales", "Ejecutar según condición", "Varias veces", "Solo una"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "La salida de datos por consola", "options": ["System.out", "System.in", "System.out y System.err", "Todas"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "La sentencia break permite:", "options": ["Parar ejecución", "Salta interacción", "Rompe ejecución", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "¿Qué hace el siguiente código switch?", "options": ["Ejecuta solo uno", "Ejecuta valores diferentes", "Ejecuta todas", "Verdadera ejecuta todas"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "¿Qué hace el siguiente código for y do-while?", "options": ["Solo i++", "10 veces", "10 ambos", "No hará nada"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "¿Qué método permite obtener una línea completa?", "options": ["next()", "nextLine()", "hasNext()", "hasNextInt()"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Una aplicación…", "options": ["No necesita manejar", "Necesita según funcionalidad", "Solo entrada", "Entrada y salida"], "correct": 3, "explanation": "La respuesta correcta es D."}
          ]
        },

        unidad6: {
          name: "Unidad 6: Campos",
          questions: [
            {"q": "Static:", "options": ["Palabra para campo común", "getter", "setter", "Todas incorrectas"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Garbage collector es un mecanismo de:", "options": ["C++", "Delphi", "Java", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "JFreeChart es:", "options": ["Librería", "Tipo de dato", "Llamada métodos", "Mecanismo"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Los campos también pueden ser llamados:", "options": ["Atributos", "Variables", "Fields", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Los métodos pueden operar devolviendo:", "options": ["Null", "Void", "0", "000"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Para instanciar un objeto:", "options": ["&", "%", "$", "Ninguno"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Sobrecarga de métodos:", "options": ["Métodos diferentes", "Mismo parámetro", "Mismo método diferentes parámetros", "Diferentes parámetros"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Observadores:", "options": ["Constructores", "Observadores", "Modificadores", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Protected:", "options": ["Public", "Protected", "Package", "Private"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Por valor:", "options": ["Referencia", "Frecuencia", "Constantes", "Valor"], "correct": 3, "explanation": "La respuesta correcta es D."}
          ]
        },

        unidad7: {
          name: "Unidad 7: Herencia",
          questions: [
            {"q": "Al sobrescribir el método:", "options": ["Se eliminará", "Seguirá disponible", "También se sobrescribirá", "Visibilidad pública"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "instanceof:", "options": ["Crear instancia", "Sin heredar", "Comprobar instancia", "Todas incorrectas"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "La interfaz permite:", "options": ["Organización", "Separación visual", "Las dos", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Las clases abstractas:", "options": ["Instantiarse normalmente", "Con abstract", "No instantiarse", "No instantiarse pero herencia"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Constructores herencia:", "options": ["Facilitar construcción", "No heredados directamente", "Sobrescribir Override", "Todas"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "@override:", "options": ["@override", "@overwrite", "$override", "$overwrite"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "No pueden pasar override:", "options": ["Métodos", "Abstractos", "Constructores", "Todas incorrectas"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "palabra reservada interfaz:", "options": ["null", "void", "status", "Ninguna"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Relación dependiente:", "options": ["Asociación", "Composición", "Agregación", "Entrelazado"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Subrutina instanciar:", "options": ["Constructores", "Observadores", "Modificadores", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."}
          ]
        },

        unidad8: {
          name: "Unidad 8: Arrays",
          questions: [
            {"q": "Longitud array:", "options": ["Recorriendo", ".length", "Opciones a) y b)", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Tipo se puede declarar array:", "options": ["Primitivo o abstracto", "Primitivo", "Abstracto", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "¿Es posible cambiar tamaño array?", "options": ["Sí", "Solo primer valor", "Cualquier momento", "No, solo en declaración"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Función cortar cadena:", "options": ["replace", "substring", "trim", "contains"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "El tipo String se considera:", "options": ["Primitivo cadena", "Primitivo agrupación", "Primitivo conjunto", "Todas falsas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Cambiar número a cadena:", "options": ["String.valueOf", "Float.parseFloat", "New String", "String.parseString"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Inicializar array:", "options": ["new int[2][1]", "{{1},{2}}", "números.clone()", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Copia exacta independiente:", "options": ["Shallow", "Deep", "Uno a uno", "Incremental"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Primer y último elemento:", "options": ["[1] y [9]", "[1] y [10]", "[0] y [9]", "[0] y [10]"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Un array se puede definir como:", "options": ["Estático ilimitado", "Estático limitado", "Dinámico limitado", "Dinámico ilimitado"], "correct": 1, "explanation": "La respuesta correcta es B."}
          ]
        },

        unidad9: {
          name: "Unidad 9: Colecciones",
          questions: [
            {"q": "¿Qué es una colección?", "options": ["Estática ilimitada", "Estática limitada", "Dinámica limitada", "Dinámica ilimitada"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Collection interfaz de:", "options": ["Set, List y Queue", "Map", "TreeMap", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Con ArrayDeque se puede implementar:", "options": ["Cola", "Pila", "Cola y pila", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Característica colección Set", "options": ["Repetidos", "Ordena", "Valores null", "No repetidos"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Map almacena elementos:", "options": ["Clave y valor", "Tabla hash", "Índices", "No usa nada"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "PriorityQueue se puede definir:", "options": ["Collection duplicados natural", "Collection únicos prioridad", "Collection duplicados prioridad", "Map únicos prioridad"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Estructura ordenada Set:", "options": ["HashSet", "LinkedHashSet", "TreeSet", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Método lastIndexOf ArrayList:", "options": ["Primera ocurrencia", "Última ocurrencia", "Mayor de 0", "Menor de 0"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Interfaces raíces colecciones:", "options": ["ArrayList y LinkedList", "Collection y Map", "Collection y ArrayDeque", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "ArrayList se puede definir como:", "options": ["Estático no modificable", "Dinámico modificable", "Estático ordenado", "Dinámico ordenado"], "correct": 1, "explanation": "La respuesta correcta es B."}
          ]
        },

        unidad10: {
          name: "Unidad 10: Excepciones",
          questions: [
            {"q": "¿Qué es una excepción?", "options": ["Error ejecución", "Error compilación", "Código especial", "Código especial casos"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "¿Cómo podemos capturar una excepción?", "options": ["try", "catch", "finally", "Método exclusivo"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "¿Cómo podemos tratar una excepción?", "options": ["try", "catch", "constructor", "Método exclusivo"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Con throw podemos:", "options": ["Invocar excepciones", "Capturar", "Propagar", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Recomendación no correcta:", "options": ["No abusar", "Genéricas", "No crear nuevas", "No excepciones graves"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Pila de llamadas:", "options": ["Lista métodos", "Contenedor métodos", "Estructura flujo", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "¿Qué hace finally?", "options": ["Cuando excepción", "Siempre", "Sin excepción", "Finaliza programa"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Palabra reservada throws:", "options": ["Invocar", "Propagar", "Capturar", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Excepciones heredar de:", "options": ["main o subclase", "Throwable o subclase", "System o subclase", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Excepción Checked", "options": ["Grave no tratar", "Grave tratar", "Leve obligatorio", "Leve no recomendable"], "correct": 2, "explanation": "La respuesta correcta es C."}
          ]
        },

        unidad11: {
          name: "Unidad 11: Recursividad",
          questions: [
            {"q": "Recursividad cruzada:", "options": ["Una llamada", "Dos métodos", "Más de una", "Parámetro llamada"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "En recursividad encontramos:", "options": ["Terminación", "Llamada a sí mismo", "Las dos", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Complejidad algorítmica medida:", "options": ["Big-O", "Cromática", "Unidades tiempo", "Unidades métricas"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Diferencia simple y multiple:", "options": ["Número llamadas", "Parámetros", "Métodos", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Orden complejidad peor:", "options": ["O(1)", "O(n log n)", "O(n2)", "O(log n)"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Reglas calcular complejidad:", "options": ["Recursividad caso base", "If/else mayor", "Bucles anidados", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Tipos recursividad:", "options": ["Simple multiple cruzada anidada", "Simple multiple cruzada anillada", "Doble unificada indirecta", "Doble anillada simple"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Ventaja no aporta:", "options": ["Patrones concretos", "Apenas memoria", "Sencillo algoritmo", "Evitar sentencias control"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Recursividad definir como:", "options": ["Flujo lineal", "Cualquier problema", "Flujo cíclico extrayendo", "Flujo cíclico dividiendo"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Orden complejidad código:", "options": ["O(1)", "O(log n)", "O(n3)", "O(n log n)"], "correct": 1, "explanation": "La respuesta correcta es B."}
          ]
        },

        unidad12: {
          name: "Unidad 12: Ficheros",
          questions: [
            {"q": "Comprobar fichero existe:", "options": ["isFile()", "isDirectory()", "exists()", "getPath()"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Con FileWriter podemos:", "options": ["Caracteres", "Bytes", "Predeterminado", "Bytes leer"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Flujo se denomina:", "options": ["Flush", "Stream", "Eoa", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Ficheros tipo datos:", "options": ["Bytes o caracteres", "Enteros", "Cadena", "Hexadecimal"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Serialización consiste en:", "options": ["Datos primitivo", "Objetos", "Serie datos", "Cadena"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Etapas flujos:", "options": ["Transmisión y cierre", "Apertura transmisión cierre", "Apertura transmisión", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Flujos predeterminados:", "options": ["Ya creados", "No habituales", "Crearlos definir", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Crear directorio usaremos:", "options": ["createNewFile()", "createDirectory()", "File(String ruta)", "mkdir()"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Acceso directo fichero:", "options": ["FileReader", "RandomAccessFile", "BufferedReader", "File"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Clasificaciones flujos:", "options": ["Tipo dirección acceso", "Canal medio codificación", "Uso destinado", "Acceso"], "correct": 0, "explanation": "La respuesta correcta es A."}
          ]
        },

        unidad13: {
          name: "Unidad 13: JPA",
          questions: [
            {"q": "¿Que es JPA?", "options": ["Lenguaje programación", "Herramientas persistencia Java", "Herramientas cualquier plataforma", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "¿Gestor base datos orientado a objetos?", "options": ["SQL Server", "MySQL", "ObjectDB", "MongoDB"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Con createQuery() podemos:", "options": ["Consulta actualización borrado", "Solo consulta", "Inserción", "Actualización borrado"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Campos no guardarán:", "options": ["Todos", "final static transient @Transient", "Privados", "@FieldNotIncluded"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Característica correcta OODB:", "options": ["Acceso lento", "Mismos tipos datos", "Relaciones", "Tablas"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Condición clase guardar OODB:", "options": ["Constructor sin argumentos", "Públicos", "No get set", "No serializar"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Método persist() EntityManager:", "options": ["Mantiene memoria", "Persistencia serialización", "Iniciar transacción", "Guardar base datos"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Método entityManager.find():", "options": ["Busca clave primaria", "Busca persona", "Busca sustituye", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Se puede usar JPQL para:", "options": ["Definir objetos", "Inserción", "Consultas actualización borrado", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Base datos orientada objetos:", "options": ["Representa objetos", "Aplica POO", "Caracteriza NoSQL", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."}
          ]
        },

        unidad14: {
          name: "Unidad 14: SQL",
          questions: [
            {"q": "DELETE SQL:", "options": ["Borrar filas", "Borrar registros", "Borrar columnas", "Dos primeras"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Claves primarias PK:", "options": ["Campo", "Columna", "Registro", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Lenguaje definición estructuras:", "options": ["DDL", "DML", "DCL", "Todas incorrectas"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Drivers librerías ficheros:", "options": [".jar", ".xml", ".iso", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "MariaDB es:", "options": ["Librería", "Gestor relacionales", "Objeto SQL", "BD orientada objetos"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "MariaDB introducir comandos SQL:", "options": ["Client Command", "Command MySQL", "MySQL Client", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Conexión base datos Java:", "options": ["Driver específico", "Objeto statement", "Librería .iso", "Todas incorrectas"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Ejecutar sentencias SQL:", "options": ["Objeto statement", "Objeto abstract", "Objeto execute", "Todas incorrectas"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Tras setAutoCommit(false):", "options": ["commit()", "rollback()", "Dos anteriores", "Todas incorrectas"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "UPDATE SQL permite:", "options": ["Nuevas filas", "Actualizar filas", "Introducir columnas", "Actualizar columnas"], "correct": 1, "explanation": "La respuesta correcta es B."}
          ]
        },

        unidad15: {
          name: "Unidad 15: Interfaz gráfica",
          questions: [
            {"q": "AWT:", "options": ["Librería anterior creación", "Mismo nivel Swing", "Evolución Swing", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "FlowLayout coloca:", "options": ["BorderLayout", "CardLayout", "FlowLayout", "GridLayout"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Instalar WindowBuilder si:", "options": ["NetBeans módulo", "Eclipse módulo", "MySQL módulo", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Listener es:", "options": ["Driver", "Listener", "Writer", "Todas incorrectas"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "GridBagLayout:", "options": ["No existe", "AWT", "Swing", "Ambos"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Componentes letra J:", "options": ["Instalación AWT Swing", "Incorporación código", "Prueba visibles", "Ninguna correcta"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Eventos Swing diferencian:", "options": ["J inicial", "Sin listener", "Pestaña Design", "Ninguna correcta"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "MotifLookAndFeel es:", "options": ["Layout", "Componente", "Estilo controles", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "No es tipo control menús:", "options": ["MenuBar", "ShortMenuCut", "MenuItem", "PopupMenu"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Interfaz gráfica permite:", "options": ["Listener", "Drag and drop", "JTree", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."}
          ]
        }
      }
    }
  };

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    if (showExplanation) return;
    
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex
    });
  };

  const checkAnswer = () => {
    if (answers[currentQuestion] === undefined) {
      alert("Por favor, selecciona una respuesta");
      return;
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    const exams = subjects[selectedSubject].exams;
    const exam = exams[selectedExam];
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(Object.keys(answers).includes(String(currentQuestion - 1)));
    }
  };

  const handleSubmit = () => {
    const exams = subjects[selectedSubject].exams;
    const exam = exams[selectedExam];
    let correctCount = 0;

    exam.questions.forEach((q, i) => {
      if (answers[i] === q.correct) correctCount++;
    });

    setScore(correctCount);
    setShowResults(true);
  };

  const resetExam = () => {
    setAnswers({});
    setShowResults(false);
    setShowExplanation(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  const selectExam = (examKey) => {
    setSelectedExam(examKey);
    resetExam();
  };

  const selectSubject = (subjectKey) => {
    setSelectedSubject(subjectKey);
    setSelectedExam(null);
    resetExam();
  };

  const backToSubjects = () => {
    setSelectedSubject(null);
    setSelectedExam(null);
    resetExam();
  };

  const backToExams = () => {
    setSelectedExam(null);
    resetExam();
  };

  // Pantalla de selección de asignatura
  if (!selectedSubject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-indigo-600" />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Exámenes
            </h1>
            <p className="text-xl text-gray-600">Selecciona una asignatura para comenzar</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(subjects).map(([key, subject]) => (
              <button
                key={key}
                onClick={() => selectSubject(key)}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 text-left border-2 border-transparent hover:border-indigo-400 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-colors">
                    <BookOpen className="w-8 h-8 text-indigo-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {subject.name}
                </h3>
                <p className="text-gray-600 mb-4">{subject.description}</p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Acceder <ChevronRight className="ml-2 w-5 h-5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Pantalla de selección de examen
  if (!selectedExam) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={backToSubjects}
                className="text-white/90 hover:text-white font-semibold flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Volver
              </button>
            </div>
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-indigo-600" />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              {subjects[selectedSubject].name}
            </h1>
            <p className="text-xl text-gray-600">Elige un test para comenzar</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(subjects[selectedSubject].exams).map(([key, exam]) => (
              <button
                key={key}
                onClick={() => selectExam(key)}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 text-left border-2 border-transparent hover:border-indigo-400 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-colors">
                    <BookOpen className="w-8 h-8 text-indigo-600" />
                  </div>
                  <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {exam.questions.length} preguntas
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {exam.name}
                </h3>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Comenzar test <ChevronRight className="ml-2 w-5 h-5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Pantalla de examen (preguntas)
  const exams = subjects[selectedSubject].exams;
  const exam = exams[selectedExam];
  const currentQ = exam.questions[currentQuestion];
  const isAnswered = answers[currentQuestion] !== undefined;
  const isCorrect = isAnswered && answers[currentQuestion] === currentQ.correct;
  const allQuestionsAnswered = Object.keys(answers).length === exam.questions.length;

  if (showResults) {
    const percentage = ((score / exam.questions.length) * 100).toFixed(1);
    const passed = percentage >= 50;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="text-center mb-10">
              <div className={`inline-block p-6 rounded-full mb-6 ${passed ? 'bg-green-100' : 'bg-orange-100'}`}>
                <Award className={`w-24 h-24 ${passed ? "text-green-500" : "text-orange-500"}`} />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {passed ? "¡Excelente trabajo!" : "Sigue practicando"}
              </h2>
              <p className={`text-7xl font-bold mb-6 ${passed ? 'text-green-500' : 'text-orange-500'}`}>
                {percentage}%
              </p>
              <p className="text-2xl text-gray-600 mb-2">
                {score} de {exam.questions.length} respuestas correctas
              </p>
              <p className="text-gray-500">
                {passed ? "¡Has aprobado el test!" : "Necesitas al menos 50% para aprobar"}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-green-600 mb-1">{score}</p>
                <p className="text-sm text-gray-600">Correctas</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl text-center">
                <X className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-red-600 mb-1">
                  {exam.questions.length - score}
                </p>
                <p className="text-sm text-gray-600">Incorrectas</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl text-center">
                <BookOpen className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-indigo-600 mb-1">
                  {exam.questions.length}
                </p>
                <p className="text-sm text-gray-600">Total</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={resetExam}
                className="flex-1 bg-indigo-600 text-white py-4 px-6 rounded-xl hover:bg-indigo-700 transition-colors font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <RotateCcw className="w-5 h-5" />
                Reintentar examen
              </button>
              <button
                onClick={() => setSelectedExam(null)}
                className="flex-1 bg-gray-600 text-white py-4 px-6 rounded-xl hover:bg-gray-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                Elegir otro examen
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">{exam.name}</h2>
              <button
                onClick={() => setSelectedExam(null)}
                className="text-white/90 hover:text-white font-semibold flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Volver
              </button>
            </div>
            
            <div className="flex justify-between items-center text-sm mb-3">
              <span className="bg-white/20 px-4 py-2 rounded-lg">
                Pregunta {currentQuestion + 1} de {exam.questions.length}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">
                {Object.keys(answers).length} respondidas
              </span>
            </div>
            
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500 shadow-lg"
                style={{
                  width: `${((currentQuestion + 1) / exam.questions.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Question Content */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
              {currentQ.q}
            </h3>
            
            <div className="space-y-4 mb-8">
              {currentQ.options.map((option, i) => {
                const isSelected = answers[currentQuestion] === i;
                const isCorrectOption = i === currentQ.correct;
                const showCorrect = showExplanation && isCorrectOption;
                const showIncorrect = showExplanation && isSelected && !isCorrectOption;

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswerSelect(currentQuestion, i)}
                    disabled={showExplanation}
                    className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                      showCorrect
                        ? "border-green-500 bg-green-50 shadow-lg"
                        : showIncorrect
                        ? "border-red-500 bg-red-50 shadow-lg"
                        : isSelected
                        ? "border-indigo-600 bg-indigo-50 shadow-md scale-105"
                        : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50 hover:shadow-md"
                    } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg ${
                          showCorrect
                            ? "bg-green-500 text-white"
                            : showIncorrect
                            ? "bg-red-500 text-white"
                            : isSelected
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className={`flex-1 text-lg ${isSelected && !showExplanation ? 'font-semibold' : ''}`}>
                        {option}
                      </span>
                      {showCorrect && (
                        <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                      )}
                      {showIncorrect && (
                        <X className="w-6 h-6 text-red-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className={`p-6 rounded-xl border-l-4 mb-8 ${
                isCorrect 
                  ? 'bg-green-50 border-green-500' 
                  : 'bg-orange-50 border-orange-500'
              }`}>
                <div className="flex items-start gap-3 mb-3">
                  {isCorrect ? (
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <X className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h4 className={`text-lg font-bold mb-2 ${
                      isCorrect ? 'text-green-800' : 'text-orange-800'
                    }`}>
                      {isCorrect ? '¡Correcto!' : 'Respuesta incorrecta'}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Respuesta correcta:</strong> {String.fromCharCode(65 + currentQ.correct)}) {currentQ.options[currentQ.correct]}
                    </p>
                  </div>
                </div>
                <div className="ml-9 mt-4 p-4 bg-white rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-indigo-600">📖 Explicación:</strong> {currentQ.explanation}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 p-8 flex justify-between items-center border-t-2 border-gray-100">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="bg-gray-600 text-white py-3 px-8 rounded-xl hover:bg-gray-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            <div className="flex gap-4">
              {!showExplanation && isAnswered && (
                <button
                  onClick={checkAnswer}
                  className="bg-green-600 text-white py-3 px-8 rounded-xl hover:bg-green-700 transition-colors font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Check className="w-5 h-5" />
                  Comprobar
                </button>
              )}

              {showExplanation && currentQuestion < exam.questions.length - 1 && (
                <button
                  onClick={nextQuestion}
                  className="bg-indigo-600 text-white py-3 px-8 rounded-xl hover:bg-indigo-700 transition-colors font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  Siguiente
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}

              {showExplanation && currentQuestion === exam.questions.length - 1 && allQuestionsAnswered && (
                <button
                  onClick={handleSubmit}
                  className="bg-purple-600 text-white py-3 px-8 rounded-xl hover:bg-purple-700 transition-colors font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Award className="w-5 h-5" />
                  Ver Resultados
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamTestApp;
