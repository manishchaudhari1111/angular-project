import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: 'product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    dataUrl = '../../assets/json/data.json';
    product = null;
    constructor(private route: ActivatedRoute, private http: HttpClient) {

    }
    ngOnInit(): void {
        this.getProduct();
    }

    getProduct() {
        const id = +this.route.snapshot.paramMap.get('productId');
        console.log(id);
        this.http.get(this.dataUrl).subscribe((data) => {
            this.product = data['data'].filter((product) =>  product.id === id)[0];
            console.log(this.product);
        });
    }
}
