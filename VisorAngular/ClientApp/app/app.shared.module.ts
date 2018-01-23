import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

/* Account Imports */
import { RegistrationFormComponent } from './components/account/registration-form/registration-form.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { AuthGuard } from './auth.guard';

/* User Components */
import { UserListComponent } from './components/account/users/user-list/user-list.component';



@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        LoginFormComponent,
        RegistrationFormComponent,
        UserListComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'users', component: UserListComponent },
            { path: 'login', component: LoginFormComponent },
            { path: 'register', component: RegistrationFormComponent, canActivate: [AuthGuard] },
            { path: '**', redirectTo: 'home' }
            
        ])
    ]
})
export class AppModuleShared {
}
