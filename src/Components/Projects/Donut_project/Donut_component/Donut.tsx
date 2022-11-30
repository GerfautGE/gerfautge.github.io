import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Donut() {
    const torus: any = useRef();
    useFrame(() => {
        if (torus.current && torus.current.hasOwnProperty('rotation')) {
            torus.current.rotation.x += 0.02;
            torus.current.rotation.y += 0.04;
        }
    });

    return (
        <mesh ref={torus} position={[0, 0, -6]} rotation={[Math.PI * 5 / 6, 0, 0]}>
            <torusGeometry args={[2, 0.6, 16, 250]} />
            <meshStandardMaterial color="darksalmon" />
        </mesh>
    )
}

export default Donut;