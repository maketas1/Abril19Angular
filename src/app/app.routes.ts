import { Routes } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {path:'inicio', component:InicioComponent},
    {path:'quienes-somos', component:QuienesSomosComponent},
    {path:'donde-estamos', component:DondeEstamosComponent},
    {path:'comentarios', component:ComentariosComponent}
];
