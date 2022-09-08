import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [{ path: 'sidenav', component: SidenavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SharedRoutingModule {}
