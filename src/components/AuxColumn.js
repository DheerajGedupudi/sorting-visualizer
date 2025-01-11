import './AuxColumn.css';

function AuxColumn(props) {
    let reference = 100;
    if (!props.hideNumbers) {
        reference -= 20;
    }
    if (!props.hideIndexes) {
        reference -= 20;
    }
    let fraction = props.number / props.maximum * reference;
    let heightOfBar = fraction.toString() + "%";
    let notCramped = props.totalNumber < 25;
    // let height = window.innerHeight;
    // let width = window.innerWidth;
    // console.log(height+" "+width+" "+props.maximum);

    return (
        <div className='aux-column'>
            {notCramped && !props.hideIndexes ?
                <p className='my-label-aux'>{props.index}</p> : <></>
            }
            <span className='aux-bar' style={{ height: `${heightOfBar}`, backgroundColor: `${props.color}` }}></span>
            {notCramped ?
                <p className='my-label-aux'>{props.number}</p> : <></>
            }
        </div>
    );
}

export default AuxColumn;