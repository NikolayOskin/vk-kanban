(function () {
    const COLUMN_CLASS = 'column';
    const CARDS_CLASS ='cards';
    const CARD_CLASS = 'card';
    const ADD_CARD_BUTTON_CLASS = 'button--new';
    const ADD_CARD_FORM_CLASS = 'form--card';
    const ADD_CARD_SUBMIT_CLASS = 'button--submit';
    const ADD_CARD_INPUT_CLASS = 'form__input--textarea';
    const ADD_CARD_CLOSE_CLASS = 'button--close';

    let addCardButton, addCardForm;

    let addCardButtons = document.querySelectorAll('.' + ADD_CARD_BUTTON_CLASS);
    let closeCardFormButtons = document.querySelectorAll('.' + ADD_CARD_CLOSE_CLASS);
    let submitCardFormButtons = document.querySelectorAll('.' + ADD_CARD_SUBMIT_CLASS);

    const showAddCardForm = (column) => {
        addCardForm = column.querySelector('.' + ADD_CARD_FORM_CLASS);
        addCardForm.style = "display: flex;";
    }

    const closeAddCardForm = (column) => {
        addCardForm = column.querySelector('.' + ADD_CARD_FORM_CLASS);
        addCardForm.style = "display: none;";
    }

    const showAddCardButton = (column) => {
        addCardButton = column.querySelector('.' + ADD_CARD_BUTTON_CLASS);
        addCardButton.style = "display: flex;";
    }

    const addCard = (text, column) => {
        let card = document.createElement('div');
        card.setAttribute('class', CARD_CLASS);
        card.innerHTML = text;    
        column.querySelector('.' + CARDS_CLASS).appendChild(card);
    }

    // Event Listeners
    addCardButtons.forEach(button => {
        button.addEventListener("click", () => {
            showAddCardForm(button.closest('.' + COLUMN_CLASS));
            button.style = "display: none;";
        });
    });

    closeCardFormButtons.forEach(button => {
        button.addEventListener("click", () => {
            closeAddCardForm(button.closest('.' + COLUMN_CLASS));
            showAddCardButton(button.closest('.' + COLUMN_CLASS));
        });
    });

    submitCardFormButtons.forEach(button => {
        button.addEventListener("click", () => {
            input = button.closest('.' + COLUMN_CLASS).querySelector('.' + ADD_CARD_INPUT_CLASS);
            if (input.value.length > 0) {
                addCard(input.value, button.closest('.' + COLUMN_CLASS));
                input.value = '';
            }
        });
    });


})();