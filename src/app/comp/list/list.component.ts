import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  color: Observable<string>;
  newList: boolean = false;
  newItem: boolean = false;
  displayList: any = null;
  registeredLists: any = [];

  constructor(private _style: StyleService) {
    this.color = _style.selectedTheme;
  }

  ngOnInit(): void {
    this.color = this._style.selectedTheme;//*.subscribe(selectedTheme => this.color = selectedTheme as any) as any;
    let ls: any = JSON.parse(localStorage.getItem('lists') as any as string);
    this.registeredLists = (ls!=null)?ls:[];
  }

  createList(): void {
    let sList: any = {name: (document.querySelector("[name='newList']") as any).value, values: []};
    this.registeredLists.push(sList);
    
    this.saveList();
    this.addList();
  }

  addList(): void {
    this.newList = !this.newList;
    this.newItem = false;
  }

  addItem(): void {
    this.newItem = !this.newItem;
    this.newList = false;
  }

  createItem(): void {
    let item:string = (document.querySelector("[name='newItem']") as any).value;
    if(item)
      this.displayList.values.push(item);
    this.saveList();
    this.addItem();
  }

  showList(l: any): void {
    this.displayList = l;
  }

  showAll(): void {
    this.displayList = null;
  }

  delList(l: any): void {
    this.registeredLists = this.registeredLists.filter((dl: any)=>dl != l);
    this.showAll();
  }

  saveList(): void {
    localStorage.setItem('lists',JSON.stringify(this.registeredLists));
  }
}
