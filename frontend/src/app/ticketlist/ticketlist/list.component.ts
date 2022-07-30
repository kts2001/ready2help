import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Tickets } from "../../model/tickets.model";
import { TicketsRepository } from "../../model/tickets.repository";



@Component({
    selector: "ticketlist-ticket",
    templateUrl: "list.component.html"
})


export class ListComponent {

    title = 'Tickets DashBoard';

    constructor(private repository: TicketsRepository,
        private router: Router)
        { }

        get ticket():Tickets[] {
            return this.repository.getTickets();
        }

        deleteMethod(id: string) {
            if(confirm('Do you want to delete this ticket?')) {         
                //when admin functionality is added we need to put in another if to check, if they are admin
                //it will actually delete the record, not just change it to cancelled
                //I just referenced the professors code for this -- not sure if it's right please check       
                this.router.navigateByUrl("ticketlist/delete/" + id);
            }
        }
}