import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-shuffle',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.scss']
})
export class ShuffleComponent implements OnInit {
  color: Observable<string>;
  registeredLists: any;
  selectedList: any;
  choice: string | null = null;
  showList: boolean;

  constructor(private _style: StyleService) {
    this.color = _style.selectedTheme;
    this.showList = (localStorage.getItem('showList') as any as boolean)?localStorage.getItem('showList') as any as boolean:false;
  }

  ngOnInit(): void {
    let ls: any = JSON.parse(localStorage.getItem('lists') as any as string);
    this.registeredLists = (ls!=null)?ls:[];
    this.selectedList = this.registeredLists[0];
    this.color = this._style.selectedTheme;
    this.showList = (localStorage.getItem('showList') as any as boolean)?localStorage.getItem('showList') as any as boolean:false;
  }

  setList(e: Event): void {
    this.selectedList = this.registeredLists[(e.target as any).selectedIndex];
    this.choice = null;
  }

  makeChoice(): void {
    this.choice = this.selectedList.values[Math.floor(Math.random() * this.selectedList.values.length)];
  }
}
