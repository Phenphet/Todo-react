import { useState } from 'react'
import './App.css'

function App() { 
  const [todoList, setTodolist] = useState([])
  const [textValue, setTextvalue] = useState('')

  const onclickAdd = () => {
    if(textValue === ''){
      alert("input your text ")
    }else{
      setTodolist([
        ...todoList,
        textValue
      ])
      setTextvalue('')
    }
  }

  const removeText = (index) => {

    let todo = [...todoList]

    todo.splice(index, 1)
    setTodolist(todo)
  }

  return (
    <>
      <h1>Todo<span className='chang_text'>l</span>ist</h1>
      <hr />
      <div className="card">
        <input className='input' type="text" value={textValue} onChange={(e) => setTextvalue(e.target.value)} />
        <input className='button' type='submit' value='add text' onClick={onclickAdd} />
      </div>
      <div>
        {todoList.map((item, index) => {
          return(
            <div key={index} className='list'>
              {item}
              <button onClick={() => removeText(index)} className='btn-dele'>delete</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
