import { Component } from '@angular/core';


@Component({
  selector: 'app-price',
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {

  payFunc(){
    console.log("click");
    
    window.location.href = 'https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiI1IiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCc0ZbQuSDRgtC+0LLQsNGAIiwicHVibGljX2tleSI6InNhbmRib3hfaTk4MTQ0MzA2OTQ2IiwibGFuZ3VhZ2UiOiJ1ayJ9&signature=0ZWmIY3+bSER+AUKDR0jfeCzubQ=';
  }
}
