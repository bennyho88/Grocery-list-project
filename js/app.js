(function() {


    const feedback = document.querySelector('.feedback');
    const inputForm = document.querySelector('#input-form');
    const listItems = document.querySelector('.list-items');
    const inputValue = document.querySelector('#input-value');
    const clearBtn = document.querySelector('.clearBtn');

    inputForm.addEventListener('submit', function(event) {

        event.preventDefault();

        let value = inputValue.value;

        if(value === '') {
           showFeedback('can not add empty value', 'danger')
        } else {
            addItem(value);
        }
    })

    function showFeedback(text, action) {

        feedback.classList.add('showItem', `alert-${action}`);
        feedback.innerHTML = `<p>${text}</p>`

        setTimeout(function() {

            feedback.classList.remove('showItem', `alert-${action}`);
        }, 4000)
    }

})();
