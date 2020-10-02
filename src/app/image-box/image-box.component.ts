import { Component, OnInit } from '@angular/core';
import { ImageBoxService } from './image-box.service';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent implements OnInit {
  characters;
  constructor(service: ImageBoxService) { 
    this.characters = service.getCharacters();
  }

  ngOnInit(): void {
  }

}
