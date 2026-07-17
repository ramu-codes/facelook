import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Floating gold-dust particles (Three.js) used on the split landing.
 * Fails silently if WebGL is unavailable.
 */
export default function Particles({ color = '#c8a97e', count = 260 }) {
  const mount = useRef(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;
    let renderer, scene, camera, points, raf;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(el.clientWidth, el.clientHeight);
      el.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 100);
      camera.position.z = 14;

      const positions = new Float32Array(count * 3);
      const speeds = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 30;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
        speeds[i] = 0.002 + Math.random() * 0.006;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({
        color: new THREE.Color(color),
        size: 0.09,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      points = new THREE.Points(geo, mat);
      scene.add(points);

      let mx = 0;
      const onMouse = (e) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
      };
      window.addEventListener('pointermove', onMouse);

      const animate = () => {
        const pos = geo.attributes.position.array;
        for (let i = 0; i < count; i++) {
          pos[i * 3 + 1] += speeds[i];
          pos[i * 3] += Math.sin(pos[i * 3 + 1] * 0.4) * 0.0016;
          if (pos[i * 3 + 1] > 10) pos[i * 3 + 1] = -10;
        }
        geo.attributes.position.needsUpdate = true;
        points.rotation.y += (mx * 0.06 - points.rotation.y) * 0.02;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };
      animate();

      const onResize = () => {
        if (!el.clientWidth) return;
        camera.aspect = el.clientWidth / el.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(el.clientWidth, el.clientHeight);
      };
      window.addEventListener('resize', onResize);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('pointermove', onMouse);
        geo.dispose();
        mat.dispose();
        renderer.dispose();
        el.contains(renderer.domElement) && el.removeChild(renderer.domElement);
      };
    } catch (e) {
      return undefined; // WebGL unavailable — particles are decorative
    }
  }, [color, count]);

  return <div className="landing-particles" ref={mount} />;
}
