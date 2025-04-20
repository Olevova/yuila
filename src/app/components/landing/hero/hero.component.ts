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
    const video = this.bgVideoRef.nativeElement;
    video.muted = true; 
    video.play().catch(err => {
      console.warn('Autoplay blocked or failed:', err);
    });
  }
}
