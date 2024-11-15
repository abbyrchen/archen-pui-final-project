#include "common.glsl"

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    vec2 stepSize = 1. / iResolution.xy;
    vec4 prevMouse = textureLod(iChannel0, vec2(0.), 0.);
    vec4 col = fluidSolver(iChannel0, uv, stepSize, iMouse, prevMouse);
    
    if (fragCoord.y < 1.) {
        col = iMouse;
    }
    
    fragColor = col;
}
