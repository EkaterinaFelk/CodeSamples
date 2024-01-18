'use client';

import React, { memo, useCallback, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader, MeshProps } from '@react-three/fiber';
import { Text } from '@react-three/drei';

type AnimatedCatProps = {
  imgSrc: string;
  name: string;
  cursorOutOfView?: boolean;
} & MeshProps;

export const AnimatedCat = memo(
  ({
    imgSrc,
    name = 'Cat',
    cursorOutOfView = true,
    ...meshProps
  }: AnimatedCatProps) => {
    const texture = useLoader(THREE.TextureLoader, imgSrc);
    const meshRef = useRef<THREE.Mesh>(null!);

    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [message, setMessage] = useState('');

    const handlePointerOver = useCallback(() => {
      setHovered(true);
      setMessage(`Hello! I am ${name}!`);
    }, [name]);

    const handlePointOut = useCallback(() => {
      setHovered(false);
      setMessage('');
    }, []);

    const handleClick = useCallback(() => {
      setMessage('Ssshhhhhhh!');
      setClicked(true);
    }, []);

    let scaleTick = 0;
    useFrame(() => {
      if (clicked) {
        scaleTick++;
        meshRef.current.scale.x = 1 + scaleTick * 0.01;
        meshRef.current.scale.y = 1 + scaleTick * 0.01;
        if (scaleTick > 50) {
          setClicked(false);
          scaleTick = 0;
          meshRef.current.scale.x = 1;
          meshRef.current.scale.y = 1;
        }
      }
    });

    useFrame(({ pointer, viewport }) => {
      if (cursorOutOfView && meshProps.position) {
        meshRef.current.lookAt(...meshProps.position);
      } else {
        const x = (pointer.x * viewport.width) / 2.5;
        const y = (pointer.y * viewport.height) / 2.5;

        meshRef.current.lookAt(x, y, 1);
      }
    });

    return (
      <mesh
        {...meshProps}
        ref={meshRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointOut}
        onClick={handleClick}
      >
        <boxGeometry args={[2, 2, 0]} />
        <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
        {hovered && message && (
          <Text fontSize={0.5} color="black" position={[0, -1.5, 0]}>
            {message}
          </Text>
        )}
      </mesh>
    );
  }
);
