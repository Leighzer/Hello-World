#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
    
    vec2 u_mouse_norm = u_mouse/u_resolution;
    vec2 st = gl_FragCoord.xy/u_resolution;
    st = st + u_mouse_norm;
    
    float r = sin(u_time) + st.x;
    float g = sin(u_time * 2.0) + st.y;
    float b = sin(u_time * 4.0) + sqrt(st.x + st.y);
    
	gl_FragColor = vec4(r,g,b,1.0);
}