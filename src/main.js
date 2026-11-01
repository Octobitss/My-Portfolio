import './style.scss';

const siteHeader = document.querySelector('.site-header');
const year = document.querySelector('#current-year');
const projectImages = document.querySelectorAll('.project-card__image');
const heroLetters = document.querySelectorAll('.hero__letter');
const heroServicesTrack = document.querySelector('.hero__services-track');
const heroServicesList = document.querySelector('.hero__services-list');

let progressFrame = 0;

function updateReadingProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 1;
  const percentage = Math.round(ratio * 100);

  siteHeader.style.setProperty('--reading-progress', `${percentage}%`);
  progressFrame = 0;
}

function scheduleProgressUpdate() {
  if (progressFrame === 0) {
    progressFrame = window.requestAnimationFrame(updateReadingProgress);
  }
}

window.addEventListener('scroll', scheduleProgressUpdate, { passive: true });
window.addEventListener('resize', scheduleProgressUpdate);
window.addEventListener('load', scheduleProgressUpdate, { once: true });
projectImages.forEach((image) => {
  const showFallback = () => {
    image.closest('.project-card__visual').classList.add('project-card__visual--fallback');
  };

  image.addEventListener('error', () => {
    showFallback();
  }, { once: true });

  if (image.complete && image.naturalWidth === 0) {
    showFallback();
  }
});
heroLetters.forEach((letter) => {
  letter.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'touch') {
      letter.classList.add('hero__letter--spinning');
    }
  });

  letter.addEventListener('animationend', (event) => {
    if (event.animationName === 'hero-letter-spin') {
      letter.classList.remove('hero__letter--spinning');
    }
  });
});
if (heroServicesTrack && heroServicesList) {
  const duplicatedServices = heroServicesList.cloneNode(true);
  duplicatedServices.classList.add('hero__services-list--duplicate');
  duplicatedServices.setAttribute('aria-hidden', 'true');
  heroServicesTrack.append(duplicatedServices);
}
year.textContent = String(new Date().getFullYear());
updateReadingProgress();
