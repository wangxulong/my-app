import {OnInit, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Comment[];

  constructor(private routerInfo: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    const productId: number = this.routerInfo.snapshot.params['id'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProduct(productId);
  }

}
