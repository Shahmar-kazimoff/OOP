function enKicikElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log("Zehmet olmasa Array yaradin.");
        return;
    }

    let kicikElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < kicikElement) {
            kicikElement = arr[i];
        }
    }

    console.log("Arrayin en kicik elementi:", kicikElement);
}

const arrExample = [5, 3, 8, 9, 7];
enKicikElement(arrExample);
