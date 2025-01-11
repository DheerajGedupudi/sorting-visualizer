import './Column.css';

function Column(props) {
    let fraction = (props.number / props.maximum) * 100;
    let heightOfBar = `${fraction}%`;
    let notCramped = props.totalNumber <= 50;

    return (
        <div className="column">
            {/* Render the bar with the label overlay */}
            <span
                className="bar"
                style={{
                    height: heightOfBar,
                    backgroundColor: props.color,
                }}
            >
                {/* Overlay index or number label */}
                {notCramped && !props.hideNumbers && (
                    <span className="my-label">{props.number}</span>
                )}

            </span>
        </div >
    );
}

export default Column;
