import { Component } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    status: boolean;
    subscription: Subscription;

    constructor(private loginService: LoginService, private router: Router) {
    }

    logout() {
        this.loginService.logout();
        //TODO: verificar si se deslogueo correctamente
        this.router.navigate(['/home']);
    }

    ngOnInit() {
        this.subscription = this.loginService.authNavStatus$.subscribe(status => this.status = status);
    }

    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    }
}
