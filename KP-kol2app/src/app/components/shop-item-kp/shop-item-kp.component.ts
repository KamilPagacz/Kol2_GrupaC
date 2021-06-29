import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-item-kp',
  templateUrl: './shop-item-kp.component.html',
  styleUrls: ['./shop-item-kp.component.css']
})
export class ShopItemKPComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() image: string | undefined;
  @Input() price: string | undefined;
  id: string = '1';

  constructor() { }

  ngOnInit(): void {
  }

}
