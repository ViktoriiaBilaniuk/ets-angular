import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

const ROUTE = [
  {
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTE)]
})
export class CalendarRoutingModule {}
