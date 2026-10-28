
const translations = {
  es: {
    navItinerary: "Itinerario",
    navTenerife: "Recomendaciones",
    navHistory: "Historia",
    navInfo: "Información útil",
    contactButton: "Contacto",

    heroEyebrow: "VUESTRO VIAJE COMIENZA AQUÍ",
    heroTitle: "¡Bienvenidos, familia Tacikowski!",
    heroDescription:
      "¡Empieza la aventura! Espero que disfrutéis muchísimo de Tenerife, de sus paisajes, sus rincones y de todo lo que esta maravillosa isla tiene preparado para vosotros. ¡Que sea un viaje lleno de buenos momentos y recuerdos inolvidables!",
    heroButton: "Descubrir nuestro itinerario",

    introEyebrow: "UNA GUÍA PREPARADA PARA VOSOTROS",
    introTitle: "Tenerife a vuestra medida",
    introDescription:
      "Gracias, una vez más, por confiar en los servicios de Enrique Espigares S.M.L. (Sociedad Muy Limitada). En esta página encontraréis toda la información relacionada con vuestro viaje, con recomendaciones y lugares imprescindibles para que no os dejéis ningún rincón por descubrir y saquéis el máximo provecho de vuestra visita a Tenerife. ¡Ahora solo queda preparar las maletas y disfrutar de la aventura!",

    galleryEyebrow: "EXPERIENCIAS COMPARTIDAS",
    galleryTitle: "Algunas fotos de nuestros clientes satisfechos",
    galleryDescription:
      "Por ahora solo son dos clientes, ¡pero muy satisfechos!",

    contactEyebrow: "ESTOY A VUESTRA DISPOSICIÓN",
    contactTitle: "Hablemos",
    contactDescription:
      "Si necesitáis ayuda o tenéis alguna pregunta, podéis contactar conmigo.",
    emailLabel: "Correo electrónico",
    phoneLabel: "Teléfono",
    closeLabel: "Cerrar",

    footerText: "© 2026 Enrique Espigares · Viajes personalizados",
    pageTitle: "Familia Tacikowski | Tenerife con Enrique Espigares"
  },

  pl: {
    navItinerary: "Plan podróży",
    navTenerife: "Atrakcje Teneryfy",
    navHistory: "Historia",
    navInfo: "Przydatne informacje",
    contactButton: "Kontakt",

    heroEyebrow: "WASZA PODRÓŻ ZACZYNA SIĘ TUTAJ",
    heroTitle: "Witamy, rodzino Tacikowskich!",
    heroDescription:
      "Zaczyna się przygoda! Mam nadzieję, że wspaniale spędzicie czas na Teneryfie, odkryjecie jej piękne krajobrazy i niezwykłe zakątki. Życzę Wam podróży pełnej wspaniałych chwil i niezapomnianych wspomnień!",
    heroButton: "Zobacz plan podróży",

    introEyebrow: "PRZEWODNIK PRZYGOTOWANY SPECJALNIE DLA WAS",
    introTitle: "Teneryfa na Waszych zasadach",
    introDescription:
      "Dziękuję za zaufanie i skorzystanie z usług Enrique Espigares S.M.L. (Sociedad Muy Limitada). Znajdziecie tu wszystkie najważniejsze informacje o podróży, polecane miejsca i wskazówki, dzięki którym odkryjecie uroki Teneryfy i w pełni wykorzystacie pobyt na wyspie. Teraz wystarczy spakować walizki i cieszyć się przygodą!",

    galleryEyebrow: "WSPÓLNE PODRÓŻE",
    galleryTitle: "Kilka zdjęć naszych zadowolonych klientów",
    galleryDescription:
      "Na razie mamy tylko dwoje klientów, ale za to bardzo zadowolonych!",

    contactEyebrow: "JESTEM DO WASZEJ DYSPOZYCJI",
    contactTitle: "Porozmawiajmy",
    contactDescription:
      "Jeśli potrzebujecie pomocy lub macie pytania, możecie się ze mną skontaktować.",
    emailLabel: "Adres e-mail",
    phoneLabel: "Telefon",
    closeLabel: "Zamknij",

    footerText: "© 2026 Enrique Espigares · Podróże szyte na miarę",
    pageTitle: "Rodzina Tacikowskich | Teneryfa z Enrique Espigares"
  }
};

const languageStorageKey = "enrique-website-language";

const aliases = {
  navItinerary: "nav-itinerary",
  navTenerife: "nav-tenerife",
  navHistory: "nav-history",
  heroEyebrow: "hero-eyebrow",
  heroTitle: "hero-title",
  heroDescription: "hero-description",
  heroButton: "hero-button",
  introEyebrow: "intro-eyebrow",
  introTitle: "intro-title",
  introDescription: "intro-description",
  galleryEyebrow: "gallery-eyebrow",
  galleryTitle: "gallery-title",
  galleryDescription: "gallery-description",
  contactEyebrow: "contact-modal-eyebrow",
  contactTitle: "contact-modal-title",
  contactDescription: "contact-modal-description",
  footerText: "footer-text"
};

function getSavedLanguage() {
  try {
    return localStorage.getItem(languageStorageKey) === "pl" ? "pl" : "es";
  } catch {
    return "es";
  }
}

let currentLanguage = getSavedLanguage();


const itineraryTranslations = {
  es: {
    itineraryEyebrow: "NOVIEMBRE DE 2026",
    itineraryTitle: "Tenerife, a vuestro ritmo",
    itineraryIntro: "Aquí encontraréis cuatro rutas independientes para descubrir diferentes rincones de Tenerife. Podéis elegir qué zona visitar cada día, cambiar los planes según el tiempo y adaptar los recorridos a vuestros intereses.",
    itineraryAdviceTitle: "Nuestro consejo:",
    itineraryAdvice: "disfrutad sin prisas. Dejad tiempo para deteneros en los miradores, descubrir los lugares que más os gusten y disfrutar del viaje sin intentar verlo todo.",
    route1Number: "RUTA 01 · COSTA SUROESTE",
    route1Title: "Playas, acantilados y Masca",
    route1Description: "Una ruta variada por la costa sur y suroeste. Incluye paradas como La Tejita, Montaña Amarilla, la playa del Camisón y Abama, antes de continuar hacia los impresionantes acantilados de Los Gigantes, Santiago del Teide y el pintoresco pueblo de Masca. Disfrutad de las vistas y tened en cuenta que las carreteras de montaña requieren tiempo y conducción tranquila.",
    route2Number: "RUTA 02 · ESTE Y NORDESTE",
    route2Title: "Santa Cruz y la costa hasta Bajamar",
    route2Description: "Descubrid la capital y la costa del nordeste de Tenerife. El recorrido pasa por Bocacangrejo, Santa Cruz y el entorno de Tegueste, y termina en Bajamar, conocido por sus piscinas naturales junto al océano. Una combinación de ciudad, pueblos y paisajes costeros para disfrutar sin necesidad de ir con prisa.",
    route3Number: "RUTA 03 · PARQUE NACIONAL",
    route3Title: "El Teide y el atardecer en Chipeque",
    route3Description: "El principal atractivo es el propio recorrido por el Parque Nacional del Teide: disfrutad de los paisajes volcánicos, las formaciones rocosas y los distintos miradores que encontraréis por el camino. El paseo y las paradas para contemplar el entorno son parte de la experiencia. Para terminar, podéis acercaros al mirador de Chipeque y disfrutar del atardecer si las condiciones meteorológicas acompañan.",
    route4Number: "RUTA 04 · PARQUE RURAL DE ANAGA",
    route4Title: "Bosques, miradores y Taganana",
    route4Description: "Una ruta para descubrir el lado más verde de Tenerife. Podéis recorrer el Sendero de los Sentidos, deteneros en el mirador del Pico del Inglés y continuar hasta Taganana, un pueblo rodeado de montañas y vegetación. Las carreteras son sinuosas y el paisaje invita a hacer paradas, así que reservad tiempo para disfrutar del recorrido con tranquilidad.",
    mapButton: "Ver recorrido en Google Maps ↗",
    noteEyebrow: "VUESTRO VIAJE, VUESTRAS DECISIONES",
    noteTitle: "Dejad espacio para improvisar",
    noteDescription: "Estas cuatro rutas son propuestas independientes, no un calendario obligatorio. Podéis repartirlas a lo largo de vuestra estancia, descansar entre visitas o cambiar los planes según el tiempo. Antes de salir, comprobad la meteorología y el estado de las carreteras, especialmente en las zonas de montaña."
  },
  pl: {
    itineraryEyebrow: "LISTOPAD 2026",
    itineraryTitle: "Teneryfa we własnym tempie",
    itineraryIntro: "Znajdziecie tu cztery niezależne trasy pozwalające odkryć różne zakątki Teneryfy. Możecie każdego dnia wybrać inny region, zmieniać plany w zależności od pogody i dostosować wycieczki do własnych zainteresowań.",
    itineraryAdviceTitle: "Nasza rada:",
    itineraryAdvice: "cieszcie się podróżą bez pośpiechu. Zostawcie czas na postoje w punktach widokowych, odkrywanie ulubionych miejsc i spokojne zwiedzanie bez prób zobaczenia wszystkiego naraz.",
    route1Number: "TRASA 01 · POŁUDNIOWY ZACHÓD",
    route1Title: "Plaże, klify i Masca",
    route1Description: "Różnorodna trasa wzdłuż południowego i południowo-zachodniego wybrzeża. Po drodze można odwiedzić La Tejita, Montaña Amarilla, plażę Camisón i Abama, a następnie udać się w stronę imponujących klifów Los Gigantes, Santiago del Teide i malowniczej miejscowości Masca. Podziwiajcie widoki i pamiętajcie, że górskie drogi wymagają czasu oraz spokojnej jazdy.",
    route2Number: "TRASA 02 · WSCHÓD I PÓŁNOCNY WSCHÓD",
    route2Title: "Santa Cruz i wybrzeże aż do Bajamar",
    route2Description: "Odkryjcie stolicę wyspy i północno-wschodnie wybrzeże Teneryfy. Trasa prowadzi przez Bocacangrejo, Santa Cruz i okolice Tegueste, a kończy się w Bajamar, znanym z naturalnych basenów oceanicznych. To połączenie miasta, miasteczek i nadmorskich krajobrazów, które najlepiej odkrywać bez pośpiechu.",
    route3Number: "TRASA 03 · PARK NARODOWY",
    route3Title: "Teide i zachód słońca w Chipeque",
    route3Description: "Największą atrakcją jest sama trasa przez Park Narodowy Teide: podziwiajcie wulkaniczne krajobrazy, formacje skalne i liczne punkty widokowe. Spacery i postoje, by nacieszyć się otoczeniem, są częścią tej wycieczki. Na koniec możecie pojechać do punktu widokowego Chipeque i obejrzeć zachód słońca, jeśli pozwoli na to pogoda.",
    route4Number: "TRASA 04 · PARK WIEJSKI ANAGA",
    route4Title: "Lasy, punkty widokowe i Taganana",
    route4Description: "Trasa pozwalająca odkryć najbardziej zieloną część Teneryfy. Możecie przejść szlakiem Sendero de los Sentidos, zatrzymać się przy punkcie widokowym Pico del Inglés, a następnie pojechać do Taganany, miejscowości otoczonej górami i bujną roślinnością. Drogi są kręte, a krajobraz zachęca do postojów, dlatego warto zarezerwować odpowiednio dużo czasu.",
    mapButton: "Zobacz trasę w Google Maps ↗",
    noteEyebrow: "WASZA PODRÓŻ, WASZE DECYZJE",
    noteTitle: "Zostawcie miejsce na spontaniczność",
    noteDescription: "Te cztery trasy są niezależnymi propozycjami, a nie obowiązkowym harmonogramem. Możecie rozłożyć je na cały pobyt, odpoczywać między wycieczkami lub zmieniać plany w zależności od pogody. Przed wyjazdem sprawdźcie prognozę i stan dróg, szczególnie na terenach górskich."
  }
};

function applyItineraryTranslations(language) {
  if (!document.querySelector(".itinerary-page")) return;

  const t = itineraryTranslations[language];
  const heading = document.querySelector(".itinerary-heading");
  if (!heading) return;

  const headingParagraphs = heading.querySelectorAll("p:not(.eyebrow)");
  const note = document.querySelector(".itinerary-note");
  const noteParagraph = note?.querySelector("p:not(.eyebrow)");

  const set = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  set(".itinerary-heading .eyebrow", t.itineraryEyebrow);
  set(".itinerary-heading h1", t.itineraryTitle);

  if (headingParagraphs[0]) {
    headingParagraphs[0].textContent = t.itineraryIntro;
  }

  if (headingParagraphs[1]) {
    headingParagraphs[1].replaceChildren();
    const strong = document.createElement("strong");
    strong.textContent = t.itineraryAdviceTitle + " ";
    headingParagraphs[1].append(strong, t.itineraryAdvice);
  }

  const routes = document.querySelectorAll(".day-card");
  const routeKeys = [
    ["route1Number", "route1Title", "route1Description"],
    ["route2Number", "route2Title", "route2Description"],
    ["route3Number", "route3Title", "route3Description"],
    ["route4Number", "route4Title", "route4Description"]
  ];

  routes.forEach((route, index) => {
    const keys = routeKeys[index];
    if (!keys) return;

    const number = route.querySelector(".day-number");
    const title = route.querySelector("h2");
    const description = route.querySelector(".day-description");
    const mapLink = route.querySelector(".day-map-link");

    if (number) number.textContent = t[keys[0]];
    if (title) title.textContent = t[keys[1]];
    if (description) description.textContent = t[keys[2]];
    if (mapLink) mapLink.textContent = t.mapButton;
  });

  if (note) {
    const eyebrow = note.querySelector(".eyebrow");
    const title = note.querySelector("h2");

    if (eyebrow) eyebrow.textContent = t.noteEyebrow;
    if (title) title.textContent = t.noteTitle;
    if (noteParagraph) noteParagraph.textContent = t.noteDescription;
  }
}


const recommendationsTranslations = {
  es: {
    eyebrow: "GUÍA PERSONALIZADA · TENERIFE",
    title: "Recomendaciones para disfrutar de la isla.",
    lead: "Qué probar, dónde comer y qué tener en cuenta para aprovechar vuestro viaje en noviembre. Abrid cada apartado cuando lo necesitéis.",
    intro: "Una pequeña guía práctica preparada para la familia Tacikowski. Los apartados se pueden abrir y cerrar para encontrar la información fácilmente durante el viaje.",
    sections: [
      ["Gastronomía canaria", "Platos típicos, productos locales y sabores que merece la pena probar."],
      ["Dónde comer", "Dos opciones de mayor presupuesto y dos guachinches tradicionales."],
      ["Qué ropa llevar", "Cómo preparar la maleta para noviembre."],
      ["Consejos prácticos", "Supermercados, clima, carreteras y pequeños detalles."]
    ],
    foodIntro: "En Tenerife se come muy bien. La cocina canaria combina productos locales, pescado, carnes, recetas caseras y sabores propios del archipiélago.",
    foodDescriptions: [
      "Patatas pequeñas cocidas con sal hasta que la piel queda arrugada. Se acompañan con mojo.",
      "Salsa de ajo, aceite y pimiento, con un sabor intenso que puede ser ligeramente picante.",
      "Salsa que suele prepararse con cilantro o perejil, ajo y aceite. Combina muy bien con patatas y pescado.",
      "Un producto muy conocido de las islas, dulce y aromático. Probadlo fresco o en algún postre.",
      "Harina de cereales tostados que se utiliza en recetas saladas, desayunos y preparaciones dulces.",
      "El queso asado se suele acompañar de mojo. El almogrote es una pasta de queso curado típica de La Gomera.",
      "Dos platos tradicionales que podéis encontrar en establecimientos de cocina canaria.",
      "En las zonas costeras, preguntad por el pescado del día y las especialidades disponibles.",
      "Uno de los productos más conocidos de las islas: dulce, aromático y de sabor intenso. Merece la pena probarlo fresco o en algún postre típico.",
      "Postre dulce preparado principalmente con almendras, azúcar y huevo."
    ],
    foodAdviceTitle: "Un consejo gastronómico",
    foodAdvice: "Preguntad por las especialidades locales del día. La carta depende de cada establecimiento y de los productos disponibles.",
    restaurantIntro: "Los dos primeros lugares son opciones de mayor presupuesto; los dos últimos son guachinches, establecimientos más informales y generalmente económicos.",
    restaurantTags: ["Comida de calidad", "Comida de calidad", "Guachinche canario", "Guachinche canario"],
    restaurantDescriptions: [
      "Una opción para disfrutar de una comida de calidad. El precio puede ser más elevado que en un establecimiento tradicional.",
      "Otra alternativa para disfrutar de una comida especial y de una propuesta gastronómica de calidad.",
      "Una oportunidad para probar la cocina tradicional de Tenerife en un ambiente más sencillo y cercano.",
      "Otra opción para descubrir platos caseros y disfrutar de una comida local sin necesidad de un restaurante formal."
    ],
    mapLink: "Ver ubicación en Google Maps ↗",
    guachincheTitle: "¿Qué es un guachinche?",
    guachincheDescription: "Son establecimientos ligados a la tradición gastronómica de Tenerife. Pueden recordar en cierto modo a los bary mleczne de Polonia: sitios informales donde se come cocina tradicional a precios generalmente económicos. Los horarios y la oferta varían, así que conviene comprobarlos antes de ir.",
    clothingIntro: "Tenerife tiene un clima suave, pero las temperaturas cambian según la zona, la altitud y el tiempo de cada día. Como orientación, en muchas zonas se pueden encontrar temperaturas aproximadas de 15–25 °C en noviembre, aunque no está garantizado.",
    clothingTitles: ["Ropa ligera", "Bañador y toalla", "Una chaqueta", "Abrigo para la montaña", "Calzado cómodo", "Protección solar"],
    clothingDescriptions: [
      "Camisetas, pantalones cómodos y ropa fresca para los días soleados.",
      "Si el tiempo y el estado del mar acompañan, puede ser buen momento para disfrutar de la playa.",
      "No la olvidéis: por la noche puede refrescar, especialmente con viento.",
      "El Teide y las zonas altas pueden ser mucho más fríos que la costa.",
      "Ideal para recorrer pueblos, miradores y senderos.",
      "Incluid protector solar, gafas de sol y agua, incluso en días con temperaturas suaves."
    ],
    practicalTitles: ["Supermercados", "Microclimas", "Conducir por la isla", "Moneda y emergencias", "Consultar horarios", "Disfrutad sin prisas"],
    practicalDescriptions: [
      "HiperDino y SuperDino son cadenas habituales en Canarias. Podéis comprar agua, provisiones para las excursiones y productos locales.",
      "Puede hacer sol en el sur y estar nublado en el norte. Comprobad la previsión de la zona que vayáis a visitar.",
      "Las carreteras de Anaga, Masca y el Teide pueden ser estrechas y sinuosas. Conducid con calma y calculad tiempo suficiente.",
      "La moneda es el euro (€). El número europeo de emergencias es el 112.",
      "Algunos establecimientos tradicionales tienen días de apertura limitados. Confirmad los horarios antes de desplazaros.",
      "Dejad tiempo para parar en los miradores, explorar los pueblos y disfrutar de los paisajes."
    ]
  },

  pl: {
    eyebrow: "SPERSONALIZOWANY PRZEWODNIK · TENERYFA",
    title: "Wskazówki, które pomogą Wam cieszyć się wyspą",
    lead: "Co warto spróbować, gdzie zjeść i o czym pamiętać podczas listopadowej podróży. Otwierajcie poszczególne sekcje, kiedy będą Wam potrzebne.",
    intro: "Praktyczny mini-przewodnik przygotowany dla rodziny Tacikowskich. Sekcje można rozwijać i zwijać, aby łatwo znaleźć potrzebne informacje podczas podróży.",
    sections: [
      ["Kuchnia kanaryjska", "Tradycyjne potrawy, lokalne produkty i smaki, których warto spróbować."],
      ["Gdzie zjeść", "Dwie propozycje z wyższej półki cenowej i dwa tradycyjne guachinche."],
      ["Co spakować", "Jak przygotować bagaż na listopad."],
      ["Praktyczne wskazówki", "Supermarkety, pogoda, drogi i kilka przydatnych informacji."]
    ],
    foodIntro: "Na Teneryfie można bardzo dobrze zjeść. Kuchnia kanaryjska łączy lokalne produkty, ryby, mięso, domowe przepisy i charakterystyczne smaki archipelagu.",
    foodDescriptions: [
      "Małe ziemniaki gotowane w mocno osolonej wodzie, aż ich skórka się pomarszczy. Podaje się je z sosem mojo.",
      "Sos z czosnku, oliwy i papryki o intensywnym smaku, czasem lekko pikantny.",
      "Sos przygotowywany zwykle z kolendry lub pietruszki, czosnku i oliwy. Świetnie pasuje do ziemniaków i ryb.",
      "Znany produkt wysp, słodki i aromatyczny. Spróbujcie świeżego banana lub deseru z jego dodatkiem.",
      "Mąka z prażonych zbóż wykorzystywana w daniach wytrawnych, śniadaniach i słodkich potrawach.",
      "Grillowany ser podaje się często z sosem mojo. Almogrote to pasta z dojrzewającego sera, typowa dla La Gomery.",
      "Dwie tradycyjne potrawy, które można znaleźć w lokalnych restauracjach kuchni kanaryjskiej.",
      "W nadmorskich miejscowościach pytajcie o rybę dnia i dostępne lokalne specjały.",
      "Jeden z najbardziej znanych produktów wysp: słodki i aromatyczny. Warto spróbować go świeżego lub w lokalnym deserze.",
      "Słodki deser przygotowywany głównie z migdałów, cukru i jajek."
    ],
    foodAdviceTitle: "Wskazówka kulinarna",
    foodAdvice: "Pytajcie o lokalne specjały dnia. Menu zależy od lokalu i dostępnych produktów.",
    restaurantIntro: "Dwie pierwsze propozycje są z wyższej półki cenowej. Dwie ostatnie to guachinche — bardziej nieformalne i zazwyczaj niedrogie lokale.",
    restaurantTags: ["Dobra kuchnia", "Dobra kuchnia", "Kanaryjskie guachinche", "Kanaryjskie guachinche"],
    restaurantDescriptions: [
      "Miejsce na dobry posiłek. Ceny mogą być wyższe niż w tradycyjnych lokalach.",
      "Kolejna propozycja na wyjątkowy posiłek i wysokiej jakości kuchnię.",
      "Okazja, aby spróbować tradycyjnej kuchni Teneryfy w prostszej, przyjaznej atmosferze.",
      "Kolejne miejsce, w którym można odkryć domowe potrawy i lokalną kuchnię bez formalnej atmosfery restauracji."
    ],
    mapLink: "Zobacz lokalizację w Google Maps ↗",
    guachincheTitle: "Czym jest guachinche?",
    guachincheDescription: "To lokale związane z tradycją kulinarną Teneryfy. Mogą nieco przypominać polskie bary mleczne: są nieformalne i zazwyczaj oferują tradycyjne dania w przystępnych cenach. Godziny otwarcia i oferta bywają różne, dlatego warto sprawdzić je przed wizytą.",
    clothingIntro: "Na Teneryfie panuje łagodny klimat, ale temperatura zależy od regionu, wysokości i pogody danego dnia. W listopadzie w wielu miejscach można orientacyjnie spodziewać się 15–25°C, choć nie jest to gwarantowane.",
    clothingTitles: ["Lekkie ubrania", "Strój kąpielowy i ręcznik", "Lekka kurtka", "Ciepłe ubrania w góry", "Wygodne obuwie", "Ochrona przed słońcem"],
    clothingDescriptions: [
      "Koszulki, wygodne spodnie i lekkie ubrania na słoneczne dni.",
      "Jeśli pogoda i stan morza będą sprzyjające, warto skorzystać z plaży.",
      "Nie zapomnijcie o kurtce: wieczorami może być chłodniej, szczególnie przy wietrze.",
      "Na Teide i w wyżej położonych miejscach może być znacznie zimniej niż na wybrzeżu.",
      "Przydadzą się podczas zwiedzania miasteczek, punktów widokowych i szlaków.",
      "Zabierzcie krem z filtrem, okulary przeciwsłoneczne i wodę, nawet przy umiarkowanych temperaturach."
    ],
    practicalTitles: ["Supermarkety", "Mikroklimaty", "Jazda po wyspie", "Waluta i nagłe wypadki", "Sprawdźcie godziny otwarcia", "Bez pośpiechu"],
    practicalDescriptions: [
      "HiperDino i SuperDino to popularne sieci na Wyspach Kanaryjskich. Kupicie tam wodę, prowiant na wycieczki i lokalne produkty.",
      "Na południu może świecić słońce, podczas gdy na północy będzie pochmurno. Sprawdźcie prognozę dla odwiedzanego regionu.",
      "Drogi w Anaga, Masca i na Teide mogą być wąskie i kręte. Jedźcie spokojnie i zaplanujcie odpowiednio dużo czasu.",
      "Walutą jest euro (€). Europejski numer alarmowy to 112.",
      "Niektóre tradycyjne lokale są otwarte tylko w wybrane dni. Sprawdźcie godziny przed wyjazdem.",
      "Zostawcie czas na postoje w punktach widokowych, zwiedzanie miasteczek i podziwianie krajobrazów."
    ]
  }
};

function applyRecommendationsTranslations(language) {
  if (!document.querySelector(".recommendations-page")) return;

  const t = recommendationsTranslations[language];
  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  setText(".rec-heading .rec-eyebrow", t.eyebrow);
  setText(".rec-heading h1", t.title);
  setText(".rec-heading .rec-lead", t.lead);
  setText(".rec-main > .rec-intro", t.intro);

  const sections = document.querySelectorAll(".rec-accordion details");
  sections.forEach((section, index) => {
    const summaryTitle = section.querySelector(".rec-summary-title");
    if (summaryTitle && t.sections[index]) {
      summaryTitle.firstChild.textContent = t.sections[index][0] + "\n          ";
      const subtitle = summaryTitle.querySelector(".rec-summary-subtitle");
      if (subtitle) subtitle.textContent = t.sections[index][1];
    }
  });

  const foodSection = document.querySelector("#comida");
  if (foodSection) {
    const paragraphs = foodSection.querySelectorAll(".rec-panel > p");
    if (paragraphs[0]) paragraphs[0].textContent = t.foodIntro;

    foodSection.querySelectorAll(".rec-food-item p").forEach((item, index) => {
      if (t.foodDescriptions[index]) item.textContent = t.foodDescriptions[index];
    });

    const callout = foodSection.querySelector(".rec-callout");
    if (callout) {
      const heading = callout.querySelector("h3");
      const paragraph = callout.querySelector("p");
      if (heading) heading.textContent = t.foodAdviceTitle;
      if (paragraph) paragraph.textContent = t.foodAdvice;
    }
  }

  const restaurantSection = document.querySelector("#restaurantes");
  if (restaurantSection) {
    const intro = restaurantSection.querySelector(".rec-panel > p");
    if (intro) intro.textContent = t.restaurantIntro;

    restaurantSection.querySelectorAll(".rec-restaurant").forEach((card, index) => {
      const tag = card.querySelector(".rec-tag");
      const description = card.querySelector("p:not(.rec-tag)");
      const link = card.querySelector("a");

      if (tag) tag.textContent = t.restaurantTags[index];
      if (description) description.textContent = t.restaurantDescriptions[index];
      if (link) link.textContent = t.mapLink;
    });

    const callout = restaurantSection.querySelector(".rec-callout");
    if (callout) {
      const heading = callout.querySelector("h3");
      const paragraph = callout.querySelector("p");
      if (heading) heading.textContent = t.guachincheTitle;
      if (paragraph) {
        paragraph.textContent = t.guachincheDescription;
      }
    }
  }

  const clothingSection = document.querySelector("#ropa");
  if (clothingSection) {
    const intro = clothingSection.querySelector(".rec-panel > p");
    if (intro) intro.textContent = t.clothingIntro;

    clothingSection.querySelectorAll(".rec-tip").forEach((card, index) => {
      const heading = card.querySelector("h3");
      const paragraph = card.querySelector("p");
      if (heading) heading.textContent = t.clothingTitles[index];
      if (paragraph) paragraph.textContent = t.clothingDescriptions[index];
    });
  }

  const practicalSection = document.querySelector("#consejos");
  if (practicalSection) {
    practicalSection.querySelectorAll(".rec-tip").forEach((card, index) => {
      const heading = card.querySelector("h3");
      const paragraph = card.querySelector("p");
      if (heading) heading.textContent = t.practicalTitles[index];
      if (paragraph) paragraph.textContent = t.practicalDescriptions[index];
    });
  }
}


const historyTranslations = {
  es: {
    eyebrow: "HISTORIA Y CULTURA",
    title: "Una isla con mucha historia",
    lead: "Detrás de los paisajes volcánicos de Tenerife se esconde una historia de antiguos pobladores, exploraciones, comercio y acontecimientos que han dejado huella hasta nuestros días.",
    introTitle: "La historia de Tenerife",
    intro: "La historia de Tenerife está profundamente ligada a su origen volcánico y a su posición estratégica en el océano Atlántico. La isla se formó hace millones de años mediante sucesivas erupciones volcánicas, que dieron lugar a paisajes tan característicos como el Parque Nacional del Teide, cuya cumbre alcanza aproximadamente los 3.718 metros. Antes de la conquista castellana, iniciada en 1494 y finalizada en 1496, estaba habitada por los guanches, organizados en nueve territorios gobernados por menceyes. Tras su incorporación a la Corona de Castilla, Tenerife adquirió importancia como escala en las rutas marítimas entre Europa, África y América, contribuyendo al comercio con los territorios españoles de ultramar. La agricultura, especialmente el cultivo de la caña de azúcar y la vid, también tuvo un papel fundamental en su desarrollo económico. A lo largo de los siglos, la isla vivió acontecimientos como la erupción de 1706, que destruyó gran parte del puerto de Garachico, y la expedición británica de 1797, durante la cual el almirante Nelson perdió un brazo al intentar conquistar Santa Cruz. En julio de 1936, Tenerife volvió a ocupar un lugar destacado en la historia de España: Francisco Franco, entonces comandante general de Canarias, participó en los preparativos de la sublevación militar contra la Segunda República. El levantamiento triunfó en el archipiélago el 18 de julio, aunque había comenzado el día anterior en Melilla. Franco, que se encontraba en Gran Canaria, partió posteriormente hacia el norte de África para ponerse al mando de las tropas sublevadas. En la actualidad, Tenerife combina su patrimonio histórico y cultural con una extraordinaria diversidad natural, fruto de su origen volcánico, y se ha convertido en uno de los principales destinos turísticos de España.",
    factsEyebrow: "¿SABÍAS QUE...?",
    factsTitle: "Seis curiosidades de Tenerife",
    factsIntro: "Desde sus montañas y sus cielos estrellados hasta sus particularidades fiscales y los misterios de sus profundidades. Pulsa en cada tarjeta para descubrir más.",
    cards: [
      ["01 / NATURALEZA", "El techo de España", "El Teide supera en altura a cualquier montaña de la Península."],
      ["02 / VIDA LOCAL", "Un impuesto diferente", "Canarias tiene un régimen fiscal propio y no aplica el IVA peninsular."],
      ["03 / CLIMA", "Varias estaciones en un día", "La costa soleada y las cumbres frías pueden convivir en la misma jornada."],
      ["04 / ASTRONOMÍA", "Una ventana al universo", "Los cielos de Tenerife son ideales para observar las estrellas."],
      ["05 / MISTERIOS DEL MAR", "El extraño pez diablo negro", "En 2025 apareció cerca de la superficie un pez que vive normalmente en las profundidades."],
      ["06 / PATRIMONIO NATURAL", "El legendario Drago Milenario", "Uno de los árboles más emblemáticos y reconocibles de Canarias."]
    ],
    discover: "Descubrir curiosidad ↗",
    close: "Cerrar ventana",
    modalFacts: [
      [
        "El techo de España",
        [
          "El Teide alcanza aproximadamente los 3.718 metros sobre el nivel del mar y es el punto más alto de España. El Mulhacén, situado en Sierra Nevada, alcanza unos 3.479 metros y es la cima más alta de la España peninsular.",
          "Además de sus rutas de montaña, Sierra Nevada es conocida por su estación de esquí. En Tenerife, en cambio, el gran protagonista es el paisaje volcánico del Teide, donde incluso puede nevar durante el invierno."
        ]
      ],
      [
        "Un impuesto diferente",
        [
          "Canarias cuenta con un régimen fiscal propio. En lugar del IVA que se aplica en la Península, existe el IGIC, el Impuesto General Indirecto Canario. Su tipo general es del 7 %, aunque hay productos y servicios sujetos a otros tipos.",
          "Por eso, algunos artículos pueden tener precios distintos a los de la Península. Sin embargo, no significa que todo sea necesariamente más barato: también influyen el transporte, la marca y el establecimiento."
        ]
      ],
      [
        "Varias estaciones en un día",
        [
          "La altitud y el relieve de Tenerife generan una gran variedad de microclimas. Mientras en la costa se puede disfrutar de temperaturas suaves y sol, en las zonas altas las condiciones pueden ser mucho más frías, especialmente en invierno.",
          "Por eso, visitar el Teide requiere llevar algo de abrigo incluso cuando hace buen tiempo junto al mar. En las cumbres puede aparecer nieve, mientras que las playas siguen disfrutando de un clima templado."
        ]
      ],
      [
        "Una ventana al universo",
        [
          "Tenerife es un lugar destacado para observar el cielo nocturno gracias a su altitud, la frecuencia de cielos despejados y las condiciones atmosféricas de las zonas altas.",
          "En la isla se encuentra el Observatorio del Teide, un centro científico dedicado a la investigación astronómica. Lejos de las luces de las ciudades, las noches despejadas permiten contemplar una cantidad impresionante de estrellas."
        ]
      ],
      [
        "El extraño pez diablo negro",
        [
          "En enero de 2025 se observó cerca de la superficie, frente a Tenerife, un ejemplar de diablo negro (Melanocetus johnsonii), un pez que normalmente habita a grandes profundidades, donde apenas llega la luz solar.",
          "Su aparición fue extraordinaria porque estos peces rara vez se observan vivos tan cerca de la superficie. El ejemplar fue entregado al Museo de Naturaleza y Arqueología de Tenerife (MUNA) para su estudio científico."
        ]
      ],
      [
        "El legendario Drago Milenario",
        [
          "En Icod de los Vinos se encuentra el famoso Drago Milenario, uno de los símbolos naturales más conocidos de Tenerife. Su silueta característica y su enorme tamaño lo convierten en una visita muy representativa de la flora canaria.",
          "Aunque se le conoce como milenario, su edad exacta no está establecida con certeza y ha sido objeto de debate. En cualquier caso, es un árbol emblemático que forma parte del patrimonio natural y cultural de la isla."
        ]
      ]
    ],
    museumLink: "Leer la información del museo ↗"
  },

  pl: {
    eyebrow: "HISTORIA I KULTURA",
    title: "Wyspa o bogatej historii",
    lead: "Za wulkanicznymi krajobrazami Teneryfy kryje się historia dawnych mieszkańców, odkryć, handlu i wydarzeń, które pozostawiły ślad aż do naszych czasów.",
    introTitle: "Historia Teneryfy",
    intro: "Historia Teneryfy jest ściśle związana z jej wulkanicznym pochodzeniem i strategicznym położeniem na Oceanie Atlantyckim. Wyspa powstała miliony lat temu w wyniku kolejnych erupcji wulkanicznych, które ukształtowały charakterystyczne krajobrazy, takie jak Park Narodowy Teide, którego szczyt wznosi się na około 3718 metrów. Przed podbojem kastylijskim, rozpoczętym w 1494 roku i zakończonym w 1496 roku, wyspę zamieszkiwali Guanczowie, zorganizowani w dziewięć terytoriów rządzonych przez menceyów. Po włączeniu do Korony Kastylii Teneryfa zyskała znaczenie jako przystanek na szlakach morskich między Europą, Afryką i Ameryką. Rolnictwo, zwłaszcza uprawa trzciny cukrowej i winorośli, odegrało ważną rolę w rozwoju gospodarczym wyspy. Na przestrzeni wieków miały tu miejsce wydarzenia takie jak erupcja z 1706 roku, która zniszczyła dużą część portu w Garachico, oraz brytyjska wyprawa z 1797 roku, podczas której admirał Nelson stracił rękę podczas próby zdobycia Santa Cruz. W lipcu 1936 roku Teneryfa ponownie znalazła się w centrum ważnych wydarzeń historii Hiszpanii: Francisco Franco, ówczesny dowódca generalny Wysp Kanaryjskich, uczestniczył w przygotowaniach wojskowego powstania przeciwko Drugiej Republice. Powstanie zwyciężyło na archipelagu 18 lipca, choć rozpoczęło się dzień wcześniej w Melilli. Franco przebywał wówczas na Gran Canarii, skąd następnie udał się do Afryki Północnej, aby objąć dowództwo nad zbuntowanymi wojskami. Dziś Teneryfa łączy dziedzictwo historyczne i kulturowe z niezwykłą różnorodnością przyrody i jest jednym z najważniejszych kierunków turystycznych Hiszpanii.",
    factsEyebrow: "CZY WIESZ, ŻE...?",
    factsTitle: "Sześć ciekawostek o Teneryfie",
    factsIntro: "Od gór i rozgwieżdżonego nieba po lokalne podatki i tajemnice głębin oceanu. Kliknij każdą kartę, aby dowiedzieć się więcej.",
    cards: [
      ["01 / PRZYRODA", "Najwyższy szczyt Hiszpanii", "Teide jest wyższy niż jakakolwiek góra na kontynentalnej części Hiszpanii."],
      ["02 / ŻYCIE LOKALNE", "Inny system podatkowy", "Wyspy Kanaryjskie mają własny system podatkowy i nie stosują kontynentalnego VAT-u."],
      ["03 / KLIMAT", "Kilka pór roku w jeden dzień", "Słoneczne wybrzeże i chłodne szczyty mogą występować tego samego dnia."],
      ["04 / ASTRONOMIA", "Okno na wszechświat", "Niebo nad Teneryfą świetnie nadaje się do obserwacji gwiazd."],
      ["05 / TAJEMNICE OCEANU", "Tajemnicza ryba głębinowa", "W 2025 roku blisko powierzchni pojawiła się ryba żyjąca zwykle w głębinach."],
      ["06 / DZIEDZICTWO PRZYRODNICZE", "Legendarne smocze drzewo", "Jedno z najbardziej charakterystycznych i rozpoznawalnych drzew Wysp Kanaryjskich."]
    ],
    discover: "Odkryj ciekawostkę ↗",
    close: "Zamknij okno",
    modalFacts: [
      [
        "Najwyższy szczyt Hiszpanii",
        [
          "Teide wznosi się na około 3718 metrów nad poziomem morza i jest najwyższym punktem Hiszpanii. Mulhacén w paśmie Sierra Nevada ma około 3479 metrów i jest najwyższym szczytem kontynentalnej części kraju.",
          "Sierra Nevada słynie również z górskich szlaków i ośrodka narciarskiego. Na Teneryfie główną atrakcją jest wulkaniczny krajobraz Teide, gdzie zimą może nawet padać śnieg."
        ]
      ],
      [
        "Inny system podatkowy",
        [
          "Wyspy Kanaryjskie mają własny system podatkowy. Zamiast kontynentalnego VAT-u obowiązuje IGIC, czyli kanaryjski ogólny podatek pośredni. Jego podstawowa stawka wynosi 7%, choć niektóre towary i usługi podlegają innym stawkom.",
          "Dlatego ceny niektórych produktów mogą różnić się od cen na kontynencie. Nie oznacza to jednak, że wszystko jest tańsze — znaczenie mają również transport, marka i konkretny sklep."
        ]
      ],
      [
        "Kilka pór roku w jeden dzień",
        [
          "Wysokość i ukształtowanie terenu Teneryfy powodują występowanie wielu mikroklimatów. Na wybrzeżu może być słonecznie i łagodnie, podczas gdy w wyżej położonych miejscach jest znacznie chłodniej, zwłaszcza zimą.",
          "Dlatego podczas wycieczki na Teide warto zabrać cieplejsze ubrania, nawet jeśli nad morzem panuje dobra pogoda. Na szczytach może pojawić się śnieg, podczas gdy plaże nadal cieszą się łagodnym klimatem."
        ]
      ],
      [
        "Okno na wszechświat",
        [
          "Teneryfa jest znakomitym miejscem do obserwacji nocnego nieba dzięki wysokości, częstym bezchmurnym nocom i warunkom atmosferycznym w wyżej położonych częściach wyspy.",
          "Na wyspie znajduje się Obserwatorium Teide, ośrodek naukowy zajmujący się badaniami astronomicznymi. Z dala od miejskich świateł, podczas bezchmurnych nocy można podziwiać ogromną liczbę gwiazd."
        ]
      ],
      [
        "Tajemnicza ryba głębinowa",
        [
          "W styczniu 2025 roku w pobliżu Teneryfy, niedaleko powierzchni wody, zaobserwowano osobnika z gatunku Melanocetus johnsonii. Ta ryba zwykle żyje na dużych głębokościach, gdzie prawie nie dociera światło słoneczne.",
          "To niezwykłe odkrycie, ponieważ te ryby bardzo rzadko można zobaczyć żywe tak blisko powierzchni. Okaz przekazano do Muzeum Przyrody i Archeologii Teneryfy (MUNA) w celu przeprowadzenia badań naukowych."
        ]
      ],
      [
        "Legendarne smocze drzewo",
        [
          "W miejscowości Icod de los Vinos rośnie słynne Drago Milenario, jedno z najbardziej znanych naturalnych symboli Teneryfy. Jego charakterystyczny kształt i imponujące rozmiary sprawiają, że jest wyjątkowym przykładem kanaryjskiej roślinności.",
          "Choć nazywane jest tysiącletnim, jego dokładny wiek nie został jednoznacznie ustalony i pozostaje przedmiotem dyskusji. Niezależnie od tego jest ważnym elementem przyrodniczego i kulturowego dziedzictwa wyspy."
        ]
      ]
    ],
    museumLink: "Przeczytaj informacje muzeum ↗"
  }
};

function applyHistoryTranslations(language) {
  if (!document.querySelector(".history-page")) return;

  const t = historyTranslations[language];
  const set = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  set(".history-heading .eyebrow", t.eyebrow);
  set(".history-heading h1", t.title);
  set(".history-heading > p:not(.eyebrow)", t.lead);
  set(".history-intro h2", t.introTitle);
  set(".history-intro > p", t.intro);
  set(".history-facts-heading .eyebrow", t.factsEyebrow);
  set(".history-facts-heading h2", t.factsTitle);
  set(".history-facts-heading > p:not(.eyebrow)", t.factsIntro);

  document.querySelectorAll(".history-fact").forEach((card, index) => {
    const fact = t.cards[index];
    if (!fact) return;

    const spans = card.querySelectorAll(".history-fact-number, .history-fact-link");
    const heading = card.querySelector("h3");
    const paragraph = card.querySelector("p");

    if (spans[0]) spans[0].textContent = fact[0];
    if (heading) heading.textContent = fact[1];
    if (paragraph) paragraph.textContent = fact[2];
    if (spans[1]) spans[1].textContent = t.discover;
  });

  // Traduce el contenido de las seis ventanas emergentes.
  t.modalFacts.forEach((fact, index) => {
    const ids = ["fact-teide", "fact-tax", "fact-climate", "fact-stars", "fact-fish", "fact-drago"];
    const source = document.getElementById(ids[index]);
    if (!source) return;

    source.dataset.title = fact[0];

    const paragraphs = source.querySelectorAll("p");
    fact[1].forEach((text, paragraphIndex) => {
      if (paragraphs[paragraphIndex]) {
        paragraphs[paragraphIndex].textContent = text;
      }
    });

    const link = source.querySelector("a");
    if (link) link.textContent = t.museumLink;
  });

  const modalClose = document.querySelector(".fact-modal-close");
  if (modalClose) modalClose.setAttribute("aria-label", t.close);
}


function setTranslatedText(key, value) {
  const id = aliases[key] || key;
  const element = document.getElementById(id);

  if (element) {
    // Conserva el formato especial de la descripción de inicio.
    if (key === "introDescription" && element.querySelector("strong")) {
      return;
    }

    element.textContent = value;
  }

  // También permite traducir elementos preparados con data-i18n.
  document.querySelectorAll("[data-i18n]").forEach((item) => {
    if (item.dataset.i18n === key) {
      item.textContent = value;
    }
  });
}

function applyLanguage(language) {
  currentLanguage = language === "pl" ? "pl" : "es";
  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = t.pageTitle;

  Object.entries(t).forEach(([key, value]) => {
    if (key !== "pageTitle") {
      setTranslatedText(key, value);
    }
  });

  // Navegación compartida por todas las páginas.
  const navLinks = {
    "itinerario.html": t.navItinerary,
    "recomendaciones.html": t.navTenerife,
    "historia.html": t.navHistory
  };

  document.querySelectorAll(".navigation a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (navLinks[href]) {
      link.textContent = navLinks[href];
    }
  });

  // Botón de contacto.
  const contactButton = document.getElementById("contact-toggle");
  if (contactButton) {
    contactButton.textContent = t.contactButton;
  }

  // Botón para cambiar de idioma.
  const languageButton = document.getElementById("language-toggle");
  if (languageButton) {
    languageButton.textContent = currentLanguage === "es" ? "PL" : "ES";
    languageButton.setAttribute(
      "aria-label",
      currentLanguage === "es"
        ? "Cambiar idioma a polaco"
        : "Zmień język na hiszpański"
    );
  }

  // Etiquetas de contacto que no tienen identificador.
  const contactDetails = document.querySelectorAll(".contact-detail span");
  if (contactDetails.length >= 2) {
    contactDetails[0].textContent = t.emailLabel;
    contactDetails[1].textContent = t.phoneLabel;
  }

  const closeButton = document.getElementById("contact-close");
  if (closeButton) {
    closeButton.setAttribute("aria-label", t.closeLabel);
  }

  // Guarda la elección para las demás páginas.
  applyItineraryTranslations(currentLanguage);
  applyRecommendationsTranslations(currentLanguage);
  applyHistoryTranslations(currentLanguage);
  try {
    localStorage.setItem(languageStorageKey, currentLanguage);
  } catch {
    // La web sigue funcionando aunque el navegador no permita guardar.
  }
}

function changeLanguage() {
  applyLanguage(currentLanguage === "es" ? "pl" : "es");
}

/* Ventana de contacto */
const contactToggle = document.getElementById("contact-toggle");
const contactBackdrop = document.getElementById("contact-backdrop");
const contactClose = document.getElementById("contact-close");

function openContact() {
  if (!contactBackdrop) return;
  contactBackdrop.hidden = false;
  if (contactClose) contactClose.focus();
}

function closeContact() {
  if (contactBackdrop) contactBackdrop.hidden = true;
  if (contactToggle) contactToggle.focus();
}

if (contactToggle) {
  contactToggle.addEventListener("click", openContact);
}

if (contactClose) {
  contactClose.addEventListener("click", closeContact);
}

if (contactBackdrop) {
  contactBackdrop.addEventListener("click", (event) => {
    if (event.target === contactBackdrop) closeContact();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactBackdrop && !contactBackdrop.hidden) {
    closeContact();
  }
});

const languageToggle = document.getElementById("language-toggle");

if (languageToggle) {
  languageToggle.addEventListener("click", changeLanguage);
}

// Aplica el idioma guardado cada vez que se abre una página.
applyLanguage(currentLanguage);
