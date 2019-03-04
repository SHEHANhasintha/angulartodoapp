import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeboardComponent } from './timeboard.component';

describe('TimeboardComponent', () => {
  let component: TimeboardComponent;
  let fixture: ComponentFixture<TimeboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
