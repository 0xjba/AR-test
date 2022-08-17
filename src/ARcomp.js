import React from 'react';
import { Scene } from 'aframe-react';
import 'babel-polyfill';
import 'aframe';
import arjs from "@ar-js-org/ar.js"; 
//import 'arjs';

export default class ARcomp extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div
        style={{ width: "800px", height: "800px" }}
        ref={mount => { this.mount = mount; }}
      >
    <a-scene
        vr-mode-ui="enabled: false"
		embedded
        arjs='sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;'>
        <a-entity gltf-model="./assets/magnemite/scene.gltf" rotation="0 180 0" scale="0.15 0.15 0.15" gps-entity-place="longitude: 73.133662; latitude: 19.002997;" animation-mixer/>
            <a-camera gps-camera rotation-reader></a-camera>
	</a-scene>
      </div>
    );
  }

}
