import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 512px;
    margin: 6rem auto 0 auto;
    border-radius: 4px;
    overflow: hidden;

    .title {
        background: #87CEFA;
        color: white;
        height: 4rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content {
        background: #ffffff;
    }
`

function TodoTemplate({ children }) {
    return(
        <TodoTemplateBlock>
            <div className="title">일정관리</div>
            <div className="content"> {children} </div>
        </TodoTemplateBlock>
    )
}

export default TodoTemplate