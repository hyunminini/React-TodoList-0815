import React from "react";
import { MdDone, MdDelete } from 'react-icons/md';
import styled, { css } from "styled-components";

const Remove = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;

    &:hover{
        color:  #87CEFA;
    }
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => props.done && css`
        color: #ced4da;
    `}
`;

const CheckCircle = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => props.done && css`
        border: 1px solid #87CEFA;
        color: #87CEFA;
    `}
`;

const TodoItemBlock = styled.div`
    padding:15px;
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover{
        ${Remove} {
            opacity: 1;
        }
    }
`;


function TodoItem({ item, onRemove, done  }) {

    const {todo, timeLimit, id} = item

    return(
        <TodoItemBlock>
            <CheckCircle done={done}> {done && <MdDone />} </CheckCircle>
            <b>{todo}</b> <span>({timeLimit})</span>
            <Remove onClick={() => onRemove(id)}> <MdDelete /></Remove>
        </TodoItemBlock>    
    )
}

function TodoListItem({ items, onRemove, done  }) {

    return(
        <div>
            {
                items.map(
                    item => (<TodoItem
                                item={item}
                                done={item.done}
                                key={item.id}
                                onRemove={onRemove}

                            />)
                )
            }
        </div>    
    )
}

export default TodoListItem;