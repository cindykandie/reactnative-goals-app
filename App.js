import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler(){
    // console.log(enteredGoalText)
    setCourseGoals(currentGoals => [...currentGoals, enteredGoalText])
  }

  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <TextInput style={styles.todoInput} placeholder='Your Goals' onChangeText={goalInputHandler}/>
        <Button style={styles.todoSubmit}  title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View>
       
        {courseGoals.map((goal)=> <Text style={styles.todoText} key={goal+ Math.random()}>- {goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#1b263b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoContainer: {
    flexDirection: 'row',
    gap: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    paddingBottom: 15
  },
  todoInput: {
    borderWidth: 2,
    borderRadius: 30,
    width: '50%',
    padding: 8,
    borderColor: 'white',
    color: 'white'
  },
  todoSubmit: {
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 6,

  },
  todoText: 
    {
      margin: 5, 
      borderColor: 'green', 
      borderBottomWidth: 1, 
      padding: 2, 
      color: 'white',
      fontSize: 20,
      width: '100%'
    }
  
});
