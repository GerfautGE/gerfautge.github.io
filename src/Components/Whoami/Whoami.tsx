import './Whoami.scss';
import Console from './Console/Console';

import gerf from '../../static/gerf.png';

function Whoami() {
    return (
        <div className="whoami">
            <h2>Whoami</h2>
            <div className="whoami__content">
                <Console/>
                <img src={gerf} alt="gerf.png" className='profile_picture'/>
            </div>
        </div>
    )
}

export default Whoami