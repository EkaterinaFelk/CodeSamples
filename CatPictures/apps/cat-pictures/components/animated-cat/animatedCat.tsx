/* eslint-disable react/no-unknown-property */
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

const defaultScale = 1;
const scaleStep = 0.01;
const scaleDuration = 50;

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
      setClicked(true);
      setMessage('Ssshhhhhhh!');
    }, []);

    const getScale = useCallback((tick: number) => {
      return defaultScale + tick * scaleStep;
    }, []);

    let tick = 0;
    useFrame(() => {
      if (clicked) {
        tick++;
        meshRef.current.scale.x = getScale(tick);
        meshRef.current.scale.y = getScale(tick);

        if (tick > scaleDuration) {
          setClicked(false);
          tick = 0;
          meshRef.current.scale.x = defaultScale;
          meshRef.current.scale.y = defaultScale;
        }
      }
    });

    useFrame(({ pointer, viewport }) => {
      if (cursorOutOfView && meshProps.position) {
        meshRef.current.lookAt(...meshProps.position);
      } else {
        const x = (pointer.x * viewport.width) / 2.5;
        const y = (pointer.y * viewport.height) / 2.5;

        x && y && meshRef.current.lookAt(x, y, 1);
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
