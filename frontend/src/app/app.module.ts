import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { IndexModule } from './ticketview/index.module';
import { IndexComponent } from './ticketview/index.component';
import { PartialsModule } from './ticketview/partials/partials.module';
import {ListComponent} from "./ticketview/ticketlist/list.component";
import {ListModule} from "./ticketview/ticketlist/list.module";





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
