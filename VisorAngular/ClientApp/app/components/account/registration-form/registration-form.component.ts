﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistration } from '../../../models/user.registration.interface';
import { LoginService } from '../../../services/login.service';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html'
 
})
export class RegistrationFormComponent implements OnInit {

    errors: string;
    isRequesting: boolean;
    submitted: boolean = false;

    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit() {
    }

    registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.loginService.register(value.email, value.password, value.firstName, value.lastName, value.location)
                .finally(() => this.isRequesting = false)
                .subscribe(
                result => {
                    if (result) {
                        this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                    }
                },
                errors => this.errors = errors);
        }
    }



}