import styled from 'styled-components/native';

export const StyledButton = styled.View`
    background-color: red;  
    width: 40px;
    height: 100px;
    align-items: center;
    justify-content:center;
    border-radius: 0 10px 10px 0;
`;

export const StyledText = styled.Text`
    font-size: 30px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE};
    color: white;
`;