import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';

import {
  primary,
  hoverBack,
  textBase,
  secondary,
  titleInPrimary,
  textComplement,
} from '../../utils/colors';

type StyleProps = {
  primary?: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${hoverBack};
`;
export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  background-color: ${primary};
`;

export const LandingImage = styled.Image``;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Regular';
  color: ${textBase};
  flex: 1;
`;

export const StrongTitle = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Bold';
  color: ${textBase};
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Button = styled(RectButton)`
  width: 140px;
  height: 160px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${(props: StyleProps) =>
    props.primary ? primary : secondary};
  justify-content: space-between;
  align-items: flex-start;
`;

export const ButtonIcon = styled.Image``;

export const ButtonText = styled.Text`
  color: ${titleInPrimary};
  font-size: 20px;
  font-family: 'Archivo-Bold';
`;

export const Info = styled.Text`
  width: 135px;
  font-size: 12px;
  font-family: 'Poppins-Regular';
  margin-top: 40px;
  color: ${textComplement};
`;

export const HeartIcon = styled.Image``;
