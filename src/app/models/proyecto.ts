export class Proyecto {
    public nombre: string
    public descripcion: string
    public web: string
    public repositorio: string
    public imagen: string
    constructor(nombre: string, descripcion: string, web: string, repositorio: string, imagen: string) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.web = web
        this.repositorio = repositorio
        this.imagen = imagen
    }
}
