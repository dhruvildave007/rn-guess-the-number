import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './sreens/StartGameScreen';
import GameScreen from './sreens/GameScreen';
import GameOverScreen from './sreens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0);
  };

  const gameOverHandler = numberOfRounds => {
    setUserNumber(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if(guessRounds > 0) {
    content = <GameOverScreen />
  }

  return (
    <View style={styles.screen}>
      <Header title="Geuss the Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
