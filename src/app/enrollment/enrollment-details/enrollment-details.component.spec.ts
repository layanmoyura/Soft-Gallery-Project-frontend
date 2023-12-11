import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentDetailsComponent } from './enrollment-details.component';

describe('EnrollmentDetailsComponent', () => {
  let component: EnrollmentDetailsComponent;
  let fixture: ComponentFixture<EnrollmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrollmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
