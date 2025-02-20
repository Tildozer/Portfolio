declare module "three/examples/jsm/Addons.js" {
  import {
    FontLoader,
    TextGeometry,
  } from "three/examples/jsm/loaders/FontLoader";
  export { FontLoader, TextGeometry };
}

declare namespace JSX {
  interface IntrinsicElements {
    textGeometry: unknown;
  }
}
