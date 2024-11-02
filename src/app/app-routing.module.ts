import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BillComponent } from './bill/bill.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path : '' , component:HomeComponent},
  { path : 'home', component:HomeComponent},
  { path : 'bill' , component:BillComponent},
  { path : 'product', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
