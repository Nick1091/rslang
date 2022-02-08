import { checkNavHeight, removeActiveNavLink, setActiveNavLink } from 'utils/navbar';
import { ErrorComponent } from 'pages/Error';
import { ButtonLoginComponent } from 'components/HeaderButtons/button-login';
import { ButtonLogoutComponent } from 'components/HeaderButtons/button-logout';
import { FooterComponent } from 'components/Footer';
import { routes } from './routes';

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (
  path: string,
  waybill: {
    path: string;
    component: {
      listen: () => void;
      render: () => string;
    };
  }[]
) => waybill.find((r: { path: string }) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const changeNavBar = (path: string) => {
  removeActiveNavLink();
  setActiveNavLink(path);
  checkNavHeight();
};

export const router = () => {
  const path = parseLocation();
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};

  const mainContainer = document.querySelector('.main');
  const authContainer = document.querySelector('.auth-btns');
  const pageContainer = document.querySelector('.page-content');
  const footerContainer = document.querySelector('.footer');

  if (authContainer)
    authContainer.innerHTML =
      localStorage.getItem('authorizedUser') !== null ? ButtonLogoutComponent.render() : ButtonLoginComponent.render();

  if (mainContainer) mainContainer.innerHTML = component.render();
  component.listen();
  changeNavBar(path);

  if (path === '/') {
    pageContainer?.classList.add('main-bg');
  } else {
    pageContainer?.classList.remove('main-bg');
  }

  if (
    path !== '/games' &&
    path !== '/pre-audio' &&
    path !== '/pre-sprint' &&
    path !== '/audiocall' &&
    path !== '/sprint' &&
    path !== '/result-audiocall' &&
    path !== '/result-sprint' &&
    pageContainer !== null
  ) {
    if (footerContainer) footerContainer.remove();
    pageContainer.insertAdjacentHTML('beforeend', FooterComponent.render());
  } else {
    if (footerContainer) footerContainer.remove();
  }
};