import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-checkout-confirmation',
  templateUrl: './checkout-confirmation.component.html',
  styleUrls: ['./checkout-confirmation.component.scss']
})
export class CheckoutConfirmationComponent implements OnInit {
  order: any;
  user: any;

  constructor(public router: Router, public globalService: GlobalService) {
    this.order = globalService.order.getValue();
    this.user = globalService.user.getValue();
  }

  ngOnInit() {
  }

}
