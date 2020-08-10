import React from 'react';

import * as Styled from './styles';

import backgroundImage from '../../assets/images/give-classes-background.png';
import rocketIcon from '../../assets/images/icons/rocket.png';
import { useNavigation } from '@react-navigation/native';

const ClassForm: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToLanding = () => navigation.navigate('Landing');

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.BackgroundImage source={backgroundImage}>
          <Styled.Title>Quer ser um Proffy?</Styled.Title>
          <Styled.Description>
            Para começar, você precisa se cadastrar como professor na nossa
            plataforma web.
          </Styled.Description>
          <Styled.InfoContainer>
            <Styled.Icon source={rocketIcon} />
            <Styled.Info>Preparare-se!{'\n'}vai ser o máximo.</Styled.Info>
          </Styled.InfoContainer>
        </Styled.BackgroundImage>
      </Styled.Content>
      <Styled.Button onPress={handleNavigateToLanding}>
        <Styled.ButtonText>Tudo bem</Styled.ButtonText>
      </Styled.Button>
    </Styled.Container>
  );
};

export default ClassForm;
