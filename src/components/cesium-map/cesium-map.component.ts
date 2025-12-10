import { Component, AfterViewInit, OnInit } from '@angular/core';

declare let Cesium: any;

@Component({
  selector: 'app-cesium-map',
  templateUrl: './cesium-map.component.html',
  styleUrls: ['./cesium-map.component.scss'],
  standalone: true
})
export class CesiumMapComponent implements OnInit {

  viewer!: any;

  ngOnInit(): void {
    // Force Cesium to look in assets
    (window as any).CESIUM_BASE_URL = '/assets/Cesium-1.136/Build/Cesium';

    this.viewer = new Cesium.Viewer('cesiumContainer', {
      baseLayerPicker: false,
      terrainProvider: new Cesium.EllipsoidTerrainProvider(),
      sceneMode: Cesium.SceneMode.SCENE2D
    });

    // Add OSM manually after viewer creation
    const osm = new Cesium.UrlTemplateImageryProvider({
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      credit: '© OpenStreetMap contributors'
    });
    this.viewer.imageryLayers.addImageryProvider(osm);

    // Center camera on Brazil
    this.viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(-51.9253, -14.2350, 5000000)
      // longitude, latitude, height in meters
    });

    console.log("here:", this.viewer.imageryLayers._layers);

    // Force render to confirm imagery is attached
    // this.viewer.scene.requestRender();

    this.addGeoServerLayer()
  }

  /**
   * Add GeoServer WMS layer over OSM
   */
  addGeoServerLayer(): void {
    const geoserverLayer = new Cesium.WebMapServiceImageryProvider({
      url: window.location + 'geoserver/my_workspace/wms',
      layers: 'my_layer',
      parameters: {
        service: 'WMS',
        version: '1.1.1',
        request: 'GetMap',
        styles: '',
        format: 'image/png',
        transparent: true
      },
      credit: 'GeoServer'
    });

    this.viewer.imageryLayers.addImageryProvider(geoserverLayer);
  }
}
