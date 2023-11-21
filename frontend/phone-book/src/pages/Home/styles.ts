import styled from "styled-components";

export const Container = styled.div`
    width: 1100px;
    height: 600px;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 20px;
    border-radius: 6px;
`;

export const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.span`
    font-size: 55px;
    font-weight: 700;
`;

export const SubHeader = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SubTitle = styled.span`
    font-size: 35px;
    font-weight: 700;
`;

export const InputContainer = styled.div`
    width: 100%;
    margin-top: 10px;
`;

export const ItemsContainer = styled.div`
    width: 100%;
    height: 350px;
    margin-top: 10px;
    overflow-y: auto;
    box-sizing: border-box;
    border: 2px solid #d5d9dd;
    border-radius: 6px;
`;

export const Icon = styled.img`
    width: 45px;
    height: 50px;
    margin-right: 10px;
    margin-top: 5px;
`;