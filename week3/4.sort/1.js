
class MinHeap {
    constructor() {
        this.heap = [];
    }

    build(arr) {
        this.heap = arr;
        let len = this.heap.length - 1;

        for (let i = this.parent(len); i >= 0; i--) {
            this.shiftDown(i, len);
        }
        for (let i = len; i > 0; i--) {
            // Swap the root (minimum element) with the last element in the heap
            [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];
            this.shiftDown(0, i - 1);
        }
        return this.heap;
    }

    shiftDown(currentIdx, endIdx) {
        let leftIdx = this.leftChild(currentIdx);
        while (leftIdx <= endIdx) {
            let rightIdx = this.rightChild(currentIdx);
            let idxToShift;
            if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
                idxToShift = rightIdx;
            } else {
                idxToShift = leftIdx;
            }
            if (this.heap[currentIdx] > this.heap[idxToShift]) {
                [this.heap[currentIdx], this.heap[idxToShift]] = [this.heap[idxToShift], this.heap[currentIdx]];
                currentIdx = idxToShift;
                leftIdx = this.leftChild(currentIdx);
            } else {
                return;
            }
        }
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i) {
        return 2 * i + 1;
    }

    rightChild(i) {
        return 2 * i + 2;
    }

    display() {
        console.log(this.heap);
    }
}

let minHeap = new MinHeap();
let array = [32, 6, 41, 22, 63, 7, 30, 1];
console.log(minHeap.build(array));
minHeap.display();






