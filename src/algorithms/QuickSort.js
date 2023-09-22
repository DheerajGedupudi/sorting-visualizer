import { Bar } from "../classes/Bar";

export default function quickSort(arr) {

    let iters = [];
    let ans = [];

    const sortedBarColor = "skyblue";
    const comparingBarColor = "grey";
    const swapingBarColor = "black";
    const defaultBarColor = "burlywood";

    let size = arr.length;
    // iters.push([...arr]);
    quickSort2(arr, 0, size - 1, iters);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Bar(arr[i].value, sortedBarColor);
    }
    iters.push([...arr]);
    ans.push([...iters]);
    return ans;
}

// The main function that implements QuickSort
function quickSort2(arr, low, high, iters) {
    const sortedBarColor = "skyblue";
    const comparingBarColor = "grey";
    const swapingBarColor = "black";
    const defaultBarColor = "burlywood";

    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        for (let i = high; i < arr.length; i++) {
            arr[i] = new Bar(arr[i].value, '#ff00ff');
        }

        for (let i = low; i <= high; i++) {
            arr[i] = new Bar(arr[i].value, comparingBarColor);
        }
        iters.push([...arr]);
        for (let i = low; i <= high; i++) {
            arr[i] = new Bar(arr[i].value, defaultBarColor);
        }
        for (let i = 0; i < low; i++) {
            arr[i] = new Bar(arr[i].value, sortedBarColor);
        }
        iters.push([...arr]);

        let pi = partition(arr, low, high, iters);

        // Separately sort elements before partition and after partition
        quickSort2(arr, low, pi - 1, iters);
        quickSort2(arr, pi + 1, high, iters);

    }
}

function partition(arr, low, high, iters) {

    const sortedBarColor = "skyblue";
    const comparingBarColor = "grey";
    const swapingBarColor = "black";
    const defaultBarColor = "burlywood";
    // Choosing the pivot
    let pivot = arr[high].value;

    arr[high] = new Bar(arr[high].value, 'red');
    iters.push([...arr]);

    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j].value < pivot) {
            // Increment index of smaller element
            if (i >= 0) {
                arr[high] = new Bar(arr[high].value, comparingBarColor);
                arr[j] = new Bar(arr[j].value, comparingBarColor);
                iters.push([...arr]);
                arr[i] = new Bar(arr[i].value, swapingBarColor);
                arr[j] = new Bar(arr[j].value, swapingBarColor);
                iters.push([...arr]);
                arr[i] = new Bar(arr[i].value, 'green');
                arr[j] = new Bar(arr[j].value, defaultBarColor);
            }
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
        else{
            if (i >= 0)
            {
                arr[high] = new Bar(arr[high].value, comparingBarColor);
                arr[j] = new Bar(arr[j].value, comparingBarColor);
                iters.push([...arr]);
                arr[i] = new Bar(arr[i].value, 'green');
                arr[j] = new Bar(arr[j].value, defaultBarColor);
                iters.push([...arr]);
            }
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
    arr[i+1] = new Bar(arr[i+1].value, swapingBarColor);
    arr[high] = new Bar(arr[high].value, swapingBarColor);
    iters.push([...arr]);

    for (let i = low; i <= high; i++) {
        arr[i] = new Bar(arr[i].value, defaultBarColor);
    }

    iters.push([...arr]);
    return i + 1; // Return the partition index
}
