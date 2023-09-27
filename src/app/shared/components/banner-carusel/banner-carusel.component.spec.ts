import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCaruselComponent } from './banner-carusel.component';

describe('BannerCaruselComponent', () => {
  let component: BannerCaruselComponent;
  let fixture: ComponentFixture<BannerCaruselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerCaruselComponent]
    });
    fixture = TestBed.createComponent(BannerCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
