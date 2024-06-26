import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/realizar-testv2/test/test.component';
import { RegistrarEstudianteComponent } from './components/registrar-estudiante/registrar-estudiante.component';
import { PaginaInicioLoginComponent } from './components/pagina-inicio-login/pagina-inicio-login.component';
import { ResultadosComponent } from './components/pagina-inicio-login/pagina-inicio-login/resultados/resultados.component';

export const routes: Routes = [
    { path: '', redirectTo: '/principal', pathMatch: 'full' }, //Indicamos que ni bien se ejecuta,se tenga la pagina1 de entrada
    { path: 'principal', component: PrincipalComponent },
    { path: 'login', component: LoginComponent },
    { path: 'test', component: TestComponent},
    { path: 'registrar', component: RegistrarEstudianteComponent },
    { path: 'vercontenido', component: PaginaInicioLoginComponent},
    { path: 'resultado', component: ResultadosComponent}
];
