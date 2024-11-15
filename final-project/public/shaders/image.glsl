

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord / iResolution.xy;
#ifdef PIXELATED
    vec2 dxy = PIXEL_SIZE / iResolution.xy;
    uv = dxy * floor(uv / dxy) + 1. / iResolution.xy;
    vec4 col = textureLod(iChannel0, uv, 0.);
    vec2 fr = PIXEL_SIZE * (fract(fragCoord/PIXEL_SIZE) - .5);
    col *= step(max(fr.x, fr.y) + BORDER_THICKNESS - PIXEL_SIZE / 2., 0.);    
#else
	vec4 col = textureLod(iChannel0, uv, 0.);
#endif
    
    // Bottom row contain previous mouse data so don't display that.
   	if (fragCoord.y < 1. 
#ifdef PIXELATED 
            * PIXEL_SIZE 
#endif
       )
    {
        col = vec4(0.);
    }    
    
#ifndef INVERT_COLORS
    fragColor = vec4(sqrt(col.xyz), 1.);
#else
    fragColor = vec4(sqrt(1. - col.xyz), 1.);
#endif
}