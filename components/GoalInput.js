import { Button, StyleSheet, Text, TextInput, View, Modal, Image, ScrollView } from 'react-native';

function GoalInput(props){
   
      
    return(
    <ScrollView>
        <Modal visible={props.showModal} animationType='fade' style={styles.mainContainer}>
        <Image source={require('../assets/splash.png')} style={styles.image} />
        <View style={styles.todoContainer}>
        <TextInput style={styles.todoInput} placeholder='Your Goals' onChangeText={props.onSetGoal} value={props.enteredGoalText}/>
        <Button style={styles.todoSubmit}  title='Add Goal' onPress={props.onAddGoal}/>
      </View>
    </Modal>

    </ScrollView>
    
      
    )
}

export default GoalInput

const styles = StyleSheet.create({
    image:{
        backgroundColor: '#1b263b',
        width: 100,
        height: 100,
        margin: 100,
        marginBottom: 0

    },
    mainContainer:{
        backgroundColor: '#1b263b',
    },
    todoContainer: {
        flexDirection: 'row',
        margin: 50,
        gap: 20,
        paddingBottom: 15,
        height: 50,
      },
      todoInput: {
        borderWidth: 2,
        borderRadius: 30,
        width: '50%',
        padding: 8,
        borderColor: 'white',
        color: 'black'
      },
      todoSubmit: {
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 6,
    
      }
  });