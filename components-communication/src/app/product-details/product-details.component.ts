import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public product: Product | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);
    const productIdFromRoute = Number(routeParams.get('productId'));
    console.log(productIdFromRoute);

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
