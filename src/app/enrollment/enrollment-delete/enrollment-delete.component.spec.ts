import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentDeleteComponent } from './enrollment-delete.component';

describe('EnrollmentDeleteComponent', () => {
  let component: EnrollmentDeleteComponent;
  let fixture: ComponentFixture<EnrollmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollmentDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrollmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
