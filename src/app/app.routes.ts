import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditorComponent } from './pages/editor/editor.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { LikeComponent } from './pages/like/like.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'editor', component: EditorComponent},
    {path: 'historico', component: HistoricoComponent},
    {path: 'like', component: LikeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
