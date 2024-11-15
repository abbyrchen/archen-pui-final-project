import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const FluidShader = () => {
    const canvasRef = useRef();
    const mouse = { x: 0, y: 0, z: 0, w: 0 }; // z, w for mouse state

    useEffect(() => {
        let renderer, scene, camera;
        let bufferA, bufferB, bufferC, bufferD;
        let shaderA, shaderB, shaderC, shaderD, finalShader;
        let animationId;
        const width = window.innerWidth;
        const height = window.innerHeight;

        const loadShader = async (path) => {
            const response = await fetch(path);
            return response.text();
        };

        const init = async () => {
            // Setup Renderer
            renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
            renderer.setSize(width, height);
            renderer.setPixelRatio(window.devicePixelRatio);

            // Setup Scene & Camera
            scene = new THREE.Scene();
            camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

            // Create Render Targets (Ping-Pong Buffers)
            bufferA = new THREE.WebGLRenderTarget(width, height, { type: THREE.FloatType });
            bufferB = new THREE.WebGLRenderTarget(width, height, { type: THREE.FloatType });
            bufferC = new THREE.WebGLRenderTarget(width, height, { type: THREE.FloatType });
            bufferD = new THREE.WebGLRenderTarget(width, height, { type: THREE.FloatType });

            // Load Shaders
            const commonShader = await loadShader(`${process.env.PUBLIC_URL}/shaders/common.glsl`);
            const bufferAShader = await loadShader(`${process.env.PUBLIC_URL}/shaders/bufferA.glsl`);
            const bufferBShader = await loadShader(`${process.env.PUBLIC_URL}/shaders/bufferB.glsl`);
            const bufferCShader = await loadShader(`${process.env.PUBLIC_URL}/shaders/bufferC.glsl`);
            const bufferDShader = await loadShader(`${process.env.PUBLIC_URL}/shaders/bufferD.glsl`);
            const finalShaderCode = await loadShader(`${process.env.PUBLIC_URL}/shaders/image.glsl`);

            // Shader Material for each stage
            shaderA = new THREE.ShaderMaterial({
                fragmentShader: `${commonShader}\n${bufferAShader}`,
                vertexShader: basicVertexShader(),
                uniforms: {
                    iResolution: { value: new THREE.Vector2(width, height) },
                    iMouse: { value: new THREE.Vector4() },
                    iChannel0: { value: bufferB.texture },
                },
            });

            shaderB = new THREE.ShaderMaterial({
                fragmentShader: `${commonShader}\n${bufferBShader}`,
                vertexShader: basicVertexShader(),
                uniforms: {
                    iResolution: { value: new THREE.Vector2(width, height) },
                    iMouse: { value: new THREE.Vector4() },
                    iChannel0: { value: bufferA.texture },
                },
            });

            shaderD = new THREE.ShaderMaterial({
                fragmentShader: `${bufferDShader}`,
                vertexShader: basicVertexShader(),
                uniforms: {
                    iResolution: { value: new THREE.Vector2(width, height) },
                    iMouse: { value: new THREE.Vector4() },
                    iChannel0: { value: bufferC.texture },
                },
            });

            finalShader = new THREE.ShaderMaterial({
                fragmentShader: `${finalShaderCode}`,
                vertexShader: basicVertexShader(),
                uniforms: {
                    iResolution: { value: new THREE.Vector2(width, height) },
                    iChannel0: { value: bufferD.texture },
                },
            });

            animate();
        };

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            // Update mouse and time
            shaderA.uniforms.iMouse.value = new THREE.Vector4(mouse.x, mouse.y, 1, 1);

            renderer.setRenderTarget(bufferA);
            renderer.render(scene, camera);

            // Render buffers
            [bufferA, bufferB, bufferC].forEach((buf, idx) => {
                renderer.setRenderTarget(buf);
                renderer.render(scene, camera);
            });

            renderer.setRenderTarget(null);
            renderer.render(scene, camera);
        };

        const basicVertexShader = () => `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `;

        const onMouseMove = (event) => {
            mouse.x = event.clientX / width;
            mouse.y = 1 - event.clientY / height; // y is inverted
        };

        window.addEventListener('mousemove', onMouseMove);

        init();

        return () => {
            cancelAnimationFrame(animationId);
            renderer.dispose();
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default FluidShader;
