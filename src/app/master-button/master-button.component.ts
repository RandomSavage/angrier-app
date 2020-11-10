import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'master-button',
  templateUrl: './master-button.component.html',
  styleUrls: ['./master-button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MasterButtonComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Output() alertTypeTrigger = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}
  clickedButton(type) {
    this.alertTypeTrigger.emit(type);
    console.log('clicked button type of ' + type);
  }
}
