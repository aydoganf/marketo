import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasketListComponent } from './basket-list/basket-list.component';
import { BasketDetailComponent } from './basket-detail/basket-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'baskets', pathMatch: 'full' },
  { path: 'baskets', component: BasketListComponent},
  { path: 'basket/:id', component: BasketDetailComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
