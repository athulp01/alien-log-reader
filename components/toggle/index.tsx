import Toggle from "react-toggle";

function ToggleSwitch({ showOnlyNonIssuedState }) {
    const [ showOnlyNonIssued, setShowOnlyNonIssuedState ] = showOnlyNonIssuedState;
    
    const handleChange = (e) => {
        setShowOnlyNonIssuedState(e.target.checked);
    }

    return (
            <label className="flex items-center">
                <span className="mx-2 font-bold">Show only not issued</span>
                <Toggle onChange={handleChange} value={showOnlyNonIssued} />
            </label>
    );
}

export default ToggleSwitch;
