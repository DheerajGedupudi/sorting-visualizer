import AuxColumn from './AuxColumn';
import './AuxGraph.css';

function AuxGraph(props) {
    const barList = [];
    let size = 0;
    if (props.array != null)
    {
        size = props.array.length;
    }
    for (let i = 0; i < size; i++) {
        let bar = {
            index: i,
            value: props.array[i].value,
            color: props.array[i].color
        }
        barList.push(bar);
    }
    // console.log(barList);
    // console.log("max : "+props.maximum);
    return (
        <div className='aux-graph'>
            {barList.map((x) => (
                <AuxColumn number={x.value} index={x.index} maximum={props.maximum} color={x.color} totalNumber={props.array.length} hideIndexes={props.hideIndexes} />
            ))}
        </div>
    );
}

export default AuxGraph;