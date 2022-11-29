import './Console.scss';
import { useState } from 'react';

function Console() {
    //state
    const [text, setText] = useState('');
    const [answer, setAnswer] = useState('');

    //parse json file
    const answers = require('./console.json');

    //functions
    const handleChange = (e: any) => {
        setText(e.target.value);
    }

    const response = (text: string) =>{
        if(answers[text]){
            setAnswer(answers[text]);
        }else{
            setAnswer('Command not found');
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();      
        response(text);
        setText('');
    }

    //render
    return (
        <div className="console" >
            <span className="dot" style={{backgroundColor: '#FF5F57'}}></span>
            <span className="dot" style={{backgroundColor: '#FFBD2D'}}></span>
            <span className="dot" style={{backgroundColor: '#2CCC42'}}></span>
            <form onSubmit={handleSubmit}>
                gerfautge@github.io $ <input type="text" id='Console-input' placeholder='whoami' autoComplete='off' autoCorrect='off' value={text} onChange={handleChange} onSubmit={handleSubmit} />
            </form>
            <p className='answer'>
                {answer}
            </p>
        </div>
    )
}

export default Console