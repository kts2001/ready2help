import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { Tickets} from './tickets.model';
import { User } from "./user.model";
import { catchError, map } from "rxjs/operators";
import { ResponseModel } from "./response.model";
import { environment } from "src/environments/environment";


const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getTicketList(): Observable<Tickets[]> {
        return this.http.get<Tickets[]>(this.baseUrl + "ticketlist/list");
    }

    insertTickets(item: Tickets): Observable<Tickets> {
        return this.http.post<Tickets>(
                this.baseUrl + "ticketlist/add",
                item, 
                this.getOptions()
            ).pipe(map(response => {
                return response;
            }),
            catchError(error => {
                console.log(error.error);
                return (error.error);
            }));
    }

    updateTickets(item: Tickets): Observable<Tickets> {
        return this.http.put<Tickets>(`${this.baseUrl} ticketlist/edit/${item._id})`,
        item,        
        this.getOptions());
    }

    // updateTicketStatus(item: Tickets): Observable<Tickets> {
    //     return this.http.put<Tickets>(`${this.baseUrl} ticketlist/delete/${item._id})`,
    //     item,        
    //     this.getOptions());
    // }

    deleteTickets(id: string): Observable<ResponseModel> {
        return this.http.put<any>(`${this.baseUrl}ticketlist/delete/${id}`, 
        //changed this to a put because we need to just update the one field instead of deleting
        //this is where the root of the issue it I believe
        //think that this linked with the tickets.repository.ts method of deleteTickets
        //are the ones that are causing issues
        //our delete isnt a true delete, its just updating the one field so technically its a put method
        //but all of the stuff we had that the teacher gave us deals with actual deletion, so we need to figure out how to modify 
        //the code so that we can put instead of delete
        //check the routes in the backend too -- I changed it to a put in there because like I said its not truly a delete
        this.getOptions()).pipe(map(response => {
            return response;
        }));
    }

    authenticate(user: string, pass: string): Observable<ResponseModel> {
        return this.http.post<any>(this.baseUrl + "users/signin",
         {
            username: user,
            password: pass

        }).pipe
        (map(response => {
            this.auth_token = response.sucess ? response.token : null;
            return response;
        }),
         catchError(error => {return (error.error)}));
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