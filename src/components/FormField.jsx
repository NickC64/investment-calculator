import camelCaseToNormal from "../util/util";

export default function FormField({ name, value, onInputChange }) {

    function handleInputChange(event) {
        onInputChange(name, Number(event.target.value));
    }

    let displayName = camelCaseToNormal(name);
    return (
        <span><label htmlFor={name}>{displayName}</label><input name={name} value={value} type="number" onChange={handleInputChange}></input></span>
    )
}