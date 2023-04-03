/*import Canvas3D from './Donut_project/Canvas3D';*/
import RSimg from './RS-img_project/RS-img';
import Compiler from './Compiler/Compiler';
import XV6 from './XV6/XV6';
import './Projects.scss';

function Projects(){
    return (
        <div className="projects">
            <h2>Projects</h2>
            <RSimg/>
            <Compiler/>
            <XV6/>
        </div>
    )
}
/*Canvas3D*/
export default Projects