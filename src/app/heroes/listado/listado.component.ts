import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = [
    'Spiderman',
    'Iroman',
    'Thor',
    'Capitan America'
  ];

  heroeBorrado: string = '';

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    //Llamar servicios
    console.log('ngOnIniti');
  }

  borrarHeroe():void{
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
