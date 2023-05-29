import { Component, OnInit } from '@angular/core';
import { StyleService } from './services/style.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ChoiceMaker';
  isOnline: boolean;
  color: Observable<string>;

  constructor(private _style: StyleService, private _router: Router) {
    this.isOnline = false;
    this.color = _style.selectedTheme;;
  }

  ngOnInit(): void {
    this.color = this._style.selectedTheme;
    
    this.updateOnlineStatus();

    window.addEventListener('online',
      this.updateOnlineStatus.bind(this));
    window.addEventListener('offline',
      this.updateOnlineStatus.bind(this));
  }

  private updateOnlineStatus(): void {
    this.isOnline = window.navigator.onLine;
    console.info(`Is Online : ${this.isOnline}`);
  }
}
