import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { PagesRoutingModule } from './pages.routing.module';

const component = [
  PagesComponent,
  HomeComponent,
  AboutComponent,
  ArticleComponent
]


@NgModule({
  declarations: [
    component,

  ],
  imports: [
    CommonModule,HomeModule,PagesRoutingModule
  ],
  exports: [
    component
  ]
})
export class PagesModule { }
