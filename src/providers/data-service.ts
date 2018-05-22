import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class DataSevice{

    private serviceUrl: string = 'http://5b01ee8c055d150014dba07f.mockapi.io/mws/'

    constructor(public http: Http) {}

    authenticate(data: any){
        return this.http
        .get(this.serviceUrl + 'users', data)
        .pipe(map((res: Response) => res.json()));
    }
}