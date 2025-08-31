import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { LinkService } from '../../../services/link.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  private linkService = inject(LinkService);
  @ViewChild('bgVideo') bgVideoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.bgVideoRef?.nativeElement;

    if (video && typeof video.play === 'function') {
      video.play().catch((err) => {
        console.error('Помилка при запуску відео:', err);
      });
    } else {
      console.warn('Video element недоступний або не має методу play');
    }
  }

  openInstagram() {
    this.linkService.openLink(
      'https://www.instagram.com/yulyakorona?igsh=bWl5MDJha3Zwd2Ns&utm_source=qr'
    );
  }
}
