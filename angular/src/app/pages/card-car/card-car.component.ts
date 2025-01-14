import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from "../../services/car/car.service";
import {CarModel} from "../../models/Car/car.model";

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.sass'],
  host: {
    id: "mainContent",
    class: "flex-grow-1 d-sm-flex justify-content-sm-center hideOnMobile"
  }
})
export class CardCarComponent implements OnInit {
  cars: CarModel[] = [];

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const userId = this.route.snapshot.params["userId"];
    if (userId) {
      console.log(userId)
      this.carService.getUserCars(userId).subscribe((cars: any) => {
        this.cars = cars;
      });
    } else {
      this.carService.getCars().subscribe((serviceCars: any) => {
        serviceCars.then((cars: any) => {
          this.cars = cars;
        })
      });
    }
  }

  navigateToCarDetails(car: any): void {
    this.router.navigate(['carView', {carId: car.id}]);
  }

  navigateToCarCreate(): void {
    this.router.navigate(['formCar']);
  }
}
