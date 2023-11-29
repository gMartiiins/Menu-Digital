import { TouchableOpacity } from 'react-native';
import { StyledButton, StyledText } from './styles';

type ButtonSituacaoProps = {
  cor: 'vermelho' | 'amarelo' | 'verde';
  onPress: () => void;
};

export function ButtonSituacao({ cor, onPress }: ButtonSituacaoProps) {
  const corBotao = {
    vermelho: 'darkred',
    amarelo: 'yellow',
    verde: 'green',
  }[cor];

  return (
    <TouchableOpacity onPress={onPress}>
      <StyledButton style={{ backgroundColor: corBotao }}>
        <StyledText>
          {}
        </StyledText>
      </StyledButton>
    </TouchableOpacity>
  );
}