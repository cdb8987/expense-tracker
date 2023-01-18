const addExpenseButton = document.getElementById('addexpensebutton')
addExpenseButton.addEventListener('click', () => {
    inputValues = document.querySelectorAll('input');
    let newTableRow = '<tr>';
    let mainTable = document.getElementById('maintable')
    inputValues.forEach(element => {
        newTableRow += `<td>${element.value}</td>`
    });
    newTableRow += '<td><button class="remove">X</button><td></tr>'
    console.log(newTableRow)
    mainTable.innerHTML += newTableRow
    console.log(mainTable.innerHTML)
    const removeButtons = document.querySelectorAll('button.remove')
    console.log(removeButtons)
    removeButtons.forEach((node) => {
        node.addEventListener('click', () => {
            node.parentNode.parentNode.innerHTML = null
        })
    })
})

