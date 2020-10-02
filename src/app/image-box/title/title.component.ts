import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  title = 'Angrier-App';
  constructor() { }

  ngOnInit(): void {
  }
  printTitle(){
    return `Mad Kitty from The ${this.title}`;
  }
}
