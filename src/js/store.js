const state = {
    todoLists: [{
        name: 'План на месяц',
        items: ['Пройти курс по React', 'Отметить день рождения', 'Записаться на курсы английского языка, чтобы уехать жить в Лондон']
    }, {
        name: 'План на второй месяц месяц',
        items: ['Пройти курс по React1', 'Отметить день рождения1', 'Записаться на курсы английского языка, чтобы уехать жить в Лондон1']
    }]
}

const mutators = {
    addColumn(name) {

    },

    deleteColumn(index) {

    },

    addTodoItem(text, columnIndex) {

    }

}

const actions = {
    addTodo() {

    }
}

export { state, actions }