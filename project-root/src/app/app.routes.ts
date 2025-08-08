import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    // Rota padrão (página inicial)
    { path: '', component: HomeComponent },
    
    // Rota para a página "Sobre"
    { path: 'sobre', component: AboutComponent },

    // (Opcional) Redirecionamento para a rota 'inicio' funcionar também
    { path: 'inicio', redirectTo: '', pathMatch: 'full' } 
];