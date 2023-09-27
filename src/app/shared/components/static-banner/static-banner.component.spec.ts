import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticBannerComponent } from './static-banner.component';

describe('StaticBannerComponent', () => {
  let component: StaticBannerComponent;
  let fixture: ComponentFixture<StaticBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticBannerComponent]
    });
    fixture = TestBed.createComponent(StaticBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
