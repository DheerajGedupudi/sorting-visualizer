import { Bar } from "../classes/Bar";

export default function insertionSort(arr) {

    let iters = [];
    let ans = [];

    const sortedBarColor = "skyblue";
    const comparingBarColor = "grey";
    const swapingBarColor = "black";
    const defaultBarColor = "burlywood";

    let i, j;

    let size = arr.length;
    iters.push([...arr]);

    for (i = 1; i < size; i++) {
        j = i;

        while (j > 0) {

            arr[j - 1] = new Bar(arr[j - 1].value, sortedBarColor);
            arr[j] = new Bar(arr[j].value, comparingBarColor);
            iters.push([...arr]);
            arr[j - 1] = new Bar(arr[j - 1].value, sortedBarColor);
            arr[j] = new Bar(arr[j].value, sortedBarColor);

            if (arr[j].value < arr[j - 1].value)
            {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;

                // arr[j - 1] = new Bar(arr[j - 1].value, sortedBarColor);
                // arr[j] = new Bar(arr[j].value, swapingBarColor);
                // iters.push([...arr]);
                // arr[j - 1] = new Bar(arr[j - 1].value, sortedBarColor);
                // arr[j] = new Bar(arr[j].value, sortedBarColor);
            }
            else
            {
                // arr[j - 1] = new Bar(arr[j - 1].value, sortedBarColor);
                // arr[j] = new Bar(arr[j].value, sortedBarColor);
                // iters.push([...arr]);
                break;
            }

            j--;
        }
    }

    arr[0] = new Bar(arr[0].value, sortedBarColor);
    arr[1] = new Bar(arr[1].value, sortedBarColor);
    iters.push([...arr]);
    ans.push([...iters]);
    return ans;
} 