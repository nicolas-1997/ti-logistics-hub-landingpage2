import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpModule } from './sing-up/sing-up.module';
import { HomeComponent } from './home/home.component';
import { SingUpComponent } from './sing-up/sing-up.component';



@NgModule({
  declarations: [
    HomeComponent,
    SingUpComponent
  ],
  imports: [
    CommonModule,
    SingUpModule
  ]
})
export class PagesModule { }
