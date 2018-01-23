import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs/Observable';
import { BaseService } from "./base.service";
import { ConfigService } from './config.service';

@Injectable()
export class UserService extends BaseService {

    baseUrl: string = '';

    constructor(private http: Http, private configService: ConfigService) {
        super();
        this.baseUrl = configService.getApiURI();
    }

    getAllUsers(): Observable<User[]> {
        //let body = JSON.stringify({ email, password, firstName, lastName, location });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.baseUrl + "/accounts/listar",  options)
            .map(res => res.json())
            .catch(this.handleError);
    }

}