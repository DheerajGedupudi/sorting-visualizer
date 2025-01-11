import './Graph.css';
import Column from './Column';

function Graph(props) {
    const barList = [];
    for (let i = 0; i < props.array.length; i++) {
        let bar = {
            index: i,
            value: props.array[i].value,
            color: props.array[i].color
        };
        barList.push(bar);
    }

    return (
        <div
            className="graph"
            style={{
                height: `${props.graphHeight}vh` // Add extra height dynamically
            }}
        >
            {barList.map((x) => (
                <Column
                    number={x.value}
                    index={x.index}
                    maximum={props.maximum}
                    color={x.color}
                    totalNumber={props.array.length}
                    hideIndexes={props.hideIndexes}
                    hideNumbers={props.hideNumbers}
                    key={x.index} // Add a key for each child in the list
                />
            ))}
        </div>
    );
}

export default Graph;
