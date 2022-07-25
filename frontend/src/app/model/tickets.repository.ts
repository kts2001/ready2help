import { Injectable } from "@angular/core";
import { Tickets } from "./tickets.model";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class TicketsRepository {
    private Tickets : Tickets[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getInventoryList().subscribe(data => {
            this.Tickets =data;
        });
    }

    getInventory(): Tickets[] {
        return this.Tickets;
    }

    getItem(id: string): Tickets {
        return (this.Tickets.find(item => item._id ===id)!);
    }

    saveInventory(item: Tickets) {
        if (item._id ==null || item._id == "") {
            this.dataSource.insertInventory(item).subscribe(p => this.Tickets.push(p));
        }else {
            this.dataSource.updateInventory(item).subscribe(p => {
                this.Tickets.splice(this.Tickets.findIndex(i => i._id == item._id), 1, item);
            });
        }
    }

    deleteInventory(id: string) {
        this.dataSource.deleteInventory(id).subscribe(response => {
            if (response.success) {
                this.Tickets.splice(this.Tickets.findIndex(item => item._id == id),1);
            }else {
                alert(response.message);
            }
        });
    }
}