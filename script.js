
const translations = {
  es: {
    navItinerary: "Itinerario",
    navTenerife: "Recomendaciones",
    navHistory: "Historia",
    navInfo: "Información útil",
    contactButton: "Contacto",
    heroEyebrow: "VUESTRO VIAJE COMIENZA AQUÍ",
    heroTitle: "¡Bienvenidos, familia Tacikowski!",
    heroDescription: "Gracias por confiar en mis servicios. Espero que disfrutéis muchísimo de Tenerife, descubráis lugares inolvidables y os llevéis grandes recuerdos de vuestro viaje.",
    heroButton: "Descubrir nuestro itinerario",
    introEyebrow: "UNA GUÍA PREPARADA PARA VOSOTROS",
    introTitle: "Tenerife, a vuestro ritmo.",
    introDescription: "Aquí encontraréis el itinerario del viaje, recomendaciones para descubrir la isla, un poco de su historia e información útil para disfrutar de cada momento.",
    galleryEyebrow: "EXPERIENCIAS COMPARTIDAS",
    galleryTitle: "Algunas fotos de nuestros clientes satisfechos",
    galleryDescription: "Cada viaje es una historia y cada experiencia, un recuerdo especial.",
    contactEyebrow: "ESTOY A VUESTRA DISPOSICIÓN",
    contactTitle: "Hablemos",
    contactDescription: "Si necesitáis ayuda o tenéis alguna pregunta, podéis contactar conmigo.",
    emailLabel: "Correo electrónico",
    phoneLabel: "Teléfono",
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
    heroDescription: "Dziękuję za zaufanie i skorzystanie z moich usług. Mam nadzieję, że wspaniale spędzicie czas na Teneryfie, odkryjecie niezwykłe miejsca i przywieziecie z podróży piękne wspomnienia.",
    heroButton: "Zobacz plan podróży",
    introEyebrow: "PRZEWODNIK PRZYGOTOWANY SPECJALNIE DLA WAS",
    introTitle: "Teneryfa w Waszym tempie.",
    introDescription: "Znajdziecie tu plan podróży, polecane miejsca na wyspie, trochę historii Teneryfy oraz przydatne informacje, które pomogą Wam cieszyć się każdym dniem.",
    galleryEyebrow: "WSPÓLNE PODRÓŻE",
    galleryTitle: "Kilka zdjęć naszych zadowolonych klientów",
    galleryDescription: "Każda podróż to osobna historia i wyjątkowe wspomnienia.",
    contactEyebrow: "JESTEM DO WASZEJ DYSPOZYCJI",
    contactTitle: "Porozmawiajmy",
    contactDescription: "Jeśli potrzebujecie pomocy lub macie pytania, możecie się ze mną skontaktować.",
    emailLabel: "Adres e-mail",
    phoneLabel: "Telefon",
    footerText: "© 2026 Enrique Espigares · Podróże szyte na miarę",
    pageTitle: "Rodzina Tacikowskich | Teneryfa z Enrique Espigares"
  }
};

let currentLanguage = "es";

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function changeLanguage() {
  currentLanguage = currentLanguage === "es" ? "pl" : "es";
  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = t.pageTitle;

  Object.entries(t).forEach(([key, value]) => {
    if (key !== "pageTitle") setText(key, value);
  });

  const languageButton = document.getElementById("language-toggle");
  if (languageButton) {
    languageButton.textContent = currentLanguage === "es" ? "PL" : "ES";
    languageButton.setAttribute(
      "aria-label",
      currentLanguage === "es" ? "Zmień język na polski" : "Cambiar idioma a español"
    );
  }
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
