import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {

  @Input() resource:ResourceData;
  // url:string;
  // imageURRL:string;
  // category_name:string;
  // id:string;
  // category:string;

  constructor() { }

  ngOnInit() {
    // this.url = this.resource.url;
    // this.imageURRL=this.resource.imageURL;
    // this.category_name=this.resource.name;



    
    // this.id = this.resource.id;
    // this.category = this.resource.category;
  }
}
