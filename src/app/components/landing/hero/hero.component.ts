import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit{
  @ViewChild('bgVideo')bgVideoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(){
    const video = this.bgVideoRef?.nativeElement;

  if (video && typeof video.play === 'function') {
    video.play().catch(err => {
      console.error('Помилка при запуску відео:', err);
    });
  } else {
    console.warn('Video element недоступний або не має методу play');
  }
  }
}
