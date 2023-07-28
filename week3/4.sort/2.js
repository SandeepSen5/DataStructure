
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    build(arr) {
        this.heap = arr;
        //to get the index of last parent
        let len = this.heap.length - 1;
        for (let i = this.parent(len); i >= 0; i--) {
            this.shiftDown(i, len);
        }
        for (let i = len; i > 0; i--) {

            [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];
            this.shiftDown(0, i-1);
        }
        return this.heap;
    }

    shiftDown(currentIdx, endIdx) {
        let leftIdx = this.leftChild(currentIdx);
        while (leftIdx <= endIdx) {
            let rightIdx = this.rightChild(currentIdx);
            let idxToShift;
            if (rightIdx <= endIdx && this.heap[rightIdx] > this.heap[leftIdx]) {
                idxToShift = rightIdx;
            } else {
                idxToShift = leftIdx;
            }
            if (this.heap[currentIdx] < this.heap[idxToShift]) {
                [this.heap[currentIdx], this.heap[idxToShift]] = [this.heap[idxToShift], this.heap[currentIdx]];
                currentIdx = idxToShift;
                leftIdx = this.leftChild(currentIdx);
            } else {
                return;
            }
        }
    }

    peek() {
        return this.heap[0];
    }

    remove() {
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.shiftDown(0, this.heap.length - 1);
    }

    insert(val) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
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

let maxHeap = new MaxHeap();
let array = [32, 6, 41, 22, 63, 7, 30, 1];
console.log(maxHeap.build(array));

// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     build(arr) {
//         this.heap = arr;
//         // To get the index of last parent
//         let len = this.heap.length - 1;
//         for (let i = this.parent(len); i >= 0; i--) {
//             this.shiftDown(i, len);
//         }
//         for (let i = len; i > 0; i--) {
//             [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];
//             this.shiftDown(0, i-1);
//         }
//         return this.heap;
//     }

//     shiftDown(currentIdx, endIdx) {
//         let leftIdx = this.leftChild(currentIdx);
//         while (leftIdx <= endIdx) {
//             let rightIdx = this.rightChild(currentIdx);
//             let idxToShift;
//             if (rightIdx <= endIdx && this.heap[rightIdx] > this.heap[leftIdx]) {
//                 idxToShift = rightIdx;
//             } else {
//                 idxToShift = leftIdx;
//             }
//             if (this.heap[currentIdx] < this.heap[idxToShift]) {
//                 [this.heap[currentIdx], this.heap[idxToShift]] = [this.heap[idxToShift], this.heap[currentIdx]];
//                 currentIdx = idxToShift;
//                 leftIdx = this.leftChild(currentIdx);
//             } else {
//                 return;
//             }
//         }
//     }

//     shiftUp(currentIdx) {
//         let parentIdx = this.parent(currentIdx);
//         while (currentIdx > 0 && this.heap[parentIdx] < this.heap[currentIdx]) {
//             [this.heap[parentIdx], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[parentIdx]];
//             currentIdx = parentIdx;
//             parentIdx = this.parent(currentIdx);
//         }
//     }

//     peek() {
//         return this.heap[0];
//     }

//     remove() {
//         this.heap[0] = this.heap[this.heap.length - 1];
//         this.heap.pop();
//         this.shiftDown(0, this.heap.length - 1);
//     }

//     insert(val) {
//         this.heap.push(val);
//         this.shiftUp(this.heap.length - 1);
//     }

//     parent(i) {
//         return Math.floor((i - 1) / 2);
//     }

//     leftChild(i) {
//         return 2 * i + 1;
//     }

//     rightChild(i) {
//         return 2 * i + 2;
//     }

//     display() {
//         console.log(this.heap);
//     }
// }

// let maxHeap = new MaxHeap();
// let array = [32, 6, 41, 22, 63, 7, 30, 1];
// console.log(maxHeap.build(array));