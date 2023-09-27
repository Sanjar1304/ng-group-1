import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingSupportComponent } from './shipping-support.component';

describe('ShippingSupportComponent', () => {
  let component: ShippingSupportComponent;
  let fixture: ComponentFixture<ShippingSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingSupportComponent]
    });
    fixture = TestBed.createComponent(ShippingSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
