import { Component } from '@angular/core';
import { Factura, TipoFactura } from '../../clases/factura';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  imports: [CommonModule,FormsModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  public miFactura:Factura;
  
  constructor() {
    this.miFactura = new Factura(new Date(), 1,TipoFactura.C, 'consumidor final');
  }
  mostrarLetra(valor:TipoFactura):string{

    return valor==TipoFactura.A ? 'A' :valor==TipoFactura.B ? 'B': 'C' ;
  }
  agregarDetalle(){
    this.miFactura.neto+=3500;
   alert(this.miFactura.fecha);

  }

}  