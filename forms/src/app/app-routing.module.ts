import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'template-driven',
    loadChildren: () =>
      import('./template-driven/template-driven.module').then(
        (m) => m.TemplateDrivenModule
      ),
  },
  {
    path: 'reactive',
    loadChildren: () =>
      import('./reactive/reactive.module').then((m) => m.ReactiveModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
