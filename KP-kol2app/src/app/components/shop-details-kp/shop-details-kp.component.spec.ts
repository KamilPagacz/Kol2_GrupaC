import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsKPComponent } from './shop-details-kp.component';

describe('ShopDetailsKPComponent', () => {
  let component: ShopDetailsKPComponent;
  let fixture: ComponentFixture<ShopDetailsKPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopDetailsKPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsKPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
