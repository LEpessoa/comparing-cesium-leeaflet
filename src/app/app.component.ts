import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StylerInterfaceComponent } from "../components/styler-interface/styler-interface.component";
import { CesiumMapComponent } from '../components/cesium-map/cesium-map.component';
import { LeafletMapComponent } from '../components/leaflet-map/leaflet-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StylerInterfaceComponent, CesiumMapComponent, LeafletMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
