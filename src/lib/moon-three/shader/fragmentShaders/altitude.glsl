uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorMultiplier;
uniform float uMaxHeight;

varying float vHeight;
varying float vRatio;

void main(){
    // vec3 color=mix(uDepthColor,uSurfaceColor,vHeight/uMaxHeight);
    float bandWidth=.05;
    if(vHeight/uMaxHeight<vRatio&&vRatio<(vHeight/uMaxHeight)+bandWidth){
        float a=smoothstep(vHeight/uMaxHeight,(vHeight/uMaxHeight)+bandWidth,vRatio);
        gl_FragColor=vec4(uSurfaceColor,a);
    }else{
        gl_FragColor=vec4(uSurfaceColor,0.);
    }
}