import { Component } from '@angular/core';

// add a Decorator

@Component({
  selector: 'image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent {}

// If the template is super small...just add it like this instead of an extra html file
// @Component({
//   selector: 'image-box',
//   template: `
//   <div id="image-box">
//     <img src="https://static.boredpanda.com/blog/wp-content/
        // uploads/2015/04/animal-photography-angry-charging-lion-atif-saeed-pakistan-fb.jpg">
//   </div>
//   `,
//   styleUrls: ['./image-box.component.scss']
// })
