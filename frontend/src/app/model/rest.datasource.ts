import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { Tickets} from './tickets.model';
import { User } from "./user.model";
import { map } from "rxjs/operators";
import { ResponseModel } from "./response.model";


const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getInventoryList(): Observable<Tickets[]> {
        return this.http.get<Tickets[]>(this.baseUrl + "Tickets/list");
    }

    insertInventory(item: Tickets): Observable<Tickets> {
        return this.http.post<Tickets>(this.baseUrl + "Tickets/add",
        item, this.getOptions());
    }

    updateInventory(item: Tickets): Observable<Tickets> {
        return this.http.put<Tickets>(`${this.baseUrl} Tickets/edit/${item._id})`,
        item, this.getOptions());
    }

    deleteInventory(id: string): Observable<ResponseModel> {
        return this.http.delete<any>(`${this.baseUrl}Tickets/delete/${id}`,
        this.getOptions()).pipe(map(response => {
            return response;
        }));
    }

    authenticate(username: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "users/sigin", {
        }).pipe(map(response => {
            this.auth_token = response.sucess ? response.token : null;
            return response.sucess;
        }))
    }

    signupUser(user: User): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.baseUrl + "users/signup", user).pipe(map(response => {
            return response;
        }))
    }




    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer ${this.auth_token}`
            })
        }
    }
}