import './Donut.scss'
import donut from "../../../static/donut.png";

function Donut() {
    return (
        <div className="Donut">
            <h3>C Donut in Web Assembly</h3>
            <img src={donut} alt="Donut" />
            <p>Visit <a href="https://gerfautge.github.io/DonutWASM/">this link</a></p>
            
        </div>
    )
}

export default Donut