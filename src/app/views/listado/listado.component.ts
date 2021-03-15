import { EntradaService } from './../../shared/entrada.service';
import { Entrada } from './../../shared/interfaces/entrada';
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
    this.entradaService.recuperarEntradas().subscribe((data)=> {
      this.listadoEntradas= data;

    },(error)=>{

    },()=>{


    }

    )


  }

  public mostrarTitulo(titulo:String):void{
    alert("Entrada seleccionada: "+ titulo)

  }

}
