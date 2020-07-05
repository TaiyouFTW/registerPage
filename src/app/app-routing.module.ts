import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    redirectTo: 'hero'
  },
  {
    path: 'hero',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: '404',
    loadChildren: () => import('./status-code/status-code.module').then(m => m.StatusCodeModule)
  },
  { path: '**',
    redirectTo: '404' // home or 404
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
