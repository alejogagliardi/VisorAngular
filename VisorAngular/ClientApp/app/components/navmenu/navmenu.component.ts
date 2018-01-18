import { Component } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    status: boolean;
    subscription: Subscription;

    constructor(private userService: UserService, private router: Router) {
    }

    logout() {
        this.userService.logout();
        //TODO: verificar si se deslogueo correctamente
        this.router.navigate(['/home']);
    }

    ngOnInit() {
        this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
    }

    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    }
}
