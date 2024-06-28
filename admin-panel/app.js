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
    const listAdd = document.getElementById('listAdd');
    const div = document.createElement('div');
    const input = document.createElement('input');
    listBtn.addEventListener('click', function() {
        list.classList.remove('hidden');
        // list.classList.add('flex','flex-col');
    });

    listAdd.addEventListener("click", function() {
        // div.classList.add('w-1/2');
        // input.classList.add('border', 'p-2', 'border-black', 'rounded-md', 'w-full','block');
        // div.appendChild(input);
        // list.appendChild(div);

        list.innerHTML = `<div class="flex gap-2 mb-2">
                            <div class="w-1/2">
                                <input type="text" class="border p-2 border-black rounded-md w-full" placeholder="Feature list.....">
                            </div>
                           

                            <div class="flex justify-center items-stretch">
                                <button class="px-4 h-full w-full rounded-md text-3xl bg-cyan-300" id="listAdd">+</button>
                            </div>
                          </div>`;
    })
}

main();


