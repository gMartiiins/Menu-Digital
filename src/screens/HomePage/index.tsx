import { Container, BoxLogo, LogoImg, BoxRestaurant, RestaurantText, BVoltar, BVoltarText, BoxConsumer, ConsumerText, Separacao } from './styles';
import { TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import  { LoginR }   from '../../components/Login/LoginRestaurant'
import  { LoginC }   from '../../components/Login/LoginConsumer'
import myBurger from '../../../assets/myburger.png'

export function HomePage({ navigation }: any) {
    const [SumirC, setSumirC] = useState(true);
    const [AparecerR, setAparecerR] = useState(false);
  
    const [SumirR, setSumirR] = useState(true);
    const [AparecerC, setAparecerC] = useState(false);
  
    const toggleRestaurant = () => {
      setSumirC(!SumirC);
      setAparecerR(!AparecerR);
    };
  
    const toggleCliente = () => {
      setSumirR(!SumirR);
      setAparecerC(!AparecerC);
    };
  
    useLayoutEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        setSumirC(true);
        setAparecerR(false);
        setSumirR(true);
        setAparecerC(false);
      });
  
      return unsubscribe;
    }, [navigation]);
  
return (
  <Container>
    <BoxLogo>
      <LogoImg source={myBurger}/>
    </BoxLogo>

    <TouchableOpacity onPress={toggleRestaurant}>
      {SumirR && (
        <BoxRestaurant>
          <RestaurantText>
            RESTAURANTE
          </RestaurantText>
        </BoxRestaurant>
      )}
    </TouchableOpacity>

    {AparecerR && <LoginR textinput1="ID" textinput2="Senha" buttontext="OK" />}

    <TouchableOpacity onPress={toggleRestaurant}>
      {!SumirC && (
        <BVoltar>
          <BVoltarText>
            voltar
          </BVoltarText>
        </BVoltar>
      )}
    </TouchableOpacity>

    {SumirR && <Separacao />}

    <TouchableOpacity onPress={toggleCliente}>
      {SumirC && (
        <BoxConsumer>
          <ConsumerText>
            MENU
          </ConsumerText>
        </BoxConsumer>
      )}
    </TouchableOpacity>

    {AparecerC && <LoginC textinput1="ID" textinput2="Senha" buttontext="OK" />}

    <TouchableOpacity onPress={toggleCliente}>
      {!SumirR && (
        <BVoltar>
          <BVoltarText>
            voltar
          </BVoltarText>
        </BVoltar>
      )}
    </TouchableOpacity>
  </Container>
);
}