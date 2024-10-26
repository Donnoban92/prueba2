import { Component, OnInit } from '@angular/core';
import { PeliculasServiceService } from '../servicios/peliculas-service.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  objetoPeliculas: any = []

  constructor(private readonly servicioPeliculas: PeliculasServiceService) { }

  ngOnInit() {
    this.servicioPeliculas.obtenerPeliculas().subscribe(
      {
        next: (response) => {
          console.log(response)
          this.objetoPeliculas = response
        },
        error(err) {
          console.error(err)
        },
      }
    )
  }

}
