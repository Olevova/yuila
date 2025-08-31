import { Component, inject } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { ReadyComponent } from '../ready/ready.component';
import { SeoService } from '../../../services/seo.service';
import { SEO_AGREEMENT } from '../../../seo/seo.config';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agreement',
  imports: [RouterModule, ReadyComponent, QuestionComponent],
  templateUrl: './agreement.component.html',
  styleUrl: './agreement.component.scss'
})
export class AgreementComponent {
  // private seo = inject(SeoService)
  constructor(){}
  ngOnInit(): void {
    // this.seo.updateTags(SEO_AGREEMENT);
    // this.seo.setCanonicalLink(SEO_AGREEMENT.url);
  }
}
