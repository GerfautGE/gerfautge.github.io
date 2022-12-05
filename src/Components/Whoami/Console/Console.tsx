import './Console.scss';
import { useEffect, useRef, useState } from 'react';

function Console() {
    //state
    const [text, setText] = useState('');
    const [answer, setAnswer] = useState('');
    const [placeholder, setPlaceholder] = useState('');

    //parse json file
    const answers = require('./console.json');
    //functions
    const handleChange = (e: any) => {
        setText(e.target.value);
    }
    const string: string = 'whoami';
    const index = useRef(0);

    const ans = (text: string) => {
        if (text in answers) {
            setAnswer(answers[text]);
        }
        else {
            setAnswer('command not found');
        }
    }

    useEffect(() => {

        function tick() {
            index.current = index.current === string.length ? 0 : index.current;
            index.current++;
            setPlaceholder(string.slice(0, index.current));
        }
        let char = setInterval(tick, 400);
        return () => clearInterval(char);
    }, [placeholder]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        ans(text);
        setText('');
    }

    //render
    return (
        <div className="console" >
            <span className="dot" style={{ backgroundColor: '#FF5F57' }}></span>
            <span className="dot" style={{ backgroundColor: '#FFBD2D' }}></span>
            <span className="dot" style={{ backgroundColor: '#2CCC42' }}></span>
            <form onSubmit={handleSubmit}>
                gerfautge@github.io $ <input type="text" id='Console-input' placeholder={placeholder} autoComplete='off' autoCorrect='off' value={text} onChange={handleChange} onSubmit={handleSubmit} autoFocus />
            </form>
            <p className='answer'>
                {answer}
            </p>
        </div>
    )
}

export default Console