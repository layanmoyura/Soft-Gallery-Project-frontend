import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentEditComponent } from './enrollment-edit.component';

describe('EnrollmentEditComponent', () => {
  let component: EnrollmentEditComponent;
  let fixture: ComponentFixture<EnrollmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollmentEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrollmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
