import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {SignoutGuard} from './guards/signout.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate:[SignoutGuard]},
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule', canActivate:[SignoutGuard]},
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule', canActivate:[AuthGuard], },
  { path: 'crearchat', loadChildren: './pages/crearchat/crearchat.module#CrearchatPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
