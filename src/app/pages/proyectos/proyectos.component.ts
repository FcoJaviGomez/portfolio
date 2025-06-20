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
    this.proyectos = [new Proyecto("CineClub", "Aplicación web, fanáticos del cine",
      "https://cineclubb.netlify.app/login", "https://github.com/FcoJaviGomez/CineClub1",
      "../../../assets/cineclub.png"),
    new Proyecto("Api Pokemon", "Página web, llamando a una api pública",
      "https://pokemon2d.netlify.app/", "https://github.com/FcoJaviGomez/Pokemon",
      "../../../assets/lugia.jpg")]
  }

  ngOnInit(): void {
  }

}
