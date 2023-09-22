import { Bar } from "../classes/Bar";

export default function mergeSort(arr) {

    let iters = [];
    let mergeLIters = [];
    let mergeRIters = [];
    let ans = [];

    const sortedBarColor = "skyblue";
    const comparingBarColor = "grey";
    const swapingBarColor = "black";
    const defaultBarColor = "burlywood";

    let size = arr.length;
    // iters.push([...arr]);
    mergeSort2(arr, 0, size-1, iters, mergeLIters, mergeRIters);
    iters.push([...arr]);
    mergeLIters.push([]);
    mergeRIters.push([]);
    ans.push([...iters]);
    ans.push([...mergeLIters]);
    ans.push([...mergeRIters]);
    return ans;
} 

function mergeSort2(arr, l, r, iters, mergeLIters, mergeRIters) {
    if (l >= r) {
        return;
    }
    const selectedBarColor = "yellow";
    const defaultBarColor = "burlywood";
    let barL = []
    let barR = []
    for (let i = l; i <= r; i++) {
        arr[i] = new Bar(arr[i].value, selectedBarColor);
    }
    iters.push([...arr]);
    mergeLIters.push([...barL]);
    mergeRIters.push([...barR]);
    for (let i = l; i <= r; i++) {
        arr[i] = new Bar(arr[i].value, defaultBarColor);
    }
    // iters.push([...arr]);
    // mergeLIters.push([...barL]);
    // mergeRIters.push([...barR]);
    let m = l + parseInt((r - l) / 2);
    mergeSort2(arr, l, m, iters, mergeLIters, mergeRIters);
    mergeSort2(arr, m + 1, r, iters, mergeLIters, mergeRIters);
    merge(arr, l, m, r, iters, mergeLIters, mergeRIters);
}

function merge(arr, l, m, r, iters, mergeLIters, mergeRIters) {

    const sortedBarColor = "skyblue";
    const comparingBarColor = "grey";
    const swapingBarColor = "black";
    const defaultBarColor = "burlywood";
    const selectedBarColor = "yellow";

    const mainArr = [...arr];
    for (let i=l; i<=r; i++)
    {
        arr[i] = new Bar(mainArr[i].value, 'green');
    }

    let n1 = m - l + 1;
    let n2 = r - m;

    // Create temp arrays
    let L = new Array(n1);
    let R = new Array(n2);
    let barL = []
    let barR = []

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
    {
        // L[i] = arr[l + i].value;
        // arr[l+i] = new Bar(arr[l+i].value, selectedBarColor);
        barL.push(new Bar(arr[l + i].value, defaultBarColor));
    }

    for (let j = 0; j < n2; j++)
    {
        // R[j] = arr[m + 1 + j].value;
        // arr[m+1+j] = new Bar(arr[m+1+j].value, selectedBarColor);
        barR.push(new Bar(arr[m + 1 + j].value, defaultBarColor));
    }
    // iters.push([...arr]);
    // mergeLIters.push([...barL]);
    // mergeRIters.push([...barR]);

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    let i = 0;

    // Initial index of second subarray
    let j = 0;

    // Initial index of merged subarray
    let k = l;

    while (i < n1 && j < n2) {
        barL[i] = new Bar(barL[i].value, comparingBarColor);
        barR[j] = new Bar(barR[j].value, comparingBarColor);
        // iters.push([...mainArr]);
        if (barL[i].value <= barR[j].value) {
            arr[k] = new Bar(barL[i].value, sortedBarColor);
            barL[i] = new Bar(barL[i].value, sortedBarColor);
            // arr[k] = new Bar(arr[k].value, sortedBarColor);
            iters.push([...arr]);
            mergeLIters.push([...barL]);
            mergeRIters.push([...barR]);
            i++;
        }
        else {
            arr[k] = new Bar(barR[j].value, sortedBarColor);
            // arr[k] = new Bar(arr[k].value, sortedBarColor);
            barR[j] = new Bar(barR[j].value, sortedBarColor);
            iters.push([...arr]);
            mergeLIters.push([...barL]);
            mergeRIters.push([...barR]);
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = new Bar(barL[i].value, sortedBarColor);
        barL[i] = new Bar(barL[i].value, sortedBarColor);
        // arr[k] = new Bar(arr[k].value, sortedBarColor);
        iters.push([...arr]);
        mergeLIters.push([...barL]);
        mergeRIters.push([...barR]);
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = new Bar(barR[j].value, sortedBarColor);
        barR[j] = new Bar(barR[j].value, sortedBarColor);
        // arr[k] = new Bar(arr[k].value, sortedBarColor);
        iters.push([...arr]);
        mergeLIters.push([...barL]);
        mergeRIters.push([...barR]);
        j++;
        k++;
    }

    // i = l;
    // for (;i<=R; i++)
    // {
    //     arr[i] = new Bar(arr[i].value, sortedBarColor);
    // }
    // iters.push([...arr]);
    // mergeLIters.push([...barL]);
    // mergeRIters.push([...barR]);

}