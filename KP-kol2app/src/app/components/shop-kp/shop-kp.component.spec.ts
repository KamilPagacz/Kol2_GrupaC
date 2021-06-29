import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopKPComponent } from './shop-kp.component';

describe('ShopKPComponent', () => {
  let component: ShopKPComponent;
  let fixture: ComponentFixture<ShopKPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopKPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopKPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
