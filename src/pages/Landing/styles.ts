import styled from 'styled-components/native';

import { primary, hoverBack, textBase, secondary } from '../../utils/colors';

type StyleProps = {
  primary?: boolean;
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${hoverBack};
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
  padding: 40px;
`;

export const Title = styled.Text`
  font: 500 20px Poppins;
  color: ${textBase};
  flex: 1;
`;

export const StrongTitle = styled.Text`
  font: 700 20px 'Poppins';
  color: ${textBase};
`;

export const ButtonsContainer = styled.View``;

export const Button = styled.Button`
  background-color: ${(props: StyleProps) =>
    props.primary ? primary : secondary};
`;
