import { Routes } from '@angular/router';
import { Lista } from './componentes/lista/lista';
import { Error } from './componentes/error/error';
import { Principal } from './componentes/principal/principal';
import { NotFound } from './componentes/not-found/not-found';


export const routes: Routes = [
 { path: 'lista', component: Lista },
 { path: 'error', component: Error },
 { path: '', component:Principal }, 
 { path: '**', component:NotFound },
 

];
