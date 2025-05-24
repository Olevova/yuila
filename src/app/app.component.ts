import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Yulia';
  
  private seoService = inject(SeoService);

  ngOnInit() {
    this.setupSEO();
  }
  
  private setupSEO(): void {
    this.seoService.updateTags({
      title: ' Юлія Короновська - Навчальний курс по туризму',
      description: 'Навчальний курс - покращте свої навички та отримайте сертифікат',
      keywords: 'курс, навчання, сертифікат, онлайн-курс, професійний розвиток',
      image: 'https://yuila-course.netlify.app/assets/images/course-preview.jpg', // Шлях до головного зображення курсу
      url: 'https://yuila-course.netlify.app/'
    });

    // Встановлюємо канонічний URL
    this.seoService.setCanonicalLink('https://yuila-course.netlify.app/');
  }
}
