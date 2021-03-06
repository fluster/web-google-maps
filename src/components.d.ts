/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { JSX } from '@stencil/core';
import {
  WebGoogleMapsOptions,
} from './types/web-google-maps/web-google-maps-options';
import {
  WebGoogleMapsStyle,
} from './types/web-google-maps/web-google-maps-style';
import {
  WebGoogleMapsCircle,
} from './types/web-google-maps/web-google-maps-circle';
import {
  WebGoogleMapsMarkers,
} from './types/web-google-maps/web-google-maps-markers';


export namespace Components {
  interface WebGoogleMaps {
    'apiKey': string;
    'circles': WebGoogleMapsCircle[];
    'lat': number;
    'lng': number;
    'mapStyle': WebGoogleMapsStyle;
    'markers': WebGoogleMapsMarkers;
    'options': WebGoogleMapsOptions;
  }
}

declare namespace LocalJSX {
  interface WebGoogleMaps extends JSXBase.HTMLAttributes {
    'apiKey'?: string;
    'circles'?: WebGoogleMapsCircle[];
    'lat'?: number;
    'lng'?: number;
    'mapStyle'?: WebGoogleMapsStyle;
    'markers'?: WebGoogleMapsMarkers;
    'onGoogleMapsApiKeyLoaded'?: (event: CustomEvent<void>) => void;
    'options'?: WebGoogleMapsOptions;
  }

  interface ElementInterfaces {
    'WebGoogleMaps': Components.WebGoogleMaps;
  }

  interface IntrinsicElements {
    'WebGoogleMaps': LocalJSX.WebGoogleMaps;
  }
}
export { LocalJSX as JSX };

declare module "@stencil/core" {
  export namespace JSX {
    interface ElementInterfaces extends LocalJSX.ElementInterfaces {}
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

declare global {


  interface HTMLWebGoogleMapsElement extends Components.WebGoogleMaps, HTMLStencilElement {}
  var HTMLWebGoogleMapsElement: {
    prototype: HTMLWebGoogleMapsElement;
    new (): HTMLWebGoogleMapsElement;
  };
  interface HTMLElementTagNameMap {
    'web-google-maps': HTMLWebGoogleMapsElement
  }

  interface ElementTagNameMap {
    'web-google-maps': HTMLWebGoogleMapsElement;
  }
}

