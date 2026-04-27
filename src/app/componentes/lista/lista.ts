import { Component } from '@angular/core';
import { Factura, TipoFactura } from '../../clases/factura';

@Component({
  selector: 'app-lista',
  imports: [],
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

}

  