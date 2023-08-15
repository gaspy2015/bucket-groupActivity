// Function to perform Bucket Sort
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }

    // Find minimum and maximum values in the array
    let minValue = arr[0];
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        } else if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    // Calculate the number of buckets needed (using the minValue and maxValue)
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount);

    // Initialize buckets
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }

    // Place elements into buckets
    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    // Sort elements within each bucket (using insertion sort)
    const sortedArray = [];
    for (let i = 0; i < bucketCount; i++) {
        const bucket = buckets[i];
        insertionSort(bucket); // Call the insertionSort function to sort the bucket
        sortedArray.push(...bucket);
    }

    return sortedArray;
}

// Function to perform Insertion Sort within a bucket
function insertionSort(bucket) {
    for (let i = 1; i < bucket.length; i++) {
        const current = bucket[i];
        let j = i - 1;
        while (j >= 0 && bucket[j] > current) {
            bucket[j + 1] = bucket[j];
            j--;
        }
        bucket[j + 1] = current;
    }
}

// Papulate array with 10 random integer data
const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

console.log("Original array:", randomArray);
let start = Date.now();
const sortedArray = bucketSort(randomArray);
console.log("Sorted array:", sortedArray);
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
