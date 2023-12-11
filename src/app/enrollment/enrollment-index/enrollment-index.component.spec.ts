import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentIndexComponent } from './enrollment-index.component';

describe('EnrollmentIndexComponent', () => {
  let component: EnrollmentIndexComponent;
  let fixture: ComponentFixture<EnrollmentIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollmentIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrollmentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
