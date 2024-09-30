import SolutionButton from "./button/solutionButton"; 
import "./style/solution.sass"

const Solution = () => {

    return (
        <div id="solution-container" className="solution-container">
            <div className="solution-box">
                <div className="head-title">
                    <h2>Çözümlerimiz</h2>
                </div>
                <div className="solution-section">
                    <SolutionButton />
                </div>
            </div>
        </div>
    );
};

export default Solution;
