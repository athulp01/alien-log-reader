import Toggle from "react-toggle";

function ToggleSwitch() {
    return (
            <label>
            <span className="mx-2 font-bold">Show only not issued</span>
                <Toggle defaultChecked={true} disabled={false} />
            </label>
    );
}

export default ToggleSwitch;
