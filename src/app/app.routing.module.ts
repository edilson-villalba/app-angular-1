import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { ComprasComponent } from './compras/compras.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: '', component: GeneralComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'ventas', component: GeneralComponent },
  { path: 'stock', component: StockComponent },
  { path: 'contabilidad', component: GeneralComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
