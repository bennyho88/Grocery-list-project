
// get elements

const form = document.querySelector('#input-form');
const input = document.querySelector('#input-value');
const feedback = document.querySelector('.feedback');
const listItems = document.querySelector('.list-items');
const clearBtn = document.querySelector('.clearBtn');

// add event listeners

form.addEventListener('submit', function (event) {

    event.preventDefault();
    console.log('hello');

    const value = input.value;

    if (value === '') {
        showFeedback(feedback, 'can not add empty value', 'alert-danger');
    } else {
        // add to list
        addItem(value);
        // add to storage
        addStorage(value);

    }
})

// clear button event list

clearBtn.addEventListener('click', function () {

    // nodelist
    /* 
    const items = document.querySelectorAll('.item');
   //  console.log(items);
    
    if (items.length > 0) {

        items.forEach(item => {
      
           listItems.removeChild(item);
        })
    }
    */

    // html collection
    while (listItems.children.length > 0) {
        listItems.removeChild(listItems.children[0]);

        // clear storage;
        clearStorage();
    }
})

// delete one item


listItems.addEventListener('click', function (event) {

    // console.log(event.target.parentElement.classList.contains('remove-icon'))


    if (event.target.parentElement.classList.contains('remove-icon')) {

        let parent = event.target.parentElement.parentElement;
        listItems.removeChild(parent);

        let text = event.target.parentElement.previousElementSibling.textContent;

        clearSingle(text);

    }


})
// dom content loaded

document.addEventListener('DOMContentLoaded', function() {

    loadItems();
})

// functions
// show feedback 

function showFeedback(element, text, result) {

    element.classList.add('showItem', `${result}`);
    element.innerHTML = `<p>${text}</p>`;

    setTimeout(function () {

        element.classList.remove('showItem', result);
    }, 3000)
}

// add item

function addItem(value) {

    const div = document.createElement('div');
    div.classList.add('item', 'my-3', 'd-flex', 'justify-content-between', 'p-2');
    div.innerHTML = `
    <h5 class="item-title text-capitalize">${value}</h5>
    <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
    `
    listItems.appendChild(div);
    input.value = '';
    showFeedback(feedback, 'item added to the list', 'alert-success');

}

// add to local storage


function addStorage(value) {

    let items;

    // check if there are any items
    if (localStorage.getItem('grocery-list')) {
        // if there are values take the values and put it in item variable
        items = JSON.parse(localStorage.getItem('grocery-list'));
    } else {
        // empty array
        items = [];
    }

    items.push(value);
    localStorage.setItem('grocery-list', JSON.stringify(items));
}

// clear local storage 

function clearStorage() {
    localStorage.removeItem('grocery-list');
}

// clear single item in the local storage

function clearSingle(value) {

    // to get array grocery list --> json parse
    const tempItems = JSON.parse(localStorage.getItem('grocery-list'));
    
    // filter the items
    const items = tempItems.filter(function (item) {

        if (item !== value) {
            return item
        }

    })
    
    
    localStorage.removeItem('grocery-list');
    localStorage.setItem('grocery-list', JSON.stringify(items));
    
}

// load items 

function loadItems() {
    
    if(localStorage.getItem('grocery-list')) {
        const items = JSON.parse(localStorage.getItem('grocery-list'));

        items.forEach(item => {
            const div = document.createElement('div');
    div.classList.add('item', 'my-3', 'd-flex', 'justify-content-between', 'p-2');
    div.innerHTML = `<h5 class="item-title text-capitalize">${item}</h5>
    <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
    `
    listItems.appendChild(div);
        })
    }
}


































/* first try
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
        addStorage(value);
    }
})

// clear btn event list

clearBtn.addEventListener('click', function() {

    while(listItems.children.length > 0) {
        listItems.removeChild(listItems.children[0]);
        // clear storage
        clearStorage();
    }
});
// delete one item


listItems.addEventListener('click', function(event) {

    if (event.target.parentElement.classList.contains('remove-icon')) {

        let parent = event.target.parentElement.parentElement;
        // console.log(parent);
        listItems.removeChild(parent);
        let text = event.target.parentElement.previousElementSibling.textContent;

        clearSingle(text);
    }
})

// dom content  loaded
document.addEventListener('DOMContentLoaded', function() {

    loadItems();
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
function addItem(value) {

    const div = document.createElement('div');
    div.classList.add('item', 'my-3', 'd-flex', 'justify-content-between', 'p-2');
    div.innerHTML = `<h5 class="item-title text-capitalize">${value}</h5>
    <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>`;

    listItems.appendChild(div);
    input.value = '';
    showFeedback(feedback, 'item added to the list', 'alert-success');
}

// add to local storage

function addStorage(value) {

    let items;

    if(localStorage.getItem('grocery-list')) {
        items = JSON.parse(localStorage.getItem('grocery-list'));
    } else {
        items = [];
    }

    items.push(value);
    localStorage.setItem('grocery-list', JSON.stringify(items));
};

// clear local storage

function clearStorage() {

    localStorage.removeItem('grocery-list');


};

 // clear single item in the local storage
 function clearSingle(value) {

    const tempItems = JSON.parse(localStorage.getItem('grocery-list'));
    console.log(tempItems);

    const items = tempItems.filter(function(item) {

        if(item !== value) {

            return item;
        }
    });
    localStorage.removeItem('grocery-list');
    localStorage.setItem('grocery-list', JSON.stringify(items));
    console.log(items);
 }

 // load items
 function loadItems() {

    if(localStorage.getItem('grocery-list')) {
        const items = JSON.parse(localStorage.getItem('grocery-list'));

        items.forEach(item => {
            const div = document.createElement('div');
    div.classList.add('item', 'my-3', 'd-flex', 'justify-content-between', 'p-2');
    div.innerHTML = `<h5 class="item-title text-capitalize">${item}</h5>
    <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>`;

    listItems.appendChild(div);
            addItem(item);
        })
    }
 }


*/

















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