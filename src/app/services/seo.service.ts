import { Injectable,Inject, PLATFORM_ID, inject  } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoConfig } from '../models/seo.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private title = inject(Title);
  private meta = inject(Meta);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  updateTags(config: SeoConfig){
    if (!isPlatformBrowser(this.platformId)) return;
    // Встановлюємо заголовок сторінки
    this.title.setTitle(config.title);

    // Основні метатеги
    this.meta.updateTag({ name: 'description', content: config.description });
    
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph теги
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }

    // Twitter Card теги
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    
    if (config.image) {
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }

    // Додаткові метатеги для пошукових систем
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
  setCanonicalLink(url?: string){
    if (!isPlatformBrowser(this.platformId)) return;
    const canURL = url || this.getBaseUrl();
    
    let link = this.getCanonicalLink();
    
    if (link) {
      link.setAttribute('href', canURL);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canURL);
      document.head.appendChild(link);
    }
  }

  /**
   * Отримує поточний канонічний лінк, якщо він існує
   */
  private getCanonicalLink(): HTMLLinkElement | null {
    return isPlatformBrowser(this.platformId)
      ? document.querySelector('link[rel="canonical"]')
      : null;
  }


  /**
   * Отримує базовий URL сайту
   */
  private getBaseUrl(): string {
    return isPlatformBrowser(this.platformId)
      ? window.location.origin + window.location.pathname
      : '';
  }
}
