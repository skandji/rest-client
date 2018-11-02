import {Component, OnInit} from '@angular/core';
import {Classe} from '../models/classe';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-classe',
  templateUrl: './form-classe.component.html'
})
export class FormClasseComponent implements OnInit {
  classe: Classe;
  formClasse: FormGroup;

  constructor(private fB: FormBuilder){}

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
