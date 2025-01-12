import { Component } from '@angular/core';
import {ClickService} from '../../service/click.service';

@Component({
  selector: 'app-click-tracker',
  imports: [],
  standalone: true,
  templateUrl: './click-tracker.component.html',
  styleUrl: './click-tracker.component.css'
})
export class ClickTrackerComponent {

  constructor(private clickService: ClickService) {}

}
