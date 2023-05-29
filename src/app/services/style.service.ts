import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  public themes: string[] = [
    'blue',
    'green',
    'red',
    'yellow',
    'fushia',
    'grey',
    // 'black',
    // 'white',
  ];
  private selected: Subject<string> = new Subject<string>(); //this.themes[0];
  public selectedTheme = this.selected.asObservable();
  private showList: Subject<boolean> = new Subject<boolean>();
  public isShowList = this.showList.asObservable();

  constructor() {
    const clr = localStorage.getItem('theme');
    this.selectedTheme = ((clr)? clr : this.themes[0]) as any;
    const isl = localStorage.getItem('showList');
    this.isShowList = ((isl)?isl : false) as any;
  }

  getColor(): Observable<string> {
    return this.selectedTheme;
  }

  setColor(selectedTheme: string): void {
    this.selected.next(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
    console.log(selectedTheme)
  }

  getShowList(): Observable<boolean> {
    return this.isShowList;
  }

  setShowList(fromShowList: boolean): void {
    console.log(fromShowList)
    this.showList.next(fromShowList);
    localStorage.setItem('showList', fromShowList as any);
  }
}
