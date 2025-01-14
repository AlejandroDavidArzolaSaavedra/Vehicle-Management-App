import {Component} from '@angular/core';
import {GasStation} from "../../models/GasStation/gas-station.model";
import {GasStationService} from "../../services/gasStation/gas-station.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  host: {
    id: "mainContent",
    class: "flex-grow-1 d-sm-flex justify-content-sm-center hideOnMobile"
  }
})
export class HomePageComponent {

  gasStations: GasStation[] = [];

  constructor(private gasStationService: GasStationService) {
  }

  ngOnInit(): void {
    this.getGasStations();
    console.log(this.gasStations);
  }

  getGasStations(): void {
    this.gasStationService.getCanaryIslandsGasStations().subscribe((gasStationList: GasStation[]) => {
      this.gasStations = [...this.gasStations, ...gasStationList];
    });
  }
}
