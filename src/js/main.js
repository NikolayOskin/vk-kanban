import { state, actions } from './store';

const kanban = (function () {
    const app = document.getElementById('app');

    const COLUMN_CLASS = 'column';
    const COLUMN_TITLE_CLASS = 'column__title';
    const CARDS_CLASS = 'cards';
    const CARD_CLASS = 'card';
    const ADD_BUTTON_CLASS = 'button--new';
    const ADD_CARD_BUTTON_CLASS = 'button--new-card';
    const ADD_COLUMN_BUTTON_CLASS = 'button--new-column';
    const ADD_CARD_FORM_CLASS = 'form--card';
    const ADD_COLUMN_FORM_CLASS = 'form--new-column';
    const CARD_FORM_SUBMIT_CLASS = 'button--submit';
    const CARD_FORM_INPUT_CLASS = 'form__input';
    const CARD_FORM_CLOSE_CLASS = 'button--close';


    function getButtonTemplate(text) {
        return `<div class="add-new">
            <button class="button button--new">${text}</button>
        </div>`;
    }

    let addNewCardForm = `<form action="" class="form form--card hidden">
        <textarea class="form__input" rows="3" placeholder="Введите название карточки"></textarea>
        <div class="form__buttons">
            <button type="button" class="button button--submit">Добавить карточку</button>
            <button type="button" class="button button--close"></button>
        </div>
    </form>`;

    let addNewColumn = `<form action="" class="form form--new-column hidden">
        <input class="form__input" placeholder="Введите название колонки">
        <div class="form__buttons">
            <button type="button" class="button button--submit">Добавить колонку</button>
            <button type="button" class="button button--close"></button>
        </div>
    </form>`;

    function appendCard(text, parentElem) {
        let card = document.createElement('div');
        card.classList.add(CARD_CLASS);
        card.innerText = text;
        parentElem.appendChild(card);
    }

    function createColumn(title) {
        let column = document.createElement('div');
        let header = document.createElement('h2');
        let cards = document.createElement('div');

        column.classList.add(COLUMN_CLASS);
        header.classList.add(COLUMN_TITLE_CLASS);
        cards.classList.add(CARDS_CLASS);

        header.innerText = title;
        column.appendChild(header);
        column.appendChild(cards);

        return column;
    }

    function createDom() {
        state.todoLists.forEach(todoList => {
            let column = createColumn(todoList.name);

            // Adding cards to DOM
            todoList.items.forEach(todoItem => {
                appendCard(todoItem, column.querySelector('.'+CARDS_CLASS));
            });

            // Adding newCard button and form
            column.insertAdjacentHTML('beforeend', getButtonTemplate("Добавить еще одну карточку"));
            column.insertAdjacentHTML('beforeend', addNewCardForm);
            column.querySelector('.'+ADD_BUTTON_CLASS).classList.add(ADD_CARD_BUTTON_CLASS);

            app.appendChild(column);
        });
    }

    function addEventListeners() {
        document.addEventListener("click", (e) => {
            if (e.target.classList.contains(ADD_CARD_BUTTON_CLASS)) showCardForm(e.target)
            if (e.target.classList.contains(CARD_FORM_CLOSE_CLASS)) hideCardForm(e.target)
            if (e.target.classList.contains(CARD_FORM_SUBMIT_CLASS)) submitCardForm(e.target)
            if (e.target.classList.contains(ADD_COLUMN_BUTTON_CLASS)) showColumnForm(e.target)
        });
    }

    function showCardForm(target) {
        let form = target.closest('.' + COLUMN_CLASS).querySelector('.' + ADD_CARD_FORM_CLASS);
        form.classList.remove('hidden');
        target.classList.add('hidden');
    }

    function hideCardForm(target) {
        let column = target.closest('.' + COLUMN_CLASS);
        let form = column.querySelector('.' + ADD_CARD_FORM_CLASS);
        form.classList.add('hidden');
        column.querySelector('.' + ADD_CARD_BUTTON_CLASS).classList.remove('hidden');
    }

    function submitCardForm(submitButton) {
        let column = submitButton.closest('.' + COLUMN_CLASS);
        let input = column.querySelector('.' + CARD_FORM_INPUT_CLASS);

        if (input.value.trim().length > 0) {
            appendCard(input.value.trim(), column.querySelector('.' + CARDS_CLASS));
            hideCardForm(input);
        }
    }

    function showColumnForm(target) {
        let form = target.closest('.' + COLUMN_CLASS).querySelector('.' + ADD_COLUMN_FORM_CLASS);
        form.classList.remove('hidden');
        target.classList.add('hidden');
        appendNewColumnButton();
    }

    function appendNewColumnButton() {
        let column = document.createElement('div');
        column.classList.add(COLUMN_CLASS);
        column.insertAdjacentHTML('beforeend', getButtonTemplate("Добавить еще одну колонку"));
        column.insertAdjacentHTML('beforeend', addNewColumn);
        column.querySelector('.'+ADD_BUTTON_CLASS).classList.add(ADD_COLUMN_BUTTON_CLASS);
        app.appendChild(column);
    }

    return {
        init() {
            createDom();
            addEventListeners();
            appendNewColumnButton();
        }
    }

})();


kanban.init();