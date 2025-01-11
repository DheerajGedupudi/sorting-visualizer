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

    // Calculate extra height based on whether labels are shown
    const extraHeight = (!props.hideIndexes || !props.hideNumbers) ? 20 : 0;

    return (
        <div
            className="graph"
            style={{
                height: `calc(35% + ${extraHeight}px)` // Add extra height dynamically
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
