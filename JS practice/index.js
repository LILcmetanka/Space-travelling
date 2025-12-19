const createMatrix = (str) => {
    const n = Math.sqrt(str.length);
    const arr = [];
    let indx = 0;
    for (let i = 0; i < n; i++) {
        arr.push([]);
        for (let j = 0; j < n; j++) {
            arr[i].push(str[indx]);
            indx++;
        }
    }
    return arr;
};
const topBottomCheck = (arr) => {
    const n = arr.length;
    let result = '';
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    while (left <= right && top <= bottom) {
        for (let i = top; i <= bottom; i++) {
            result += arr[i][left];
        }
        left++;
        if (left <= right) {
            for (let i = left; i <= right; i++) {
                result += arr[bottom][i];
            }
        }
        bottom--;
        if (top <= bottom) {
            for (let i = bottom; i >= top; i--) {
                result += arr[i][right];
            }
        }
        right--;
        if (top <= bottom && left <= right) {
            for (let i = right; i >= left; i--) {
                result += arr[top][i];
            }
        }
        top++;
    }
    return result;
};
const rightLeftCheck = (arr) => {
    const n = arr.length;
    let result = '';
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    while (left <= right && top <= bottom) {
        for (let i = right; i >= left; i--) {
            result += arr[top][i];
        }
        top++;
        if (top <= bottom) {
            for (let i = top; i <= bottom; i++) {
                result += arr[i][left];
            }
        }
        left++;
        if (left <= right && top <= bottom) {
            for (let i = left; i <= right; i++) {
                result += arr[bottom][i];
            }
        }
        bottom--;
        if (top <= bottom && right >= left) {
            for (let i = bottom; i >= top; i--) {
                result += arr[i][right];
            }
        }
        right--;
    }
    return result;
};
const bottomTopCheck = (arr) => {
    const n = arr.length;
    let result = '';
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    while (left <= right && top <= bottom) {
        for (let i = bottom; i >= top; i--) {
            result += arr[i][right];
        }
        right--;
        if (top <= bottom && left <= right) {
            for (let i = right; i >= left; i--) {
                result += arr[top][i];
            }
        }
        top++;
        if (top <= bottom && left <= right) {
            for (let i = top; i <= bottom; i++) {
                result += arr[i][left];
            }
        }
        left++;
        if (top <= bottom && left <= right) {
            for (let i = left; i <= right; i++) {
                result += arr[bottom][i];
            }
        }
        bottom--;
    }
    return result;
};
const leftRightCheck = (arr) => {
    const n = arr.length;
    let result = '';
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result += arr[bottom][i];
        }
        bottom--;
        if (top <= bottom) {
            for (let i = bottom; i >= top; i--) {
                result += arr[i][right];
            }
        }
        right--;
        if (left <= right && top <= bottom) {
            for (let i = right; i >= left; i--) {
                result += arr[top][i];
            }
        }
        top++;
        if (left <= right && top <= bottom) {
            for (let i = top; i <= bottom; i++) {
                result += arr[i][left];
            }
        }
        left++;
    }
    return result;
};
const matrix = createMatrix('витаген_нсеб_тюоопшурзят_оаябалкмкт_еро_ыоь_с_в,сйствузелит,_пот');
console.log(topBottomCheck(matrix));
console.log(rightLeftCheck(matrix));
console.log(bottomTopCheck(matrix)); // Подходит
console.log(leftRightCheck(matrix));