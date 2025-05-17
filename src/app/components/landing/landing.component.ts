import { Component, inject, OnInit } from '@angular/core';
import { SEO_LANDING } from '../../seo/seo.config';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { ForWhomComponent } from './for-whom/for-whom.component';
import { PlanComponent } from "./plan/plan.component";
import { PriceComponent } from './price/price.component';
import { ReadyComponent } from './ready/ready.component';
import { QuestionComponent } from './question/question.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-landing',
  imports: [AboutComponent, HeroComponent, ForWhomComponent, PlanComponent, PriceComponent, ReadyComponent, QuestionComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{

private seoService = inject(SeoService);

ngOnInit(){
   this.seoService.updateTags(SEO_LANDING);
   this.seoService.setCanonicalLink();
}

}
