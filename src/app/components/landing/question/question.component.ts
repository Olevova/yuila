import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgComponent } from '../../common/svg/svg.component';

@Component({
  selector: 'app-question',
  imports: [RouterModule, SvgComponent ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

}
