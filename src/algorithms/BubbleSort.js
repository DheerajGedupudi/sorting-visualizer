import { Bar } from "../classes/Bar";

export default function bubbleSort(arr) {
    let iters = [];
    let ans = [];

    const sortedBarColor = "skyblue";
    const comparingBarColor = "grey";
    const swapingBarColor = "black";
    const defaultBarColor = "burlywood";

    let size = arr.length;
    iters.push([...arr]);
    for (let i = 0; i < size; i++) {

        // Last i elements are already in place  
        for (let j = 0; j < (size - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            arr[j] = new Bar(arr[j].value, comparingBarColor);
            arr[j + 1] = new Bar(arr[j + 1].value, comparingBarColor);
            iters.push([...arr]);
            if (arr[j].value > arr[j + 1].value) {


                // If the condition is true
                // then swap them
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                arr[j] = new Bar(arr[j].value, swapingBarColor);
                arr[j + 1] = new Bar(arr[j + 1].value, swapingBarColor);
                iters.push([...arr]);
            }
            arr[j] = new Bar(arr[j].value, defaultBarColor);
            arr[j + 1] = new Bar(arr[j + 1].value, defaultBarColor);
        }
        arr[size - i - 1] = new Bar(arr[size - 1 - i].value, sortedBarColor);
    }
    arr[0] = new Bar(arr[0].value, sortedBarColor);
    arr[1] = new Bar(arr[1].value, sortedBarColor);
    iters.push([...arr]);
    ans.push([...iters]);
    return ans;

}