import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { IndexModule } from './ticketlist/index.module';
import { IndexComponent } from './ticketlistindex.component';
import { PartialsModule } from './ticketlist/partials/partials.module';
import {ListComponent} from "./ticketlist/ticketlist/list.component";
import {ListModule} from "./ticketlist/ticketlist/list.module";





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    PartialsModule,
   ListModule,
    RouterModule.forRoot([
         {path:"", component: IndexComponent},
      {path: "ticketlist/list", component: ListComponent},
  //    // { path: "inventory/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
  //    // { path: "inventory/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
  //     { path: "users/signin", component: SignInComponent },
  //    { path: "users/signup", component: SignUpComponent },
     { path: "**", redirectTo: "" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
