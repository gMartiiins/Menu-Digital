import styled from 'styled-components/native'

export const Container = styled.View`  
      height: 50px;
      width: 100%;
      background-color: red;
      align-items: center;
      justify-content: center;
      border-radius: 0 0 10px 10px;
     
`;

export const TitleButtom = styled.Text`
      font-size: 30px;
      color: white;
      font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE};
`