import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import {
  primary,
  titleInPrimary,
  textInPrimary,
  secondary,
  buttonText,
} from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${primary};
  justify-content: space-between;
  padding: 40px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.ImageBackground.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 32px;
  color: ${titleInPrimary};
  line-height: 37px;
  width: 170px;
`;

export const Description = styled.Text`
  color: ${textInPrimary};
  font-family: 'Poppins-Regular';
  font-size: 16px;
  line-height: 26px;
  margin-top: 24px;
  width: 232px;
`;

export const InfoContainer = styled.View`
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 80px;
`;

export const Info = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  width: 120px;
  justify-content: space-between;
  align-items: center;
  color: ${secondary};
`;

export const Icon = styled.Image`
  margin-right: 24px;
`;

export const Button = styled(RectButton)`
  background-color: ${secondary};
  width: 100%;
  height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 16px;
  color: ${buttonText};
`;
