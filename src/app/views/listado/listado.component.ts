import { Entrada } from './../../shared/interfaces/entrada';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  public listadoEntradas: Entrada[];


  constructor() {
    this.listadoEntradas = [
      {
        titulo: 'Hola soy una entrada de prueba 1',
        resumen: 'Este es el resumen de la entrada de prueba número 1'
      },
      {
        titulo: 'Hola soy una entrada de prueba 2',
        resumen: 'Este es el resumen de la entrada de prueba número 2'
      },
      {
        titulo: 'Hola soy una entrada de prueba 3',
        resumen: 'Este es el resumen de la entrada de prueba número 3'
      }
    ];


   }

  ngOnInit(): void {
  }


  public mostrarTitulo(titulo:String):void{
    alert("Entrada seleccionada: "+ titulo)

  }

}
