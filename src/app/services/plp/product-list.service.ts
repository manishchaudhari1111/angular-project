import { Observable, of} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductListService {

    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        return this.http.get('../../../../assets/json/data.json').pipe(
            map(data => data),
            catchError(val => of(`I caught: ${val}`))
        );
    }

}
