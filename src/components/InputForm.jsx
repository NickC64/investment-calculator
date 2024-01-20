import FormField from "./FormField"

export default function InputForm( { formInputs, onFormChange } ) {

    function handleInputChange(name, val) {
        onFormChange(name, val);
    }

    const inputPairs = Object.entries(formInputs).map( (obj, index, arr) => (
        index % 2 == 0 ?
        <span key={index} className="input-group">
            <FormField name={arr[index][0]} value={arr[index][1]} onInputChange={handleInputChange} />
            <FormField name={arr[index + 1][0]} value={arr[index + 1][1]} onInputChange={handleInputChange} />
        </span>
        : undefined
    ));

    return (
        <section id="user-input" className="input-group">
            {inputPairs}
        </section>
    )
}