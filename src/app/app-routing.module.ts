import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {
    path: 'item-details',
    component: ItemDetailsComponent,
  },
  {
    path: 'start-page',
    component: StartPageComponent,
  },
  {
    path: '',
    redirectTo: 'start-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
