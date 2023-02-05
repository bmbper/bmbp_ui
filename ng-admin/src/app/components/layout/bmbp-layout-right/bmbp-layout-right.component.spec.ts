import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbpLayoutRightComponent } from './bmbp-layout-right.component';

describe('BmbpLayoutRightComponent', () => {
  let component: BmbpLayoutRightComponent;
  let fixture: ComponentFixture<BmbpLayoutRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmbpLayoutRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmbpLayoutRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
