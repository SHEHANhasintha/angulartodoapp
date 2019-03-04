import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedtaskComponent } from './createdtask.component';

describe('CreatedtaskComponent', () => {
  let component: CreatedtaskComponent;
  let fixture: ComponentFixture<CreatedtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
