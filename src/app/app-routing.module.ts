import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeTicketComponent } from './see-ticket/see-ticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Přesměrování na dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'see-ticket', component: SeeTicketComponent },
  { path: '**', redirectTo: '/dashboard' } // Chyba 404 -> přesměrování na dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
