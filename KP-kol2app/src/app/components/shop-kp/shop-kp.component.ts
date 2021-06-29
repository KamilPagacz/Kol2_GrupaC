import { Component, Input, OnInit } from '@angular/core';
import { KPDataService } from 'src/app/kp-data.service';

@Component({
  selector: 'app-shop-kp',
  templateUrl: './shop-kp.component.html',
  styleUrls: ['./shop-kp.component.css']
})
export class ShopKPComponent implements OnInit {

  public items$: any;
  
  constructor(private service: KPDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response=>{
      this.items$=response;
    });
  }
}
