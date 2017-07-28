import { Component, OnInit } from '@angular/core';

import { IMarker } from './shared/imarker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Uncharted Territories';
  lat = 18.127468;
  lng = -65.441516;
  ctr = {lat: this.lat, lng: this.lng};
  pos: {lat: 18.127468, lng: -65.441516};
  markers: IMarker[] = [];

  ngOnInit() {
    const self = this;
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     const pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //     self.pos = pos;
    //     console.log('lat = ' + self.pos.lat);
    //     console.log('lng = ' + self.pos.lng);
    //   });
    // }
  }

  mapClicked(event) {
    const mrkr = {
      lat: event.coords.lat as number,
      lng: event.coords.lng as number,
      draggable: false
    };
    this.markers.push(mrkr);
  }
}
