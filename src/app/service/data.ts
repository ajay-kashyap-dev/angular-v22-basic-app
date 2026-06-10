import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class Data {

    private http = inject(HttpClient);
    constructor(){
        console.log("Data service Connected...");
    }

    getPosts(){
        return this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts");
    }
}
