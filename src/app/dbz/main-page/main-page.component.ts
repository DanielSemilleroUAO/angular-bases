import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private service: DbzService) {
   }

  ngOnInit(): void {
  }

  // get personajes():Personaje[]{
  //   return this.service.personajes;
  // }







}
