import { Component,effect, HostBinding, input } from '@angular/core';

@Component({
  selector: 'app-svg',
  imports: [],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss'
})
export class SvgComponent {
  public path = input.required<string>({
    alias:'filePath'
  })

  constructor() {
    effect(() => {
      const filePath = this.path(); 
      this._path = filePath ? `url("${filePath}")` : ''; 
    });
  }
  

  @HostBinding('style.-webkit-mask-image')
  private _path?: string 

}
