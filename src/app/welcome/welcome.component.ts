import {Component, Input} from '@angular/core';
import {Personne} from '../models/personne';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private router: Router){
  }

  onClick(): void {
    this.router.navigate(['persons']);
  }
}
