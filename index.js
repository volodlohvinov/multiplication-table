'use strict'

const table = document.getElementById('multiplication-table')
const tableSize = 10

for (let i = 1; i <= tableSize; i++) {
    const row = document.createElement('tr')

for (let j = 1; j <= tableSize; j++) {
    const cell = document.createElement ('td')
    cell.textContent = i*j
    row.appendChild(cell)
}

table.appendChild(row)
}
