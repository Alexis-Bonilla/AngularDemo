import { EntradaService } from './../../shared/entrada.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  public listadoEntradas: any;


  constructor(private entradaService: EntradaService) {


   }

  ngOnInit(): void {

    this.recuperarEntradas();
  }

  private recuperarEntradas():void{

    this.entradaService.recuperarEntradas().
    //Cuando la petición es correcta y devuelve la data
    subscribe((data)=> {
      this.listadoEntradas= data;
    //Cuando retorna un error al obtener la data
    },(error)=>{

    //Cuando nuestra petición no devuelve nada
    },()=>{


    }

    )


  }

  public mostrarTitulo(titulo:String):void{
    alert("Entrada seleccionada: "+ titulo)

  }

}
