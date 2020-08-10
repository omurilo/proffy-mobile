import React from 'react';
import { Button } from 'react-native';

import * as Styled from './styles';

import LandingImg from '../../assets/images/landing.png';
import { useNavigation } from '@react-navigation/native';

const Landing: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Styled.Container>
        <Styled.ImageContainer>
          <Styled.LandingImage source={LandingImg} />
        </Styled.ImageContainer>
        <Styled.Content>
          <Styled.Title>
            Seja bem-vindo.{'\n'}
            <Styled.StrongTitle>O que deseja fazer?</Styled.StrongTitle>
          </Styled.Title>
          <Styled.ButtonsContainer>
            <Styled.Button
              title="Estudar"
              primary={true}
              onPress={() => navigation.navigate('Tabs')}
            />
            <Styled.Button
              title="Dar aulas"
              onPress={() => navigation.navigate('Tabs')}
            />
          </Styled.ButtonsContainer>
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default Landing;
