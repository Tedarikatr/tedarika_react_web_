import { useState } from "react";
import solutionVar from "../veriable/solutionVar";
import SolutionText from "../text/solutionText";

const SolutionButton = () => {
    const [activeButton, setActiveButton] = useState(0);
    const [solution, setSolution] = useState(solutionVar);


    const handleClick = (index: number) => {
        setSolution([solutionVar[index]]);
        setActiveButton(index);
    }

    return (
        <>
            <div className="solution-buttons">
                {["Tedarika Bugün", "Tedarika Online (Yakında)", "Tedarika Global (Yakında)", "Tedarika Lojistik (Yakında)"].map((buttonText, index) => (
                    <button
                        key={index}
                        style={{ backgroundColor: activeButton === index ? "#4EAB33" : "initial" }}
                        onClick={() => handleClick(index)}
                    >
                        <img src={`./images/solution-icon/${index === 0 ? "box-open" : index === 1 ? "globe" : index === 2 ? "globe-americas" : "shipping-fast"}.png`} alt={buttonText} />
                        <p>{buttonText}</p>
                    </button>
                ))}
            </div>
            <SolutionText solution={solution} />
        </>
    );
}

export default SolutionButton;