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
    base: 'https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIyMjkwMCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQotCw0YDQuNGEINCR0LDQt9C+0LLQuNC5IiwicHVibGljX2tleSI6ImkxNjUzMjQ4MDYyNyIsImxhbmd1YWdlIjoidWsifQ==&signature=57jv8qvGHpZlzjeAxu6W+ZXbkt8=',
    max: 'https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIzMTUwMCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQotCw0YDQuNGEINCc0LDQutGB0LjQvNCw0LvRjNC90LjQuSIsInB1YmxpY19rZXkiOiJpMTY1MzI0ODA2MjciLCJsYW5ndWFnZSI6InVrIn0=&signature=Gfw4y5BD0jT0ZDICQZQ/wYP+1SM=',
    exclusive: 'https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIzMTUwMCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQotCw0YDQuNGEINCV0LrRgdC60LvRjtC30LjQstC90LjQuSIsInB1YmxpY19rZXkiOiJpMTY1MzI0ODA2MjciLCJsYW5ndWFnZSI6InVrIn0=&signature=06z2/7n4tfc/l/c7R1UFLmQTMbc=',
  };
  window.location.href = links[tariff];
  }
}
