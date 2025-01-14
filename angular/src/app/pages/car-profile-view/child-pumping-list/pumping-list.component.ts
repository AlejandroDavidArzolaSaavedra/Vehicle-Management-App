import {Component, Input} from '@angular/core';
import {Pumping} from "../../../models/Car/pumping";
import {User} from "../../../models/User/user.model";

@Component({
  selector: 'app-child-pumping-list',
  templateUrl: './pumping-list.component.html',
  styleUrls: ['./pumping-list.component.sass'],

})
export class PumpingListComponent {
  @Input()
  pumping: Pumping[] = [];

  ngOnChanges() {
    console.log(this.pumping);
  }
}
