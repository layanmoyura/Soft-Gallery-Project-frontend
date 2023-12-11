import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseIndexComponent } from './course-index.component';

describe('CourseIndexComponent', () => {
  let component: CourseIndexComponent;
  let fixture: ComponentFixture<CourseIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
