import './Canvas3D.scss';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import donut_c from '../../../static/donut_c.png';

import Donut from './Donut_component/Donut';

function Canvas3D() {

    return (
        <div className="donut">
            <h3>Donut.c</h3>
            <div className="donut__content">
                <div className="canvas">
                    <Canvas camera={{ fov: 45, position: [15, 6, 15] }}>
                        <ambientLight intensity="1.25" />
                        <directionalLight position={[0, 0, 10]} intensity="1.25" />
                        <Donut />
                        <mesh position={[0, 0, 0]}>
                            <planeGeometry args={[19, 10]} />
                            <meshBasicMaterial side={2} opacity={0.2} color='black' transparent />
                        </mesh>
                        <mesh position={[0, 0, 4]}>
                            <sphereGeometry args={[0.05, 32, 32]} />
                        </mesh>
                        <OrbitControls />
                    </Canvas>
                </div>
                <div className="code_image">
                    <img src={donut_c} alt="donut.c" />
                </div>
            </div>
        </div>
    )
}


export default Canvas3D