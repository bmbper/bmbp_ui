import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbpLayoutCenterComponent } from './bmbp-layout-center.component';

describe('BmbpLayoutCenterComponent', () => {
  let component: BmbpLayoutCenterComponent;
  let fixture: ComponentFixture<BmbpLayoutCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmbpLayoutCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmbpLayoutCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
