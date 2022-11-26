import * as data from './menu.json';
import templateFunction from './template.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
  themeSwitch: document.querySelector('.theme-switch__toggle'),
};

const THEME_STORAGE_KEY = 'theme';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

render();

refs.themeSwitch.addEventListener('change', onThemeToggle);

function onThemeToggle() {
  const storageTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (storageTheme === Theme.LIGHT || !storageTheme) {
    localStorage.setItem(THEME_STORAGE_KEY, Theme.DARK);
  }
  if (storageTheme === Theme.DARK) {
    localStorage.setItem(THEME_STORAGE_KEY, Theme.LIGHT);
  }

  render();
}

function render() {
  const storageTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (storageTheme === Theme.DARK) {
    refs.themeSwitch.setAttribute('checked', true);
    addClassForBody('dark-theme', 'light-theme');
  }

  if (storageTheme === Theme.LIGHT || !storageTheme) {
    addClassForBody('light-theme', 'dark-theme');
  }
}

function addClassForBody(add, remove) {
  document.body.classList.add(add);
  document.body.classList.remove(remove);
}

const template = data.map(el => templateFunction(el)).join('');
refs.menu.innerHTML = template;
