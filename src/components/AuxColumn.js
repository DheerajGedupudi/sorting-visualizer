import './AuxColumn.css';

function AuxColumn(props) {
    let fraction = props.number / props.maximum * 100;
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
            {notCramped && !props.hideNumbers ?
                <p className='my-label-aux'>{props.number}</p> : <></>
            }
        </div>
    );
}

export default AuxColumn;