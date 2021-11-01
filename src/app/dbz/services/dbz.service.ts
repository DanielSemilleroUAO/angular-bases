import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {nombre:'Goku', poder: 150000},
    {nombre:'Vegeta', poder: 150000},
  ];

  constructor(){
    console.log('Inicializado');
  }

  get personajes() {
    return [...this._personajes];
  }

  agregarPersonajes(personaje: Personaje){
    this._personajes.push(personaje);
  }

}
