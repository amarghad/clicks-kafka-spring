import { Component } from '@angular/core';
import {ClickService} from '../../service/click.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'click-tracker',
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  standalone: true,
  templateUrl: './click-tracker.component.html',
  styleUrl: './click-tracker.component.css'
})
export class ClickTrackerComponent {
  username!: string;
  message!: string;
  clickCount: number = 0;

  constructor(private clickService: ClickService) {}

  getClickCount() {
    if (!this.username) {
      this.message = 'Please enter a username.';
      return;
    }

    this.clickService.getClickCount(this.username).subscribe({
      next: (count) => {
        this.clickCount = count.clicks;
      },
      error: (error) => {
        this.message = 'Error fetching click count.';
        console.error(error);
      },
    });
  }

}
