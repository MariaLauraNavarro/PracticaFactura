export class Factura {
   public fecha: Date;
   public tipo: TipoFactura;
   public numero: number=0;
   public iva: number=0;
   public total: number=0;
   public neto: number=0;
   public receptor: string;

      constructor(fecha: Date,numero: number, tipo: TipoFactura,  receptor: string) {
        this.fecha = fecha;
        this.tipo = tipo;
        this.numero = numero;
        this.receptor = receptor;   

      }
}


export enum TipoFactura {
    A,
    B,
    C
}