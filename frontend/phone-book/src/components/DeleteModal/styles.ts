import styled from "styled-components";

export const ContainerOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    text-align: center;
`;

export const ContactName = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

export const Title = styled.span`
    font-size: 20px;
    font-weight: 500;
`;

export const ConfirmButton = styled.button`
    background-color: #279b28;
    width: 130px;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;

    &:hover {
        opacity: 0.8;
    }
`;

export const BackButton = styled.button`
    background-color: black;
    width: 100px;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;

    &:hover {
        opacity: 0.8;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;