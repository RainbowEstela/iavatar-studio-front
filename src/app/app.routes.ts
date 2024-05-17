import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditorComponent } from './pages/editor/editor.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { LikeComponent } from './pages/like/like.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: 'home', title: "IAvatar Studio - Home", component: HomeComponent},
    {path: 'editor', title: "IAvatar Studio - Editor",component: EditorComponent},
    {path: 'historico', title: "IAvatar Studio - Historico",component: HistoricoComponent},
    {path: 'like', title: "IAvatar Studio - Favoritos",component: LikeComponent},
    {path: 'login', title: "IAvatar Studio - Login",component: LoginComponent},
    {path: 'register', title: "IAvatar Studio - Registro",component: RegisterComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
