export const ChildComponent = (props) => {
    return (
        <button onClick={() => props.clickHandler('Test')}>
            Child click me!
        </button>
    )
}