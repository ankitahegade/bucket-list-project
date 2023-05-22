import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { StartPageComponent } from './start-page/start-page.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';

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
    path: 'bucket-list',
    component: BucketListComponent,
  },
  {
    path: 'header-component',
    component: HeaderComponentComponent,
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
