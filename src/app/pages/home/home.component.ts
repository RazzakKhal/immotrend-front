import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private originalViewportContent: string | null = null;

  ngOnInit() {
    const viewport = document.querySelector('meta[name=viewport]');
    if (viewport) {
      this.originalViewportContent = viewport.getAttribute('content');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
  }

  ngOnDestroy() {
    const viewport = document.querySelector('meta[name=viewport]');
    if (viewport && this.originalViewportContent) {
      viewport.setAttribute('content', this.originalViewportContent);
    }
  }
}
