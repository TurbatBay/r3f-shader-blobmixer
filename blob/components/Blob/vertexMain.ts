export const vertexMain = /*glsl*/ `
    vec3 coords = normal;
    coords.y += uTime;
   

    //varrying

    vPosition = position;
    vNormal = normal;
    vUv = uv;
vec3 noisePattern = vec3(noise(vec3(vUv * 2.0, uTime * 0.5)));

    float pattern = wave(noisePattern);
        vDisplacement = pattern;

    //MVP
    float displacement = vDisplacement  * 0.3;
    `
