import cs from './CS.jpeg'

const Compiler = () => {
    return (
        <div>
            <h3>Compiler-CS</h3>
            <p>
                This project is a school project I study @CentraleSupélec. It is a Compiler written in OCaml for compiling E (a subset of C) into RISC-V assembly.
                It focuses on :
                <ul>
                    <li>Lexer</li>
                    <li>Parser</li>
                    <li>Interpreter</li>
                    <li>Control Flow Graph as an Intermediate Representation of the source code</li>
                    <li>Optimisations (Constant Propagation, Dead Assign Alimination, Nop Elimination, ...)</li>
                    <li>Register Transfer Language</li>
                    <li>Register Allocation</li>
                </ul>
                <img src={cs} alt="CS Logo"/>
            </p>
            
        </div>
    )
}
export default Compiler