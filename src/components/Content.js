import Part from "./Part";

const Content = ({content}) => {
    return (
        <div>
            {content.map((element) =>
                <Part key={element.title} part={element} />
            )}
        </div>
    )
}

export default Content;