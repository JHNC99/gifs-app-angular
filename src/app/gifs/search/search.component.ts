import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gif: GifService) {}

  search() {
    const value = this.txtSearch.nativeElement.value;
    if (value.trim().length === 0) {
      return;
    }

    this.gif.searchGifs(value);
    this.txtSearch.nativeElement.value = '';
  }
}
