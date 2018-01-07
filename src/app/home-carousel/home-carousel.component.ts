import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  photos: Object[];

  constructor(
    private photosService: PhotosService
  ) {
    photosService.getJSON().subscribe(data => {
      this.photos = data.user.media.nodes;
      console.log(this.photos);
    });
  }

  ngOnInit() {
  }

}
