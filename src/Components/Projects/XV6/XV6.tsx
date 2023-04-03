import mit from './MIT.png'
import cs from './CS.jpeg'

const XV6 = () => {
    return (
        <div className="xv6">
            <h3>XV6</h3>
            <p>
                This is a fork of XV6 Operating System from MIT PDOS. This aims to be my answers to mit labs as well as what we study @CentraleSupélec.<br/>
                <img src={cs} alt="CentraleSupélec logo" />
                <img src={mit} alt="MIT PDOS logo" />
            </p>
        </div>
    )
}
export default XV6