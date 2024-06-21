import React from "react";
import "./map.css";
import { YMaps, Map, Placemark,RouteButton } from "react-yandex-maps";

export default function Maps() {
  return (
    <React.Fragment>
      <div className="map-box">
      <YMaps
      className="map"
        query={{
          ns: "use-load-option",
          load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
        }}
      >
        <Map
          defaultState={{
            center: [41.331860, 69.263836],
            zoom: 17,
            controls: [ "fullscreenControl"],
          }}
        >
          <Placemark
            defaultGeometry={[41.331860, 69.263836]}
            properties={{
              balloonContentBody:
                "This is balloon loaded by the Yandex.Maps API module system",
            }}
          />
          <RouteButton
            options={{
              float: "right",
            }}
          />
        </Map>
      </YMaps>
    </div>
    </React.Fragment>
  );
}
