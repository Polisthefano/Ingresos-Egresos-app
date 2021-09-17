export class IngresoEgreso{
  descripcion:string
  monto:number
  tipo:TipoIngreso

  constructor(
    descripcion: string,
    monto: number,
    tipo: TipoIngreso,
    // uid?: string|null
) {
    this.descripcion = descripcion
    this.monto = monto
    this.tipo = tipo
    // this.uid = uid
  }
  // uid?:string|null
}
export type TipoIngreso='ingreso'|'egreso'
