import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegisterPageComponent} from './register-page/register-page.component'

export const routes: Routes = [
   {
    path:'', component: AuthLayoutComponent, children: [
        { path: 'login', component : LoginPageComponent},
        { path: 'register', component: RegisterPageComponent}
    ]
   },
   {
    path:'site', component: SiteLayoutComponent, children: [
        
    ]
   }
];
