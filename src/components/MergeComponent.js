import './AuxGraph.css';
import AuxGraph from './AuxGraph';

function MergeComponent(props) {

    let maximum = props.max;
    return (
        <div className='inplace-graph'>
            <div>
                <p>Left Auxiliary Array</p>
                <AuxGraph array={props.barL} maximum={maximum} hideIndexes={props.hideIndexes} isAux={true} />
            </div>
            <div>
                <p>Right Auxiliary Array</p>
                <AuxGraph array={props.barR} maximum={maximum} hideIndexes={props.hideIndexes} isAux={true}/>
            </div>
        </div>
    );
}

export default MergeComponent;