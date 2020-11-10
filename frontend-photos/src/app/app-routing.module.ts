import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path: 'photos', component: PhotosComponent},
  {path: '', pathMatch: 'full', redirectTo: 'photos'},
  {path: '**', pathMatch: 'full', redirectTo: 'photos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
