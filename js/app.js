
// get elements

const form = document.querySelector('#input-form');
const input = document.querySelector('#input-value');
const feedback = document.querySelector('.feedback');
const listItems = document.querySelector('.list-items');
const clearBtn = document.querySelector('.clearBtn');

// add event listeners

form.addEventListener('submit', function(event) {

    event.preventDefault();
    
    const value = input.value;

    if(value === '') {
        showFeedback(feedback, 'can not add empty value', 'alert-danger');
    } else {
        // add to list
        addItem(value);
        // add to storage
    }
})

// functions
// show feedback

function showFeedback(element, text, result) {

    element.classList.add('showItem',`${result}`);
    element.innerHTML = `<p>${text}</p>`;

    setTimeout(function() {
    
    element.classList.remove('showItem', `${result}`);
    }, 3000)

}

//add item

function addItem(value) {

    const div = document.createElement('div');
    div.classList.add('item', 'my-3', 'd-flex', 'justify-content-between', 'p-2');
    div.innerHTML = `<h5 class="item-title text-capitalize">${value}</h5>
    <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>`;

    listItems.appendChild(div);
    input.value = '';
    showFeedback(feedback, 'item added to the list', 'alert-success');
}




















/*
(function() {


    const feedback = document.querySelector('.feedback');
    const inputForm = document.querySelector('#input-form');
    const itemList = document.querySelector('.list-items');
    const inputValue = document.querySelector('#input-value');
    const clearBtn = document.querySelector('.clearBtn');

   //  let dataItems = [];

    
    let dataItems = JSON.parse(localStorage.getItem('list')) || [];

    if (dataItems.length > 0) {

        dataItems.forEach(item => {

            itemList.insertAdjacentHTML('beforeend', `
            <div class="item my-3 d-flex justify-content-between p-2">
       <h5 class="item-title text-capitalize">${item}</h5>
       <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
      </div>
            `  )
            handleItems(item)
        });
    
    }
    

    inputForm.addEventListener('submit', function(event) {

        event.preventDefault();

        let value = inputValue.value;

        if(value === '') {
           showFeedback('can not add empty value', 'danger')
        } else {
            addItem(value, 'item added to list', 'success');
            inputValue.value = '';
            dataItems.push(value);
            console.log(dataItems)
            localStorage.setItem('list', JSON.stringify(dataItems));

            handleItems(value);
        }
    })

    function showFeedback(text, action) {

        feedback.classList.add('showItem', `alert-${action}`);
        feedback.innerHTML = `<p>${text}</p>`

        setTimeout(function() {

            feedback.classList.remove('showItem', `alert-${action}`);
        }, 4000)
    }

    function addItem(value, text, action) {

        feedback.classList.add('showItem', `alert-${action}`);
        feedback.innerHTML = `<p>${text}</p>`;

        setTimeout(function() {
            feedback.classList.remove('showItem', `alert-${action}`);
        }, 2000)

        const div = document.createElement('div');
        div.classList.add('item', 'my-3', 'd-flex', 'justify-content-between', 'p-2');
        div.innerHTML = `
        <h5 class="item-title text-capitalize">${value}</h5>
       <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>`

       itemList.appendChild(div);
        console.log(div)
    }

    function handleItems(value) {

        const removeIcons = document.querySelectorAll('.remove-icon');

        removeIcons.forEach(icon => {
            icon.addEventListener('click', function(event) {

                const item = event.target.parentElement.parentElement;
                itemList.removeChild(item);
                console.log(item)
                console.log(item.children[0].textContent)
               

               const itemName = item.children[0].textContent;

                dataItems = dataItems.filter(function(value) {

                    return itemName !== value;
                })

                localStorage.setItem('list', JSON.stringify(dataItems));

                
            })
        })
        
    };

    clearBtn.addEventListener('click', function() {

        itemDatas = [];

        const items = document.querySelectorAll('.item');

        if(items.length > 0) {

            items.forEach(item => {

                itemList.removeChild(item);
            
            })
        }
    })
})();
*/