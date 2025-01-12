import { Routes } from '@angular/router';
import {ClickTriggerComponent} from './ui/click-trigger/click-trigger.component';
import {ClickTrackerComponent} from './ui/click-tracker/click-tracker.component';

export const routes: Routes = [
  {path: 'click', component: ClickTriggerComponent},
  {path: 'track', component: ClickTrackerComponent}
];
