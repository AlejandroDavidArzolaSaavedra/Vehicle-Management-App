import {Component, Input} from '@angular/core';
import {GasStation} from "../../models/GasStation/gas-station.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gas-info-page',
  templateUrl: './gas-info-page.component.html',
  styleUrls: ['./gas-info-page.component.sass'],
  host: {
    id: "mainContent",
    class: "flex-grow-1 d-sm-flex justify-content-sm-center hideOnMobile"
  }
})
export class GasInfoPageComponent {

  gasStation: GasStation | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.gasStation = history.state;
  }
}
