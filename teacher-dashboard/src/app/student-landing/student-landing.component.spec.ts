import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLandingComponent } from './student-landing.component';

describe('StudentLandingComponent', () => {
  let component: StudentLandingComponent;
  let fixture: ComponentFixture<StudentLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentLandingComponent]
    });
    fixture = TestBed.createComponent(StudentLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
