import {Personne} from '../models/personne';
import {Component} from '@angular/core';
import {PERSONS} from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-persons',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent {
  persons: Personne[] = PERSONS;

  constructor(private router: Router){}
  feedBack(p: Personne): void {
    this.persons.push(p);
  }
  onDetail(id: number): void {
   this.router.navigate(['/persons', id]);
  }
}
