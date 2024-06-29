function main() {
    displayPrice();
    addList();
}

function displayPrice() {
    const price = document.getElementById('price');
    const discount = document.getElementById('discount');
    const finalPrice = document.getElementById('final-price');
    
    price.addEventListener('change', updateFinalPrice);
    discount.addEventListener('change', updateFinalPrice);
    
    function updateFinalPrice() {
        const priceValue = Number(price.value);
        const discountValue = Number(discount.value);
        
        if (isNaN(priceValue) || isNaN(discountValue)) {
            finalPrice.value = '';
            return;
        }
        
        const discountPrice = priceValue - (priceValue * (discountValue / 100));
        finalPrice.value = Math.round(discountPrice);
    }
}

function addList() {
    const listBtn = document.getElementById('listBlock');
    const list = document.getElementById('featureList');
    let listAdd = document.getElementById('listAdd');

    listBtn.addEventListener('click', function() {
        list.classList.remove('hidden');
    });

    function addNewInput() {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add("flex", "gap-2", "mb-2");

        const childDiv = document.createElement('div');
        childDiv.classList.add('w-1/2');

        const input = document.createElement('input');
        input.classList.add("border", "p-2", "border-black", "rounded-md", "w-full");
        input.setAttribute('placeholder', 'Feature list.....');

        mainDiv.appendChild(childDiv);
        childDiv.appendChild(input);
        list.appendChild(mainDiv);

        const buttons = list.querySelectorAll('button');
        buttons.forEach(button => {
            button.classList.add('hidden');
        });

        const btnDiv = document.createElement('div');
        const button = document.createElement('button');
        button.classList.add('px-4', 'h-full', 'w-full', 'rounded-md', 'text-3xl', 'bg-cyan-300');
        button.setAttribute('id', 'listAdd');
        button.innerText = '+';

        btnDiv.appendChild(button);
        mainDiv.appendChild(btnDiv);

        listAdd = button;  
        listAdd.addEventListener("click", addNewInput); 
    }

    listAdd.addEventListener("click", addNewInput);
}




main();


