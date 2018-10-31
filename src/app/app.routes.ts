import {WelcomeComponent} from './welcome/welcome.component';
import {PersonListComponent} from './person-list/person-list.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';

export const APP_ROUTES = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'persons', component: PersonListComponent},
  {path: 'persons/:id', component: PersonDetailComponent}
];
