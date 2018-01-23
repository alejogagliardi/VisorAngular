import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.interface';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
/** user-list component*/
export class UserListComponent implements OnInit
{
    userList: User[];

    /** user-list ctor */
    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe(
            users => {
                this.userList = users as User[];
                console.log(this.userList);
            });
    }

}