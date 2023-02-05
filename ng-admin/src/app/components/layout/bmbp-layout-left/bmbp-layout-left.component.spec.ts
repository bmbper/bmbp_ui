import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbpLayoutLeftComponent } from './bmbp-layout-left.component';

describe('BmbpLayoutLeftComponent', () => {
  let component: BmbpLayoutLeftComponent;
  let fixture: ComponentFixture<BmbpLayoutLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmbpLayoutLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmbpLayoutLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
