async function generateContentDynamically() {
    const data = await getData('data.json');
    generateBarHeightDynamically(data);
    generateBarNumberDynamically(data);
}

async function getData(path) {
    const response = await fetch(path);
    const data = await response.json();
    return data;
}

function generateBarHeightDynamically(data) {
    const max = findMax(data);
    for (let i = 0; i < data.length; i++) {
        const bar = document.querySelector('#bar-' + data[i]['day']);
        const barHeight = ( data[i]['amount'] / max['amount'] ) * 150;
        bar.style.height = barHeight + 'px';
    }
}

function generateBarNumberDynamically(data) {
    for (let i = 0; i < data.length; i++) {
        const barNumber = document.querySelector('#bar-number-' + data[i]['day']);
        barNumber.innerHTML = `$${data[i]['amount']}`;
    }
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

generateContentDynamically()