import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormPersonComponent} from './form-person/form-person.component';
import {PersonListComponent} from './person-list/person-list.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import { PersonDetailComponent } from './person-detail/person-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FormPersonComponent,
    PersonListComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
