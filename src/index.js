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
    refs.themeSwitch.setAttribute('checked', 'checked');
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  }

  if (storageTheme === Theme.LIGHT || !storageTheme) {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }
}

const template = data.map(el => templateFunction(el)).join('');
refs.menu.innerHTML = template;
