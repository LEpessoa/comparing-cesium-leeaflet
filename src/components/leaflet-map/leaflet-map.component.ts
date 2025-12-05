import { Component, OnInit } from '@angular/core';

declare let L: any;

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.scss'
})
export class LeafletMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // var map = L.map('map').setView([51.505, -0.09], 13);

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map);
    var map = L.map('map').setView([-14.2350, -51.9253], 3);
    // lat, lon, zoom level (5 gives a good continental view)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      detectRetina: true,
      maxNativeZoom: 18, // The highest zoom level for which tiles exist
      maxZoom: 22,       // Must be set on the layer too, to match or exceed the map's maxZoom
      minZoom: 0,
    }).addTo(map);
  }
}
