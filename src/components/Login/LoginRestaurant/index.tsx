import React, { useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BoxLogin, BoxText1, BoxInput1, Input1, TextInput1, Button, ButtonText, BoxText2, BoxInput2, Input2, TextInput2 } from './styles';
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

type Props = {
    textinput1: string;
    textinput2: string;
    buttontext: string;
}

export function LoginR({ textinput1, textinput2, buttontext }: Props) {
    const [idInserido, setIdInserido] = useState('');
    const [senha, setSenha] = useState('');
  
    const navigation = useNavigation();
  
    useFocusEffect(
      React.useCallback(() => {
        setIdInserido('');
        setSenha('');
      }, [])
    );
  
    function handleNewGroup() {
      if (!idInserido || !senha) {
        Alert.alert('ACESSO NEGADO', 'Você precisa fornecer o ID e a senha para continuar.');
      } else if (idInserido === 'r' && senha === 'r') {
        navigation.navigate('restaurant');
      } else {
        Alert.alert('ACESSO NEGADO', 'ID ou SENHA inserido está incorreto.');
      }
    }
  
    return (
      <BoxLogin>
        <BoxText1>
          <TextInput1>
            {textinput1}
          </TextInput1>
        </BoxText1>
  
        <BoxInput1>
          <Input1 onChangeText={(texto: string) => setIdInserido(texto)}/>
        </BoxInput1>
  
        <BoxText2>
          <TextInput2>
            {textinput2}
          </TextInput2>
        </BoxText2>
  
        <BoxInput2>
          <Input2 onChangeText={(senha: string) => setSenha(senha)} secureTextEntry={true}/>
        </BoxInput2>
  
        <TouchableOpacity onPress={handleNewGroup}>
          <Button>
            <ButtonText>
              {buttontext}
            </ButtonText>
          </Button>
        </TouchableOpacity>
      </BoxLogin>
    );
  }