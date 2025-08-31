import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  openLink(url: string): void {
    window.open(url, '_blank');
  }
}