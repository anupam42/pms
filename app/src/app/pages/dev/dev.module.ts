import {NgModule} from "@angular/core";
import {DevComponent} from "./dev.component";
import {DevDashboardComponent} from "./dev-dashboard/dev-dashboard.component";
import {CommonModule} from "@angular/common";
import {NgaModule} from "../../theme/nga.module";
import {FormsModule} from "@angular/forms";
import {DevActivityComponent} from "./dev-activity/dev-activity.component";

@NgModule({
  declarations: [
    DevComponent,
    DevDashboardComponent,
    DevActivityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgaModule
  ],
  providers: [

  ]
})
export class DevModule {}