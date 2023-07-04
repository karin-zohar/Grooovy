import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path: 'contact', component: ContactPageComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
