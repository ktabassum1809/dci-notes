import './Input.css'

function Input(props) {
    const isArea = props.type === "textarea"

    return (
        <>
            <label htmlFor={props.name}>{props.name}</label>
            {isArea ?
                <textarea {...props} id={props.name}></textarea>
            :
                <input {...props} id={props.name} />
            }
        </>
    )
}

export default Input
