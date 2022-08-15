import React, { useRef, useState, useTransition } from 'react';
import './App.css';
import { GlobalStyleComponent } from 'styled-components';
import TodoCreate from './components/TodoCreate';
import TodoListItem from './components/TodoListItem';
import TodoTemplate from './components/TodoTemplate';



function App() {
  
  const [ inputs, setInputs ] = useState({
    todo: '',
    timeLimit: ''
  })
  const {todo, timeLimit} = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [items, setItems] = useState ([
    {
        id: 1,
        todo: '리액트 투두리스트 만들기',
        timeLimit: '8월15일',
        done: false
    },
    {
        id: 2,
        todo: '라이언 홀리데이 가기',
        timeLimit: '8월14일',
        done: true,
    },
    {
        id: 3,
        todo: '휴식하기',
        timeLimit: '8월13일',
        done: true
    }
])

  const nextId = useRef(4)

  const onCreate = () => {

    const newTodo = {
      id: nextId.current,
      todo,
      timeLimit,
    }

    setItems(items.concat(newTodo))
    setInputs({
      todo: '',
      timeLimit: ''
    })

    nextId.current += 1
  }

  const onRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };


  return(

      <TodoTemplate>
       <TodoCreate
         onChange={onChange}
         onCreate={onCreate}
         todo={todo}
         timeLimit={timeLimit}
       />
       <TodoListItem items={items} onRemove={onRemove}/>
      </TodoTemplate>

  )
   
}

export default App;
