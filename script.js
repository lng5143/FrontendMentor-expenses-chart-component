async function generateContentDynamically() {
    const data = await getData('data.json');
    console.log(data);
    console.log(data[0]['amount'])
    const max = findMax(data);
    console.log(max);
    // generateBarHeightDynamically(max);
    // generateBarNumberDynamically();
}

async function getData(path) {
    const response = await fetch(path);
    const data = await response.json();
    return data;
}

function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i]['amount'] > max['amount']) {
            max = array[i];
        }
    }
    return max;
}

function generateBarHeightDynamically(max) {

}

function generateBarNumberDynamically() {

}

generateContentDynamically()