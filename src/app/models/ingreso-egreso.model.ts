export class IngresoEgreso{
  descripcion:string
  monto:number
  tipo:TipoIngreso
id?:string|null
  constructor(
    descripcion: string,
    monto: number,
    tipo: TipoIngreso,
    id?:string|null
) {
    this.descripcion = descripcion
    this.monto = monto
    this.tipo = tipo

  }
}
export type TipoIngreso='ingreso'|'egreso'
