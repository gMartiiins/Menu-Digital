import { useState } from 'react';
import { BoxLogin, BoxText1, BoxInput1, Input1, TextInput1, BoxButton, ButtonMesa, MesaText, BoxText2, BoxInput2, Input2, TextInput2 } from './styles';
import { Alert, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React from 'react';

type Props = {
    textinput1: string;
    textinput2: string;
    buttontext: string;
  };
  
export function LoginC({ textinput1, textinput2 }: Props) {
  const [idInserido, setIdInserido] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      setIdInserido('');
      setSenha('');
    }, [])
  );

  function handleNewGroup1() {
    if (!idInserido || !senha) {
      Alert.alert('ACESSO NEGADO', 'Você precisa fornecer o ID e a senha para continuar.');
    } else if (idInserido === 'c' && senha === 'c') {
      navigation.navigate('mesa1');
    } else {
      Alert.alert('ACESSO NEGADO', 'ID ou SENHA inserido está incorreto.');
    }
  }

  function handleNewGroup2() {
    if (!idInserido || !senha) {
      Alert.alert('ACESSO NEGADO', 'Você precisa fornecer o ID e a senha para continuar.');
    } else if (idInserido === 'c' && senha === 'c') {
      navigation.navigate('mesa2');
    } else {
      Alert.alert('ACESSO NEGADO', 'ID ou SENHA inserido está incorreto.');
    }
  }

  function handleNewGroup3() {
    if (!idInserido || !senha) {
      Alert.alert('ACESSO NEGADO', 'Você precisa fornecer o ID e a senha para continuar.');
    } else if (idInserido === 'c' && senha === 'c') {
      navigation.navigate('mesa3');
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
        <Input1 onChangeText={(texto: string) => setIdInserido(texto)} />
      </BoxInput1>

      <BoxText2>
        <TextInput2>
          {textinput2}
        </TextInput2>
      </BoxText2>
      <BoxInput2>
        <Input2 onChangeText={(senha: string) => setSenha(senha)} secureTextEntry={true} />
      </BoxInput2>

      <BoxButton>
        <TouchableOpacity onPress={handleNewGroup1}>
          <ButtonMesa>
            <MesaText>
              Mesa1
            </MesaText>
          </ButtonMesa>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNewGroup2}>
          <ButtonMesa>
            <MesaText>
              Mesa2
            </MesaText>
          </ButtonMesa>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNewGroup3}>
          <ButtonMesa>
            <MesaText>
              Mesa3
            </MesaText>
          </ButtonMesa>
        </TouchableOpacity>
      </BoxButton>
    </BoxLogin>
  );
}