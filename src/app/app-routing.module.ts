import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBarcosComponent } from './lista-barcos/lista-barcos.component';

const routes: Routes = [
  { path: 'lista-barcos', component: ListaBarcosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
