// The "Welcome" component accepts "props" as an object

const Welcome = (props) => {
    // eslint-disable-next-line react/prop-types
    return <h1>Hello, {props.name} {props.lastname}</h1>
}

export default Welcome

