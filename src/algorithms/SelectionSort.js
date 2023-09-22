import { Bar } from "../classes/Bar";

export default function selectionSort(arr) {

    let i, j, min_idx;

    let iters = [];
    let ans = [];

    const sortedBarColor = "skyblue";
    const comparingBarColor = "grey";
    const swapingBarColor = "black";
    const defaultBarColor = "burlywood";

    let size = arr.length;

    iters.push([...arr]);

    // One by one move boundary of unsorted subarray
    for (i = 0; i < size - 1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i; j < size; j++)
        {
            arr[min_idx] = new Bar(arr[min_idx].value, swapingBarColor);
            arr[j] = new Bar(arr[j].value, comparingBarColor);
            iters.push([...arr]);
            arr[j] = new Bar(arr[j].value, defaultBarColor);
            arr[min_idx] = new Bar(arr[min_idx].value, defaultBarColor);

            if (arr[j].value < arr[min_idx].value)
            {
                min_idx = j;
            }
            arr[min_idx] = new Bar(arr[min_idx].value, comparingBarColor);
        }

        // Swap the found minimum element with the first element

        arr[i] = new Bar(arr[i].value, comparingBarColor);
        arr[min_idx] = new Bar(arr[min_idx].value, comparingBarColor);
        iters.push([...arr]);

        // then swap them
        let temp = arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx] = temp

        arr[i] = new Bar(arr[i].value, swapingBarColor);
        arr[min_idx] = new Bar(arr[min_idx].value, swapingBarColor);
        iters.push([...arr]);
        arr[min_idx] = new Bar(arr[min_idx].value, defaultBarColor);
        arr[i] = new Bar(arr[i].value, sortedBarColor);
    }
    arr[i] = new Bar(arr[i].value, sortedBarColor);
    arr[min_idx] = new Bar(arr[min_idx].value, sortedBarColor);
    iters.push([...arr]);
    ans.push([...iters]);
    return ans;
}