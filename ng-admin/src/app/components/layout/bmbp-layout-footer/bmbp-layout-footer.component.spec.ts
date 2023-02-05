import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbpLayoutFooterComponent } from './bmbp-layout-footer.component';

describe('BmbpLayoutFooterComponent', () => {
  let component: BmbpLayoutFooterComponent;
  let fixture: ComponentFixture<BmbpLayoutFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmbpLayoutFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmbpLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
