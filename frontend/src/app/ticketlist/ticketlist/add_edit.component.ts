import { Component, Sanitizer } from "@angular/core";
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import { Tickets } from "src/app/model/tickets.model";
import { TicketsRepository } from "src/app/model/tickets.repository";

@Component ({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class AddEditComponent {

    editing: boolean = false;
    item: Tickets = new Tickets();
    // Ticket: 
    

    constructor(private repository: TicketsRepository,
                    private router: Router,
                    activeRoute: ActivatedRoute)
     {
        // if (ActivatedRoute.snapshot.params["mode"] == "delete"){
        //     this.deleteItem(ActivatedRoute.snapshot.params["id"]);
        // }
    
        // this.editing = ActivatedRoute.snapshot.params["mode"]== "edit";
    
        // if(this.editing){
        //     this.item = repository.getItem(ActivatedRoute.snapshot.params["id"]);
        // }
        // else{
        //     this.item.size = new Size();
        // }
    }
}

// save(form: NgForm){
//     this.repository.saveTickets(this.item);
//     this.router.navigateByUrl("ticketlist/list");
// }

// private deleteItem(id: string){
//     this.repository.deleteInventory(id);
//     this.router.navigateByUrl("ticketlist/list");
// }
    
 