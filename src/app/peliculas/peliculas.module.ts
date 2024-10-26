import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculasPageRoutingModule } from './peliculas-routing.module';

import { PeliculasPage } from './peliculas.page';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasServiceService } from '../servicios/peliculas-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasPageRoutingModule,
    HttpClientModule
  ],
  providers: [PeliculasServiceService],
  declarations: [PeliculasPage]
})
export class PeliculasPageModule {}
