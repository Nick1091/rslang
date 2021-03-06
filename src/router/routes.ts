import { HomeComponent } from 'pages/Home';
import { LoginComponent } from 'pages/LoginAndRegistration/login';
import { RegistrationComponent } from 'pages/LoginAndRegistration/registration';
import { BookComponent } from 'pages/Book';
import { DictionaryComponent } from 'pages/Dictionary';
import { GamesComponent } from 'pages/Games';
import { PreAudiocallComponent } from 'pages/GameRules/pre-audiocall';
import { PreSprintComponent } from 'pages/GameRules/pre-sprint';
import { AudiocallComponent } from 'pages/Games/Audiocall';
import { SprintComponent } from 'pages/Games/Sprint';
import { ResultAudiocallComponent } from 'pages/Result/Audiocall';
import { ResultSprintComponent } from 'pages/Result/Sprint';
import { StatsComponent } from 'pages/Stats';
import { AboutUsComponent } from 'pages/AboutUs';

export const routes = [
  { path: '/', component: HomeComponent },
  { path: '/login', component: LoginComponent },
  { path: '/registration', component: RegistrationComponent },
  { path: '/book', component: BookComponent },
  { path: '/dictionary', component: DictionaryComponent },
  { path: '/games', component: GamesComponent },
  { path: '/pre-audiocall', component: PreAudiocallComponent },
  { path: '/pre-sprint', component: PreSprintComponent },
  { path: '/audiocall', component: AudiocallComponent },
  { path: '/sprint', component: SprintComponent },
  { path: '/audiocall-result', component: ResultAudiocallComponent },
  { path: '/sprint-result', component: ResultSprintComponent },
  { path: '/stats', component: StatsComponent },
  { path: '/about-team', component: AboutUsComponent },
];
