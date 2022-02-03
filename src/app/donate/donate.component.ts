import { Component, OnInit } from '@angular/core';
import { StripeScriptTag } from 'stripe-angular';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  constructor(private stripeScriptTag: StripeScriptTag) {
    if (!this.stripeScriptTag.StripeInstance) {
      this.stripeScriptTag.setPublishableKey('');
    }
   }

   

  ngOnInit(): void {
  }

}
