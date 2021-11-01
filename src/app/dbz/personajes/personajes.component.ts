import { DbzService } from './../services/dbz.service';
import { Personaje } from './../interfaces/dbz.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  // @Input() personajes: Personaje[] = [];

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

}
