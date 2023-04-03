import './RS-img.scss';
import comp from './Comparaison.png';
import complex from './Complexity.png';

function RSimg(){
    return (
        <div className="RSimg">
            <h3>Reed-Solomon image</h3>
            <p>
                My first "real" project was to create a Python code for Reed-Solomon encoding/decoding. This was a part of a research study in Preparatory Class called TIPE.
                I mainly focus on :
                <ul>
                    <li>Algebra and Gallois Fields</li>
                    <li>Reed-Solomon Theory</li>
                    <li>Application for image transfer</li>
                </ul>
                <img src={comp} alt="Comparaison RS w and w/"/>
                <img src={complex} alt="Complexity of RS with Two methods"/>
            </p>
        </div>
    )
}

export default RSimg