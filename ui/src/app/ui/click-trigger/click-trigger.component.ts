import {Component} from '@angular/core';
import {ClickService} from '../../service/click.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'click-trigger',
  templateUrl: './click-trigger.component.html',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule
  ],
  styleUrl: './click-trigger.component.css'
})
export class ClickTriggerComponent {

  userId: string = '';

  constructor(private clickService: ClickService) {}

  recordClick(): void {
    if (this.userId) {
      this.clickService.recordClick(this.userId).subscribe(next => {
      });
    }
  }

}
