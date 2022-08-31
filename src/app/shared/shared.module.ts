import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';

const component = [
  FooterComponent,
  HeaderComponent,
  NotfoundComponent
]

@NgModule({
  declarations: [
    component,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    component
  ]
})
export class SharedModule { }
