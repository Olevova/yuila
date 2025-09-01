import { Component } from '@angular/core';


@Component({
  selector: 'app-price',
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {

  payFunc(tariff: 'base' | 'max' | 'exclusive'){
   const links = {
    base: 'https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIyMjkwMCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQt9CwINC/0L7RgdC70YPQs9C4IiwicHVibGljX2tleSI6ImkxNjUzMjQ4MDYyNyIsImxhbmd1YWdlIjoidWsiLCJyZXN1bHRfdXJsIjoiaHR0cHM6Ly90cmF2ZWxleHBlcnQuY29tLnVhL3BheW1lbnQtc3VjY2VzcyJ9&signature=pc097kRpGv1bKSu+X14XAFmMQv0=',
    max: 'https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIzMTUwMCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQt9CwINC/0L7RgdC70YPQs9C4IiwicHVibGljX2tleSI6ImkxNjUzMjQ4MDYyNyIsImxhbmd1YWdlIjoidWsiLCJyZXN1bHRfdXJsIjoiaHR0cHM6Ly90cmF2ZWxleHBlcnQuY29tLnVhL3BheW1lbnQtc3VjY2VzcyJ9&signature=t/zl/3wlnaWBABWAICIg9Stfkl8=',
    exclusive: 'https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIzODkwMCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQt9CwINC/0L7RgdC70YPQs9C4IiwicHVibGljX2tleSI6ImkxNjUzMjQ4MDYyNyIsImxhbmd1YWdlIjoidWsiLCJyZXN1bHRfdXJsIjoiaHR0cHM6Ly90cmF2ZWxleHBlcnQuY29tLnVhL3BheW1lbnQtc3VjY2VzcyJ9&signature=4tJrxlY3S3gDUdSNPerKh0678J8=',
  };
  window.location.href = links[tariff];
  }
}
