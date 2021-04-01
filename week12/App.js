import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Card} from 'react-native-elements';

export default function App() {

  const [breed,setBreed] = useState();
  const [votes,setVotes] = useState(false);

  function increaseGalaVote(value) {
    setBreed('gala');
    setVotes(true);
  }

  function increaseHoneyCrispVote(value) {
    setBreed('honeycrisp');
    setVotes(true);
  }

  function increaseGrannySmithVote(value) {
    setBreed('granny smith');
    setVotes(true);
  }

  return (
    <View style={styles.container}>
    { votes ? (
      <View style={styles.container}>
        <Text style={styles.header}> You voted for {breed}! </Text>
      </View>
    ) : (
      <View>
        <Text style={styles.header}> Vote for the best breed of apple! </Text>
      <Card>
        <Button title="Gala" onPress={(value)=>(increaseGalaVote('gala'))}/>
      </Card>
      <Card.Divider/>
      <Card>
        <Button title="Honey Crisp" onPress={(value)=>(increaseHoneyCrispVote('honey crisp'))}/>
      </Card>
      <Card.Divider/>
      <Card>
        <Button title="Granny Smith" onPress={(value)=>(increaseGrannySmithVote('granny smith'))}/>
      </Card>
      </View>
    )
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
