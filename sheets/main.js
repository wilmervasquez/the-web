import { $,$$, computedValue, range } from "./lib/utils.js";


class Table{
  constructor(table,rows, columns) {
    this.head = table.querySelector('thead')
    this.body = table.querySelector('tbody')
    this.state = range(rows).map(i=> range(columns).map((i)=>({computedValue: 0, value:0})))
    this.selectedColumn = null
    this.columns = columns
    this.rows = rows
    this.head.addEventListener('click',(event)=>{
      const th = event.target.closest('th')
      if(!th) return
    
      const x = [...th.parentNode.children].indexOf(th)
     
      if (x<=0 ) return
      this.selectedColumn = x-1;
      
      this.head.querySelectorAll('th').forEach(m=> m.classList.remove('select'))
      this.body.querySelectorAll('td').forEach(m=> m.classList.remove('select'))

      $(`tr th:nth-child(${this.selectedColumn+2})`).classList.add('select')
      let g = $$(`tr td:nth-child(${this.selectedColumn+2})`).forEach(el=> el.classList.add('select'))
    })

    this.body.addEventListener('click', (event) => {
      const td = event.target.closest('td')
      if (!td) return;
    
      const {row,column}= td.dataset
      const input = td.querySelector("input");
      const span = td.querySelector("span");
    
      const end = input.value.length
    
      input.setSelectionRange(end,end)
      input.focus()
      
      input.addEventListener('blur', ()=>{
        console.log(this.state)

        if (input.value === this.state[row][column].value) return
        
        this.updateCell({row, column, value:input.value})

      }, { once: true });
      input.addEventListener('keydown', (event)=>{
        if (event.key === 'Enter') input.blur()
      });
         
    })
    document.addEventListener('keydown',event=>{
      
      if (event.key === 'Backspace' && this.selectedColumn !== null) {
        this.state.forEach((_row, row)=>{
          _row.forEach((_,column)=>{
            if (column === this.selectedColumn) {
              this.state[row][column].value = 0
              this.state[row][column].computedValue = 0
            }
          })
        })
        this.render()
        this.selectedColumn = null
      }
    })  

    document.addEventListener('copy',(event)=>{
      
      if (this.selectedColumn != null) {
        const data = []

        for (let index = 0; index < this.state.length; index++) {
          data.push(this.state[index][this.selectedColumn-1].computedValue)
          
        }
        event.clipboardData.setData('text/plain', data.join('\n'))
        event.preventDefault()
      }
    })
  }
  coputedAllCells(constants){
    this.state.forEach((rows,x) => {
      rows.forEach((cell,y) => {
        cell.computedValue = computedValue(cell.value, constants) 
      });
    });
  }
  updateCell({row,column,value}){
    this.state[row][column].computedValue = computedValue(value,this.genCellsConst(this.state)) ;
    this.state[row][column].value = value
  
    this.coputedAllCells(this.genCellsConst(this.state))
    this.render()
  }
  render() {
    const headerHTML = `<tr>
      <th></th>
      ${range(this.columns).map((rows,i)=> `<th>${String.fromCharCode(i+65)}</th>`).join('')}
    </tr>`;

    const bodyHTML = this.state.map((rows,i)=>`
      <tr>
        <td>${i+1}</td>
        ${rows.map((column, columnIndex)=> `
          <td data-row="${i}" data-column="${columnIndex}">
            <span>${column.computedValue}</span>
            <input value="${column.value}">
          </td>
        `).join('')}
      </tr>
    `).join('')

    this.head.innerHTML = headerHTML
    this.body.innerHTML = bodyHTML
  }
  genCellsConst(){
    return this.state.map((rows, row)=>{
      return rows.map((column,columnIndex)=>{
        const letter = String.fromCharCode(columnIndex+65)
        const cellId = `${letter}${row+1}`
  
        if (isNaN(Number(this.state[row][columnIndex].computedValue))) {
            return `const ${cellId} = '${this.state[row][columnIndex].computedValue }';`
        }
        return `const ${cellId} = ${this.state[row][columnIndex].computedValue };`
      }).join('\n')
    }).join('\n');
  }
}

const sheet = new Table($('table'),30,8)

sheet.render()