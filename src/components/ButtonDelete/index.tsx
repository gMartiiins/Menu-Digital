import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { StyledButton, StyledText } from './styles';

type DeleteButtonProps = {
  onPress: () => void;
  hidden?: boolean;
};

export function ButtonDelete({ onPress, hidden }: DeleteButtonProps) {
  const buttonStyle: StyleProp<ViewStyle> = hidden ? { display: 'none' } : {};

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <StyledButton>
        <StyledText>X</StyledText>
      </StyledButton>
    </TouchableOpacity>
  );
}