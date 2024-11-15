void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    vec2 stepSize = 1. / iResolution.xy;
    vec4 vel = textureLod(iChannel0, uv, 0.);
    vec4 col = textureLod(iChannel1, uv - dt * vel.xy * stepSize * 3., 0.);
    vec2 mo = iMouse.xy / iResolution.xy;
    vec4 prevMouse = texelFetch(iChannel1, ivec2(0, 0), 0).xyzw;
    
    if (iMouse.z > 1. && prevMouse.z > 1.) {
        float hue = float(uint(iMouse.z + iResolution.x * abs(iMouse.w) + iTime)) * 0.00001;
        vec4 rgb = vec4(hsv2rgb(vec3(hue, 1., 1.)), 1.);
        float bloom = smoothstep(-.5, .5, (length(mo - prevMouse.xy / iResolution.xy)));
        col += bloom * 8e-4 / pow(length(uv - mo.xy), 1.6) * rgb;
    }
    
    col = clamp(col, 0., 5.);
    col = max(col - (col * 8e-3), 0.);
    
    fragColor = col;
}
