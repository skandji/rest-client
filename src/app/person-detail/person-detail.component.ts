import { Component, OnInit } from '@angular/core';
import {Personne} from '../models/personne';
import {ActivatedRoute} from '@angular/router';
import {PERSONS} from '../services/data.service';
import {PersonneService} from '../services/personne.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  personne: Personne;
  id: string;
  constructor(private route: ActivatedRoute,
              private personneService: PersonneService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPerson(this.id);
  }

  getPerson(id: string): void {
    this.personneService.getPersonById(id).subscribe(
      p => {
        this.personne = p;
        console.log(this.personne);
      },
      error => {
        console.log(error);
      }
    );
  }
}
