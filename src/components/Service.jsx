import Button from "./Button";

function Service (props) {
    let title = props.title;
    let description = props.description;
    let imgSrc = props.imgSrc;
    let buttonType = props.buttonType;
    let buttonValue = props.buttonValue;
    let buttonLink = props.buttonLink;
    // console.log(buttonLink)

    return (
        <>
            <article className="serviceComponent">
                    <img className="imgServiceComponent" src={imgSrc} alt={title} />
                    <h3>{title}</h3>

                    <h5>{description}</h5>

                    <a href={buttonLink}><Button type={buttonType} 
                        value={buttonValue}
                    /></a>
            </article>
        </>
    )
}

export default Service