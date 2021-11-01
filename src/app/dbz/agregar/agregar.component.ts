import { DbzService } from './../services/dbz.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return
    }
    //this.personajes.push(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonajes(this.nuevo);
    console.log(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
