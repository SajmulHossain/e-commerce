const reduce = document.getElementById('reduce');
const input = document.getElementById('input');

let count = 1;

function reduceF() {
    if (count > 1) {
        count -= 1;
        input.value = count;
        if (count === 1) {
            reduce.setAttribute('disabled', 'true');
        }
    }   
}
function addF() {
    count += 1;
    input.value = count;
    if (count > 1) {
        reduce.removeAttribute('disabled');
    }
}

input.value = count;
