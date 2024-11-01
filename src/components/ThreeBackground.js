// src/components/ThreeBackground.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.z = 1;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Create particles
        const particles = 500;
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];

        // Color palette
        const colorPalette = [
            new THREE.Color(0x1a1a2e),
            new THREE.Color(0x16213e),
            new THREE.Color(0x0f3460),
            new THREE.Color(0x53354a),
            new THREE.Color(0xf5f5f5),
        ];

        for (let i = 0; i < particles; i++) {
            const x = THREE.MathUtils.randFloatSpread(200);
            const y = THREE.MathUtils.randFloatSpread(200);
            const z = THREE.MathUtils.randFloatSpread(200);

            positions.push(x, y, z);

            // Assign a random color from the palette
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        );
        geometry.setAttribute(
            'color',
            new THREE.Float32BufferAttribute(colors, 3)
        );

        const material = new THREE.PointsMaterial({
            size: 1.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.7,
            depthWrite: false,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Base rotation speeds
        const baseRotationSpeedX = 0.002; // Increased from 0.001 for more apparent spinning
        const baseRotationSpeedY = 0.002;
        let direction = 1; // 1 for normal, -1 for reverse

        // Current rotation speeds
        let currentRotationSpeedX = baseRotationSpeedX;
        let currentRotationSpeedY = baseRotationSpeedY;

        // Target rotation speeds based on mouse position
        let targetRotationSpeedX = baseRotationSpeedX;
        let targetRotationSpeedY = baseRotationSpeedY;

        // Handle window resize
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Mouse movement for interaction
        const handleMouseMove = (event) => {
            // Normalize mouse position from -1 to 1
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            // Adjust target rotation speeds based on mouse position
            // Increased multiplier for more apparent effect
            targetRotationSpeedX = baseRotationSpeedX + mouseY * 0.005;
            targetRotationSpeedY = baseRotationSpeedY + mouseX * 0.005;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Click to change direction
        const handleClick = () => {
            direction *= -1;
        };
        window.addEventListener('click', handleClick);

        // Touch movement for mobile devices
        const handleTouchMove = (event) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                const touchX = (touch.clientX / window.innerWidth) * 2 - 1;
                const touchY = -(touch.clientY / window.innerHeight) * 2 + 1;

                targetRotationSpeedX = baseRotationSpeedX + touchY * 0.005;
                targetRotationSpeedY = baseRotationSpeedY + touchX * 0.005;
            }
        };
        window.addEventListener('touchmove', handleTouchMove);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Smoothly interpolate current rotation speeds towards target
            currentRotationSpeedX += (targetRotationSpeedX - currentRotationSpeedX) * 0.05; // Increased interpolation factor for quicker response
            currentRotationSpeedY += (targetRotationSpeedY - currentRotationSpeedY) * 0.05;

            // Apply rotation with direction
            points.rotation.x += currentRotationSpeedX * direction;
            points.rotation.y += currentRotationSpeedY * direction;

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            window.removeEventListener('touchmove', handleTouchMove);
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', // Background gradient
            }}
        />
    );
};

export default ThreeBackground;