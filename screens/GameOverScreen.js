import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from "../components/BodyText";
import DefaultsStyles from '../constants/defaults-styles';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText style={DefaultsStyles.title}>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode="cover" source={require('../assets/images/success.png')} />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'black',
    overflow: "hidden",
    marginVertical: 30
  }
});

export default GameOverScreen;