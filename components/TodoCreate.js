import React from "react";
import styled from "styled-components";
import { MdAdd } from 'react-icons/md'

const CreateWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    input{
        padding: 10px 15px 10px 15px;
        border: none;
        font-size: 15px;
        border: 1px solid #87CEFA;
        height: 30px;
    }

`;

const inputWrap = styled.div`
flex-direction: row;
`;

const AddBtn = styled.div`
    flex: 1;  
    padding: 10px 15px 10px 15px;
    text-align: center;
    height: 30px;
    justify-content: center;
    border: 1px solid  #87CEFA;
    font-size: 24px;
    color:  #87CEFA;

    &:hover{
        background: #AFEEEE;
        border: 1px solid #AFEEEE; 	
        color: #ffffff;
        transition: 0.5s;
    };
    &:active{
        background: #ADD8E6;
        border: 1px solid #ADD8E6;	
    }
`;


function TodoCreate({ todo, timeLimit, onChange, onCreate }) {
    return(
        <CreateWrap>
            <inputWrap>
            <input
                name="todo"
                placeholder="할 일을 입력해주세요"
                onChange={onChange}
                value={todo}
            />
            <input
                name="timeLimit"
                placeholder="기한을 입력해주세요"
                onChange={onChange}
                value={timeLimit}
            />
            </inputWrap>
            <AddBtn onClick={onCreate}><MdAdd /></AddBtn>
        </CreateWrap>
    )
}

export default TodoCreate