import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbpLayoutComponent } from './bmbp-layout.component';

describe('BmbpLayoutComponent', () => {
  let component: BmbpLayoutComponent;
  let fixture: ComponentFixture<BmbpLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmbpLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmbpLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
