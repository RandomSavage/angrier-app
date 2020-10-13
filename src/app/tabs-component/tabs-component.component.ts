import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.scss']
})
export class TabsComponentComponent implements OnInit {
  activeTab = 'tab-1';
  constructor() { }
  selectTab(tab: string){
    this.activeTab = tab;
    console.log(tab);
  }
  ngOnInit(): void {
  }

}
