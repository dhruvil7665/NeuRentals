//Imports
import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

// Components
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  //providers:[NgbCarouselConfig]
})
//Made array of images to display in slider and added feature for pauseOnHover
export class CarouselComponent implements OnInit {
  images: Array<string> = ["camera.jpg","treadmill.jpg","ps4.jpg","book.jpg"];
  slidertext: Array<string> =["Electronics","Fitness Equipments","Gaming","Study Material"]
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  constructor() {
    console.log("display image: "+this.images);
  }


  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

// Pausing carousal on mouse hover using togglePaused function

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  // used NgbSlide Event of bootstrap
  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

ngOnInit() {
  }

}
