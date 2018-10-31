import { Component, OnInit } from '@angular/core';
import {Personne} from '../models/personne';
import {ActivatedRoute} from '@angular/router';
import {PERSONS} from '../services/data.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  personne: Personne;
  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPerson(this.id);
  }

  getPerson(id: string): void {
    for (let i = 0; i < PERSONS.length; i++){
      if (PERSONS[i].id.toString() === id){
        this.personne = PERSONS[i];
        break;
      }
    }
  }
}
