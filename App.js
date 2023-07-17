import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import Goalitem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])


  function modalHandler(){
    setShowModal(!showModal)
  }

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler(){
    if(enteredGoalText == ''){
      modalHandler()
      return
    }
    setCourseGoals(currentGoals => [...currentGoals, {text: enteredGoalText, id: (Math.random() * Math.random())}])
    setEnteredGoalText('')
    modalHandler()

  }
 function deleteGoalHandler(id){
     setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal)=> goal.id !== id)
     })
 }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.container}>
      <Button title='Add New Goal' color='black' onPress={modalHandler}/>
      <GoalInput showModal = {showModal} onAddGoal = {addGoalHandler} onSetGoal={goalInputHandler} enteredGoalText= {enteredGoalText}
       
      />
      <FlatList data={courseGoals}
      renderItem={(itemData) =>{
        return <Goalitem 
        text = {itemData.item.text} onDelGoal={deleteGoalHandler}
        id = {itemData.item.id}/>
        
      }}  
      keyExtractor={(item, index)=> {
        return item.id
      }
      }
      alwaysBounceVertical={false}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    marginTop: 5,
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
