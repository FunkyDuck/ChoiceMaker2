import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StyleService } from 'src/app/services/style.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  color: Observable<string>;

  constructor(private _router: Router, private _style: StyleService) {
    this.color= _style.selectedTheme;
  }

  ngOnInit(): void {
    this.color = this._style.getColor().subscribe(selectedTheme => this.color = selectedTheme as any) as any;
  }

  goLink(link: string): void {
    this._router.navigateByUrl(link);
  }
}
