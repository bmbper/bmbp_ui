import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbpLayoutTopComponent } from './bmbp-layout-top.component';

describe('BmbpLayoutTopComponent', () => {
  let component: BmbpLayoutTopComponent;
  let fixture: ComponentFixture<BmbpLayoutTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmbpLayoutTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmbpLayoutTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
