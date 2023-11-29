import { generaNumAleatorioMasProbable } from "./comunes.js";

export const planetasImgs = [
    "elAmarilloNaranja.png",
    "elRocoso.png",
    "elRaro.webp",
    "elDeLosMarrones.png",
    "elAzulico.png",
    "elDeLosRiosDeLava.png",
    "elPuber.png",
    "elRosica.png",
    "elAzulRosa.png",
    "elDeLosAnillicos.png",
    "elRugosico.png",
    "elRojico.png"
];

const sistemasImgs = [
    "sist1.webp",
    "sist2.webp",
    "sist3.webp",
    "sist4.webp",
    "sist5.webp",
];

const tiposJuego = ["premio", "combate"];
const atmosferas = ["Gaseosa", "Inerte", "Tóxica", "Denso", "Escasa", "Nebulosa", "Electromagnética", "Biológica", "Vapor"];
const premios = ["energía", "integridad", "supervivientes"];

let auxTipo;
let auxPremio;

const generaTipo = () => {
    const probabilidad = 0.7;

    if (Math.random() < probabilidad) {
        auxTipo = 1;
        return tiposJuego[1];
    }
    else {
        return tiposJuego[0];
    }

}


export const sistemas = [
    {
        nombre: "Auns",
        planetas: [
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Espectralis",
                    tipoPlaneta: "Gaseoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 26.8,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "En las profundidades del cosmos, se encuentra Espectralis, un planeta envuelto en una nebulosa perpetua. Las sombras y luces danzan en su atmósfera, creando paisajes oníricos." +
                        "Habitado por los Umbrágeos, seres luminiscentes que construyen ciudades flotantes en árboles bioluminiscentes." +
                        "Cada ciclo lunar, las sombras cobran vida en \"El Susurro de las Sombras\", revelando antiguos secretos." +
                        "Atrae a viajeros intergalácticos en busca de su energía única y los misterios que sus sombras guardan."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Tillu",
                    tipoPlaneta: "Helado",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 15.2,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Tillu, un planeta helado, donde la gélida atmósfera crea paisajes cubiertos de hielo. Su superficie, salpicada de formaciones glaciares, es testigo del paso del tiempo en este rincón del espacio."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Luminara Prime",
                    tipoPlaneta: "Rocoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 20.6,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Luminara Prime, un planeta rocoso con majestuosas formaciones geológicas. Su atmósfera única da vida a paisajes que narran la historia de los elementos que lo esculpieron a lo largo de millones de años."
                }
            }
        ],
        img: sistemasImgs[Math.floor(Math.random() * sistemasImgs.length)]
    },
    {
        nombre: "Alpha Prime",
        planetas: [
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Quasar Minor",
                    tipoPlaneta: "Fantasma",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 10.3,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Quasar Minor, un planeta fantasma donde las sombras y luces juegan en una danza eterna. La atmósfera etérea crea un escenario de belleza misteriosa, atrayendo a aquellos que buscan secretos ocultos en lo desconocido."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Nebula Raider",
                    tipoPlaneta: "Gaseoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 18.7,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Nebula Raider, un planeta gaseoso donde la nebulosa atmosférica crea un espectáculo de luces y sombras. Su edad, marcada en sus patrones atmosféricos, cuenta la historia de su evolución a lo largo de millones de años."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Celestial Haven",
                    tipoPlaneta: "Helado",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 22.4,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Celestial Haven, un planeta helado bañado por la luz de estrellas distantes. Su atmósfera gélida crea paisajes cristalizados, y su edad, escrita en sus glaciares, cuenta la historia de su longeva existencia."
                }
            }
        ],
        img: sistemasImgs[Math.floor(Math.random() * sistemasImgs.length)]
    },
    {
        nombre: "Stellaris Delta",
        planetas: [
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Lynx Prime",
                    tipoPlaneta: "Rocoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 17.9,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Lynx Prime, un planeta rocoso donde las formaciones geológicas se elevan como testigos de su antigüedad. Su atmósfera única brinda vida a paisajes que cuentan la historia de los elementos que lo esculpieron durante eones."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Titan's Crest",
                    tipoPlaneta: "Fantasma",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 14.2,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Titan's Crest, un planeta fantasma envuelto en sombras y misterios. La atmósfera etérea da forma a paisajes en constante cambio, contando la historia de un mundo marcado por la enigmática danza de la luz y la oscuridad."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Eclipse Nexus",
                    tipoPlaneta: "Gaseoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 21.6,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Eclipse Nexus, un planeta gaseoso donde las luces y sombras se entrelazan en una danza cósmica. Su atmósfera, marcada por la edad, cuenta la historia de los fenómenos celestiales que han moldeado su existencia a lo largo de millones de años."
                }
            }
        ],
        img: sistemasImgs[Math.floor(Math.random() * sistemasImgs.length)]
    },
    {
        nombre: "Galactron Sigma",
        planetas: [
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Quanta Prime",
                    tipoPlaneta: "Gaseoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 12.5,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "En las vastas extensiones de Galactron Sigma, se encuentra Quanta Prime, un planeta gaseoso rodeado de brillantes anillos cósmicos. Su atmósfera rica en gases exóticos crea un espectáculo de luces danzantes, atrayendo a exploradores en busca de la esencia única que emana de sus cielos estrellados."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Nova Citadel",
                    tipoPlaneta: "Rocoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 8.2,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Los imponentes acantilados de Nova Citadel se alzan en un paisaje rocoso que desafía la gravedad. Aquí, en este planeta rocoso, las formaciones geológicas únicas atraen a científicos y aventureros por igual. La antigua historia grabada en las piedras cuenta secretos de épocas olvidadas."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Quantum Abyss",
                    tipoPlaneta: "Helado",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 14.1,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Sumido en una eterna oscuridad, Quantum Abyss es un mundo helado donde los cristales de hielo refractan la luz de lejanas estrellas. Su atmósfera fría y silenciosa es testigo de fenómenos helados únicos, atrayendo a aquellos que buscan la calma en medio de la gélida belleza."
                }
            }
        ],
        img: sistemasImgs[Math.floor(Math.random() * sistemasImgs.length)]
    },
    {
        nombre: "Nebula Paradigm",
        planetas: [
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Astral Horizon",
                    tipoPlaneta: "Gaseoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 20.3,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "A lo largo del horizonte de Nebula Paradigm se extiende Astral Horizon, un gigante gaseoso cuyas tormentas coloridas danzan en la eternidad. Este planeta gaseoso, hogar de criaturas etéreas, emite un resplandor celestial que ha inspirado mitos y leyendas entre los habitantes de la nebulosa."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Starlight Enclave",
                    tipoPlaneta: "Rocoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 15.8,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Entre los enclaves rocosos de Starlight Enclave, se erigen majestuosas fortalezas naturales. Este planeta rocoso, lleno de antiguas cavernas y misteriosas formaciones, es un refugio para exploradores en busca de tesoros ocultos y la promesa de protección bajo un cielo estrellado."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Elysian Cascade",
                    tipoPlaneta: "Helado",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 18.7,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Las cataratas etéreas de Elysian Cascade fluyen con aguas congeladas en un eterno abrazo helado. En este planeta helado, la belleza natural se combina con la quietud del hielo, creando un escenario que ha inspirado a poetas y artistas a lo largo de las eras."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Celestial Nexus",
                    tipoPlaneta: "Fantasma",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 23.4,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "En el corazón de Nebula Paradigm, yace Celestial Nexus, un planeta fantasma envuelto en la bruma de la eternidad. Sus paisajes etéreos y misteriosos invitan a los aventureros a explorar ruinas antiguas y descubrir secretos que se desvanecen entre sombras de otro mundo."
                }
            }
        ],
        img: sistemasImgs[Math.floor(Math.random() * sistemasImgs.length)]
    },
    {
        nombre: "Nebula Aurora",
        planetas: [
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Celestial Blaze",
                    tipoPlaneta: "Gaseoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 16.2,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Bajo el resplandor de Nebula Aurora, se encuentra Celestial Blaze, un planeta gaseoso cuyas tormentas de fuego danzan en una sinfonía ardiente. La energía incandescente de este mundo atrae a exploradores valientes en busca de poder y conocimiento en las llamas cósmicas."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Galactic Sentinel",
                    tipoPlaneta: "Rocoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 19.8,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Galactic Sentinel, un bastión rocoso en Nebula Aurora, se yergue como el guardián silencioso de la nebulosa. Este planeta rocoso, con su paisaje imponente y altas montañas, es un refugio para aquellos que buscan fortaleza y seguridad en medio de las corrientes estelares."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Quantum Nexus",
                    tipoPlaneta: "Helado",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 17.5,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Entre los cristales de hielo de Quantum Nexus, se esconde la esencia helada de Nebula Aurora. Este planeta helado, con sus campos de hielo interminables y auroras resplandecientes, atrae a los aventureros que buscan la belleza congelada y la energía única que emana de sus paisajes fríos."
                }
            }
        ],
        img: sistemasImgs[Math.floor(Math.random() * sistemasImgs.length)]
    },
    {
        nombre: "Astral Veil",
        planetas: [
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Eclipse Citadel",
                    tipoPlaneta: "Rocoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 17.8,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Eclipse Citadel, un coloso rocoso en los confines de Astral Veil, se eleva como un testamento a la fuerza de la naturaleza. Este planeta rocoso, con sus imponentes formaciones y antiguas ruinas, atrae a exploradores intrépidos en busca de conocimientos ancestrales y desafíos monumentales."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Starlight Haven",
                    tipoPlaneta: "Gaseoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 15.3,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Starlight Haven, un edén gaseoso en los confines de Astral Veil, es hogar de tormentas de luz y color. En este planeta gaseoso, la armonía de los gases brillantes y la danza de las luces celestiales crean un refugio para aquellos que buscan la serenidad en medio de la inmensidad cósmica."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Quantum Rise",
                    tipoPlaneta: "Helado",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 19.1,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "En los picos helados de Quantum Rise, la luz cósmica se refleja en cristales de hielo centelleantes. Este planeta helado, con su belleza fría y paisajes invernales, atrae a aventureros en busca de la energía congelada que fluye entre sus glaciares y precipicios."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Nebula Horizon",
                    tipoPlaneta: "Fantasma",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 22.5,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "En los límites de Astral Veil, Nebula Horizon se presenta como un mundo fantasma envuelto en bruma etérea. Este planeta fantasma, con sus paisajes etéreos y secretos ocultos, atrae a los valientes que buscan descubrir los misterios entre las sombras de lo desconocido."
                }
            }
        ],
        img: sistemasImgs[Math.floor(Math.random() * sistemasImgs.length)]
    },
    {
        nombre: "Quasar Sentinel",
        planetas: [
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Celestial Ascendancy",
                    tipoPlaneta: "Gaseoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 21.8,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "En los dominios de Quasar Sentinel, Celestial Ascendancy se eleva como un gigante gaseoso que acoge vida misteriosa. Este planeta gaseoso, con sus ciudades flotantes y criaturas etéreas, es un faro para los buscadores de supervivientes y exploradores intrépidos."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Stellar Enclave",
                    tipoPlaneta: "Rocoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 18.7,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Stellar Enclave, una fortaleza rocosa en los confines de Quasar Sentinel, se erige como un baluarte de resistencia. Este planeta rocoso, con sus cañones y montañas imponentes, es un refugio para aquellos que buscan protección bajo el escudo estelar que domina los cielos."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Quantum Luminara",
                    tipoPlaneta: "Helado",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 19.2,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Quantum Luminara, entre las estrellas de Quasar Sentinel, se presenta como un mundo helado donde la luz cósmica se refracta en cristales de hielo. Este planeta helado, con sus paisajes fríos y energía resplandeciente, atrae a los buscadores de poder y conocimiento en medio de la gélida belleza."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Astral Nexus",
                    tipoPlaneta: "Fantasma",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 23.4,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Astral Nexus, en los confines de Quasar Sentinel, se manifiesta como un planeta fantasma envuelto en sombras misteriosas. Este planeta fantasma, con sus secretos ancestrales y paisajes etéreos, atrae a los aventureros en busca de respuestas entre las brumas de lo desconocido."
                }
            }
        ],
        img: sistemasImgs[Math.floor(Math.random() * sistemasImgs.length)]
    },
    {
        nombre: "Luminara Cascade",
        planetas: [
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Abyss Haven",
                    tipoPlaneta: "Rocoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 20.5,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Abyss Haven, un refugio rocoso en Luminara Cascade, se presenta como un bastión de resistencia en medio de la inmensidad cósmica. Este planeta rocoso, con sus cañones profundos y paisajes robustos, atrae a aquellos que buscan la integridad entre los desafíos estelares."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Stellar Nexus",
                    tipoPlaneta: "Gaseoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 18.9,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Stellar Nexus, un edén gaseoso en Luminara Cascade, es hogar de colores celestiales y misterios cósmicos. En este planeta gaseoso, la danza de las partículas y las luces celestiales crea un santuario para aquellos que buscan protección bajo los cielos estrellados."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Quasar Horizon",
                    tipoPlaneta: "Helado",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 21.3,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Quasar Horizon, en los confines de Luminara Cascade, se alza como un paisaje helado con energía resplandeciente. Este planeta helado, con sus glaciares brillantes y vientos gélidos, atrae a exploradores en busca de la energía congelada que fluye entre sus picos y valles."
                }
            }
        ],
        img: sistemasImgs[Math.floor(Math.random() * sistemasImgs.length)]
    },
    {
        nombre: "Stellar Veil",
        planetas: [
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Quantum Ascendancy",
                    tipoPlaneta: "Gaseoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 19.7,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Quantum Ascendancy, entre las estrellas de Stellar Veil, se manifiesta como un mundo gaseoso habitado por formas de vida misteriosas. Este planeta gaseoso, con sus nubes resplandecientes y criaturas etéreas, es un refugio para aquellos que buscan la supervivencia entre los vientos estelares."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Abyss Nexus",
                    tipoPlaneta: "Rocoso",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 22.1,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Abyss Nexus, en los confines de Stellar Veil, se presenta como un planeta rocoso con formaciones imponentes y secretos ocultos. Este planeta rocoso, con sus acantilados escarpados y cañones profundos, atrae a aquellos que buscan protección bajo el escudo estelar que domina los cielos."
                }
            },
            {
                tipo: generaTipo(),
                img: planetasImgs[Math.floor(Math.random() * planetasImgs.length)],
                datos: {
                    nombre: "Astral Luminara",
                    tipoPlaneta: "Fantasma",
                    atmosfera: atmosferas[Math.floor(Math.random() * atmosferas.length)],
                    edad: 20.8,
                    hostilidad: Math.floor(Math.random() * 10) + 1,
                    descripcion: "Astral Luminara, en los límites de Stellar Veil, se manifiesta como un planeta fantasma envuelto en la luz etérea. Este planeta fantasma, con sus paisajes luminosos y secretos ancestrales, atrae a los aventureros en busca de la integridad entre las sombras de lo desconocido."
                }
            }
        ],
        img: sistemasImgs[Math.floor(Math.random() * sistemasImgs.length)]
    }

]