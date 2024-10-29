import styled from "styled-components"

const Button = styled.button`
    background-color: ${({ bgColor }) => bgColor || 'white'};
    border: none;
    margin-left: ${({ marginLeft }) => marginLeft || '0'};
    color: ${({ color }) => color || 'black'};
    font-weight: bold;
`;

export default Button;