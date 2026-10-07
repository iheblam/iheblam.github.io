const french = {
skip:'Aller au contenu',navAbout:'À propos',navProjects:'Projets',navJourney:'Parcours',navContact:'Contact',availability:'Disponible pour un stage PFE · Janvier 2027',hello:'Bonjour, moi c’est Iheb Lamouchi.',headline:'Un peu de curiosité.<br>Un monde de <em>possibilités.</em>',intro:'Je transforme des données complexes en expériences IA utiles. Étudiant ingénieur en Data Science et IA, je construis à la croisée de l’intelligence et du logiciel.',explore:'Découvrir mes projets',cv:'Télécharger le CV ↓',location:'Basé en Tunisie',chartTitle:'Des idées qui prennent forme',aboutKicker:'01 — Quelques mots sur moi',aboutTitle:'L’esprit d’un ingénieur.<br>L’envie de construire.',aboutCopy:'Je suis étudiant en troisième année du cycle ingénieur en Data Science et IA à TEK-UP. J’aime relier les données brutes, les modèles fiables et les interfaces agréables à utiliser.',aboutMore:'D’un assistant juridique hors ligne pour une banque à des outils d’apprentissage adaptatif, je développe toute la chaîne : recherche, évaluation, API et expérience utilisateur. Je recherche un stage PFE en IA, data ou développement full-stack à partir de janvier 2027.',note1:'↗ Une IA concrète et évaluée',note2:'↗ Du début à la livraison',note3:'↗ Arabe · Français · Anglais',projectKicker:'02 — Projets sélectionnés',projectTitle:'Des expérimentations<br>ancrées dans le réel.',bankLabel:'BNA · Projet de stage',retrieval:'taux de réussite de la recherche',legalTitle:'Une IA qui cite ses sources.',legalCopy:'Un assistant juridique RAG hors ligne couvrant environ 1 700 articles de quatre codes juridiques tunisiens. La recherche hybride et la vérification des citations permettent des réponses étayées au sein d’une plateforme de gestion des affaires.',legalNote:'84 % de précision de bout en bout sur un jeu de référence de 50 questions créé par mes soins. Source : CV.',learningLabel:'Apprentissage adaptatif · IA',learningTitle:'Un espace de révision qui s’adapte.',learningCopy:'Les PDF de cours deviennent des fiches, des résumés et des banques de questions personnalisées. L’OCR, la recherche vectorielle et une correction en deux étapes aident à retravailler les notions difficiles.',learningNote:'Une hausse de 18 % des scores moyens à la nouvelle tentative, selon mon CV.',phones:'téléphones réunis',recommendLabel:'Recommandation · ML',recommendCopy:'Une manière plus intelligente de choisir un téléphone en Tunisie. J’ai unifié les données de cinq plateformes, comparé KNN, Random Forest et XGBoost, puis livré une application avec déploiement automatisé et collecte hebdomadaire.',demoKicker:'03 — Les projets en mouvement',demoTitle:'Moins de discours.<br>Plus de démonstrations.',demoCopy:'Un espace dédié aux présentations de projets, aux démos et aux détails de leur réalisation.',demoSoon:'Les vidéos arrivent bientôt',demoWait:'Les démonstrations apparaîtront ici au fur et à mesure de leur ajout.',demoStatus:'En préparation',toolKicker:'04 — Ma boîte à outils',toolTitle:'Les bons outils.<br>Une approche réfléchie.',journeyKicker:'05 — Mon parcours',journeyTitle:'Toujours apprendre.<br>Toujours construire.',degree:'Cycle ingénieur · Data Science et IA',expected:'(prévu)',licence:'Licence en informatique',role1:'Stagiaire en ingénierie logicielle',exp1:'Développement d’un assistant juridique IA hors ligne et d’une plateforme de gestion des affaires avec contrôle d’accès, circuits de validation et traçabilité.',role2:'Stagiaire en développement web et DevOps',exp2:'Développement d’une application de gestion de projets Angular / Django et automatisation des livraisons avec Jenkins, Docker et les contrôles qualité SonarQube.',role3:'Stagiaire en développement MEAN Stack',exp3:'Réalisation d’une plateforme e-sport avec routes sécurisées, profils d’équipes et scores de matchs en direct.',contactKicker:'06 — Prenons contact',contactTitle:'Un beau défi à relever ?<br><em>Construisons ensemble.</em>',contactCopy:'À la recherche d’un stage PFE à partir de janvier 2027.<br>Échangeons autour de l’IA, de la data et de logiciels utiles.',footer:'Créé avec curiosité. Basé en Tunisie.',top:'Retour en haut ↑'
};
Object.assign(french, {
 watchDemo:'Voir la démo',videoCopy:'Découvrez le système de recommandation de téléphones en action.',downloadDemo:'Télécharger la vidéo ↓',
 headline:'Rendre la data utile.<br>Créer des <em>expériences intelligentes.</em>',
 intro:'Moi, c’est Iheb, étudiant ingénieur en Data Science et IA. Je transforme des données complexes en produits concrets : assistants IA fiables, apprentissage adaptatif et applications full-stack.',
 heroRole:'ÉTUDIANT INGÉNIEUR EN DATA SCIENCE ET IA', portraitChip:'De la data à l’impact', portraitRole:'Ingénierie Data Science et IA', githubKicker:'À découvrir sur mon GitHub',githubTitle:'Au-delà du CV.<br>D’autres réalisations.',publicRepos:'Dépôts publics',techcareLabel:'Assistance IA · Full-stack',techcareCopy:'Une plateforme de réparation informatique réunissant diagnostic assisté par IA, bibliothèque de problèmes consultable et tickets de support. Des espaces client, technicien et administrateur permettent de gérer les affectations, les mises à jour et les pièces jointes.',homedocLabel:'IA et santé · Application web',homedocCopy:'Un projet d’aide au diagnostic médical avec saisie de symptômes, prédictions de maladies par IA et validation ou correction des résultats par des médecins. Le backend gère aussi l’historique, les notifications et les statistiques administratives.',doctorValidation:'Validation médicale',viewRepo:'Explorer le dépôt'
});
const elements = [...document.querySelectorAll('[data-i18n]')];
const english = Object.fromEntries(elements.map(el => [el.dataset.i18n, el.innerHTML]));
const languageButton = document.getElementById('language');
const themeButton = document.getElementById('theme');
let language = 'en';
let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
function readPreference(key) { try { return localStorage.getItem(key); } catch { return null; } }
function savePreference(key, value) { try { localStorage.setItem(key, value); } catch { /* Preferences remain usable without storage. */ } }
function updateControls() {
  languageButton.textContent = language === 'en' ? 'FR' : 'EN';
  languageButton.setAttribute('aria-label', language === 'en' ? 'Switch to French' : 'Passer en anglais');
  themeButton.innerHTML = theme === 'dark'
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4L19 5"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 13.3A8.5 8.5 0 0 1 10.7 3.5a8.5 8.5 0 1 0 9.8 9.8Z"/></svg>';
  themeButton.setAttribute('aria-label', language === 'fr' ? (theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre') : (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'));
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
}
function setLanguage(value) {
  language = value === 'fr' ? 'fr' : 'en';
  document.documentElement.lang = language;
  const dictionary = language === 'fr' ? french : english;
  elements.forEach(el => { el.innerHTML = dictionary[el.dataset.i18n] ?? english[el.dataset.i18n]; });
  document.querySelectorAll('a[data-i18n="cv"]').forEach(link => {
    link.href = language === 'fr' ? 'assets/Iheb-Lamouchi-CV-FR.pdf' : 'assets/Iheb-Lamouchi-CV.pdf';
    link.download = language === 'fr' ? 'Iheb-Lamouchi-CV-FR.pdf' : 'Iheb-Lamouchi-CV-EN.pdf';
  });
  document.querySelector('nav').setAttribute('aria-label', language === 'fr' ? 'Navigation principale' : 'Main navigation');
  document.title = language === 'fr' ? 'Iheb Lamouchi · Data et IA' : 'Iheb Lamouchi · Data & AI';
  updateControls();
}
function setTheme(value) {
  theme = value === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0b1020' : '#f5f7ff';
  updateControls();
}
languageButton.addEventListener('click', () => { setLanguage(language === 'en' ? 'fr' : 'en'); savePreference('portfolio-language', language); });
themeButton.addEventListener('click', () => { setTheme(theme === 'dark' ? 'light' : 'dark'); savePreference('portfolio-theme', theme); });
setTheme(readPreference('portfolio-theme') || theme);
setLanguage(readPreference('portfolio-language') || 'en');
document.getElementById('year').textContent = new Date().getFullYear();

// Decorative drifting data points; capped density and frame rate keep it light.
const canvas = document.getElementById('data-background');
const context = canvas.getContext('2d');
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.createElement('button');
motionButton.className = 'motion-toggle';
document.querySelector('.hero-foot').append(motionButton);
let motionOverride = readPreference('portfolio-motion');
function motionEnabled() { return motionOverride ? motionOverride === 'enabled' : !motionPreference.matches; }
function updateMotionControl() {
  const enabled = motionEnabled();
  document.documentElement.dataset.motion = enabled ? 'enabled' : 'paused';
  motionButton.textContent = language === 'fr' ? (enabled ? 'Mettre en pause' : 'Activer les animations') : (enabled ? 'Pause animation' : 'Enable animation');
  motionButton.setAttribute('aria-pressed', String(enabled));
}
motionButton.addEventListener('click', () => {
  motionOverride = motionEnabled() ? 'paused' : 'enabled';
  savePreference('portfolio-motion', motionOverride);
  syncMotion();
});
languageButton.addEventListener('click', updateMotionControl);
let points = [], width = 0, height = 0, animationFrame = 0, lastFrame = 0;
function resizeBackground() {
  width = innerWidth; height = innerHeight;
  const scale = Math.min(devicePixelRatio || 1, 2);
  canvas.width = width * scale; canvas.height = height * scale;
  context.setTransform(scale, 0, 0, scale, 0, 0);
  points = Array.from({length: width < 600 ? 23 : 65}, () => ({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-.5)*.7,vy:(Math.random()-.5)*.7,r:Math.random()*1.4+1}));
  paintBackground(false);
}
function paintBackground(move) {
  context.clearRect(0,0,width,height);
  const dark = document.documentElement.dataset.theme === 'dark';
  const rgb = dark ? '130,155,245' : '74,95,190';
  for (let i=0;i<points.length;i++) {
    const p=points[i];
    if(move){p.x=(p.x+p.vx+width)%width;p.y=(p.y+p.vy+height)%height;}
    context.fillStyle=`rgba(${rgb},${dark?.35:.23})`;
    context.beginPath();context.arc(p.x,p.y,p.r,0,Math.PI*2);context.fill();
    for(let j=i+1;j<points.length;j++){
      const q=points[j], distance=Math.hypot(p.x-q.x,p.y-q.y);
      if(distance<155){context.strokeStyle=`rgba(${rgb},${(1-distance/155)*(dark?.16:.12)})`;context.lineWidth=.8;context.beginPath();context.moveTo(p.x,p.y);context.lineTo(q.x,q.y);context.stroke();}
    }
  }
}
function animateBackground(time){
  if(time-lastFrame>40){paintBackground(true);lastFrame=time;}
  animationFrame=requestAnimationFrame(animateBackground);
}
function syncMotion(){
  cancelAnimationFrame(animationFrame);
  updateMotionControl();
  paintBackground(false);
  if(motionEnabled() && !document.hidden) animationFrame=requestAnimationFrame(animateBackground);
}
addEventListener('resize',resizeBackground);
document.addEventListener('visibilitychange',syncMotion);
motionPreference.addEventListener('change',syncMotion);
new MutationObserver(()=>paintBackground(false)).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
resizeBackground();syncMotion();
