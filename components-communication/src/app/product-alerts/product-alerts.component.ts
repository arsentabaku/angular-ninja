import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() public product!: Product;
  @Output() public priceNotification = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
