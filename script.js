
const translations = {
  es: {
    heroTitle: "Dos países.<br>Mil maneras de descubrirlos.",
    heroDescription: "Diseñamos viajes e itinerarios personalizados para que descubras España y Polonia de una forma diferente.",
    heroButton: "Descubre los destinos",
    introTitle: "Cada lugar tiene una historia.<br>Vamos a descubrirla.",
    introDescription: "Desde ciudades llenas de historia hasta paisajes que sorprenden. Te ayudamos a organizar una experiencia adaptada a tus intereses, tu ritmo y tu manera de viajar.",
    destinationsTitle: "Dos países, infinitas posibilidades.",
    spainTitle: "Luz, cultura y Mediterráneo.",
    spainDescription: "Descubre el carácter español.",
    polandTitle: "Historia, naturaleza y encanto.",
    polandDescription: "Descubre la esencia de Polonia.",
    personalizedTitle: "No hay dos viajeros iguales.",
    personalizedDescription: "Cuéntanos qué te gustaría descubrir y construiremos contigo un itinerario personalizado.",
    personalizedButton: "Hablemos de tu viaje",
    contactTitle: "¿A dónde te gustaría ir?",
    contactDescription: "Estamos preparando nuevas formas de ayudarte a descubrir España y Polonia.",
    contactLink: "Contacto por correo electrónico",
    navDestinations: "Destinos",
    navExperience: "Nuestra idea",
    navContact: "Contacto",
    heroNote: "Viajar con otra perspectiva"
  },
  pl: {
    heroTitle: "Dwa kraje.<br>Niezliczone sposoby odkrywania.",
    heroDescription: "Tworzymy spersonalizowane podróże i plany zwiedzania, dzięki którym odkryjesz Hiszpanię i Polskę w wyjątkowy sposób.",
    heroButton: "Odkryj kierunki",
    introTitle: "Każde miejsce ma swoją historię.<br>Odkryjmy ją razem.",
    introDescription: "Od historycznych miast po zachwycające krajobrazy. Pomożemy Ci zaplanować podróż dopasowaną do Twoich zainteresowań, tempa i stylu podróżowania.",
    destinationsTitle: "Dwa kraje, nieskończone możliwości.",
    spainTitle: "Światło, kultura i Morze Śródziemne.",
    spainDescription: "Poznaj hiszpański charakter.",
    polandTitle: "Historia, natura i wyjątkowy urok.",
    polandDescription: "Odkryj piękno Polski.",
    personalizedTitle: "Każdy podróżnik jest inny.",
    personalizedDescription: "Opowiedz nam, co chcesz odkryć, a wspólnie stworzymy spersonalizowany plan podróży.",
    personalizedButton: "Porozmawiajmy o podróży",
    contactTitle: "Dokąd chcesz pojechać?",
    contactDescription: "Przygotowujemy nowe sposoby, aby pomóc Ci odkrywać Hiszpanię i Polskę.",
    contactLink: "Kontakt e-mail",
    navDestinations: "Kierunki",
    navExperience: "Nasza idea",
    navContact: "Kontakt",
    heroNote: "Podróżuj z innej perspektywy"
  }
};

let currentLanguage = "es";

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.innerHTML = value;
}

function changeLanguage() {
  currentLanguage = currentLanguage === "es" ? "pl" : "es";
  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "es"
    ? "Enrique Espigares | Viajes entre España y Polonia"
    : "Enrique Espigares | Podróże między Hiszpanią a Polską";

  setText("hero-title", t.heroTitle);
  setText("hero-description", t.heroDescription);
  setText("hero-button", t.heroButton);
  setText("intro-title", t.introTitle);
  setText("intro-description", t.introDescription);
  setText("destinations-title", t.destinationsTitle);
  setText("spain-title", t.spainTitle);
  setText("spain-description", t.spainDescription);
  setText("poland-title", t.polandTitle);
  setText("poland-description", t.polandDescription);
  setText("personalized-title", t.personalizedTitle);
  setText("personalized-description", t.personalizedDescription);
  setText("personalized-button", t.personalizedButton);
  setText("contact-title", t.contactTitle);
  setText("contact-description", t.contactDescription);
  setText("contact-link", t.contactLink);
  setText("nav-destinations", t.navDestinations);
  setText("nav-experience", t.navExperience);
  setText("nav-contact", t.navContact);
  setText("hero-note", t.heroNote);

  document.getElementById("language-toggle").textContent =
    currentLanguage === "es" ? "PL / ES" : "ES / PL";
}

document.getElementById("language-toggle")
  .addEventListener("click", changeLanguage);
