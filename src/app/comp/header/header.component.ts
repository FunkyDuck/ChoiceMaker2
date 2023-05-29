import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StyleService } from 'src/app/services/style.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  color: Observable<string>;

  constructor(private _style: StyleService, private _router: Router) {
    this.color = _style.selectedTheme;
  }

  ngOnInit(): void {
    // this._router.events.subscribe(e => {
      this.color = this._style.selectedTheme;
    // });
  }
}
