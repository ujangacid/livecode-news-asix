import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes:Routes = [
  {
    path:'**',
    component:NotfoundComponent
  },
  {
    path:'',
    loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
