import Header from './components/Header';
import Content from './components/Content';
import Total from "./components/Total";

const App = () => {
    const course = "Half stack application development";
    const part1 = {
        title: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        title: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        title: 'State of a component',
        exercises: 14
    }
    const content = [
        part1,
        part2,
        part3
    ]
    const total = part1.exercises + part2.exercises + part3.exercises;

    return (
        <div>
            <Header course={course}/>
            <Content content={content} />
            <Total total={total} />
        </div>
    )
}

export default App;
