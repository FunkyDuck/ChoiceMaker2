import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {
  themes: string[];
  alertDel: boolean = false;
  color: Observable<string>;
  // showList: Observable<boolean>;
  showList: boolean;

  constructor(private _style: StyleService) {
    this.themes = _style.themes;
    this.color = _style.selectedTheme;
    // this.showList = _style.getShowList();
    this.showList = (localStorage.getItem('showList') as any as boolean)?localStorage.getItem('showList') as any as boolean:false;
  }
  
  ngOnInit(): void {
    this.color = this._style.selectedTheme;
    // this.showList = this._style.isShowList;
    console.log(this.color)
  }

  setTheme(e: Event): void {
    this._style.setColor((e.target as any).selectedOptions[0].value)
    window.location.reload();
  }

  changeShowList(): void {
    // console.log(typeof(this.showList),this.showList,!(this.showList as any as boolean) )
    // this._style.setShowList(!this.showList as boolean)
    // this.showList = this._style.getShowList();
    // console.warn(this.showList)
    localStorage.setItem('showList', <string><unknown>!this.showList);
    this.showList = !this.showList;
  }

  removeList(): void {
    this.alertDel = true;
  }

  deleteList(): void {
    localStorage.removeItem('lists');
    this.alertDel = false;
  }
}
