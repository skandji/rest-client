import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Personne} from '../models/personne';
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html'
})
export class FormPersonComponent {
  formPerson: FormGroup;
  @Output()back: EventEmitter<Personne> = new EventEmitter();
  p: Personne;

  constructor(private fB: FormBuilder){
    this.formPerson = this.fB.group({
      'nom': ['', Validators.required],
      'prenom': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])]
    });

    this.p = new Personne();
  }

  onSubmit(){
    console.log(this.p);
    this.back.emit(this.p);
  }
}
