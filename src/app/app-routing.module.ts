import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShuffleComponent } from './comp/shuffle/shuffle.component';
import { ListComponent } from './comp/list/list.component';
import { ParamsComponent } from './comp/params/params.component';

const routes: Routes = [
  {path: '', redirectTo: '/shuffle', pathMatch: 'full'},
  {path: 'shuffle', component: ShuffleComponent},
  {path: 'list', component: ListComponent},
  {path: 'params', component: ParamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
