import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos: Proyecto[]


  constructor() {
    this.proyectos = [new Proyecto("AutoMate", "App para la gestión de mantenimientos del coche",
      "https://auto-mate.netlify.app/", "https://github.com/FcoJaviGomez/autoMate",
      "../../../assets/automateproyecto.PNG"),
    new Proyecto("Api Pokemon", "Pagina web, llamando a una api pública",
      "https://pokemon2d.netlify.app/", "https://github.com/FcoJaviGomez/Pokemon",
      "../../../assets/lugia.jpg"),
    new Proyecto("House Book", "Control y gestión de libros en propiedad",
      "https://house-book.herokuapp.com/", "https://github.com/FcoJaviGomez/MyBooks",
      "../../../assets/books.png")]
  }

  ngOnInit(): void {
  }

}
