import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'pagina-uno',
    pathMatch: 'full'
  },
  {
    path: 'pagina-uno',
    loadChildren: () => import('./pages/pagina-uno/pagina-uno.module').then( m => m.PaginaUnoPageModule)
  }, 
  {
    path: 'pagina-dos',
    loadChildren: () => import('./pages/pagina-dos/pagina-dos.module').then( m => m.PaginaDosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
