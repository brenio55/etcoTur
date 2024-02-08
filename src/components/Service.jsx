import Button from "./Button";

function Service (props) {
    let title = props.title;
    let description = props.description;
    let imgSrc = props.imgSrc;
    let buttonType = props.buttonType;
    let buttonValue = props.buttonValue;

    return (
        <>
            <article className="serviceComponent">
                    <img className="imgServiceComponent" src={imgSrc} alt={title} />
                    <h3>{title}</h3>

                    <h5>{description}</h5>

                    <Button type={buttonType} 
                        value={buttonValue}
                    />
            </article>
        </>
    )
}

export default Service