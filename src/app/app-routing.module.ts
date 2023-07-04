import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import {contactResolver} from './resolvers/contact-resolver'
import { authGuard } from './guards/auth-guards';

const routes: Routes = [
  { path: 'contact', component: ContactPageComponent },
  {
    path: 'contact/:id',
    component: ContactDetailsPageComponent,
    canActivate: [authGuard],
    resolve: { contact: contactResolver }
  },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
