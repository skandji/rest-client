import {Personne} from '../models/personne';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PersonneService} from '../services/personne.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './person-list.component.html',
  providers: [PersonneService]
})
export class PersonListComponent implements OnInit {
  persons: Personne[];
  personne: Personne;

  constructor(private router: Router,
              private personneService: PersonneService){
  }
  feedBack(p: Personne): void {
    this.persons.push(p);
  }
  ngOnInit(): void {
    this.personne = new Personne();
    this.persons = this.personneService.persons;
    this.getPersons();
    console.log('After getPersons()');
  }

  onDetail(id: number): void {
   this.router.navigate(['/persons', id]);
  }

  getPersons(): void {
    this.personneService.getPersons().subscribe(
      persons => {
        this.persons = persons;
        console.log(this.persons);
      },
      error => {
        console.log(error);
      }
    );
  }

  onDeletePerson(person: Personne): void {
    this.personneService.deletePerson(person).subscribe(
      () => {
        for (let i = 0; i < this.persons.length; i++){
          if (this.persons[i].id === person.id){
            this.persons.splice(i, 1);
            break;
          }
        }
      }
    );
  }
}
