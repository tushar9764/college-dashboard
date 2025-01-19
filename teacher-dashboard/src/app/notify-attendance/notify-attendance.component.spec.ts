import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyAttendanceComponent } from './notify-attendance.component';

describe('NotifyAttendanceComponent', () => {
  let component: NotifyAttendanceComponent;
  let fixture: ComponentFixture<NotifyAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotifyAttendanceComponent]
    });
    fixture = TestBed.createComponent(NotifyAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
