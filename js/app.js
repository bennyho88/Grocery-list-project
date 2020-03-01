(function() {


    const feedback = document.querySelector('.feedback');
    const inputForm = document.querySelector('#input-form');
    const itemList = document.querySelector('.list-items');
    const inputValue = document.querySelector('#input-value');
    const clearBtn = document.querySelector('.clearBtn');

    let dataItems = [];

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

    

})();
