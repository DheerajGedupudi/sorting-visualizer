import './Column.css';

function Column(props)
{
    let fraction = props.number/props.maximum*90;
    let heightOfBar = fraction.toString()+"%";
    let notCramped = props.totalNumber<75;
    // let height = window.innerHeight;
    // let width = window.innerWidth;
    // console.log(height+" "+width);

    return(
        <div className='column'>
            {notCramped && !props.hideIndexes? 
            <p className='my-label'>{props.index}</p>:<></>}
            <span className='bar' style={{ height: `${heightOfBar}`, backgroundColor: `${props.color}` }}></span>
            {notCramped ?
                <p className='my-label'>{props.number}</p> : <></>}
        </div>
    );
}

export default Column;