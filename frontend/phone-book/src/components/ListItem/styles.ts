import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90px;
    border-bottom: 2px solid #d5d9dd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 20px;
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Name = styled.span`
    font-size: 25px;
    font-weight: 600;
`;

export const PhoneNumber = styled.span`
    color: #a7a7a7;
    font-size: 18px;
    display: flex;
    align-items: center;;
`;

export const Icon = styled.img`
    margin-right: 10px;
`;