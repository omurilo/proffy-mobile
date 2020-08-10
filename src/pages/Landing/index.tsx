import React from 'react';
import * as Styled from './styles';

import LandingImg from '../../assets/images/landing.png';
import { useNavigation } from '@react-navigation/native';

import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import hearIcon from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToStudy = () => {
    navigation.navigate('Tabs', { screen: 'Study' });
  };

  const handleNavigateToGiveClasses = () => {
    navigation.navigate('GiveClasses');
  };

  return (
    <Styled.Container>
      <Styled.ScrollContainer>
        <Styled.ImageContainer>
          <Styled.LandingImage source={LandingImg} />
        </Styled.ImageContainer>
        <Styled.Content>
          <Styled.Title>
            Seja bem-vindo.{'\n'}
            <Styled.StrongTitle>O que deseja fazer?</Styled.StrongTitle>
          </Styled.Title>
          <Styled.ButtonsContainer>
            <Styled.Button primary={true} onPress={handleNavigateToStudy}>
              <Styled.ButtonIcon source={studyIcon} />
              <Styled.ButtonText>Estudar</Styled.ButtonText>
            </Styled.Button>
            <Styled.Button onPress={handleNavigateToGiveClasses}>
              <Styled.ButtonIcon source={giveClassesIcon} />
              <Styled.ButtonText>Dar aulas</Styled.ButtonText>
            </Styled.Button>
          </Styled.ButtonsContainer>
          <Styled.Info>
            Total de 285 conexões já realizadas {'  '}
            <Styled.HeartIcon source={hearIcon} />
          </Styled.Info>
        </Styled.Content>
      </Styled.ScrollContainer>
    </Styled.Container>
  );
};

export default Landing;
