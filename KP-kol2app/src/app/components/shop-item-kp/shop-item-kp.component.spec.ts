import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemKPComponent } from './shop-item-kp.component';

describe('ShopItemKPComponent', () => {
  let component: ShopItemKPComponent;
  let fixture: ComponentFixture<ShopItemKPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopItemKPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemKPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
