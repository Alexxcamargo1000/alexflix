import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:50vh;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:54px;
    padding:20px;
    text-align:center;
    @media (max-width: 800px){
        font-size:34px;
    }
`;
