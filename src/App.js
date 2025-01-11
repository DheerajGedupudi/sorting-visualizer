import { useState } from 'react';
import './App.css';
import Graph from './components/Graph';
import { useEffect } from 'react';
import bubbleSort from './algorithms/BubbleSort';
import { Bar } from './classes/Bar';
import selectionSort from './algorithms/SelectionSort';
import insertionSort from './algorithms/InsertionSort';
import mergeSort from './algorithms/MergeSort';
import quickSort from './algorithms/QuickSort';
import MergeComponent from './components/MergeComponent';

function App() {

	const defaultSize = 20;

	let defaultNumArr = [];

	for (let i = 1; i <= defaultSize; i++) {
		defaultNumArr.push(i);
	}

	let defaultBarArr = [];

	function createArrayOf(n) {
		let myArr = [];
		for (let i = 0; i < n; i++) {
			myArr.push(new Bar(i + 1, 'burlywood'));
		}
		return myArr;
	}

	const [arr, setArr] = useState(createArrayOf(20));
	const [barL, setBarL] = useState([]);
	const [barR, setBarR] = useState([]);

	const [iters, setIters] = useState([]);

	const [barLIters, setBarLIters] = useState([]);

	const [barRIters, setBarRIters] = useState([]);

	const [index, setIndex] = useState(0);

	const [sizeInput, setSizeInput] = useState(defaultSize); // Temporary input state

	const [size, setSize] = useState("20");

	const [isPlaying, setIsPlaying] = useState(false);

	const [algorithm, setAlgorithm] = useState("Please Select Algorithm");

	const [hideIndexes, setHideIndexes] = useState(true);

	const [hideNumbers, setHideNumbers] = useState(false);

	const [transitionTime, setTransitionTime] = useState(500);

	const algoMap = {
		"Bubble Sort": bubbleSort,
		"Selection Sort": selectionSort,
		"Insertion Sort": insertionSort,
		"Merge Sort": mergeSort,
		"Quick Sort": quickSort
	};

	const startAutoPlay = () => {
		setIsPlaying(true);
	};

	const stopAutoPlay = () => {
		setIsPlaying(false);
	};

	function handleSizeChange(event) {
		const result = event.target.value.replace(/\D/g, '');
		setSizeInput(result);
	}

	function createButtonHandler() {
		const newSize = parseInt(sizeInput, 10);
		if (newSize > 0 && newSize <= 100) {
			setSize(newSize);
			setArr(createArrayOf(newSize));
			setIndex(0);
			setIters([]);
			setBarL([]);
			setBarR([]);
			setIsPlaying(false);
		}
		else {
			alert("Please give a number which is less than or equal to 100");
		}
	}

	function randomizeArray() {
		for (let i = arr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}

		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Bar(arr[i].value, 'burlywood');
		}
	}

	function randomizeButtonHandler() {
		// console.log(arr);
		const sortingFunction = algoMap[algorithm];
		if (sortingFunction == null) {
			alert("Please Select an Algorithm");
			return;
		}
		randomizeArray();
		const ans = sortingFunction([...arr]);
		// console.log("ans is :");
		// console.log(ans);
		// console.log("finished");
		const sortedIters = ans[0];
		if (algorithm === "Merge Sort") {
			const sortedLIters = ans[1];
			const sortedRIters = ans[2];
			setBarLIters(sortedLIters);
			setBarRIters(sortedRIters);
		}
		setIters(sortedIters);
		setIndex(0);
		// console.log(index);
		// console.log(iters);
		setIsPlaying(false);
	}

	function resetButtonHandler() {
		setIsPlaying(false);
		setIndex(0);
		setArr(iters[0]);
	}

	function previousButtonHandler() {
		setIsPlaying(false);
		if (index === 0) {
			return;
		}
		setIndex(index - 1);
		setArr(iters[index - 1]);
		if (algorithm === "Merge Sort") {
			setBarL(barLIters[index - 1]);
			setBarR(barRIters[index - 1]);
		}
	}

	function nextButtonHandler() {
		setIsPlaying(false);
		let size = iters.length;
		if (index === size - 1) {
			return;
		}
		setIndex((index + 1));
		setArr(iters[index + 1]);
		if (algorithm === "Merge Sort") {
			setBarL(barLIters[index + 1]);
			setBarR(barRIters[index + 1]);
		}
	}

	function playButtonHandler() {
		setIsPlaying(true);
	}

	function stopButtonHandler() {
		setIsPlaying(false);
	}

	function algoChangeHandler(algorithm) {
		// console.log(algorithm);
		setIters([]);
		setIndex(0);
		setAlgorithm(algorithm);

	}

	function autoPlayNextStep() {
		const newIndex = index + 1;
		if (newIndex < iters.length) {
			setIndex(newIndex);
			setArr(iters[newIndex]);
			setBarL(barLIters[newIndex]);
			setBarR(barRIters[newIndex]);
		} else {
			setIsPlaying(false); // Stop when the end is reached
		}
	}

	function handleCheckBoxIndexes(e) {
		setHideIndexes(!e.target.checked);
	}

	function handleCheckBoxNumbers(e) {
		setHideNumbers(!e.target.checked);
	}

	useEffect(() => {
		let intervalId;

		if (isPlaying) {
			intervalId = setInterval(() => {
				autoPlayNextStep();
			}, transitionTime);
		} else {
			clearInterval(intervalId);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [isPlaying, index]);

	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].value > max) {
			max = arr[i].value;
		}
	}
	// console.log(max);
	return (
		<div className="App">
			<h1>Sorting Visualizer</h1>
			<div>
				<label>Array Size: </label>
				<input type='text' defaultValue={"20"} onChange={handleSizeChange}></input>
				<button onClick={createButtonHandler}>Create Array</button>
			</div>
			<div>
				<label>Algorithm: </label>
				<select value={algorithm} onChange={(event) => algoChangeHandler(event.target.value)}>
					<option value={"Please Select Algorithm"}>Select Algorithm</option>
					<option value={"Bubble Sort"}>Bubble Sort</option>
					<option value={"Selection Sort"}>Selection Sort</option>
					<option value={"Insertion Sort"}>Insertion Sort</option>
					<option value={"Merge Sort"}>Merge Sort</option>
					<option value={"Quick Sort"}>Quick Sort</option>
				</select>
				<button onClick={randomizeButtonHandler}>Shuffle</button>
			</div>
			<h2 className='algoName'>{algorithm}</h2>
			<p>Array</p>
			<Graph array={arr} maximum={size} hideIndexes={hideIndexes} hideNumbers={hideNumbers} />
			{algorithm === "Merge Sort" ?
				<MergeComponent barL={barL} barR={barR} maximum={size} hideIndexes={hideIndexes} hideNumbers={hideNumbers} />
				: <></>
			}
			<div>
				<button onClick={previousButtonHandler}>Previous</button>
				<button onClick={nextButtonHandler}>Next</button>
			</div>
			<div>
				<label>Transistion Speed: </label>
				<select defaultValue={"0.1 Second"} onChange={(event) => setTransitionTime(event.target.value)}>
					<option value={500}>Default Speed</option>
					<option value={50}>Faster</option>
					<option value={200}>Fast</option>
					<option value={500}>Normal</option>
					<option value={1000}>Slow</option>
				</select>
			</div>
			<div>
				<button onClick={resetButtonHandler}>Reset</button>
				<button onClick={playButtonHandler}>Play</button>
				<button onClick={stopButtonHandler}>Stop</button>
			</div>
		</div>
	);
}

export default App;
