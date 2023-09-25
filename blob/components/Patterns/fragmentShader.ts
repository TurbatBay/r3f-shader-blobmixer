export const fragmentShader = /*glsl*/ `
varying vec2 vUv;

void main() {
  /*
  gl_FragColor is a special variable that holds the color of the
  fragment. It is a vec4, which means it has four components: red,
  green, blue, and alpha. Each component is a floating point number
  between 0.0 and 1.0. The default value is (0.0, 0.0, 0.0, 0.0).
  */

  // Pattern 3
  // float strength = vUv.x;


  
  // Pattern 5
  float strength = 1.0 - vUv.y;


  // Pattern 6
  float strength = 
  gl_FragColor = vec4(strength,strength, strength, 1.0);
}
`
