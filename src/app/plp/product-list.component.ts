import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/plp/product-list.service';


@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    private products: any[];
    constructor(private productListService: ProductListService) {
    }

    ngOnInit(): void {
        this.productListService.getData().subscribe(data => this.products = data['data']);
    }

}
