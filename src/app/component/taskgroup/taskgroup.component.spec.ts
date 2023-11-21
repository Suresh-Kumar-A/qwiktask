import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskgroupComponent } from './taskgroup.component';

describe('TaskgroupComponent', () => {
  let component: TaskgroupComponent;
  let fixture: ComponentFixture<TaskgroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskgroupComponent]
    });
    fixture = TestBed.createComponent(TaskgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
