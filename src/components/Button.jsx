function Button (props) {
    const type = props.type;
    const value = props.value;


    if (type === "whiteBackground" || type === "halfDarkBlueBackground") {
        return (
            <>
                <button className={type}>{value}</button>
            </>
        )
    }
}

export default Button