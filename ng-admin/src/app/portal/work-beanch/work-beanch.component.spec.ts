import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkBeanchComponent } from './work-beanch.component';

describe('WorkBeanchComponent', () => {
  let component: WorkBeanchComponent;
  let fixture: ComponentFixture<WorkBeanchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkBeanchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkBeanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
