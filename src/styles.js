import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-size: 300% 300%;
    background-image: linear-gradient(
                45deg, 
                rgba(59,173,227,1) 0%, 
                rgba(22,111,230,1) 25%, 
                rgba(2,68,183,1) 51%, 
                rgba(100,223,127,1) 100%
    );  
    animation: AnimateBG 20s ease infinite;

    @keyframes AnimateBG { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
    }


`
export const Content = styled.div`
    background-color: #ffffff;
    width: max-content;
`
export const Content2 = styled.div`
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 10px 23px 15px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`