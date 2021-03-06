import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { RoutedComponent } from './examples/07-routed-component/routed.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',      redirectTo: '/items', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'items', component: ItemsComponent},
  {path: '07-routed-component/:subject', component: RoutedComponent},
  {path: 'widgets', component: WidgetsComponent},
  {path: '**',     redirectTo: '/items', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
