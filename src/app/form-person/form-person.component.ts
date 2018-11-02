import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Personne} from '../models/personne';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PersonneService} from '../services/personne.service';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
})
export class FormPersonComponent {
  formPerson: FormGroup;
  @Output()back: EventEmitter<Personne> = new EventEmitter();
  @Input()p: Personne;
  message: string;

  constructor(private fB: FormBuilder,
              private personneService: PersonneService){
    this.formPerson = this.fB.group({
      'nom': ['', Validators.required],
      'prenom': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  onSubmit(){
    if (this.p.id === undefined){
      this.personneService.createPerson(this.p).subscribe(
        person => {
          this.back.emit(person);
          this.message = 'Successfully created!';
          setTimeout(
            () => this.message = undefined,
            2000
          );
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.personneService.editPerson(this.p).subscribe(
        person => {
          this.back.emit(person);
          this.message = 'Successfully updated!';
          setTimeout(
            () => this.message = undefined,
            2000
          );
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
