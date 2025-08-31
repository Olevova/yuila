import { Component, inject } from '@angular/core';
import { LinkService } from '../../../services/link.service';

@Component({
  selector: 'app-ready',
  imports: [],
  templateUrl: './ready.component.html',
  styleUrl: './ready.component.scss',
})
export class ReadyComponent {
  private linkService = inject(LinkService);

  openInstagram() {
    this.linkService.openLink(
      'https://www.instagram.com/yulyakorona?igsh=bWl5MDJha3Zwd2Ns&utm_source=qr'
    );
  }
}
