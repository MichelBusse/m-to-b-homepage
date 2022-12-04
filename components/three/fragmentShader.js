const fragmentShader = `
varying float vDistance;

void main() {
  vec3 color = vec3(0.27, 0.75, 0.95);
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 2.0);

  color = mix(color, vec3(0.95, 0.23, 0.45), vDistance * 0.35);
  color = mix(vec3(0.0), color, strength);
  gl_FragColor = vec4(color, strength);
}
`

export default fragmentShader
