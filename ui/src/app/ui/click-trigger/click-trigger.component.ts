import {Component, OnInit} from '@angular/core';
import {ClickService} from '../../service/click.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-click-tracker',
  templateUrl: './click-trigger.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrl: './click-trigger.component.css'
})
export class ClickTriggerComponent implements OnInit {

  userId: string = '';
  clickCount: number = 0;

  constructor(private clickService: ClickService) {}

  ngOnInit(): void {
    this.fetchClickCounts();
  }

  recordClick(): void {
    if (this.userId) {
      this.clickService.recordClick(this.userId).subscribe(() => {
        this.fetchClickCounts();
      });
    }
  }

  fetchClickCounts(): void {
    this.clickService.getClickCounts().subscribe((counts) => {
      this.clickCount = counts.clicks;
    });
  }

}
