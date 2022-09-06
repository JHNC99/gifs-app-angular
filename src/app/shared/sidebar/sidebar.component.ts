import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  get history() {
    return [...this.gifService.history];
  }
  constructor(private gifService: GifService) {}
  search(query: string) {
    this.gifService.searchGifs(query);
  }
}
