import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoPageRoutingModule } from './curso-routing.module';
import { SafePipe } from '../safe.pipe';
import { CursoPage } from './curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoPageRoutingModule
  ],
  declarations: [CursoPage, SafePipe]
})
export class CursoPageModule {}
