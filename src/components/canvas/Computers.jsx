import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isRotating }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Add Y-axis rotation and stop it after a certain time
  const rotationSpeed = 4; // Adjust the rotation speed
  const stopRotationTime = 4; // Time in seconds to stop rotation

  useFrame(({ clock }) => {
    // Check if enough time has passed to stop the rotation and whether it should still rotate
    if (clock.elapsedTime < stopRotationTime && isRotating) {
      // Continue rotating
      computer.scene.rotation.y += rotationSpeed * -0.0005;
    }
  });

  // Calculate the position based on isMobile
  const position = isMobile ? [0, -3.5, 0] : [0, -3, -3.5];

  return (
    <group>
      {/* Lights */}
      <hemisphereLight intensity={0.7} />
      <spotLight
        position={[-20, 5, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Computer Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.9}
        position={position}
        rotation={[-0.005, -0.05, -0.05]}
        castShadow
      />
    </group>
  );
};

const ComputersCanvas = ({ isMobile }) => {
  const [isRotating, setIsRotating] = useState(true); // State to control rotation

  useEffect(() => {
    // Stop the rotation after the specified time
    const timer = setTimeout(() => {
      setIsRotating(false);
    }, 4000); // Stop after 4 seconds

    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[window.devicePixelRatio, 2]}
      camera={{ position: [15, 30, -5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "110%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isRotating={isRotating} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
