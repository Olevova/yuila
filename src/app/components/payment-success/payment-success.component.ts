import { Component, inject, OnInit } from '@angular/core';
import { LinkService } from '../../services/link.service';
import { SeoService } from '../../services/seo.service';
import { SEO_PAYMENT_SUCCESS } from '../../seo/seo.config';

@Component ({
  selector: 'app-payment-success',
  imports: [],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.scss'
})
export class PaymentSuccessComponent implements OnInit{
   private linkService = inject(LinkService);
  //  private seoService = inject(SeoService);

    ngOnInit(){
      // this.seoService.updateTags(SEO_PAYMENT_SUCCESS);
      // this.seoService.setCanonicalLink();
    }

  openTelegram() {
    this.linkService.openLink(
      'https://t.me/+ZSBMUEypJGYyZGYy'
    );
  }
}
