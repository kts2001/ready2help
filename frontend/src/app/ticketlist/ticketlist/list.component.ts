import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Tickets } from "../../model/tickets.model";
import { TicketsRepository } from "../../model/tickets.repository";



@Component({
    selector: "ticketlist-Tickets",
    templateUrl: "list.component.html"
})


export class ListComponent {

    title = 'Tickets DashBoard';

    constructor(private repository: TicketsRepository,
        private router: Router)
        { }

        get ticketlist():Tickets[] {
            return this.repository.getInventory();
        }

        deleteMethod(id: string) {
            if(confirm('Do you want to delete this ticket?')) {
                this.router.navigateByUrl("contactlist/delete/"+id);
            }
        }

}