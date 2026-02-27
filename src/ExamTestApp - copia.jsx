import React, { useState } from "react";
import { Check, X, RotateCcw, BookOpen, Award, ChevronLeft, ChevronRight } from "lucide-react";

const ExamTestApp = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const classes = {
    class1: {
      name: "Clase 1",
      description: "English Grammar Basics"
    },
    class2: {
      name: "Clase 2",
      description: "English Grammar Intermediate"
    },
    class3: {
      name: "Clase 3",
      description: "English Grammar Advanced"
    }
  };

  const exams = {
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
      name: "Unidad 2: What do you like",
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

  if (!selectedExam) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-indigo-600" />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Test de Inglés
            </h1>
            <p className="text-xl text-gray-600">Autoevaluaciones Unidades 1-6</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(exams).map(([key, exam]) => (
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
