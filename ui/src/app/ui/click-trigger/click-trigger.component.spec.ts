import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTriggerComponent } from './click-trigger.component';

describe('ClickTrackerComponent', () => {
  let component: ClickTriggerComponent;
  let fixture: ComponentFixture<ClickTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickTriggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
