import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from './phone/phone.component';
import { HomeRoutingModule } from './home.routing.module';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    PhoneComponent,HeroComponent
  ],
  imports: [
    CommonModule,HomeRoutingModule
  ],
  exports: [
    PhoneComponent,HeroComponent
  ]
})
export class HomeModule { }
