interface Solution {
    title: string;
    subtitle: string;
}

interface SolutionTextProps {
    solution: Solution[];
}

const SolutionText: React.FC<SolutionTextProps> = ({ solution }) => {
    return (
        <div className="change-part">
            <img src="./images/solution-icon/trolley.png" alt="" />
            <div className="text">
                <h2>{solution[0].title}</h2>
                <p>{solution[0].subtitle}</p>
            </div>
        </div>
    );
};

export default SolutionText;
