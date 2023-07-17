import { Pressable, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

function Goalitem(props){
    return(
        <Pressable android_ripple={{color: 'red'}} 
        onPress={props.onDelGoal.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedItem}>
            <View style={styles.todoList}>
            <Text style={styles.todoText} >- {props.text}</Text>
            </View>
        </Pressable>

    )
    
}

export default Goalitem

const styles = StyleSheet.create({
    
    todoText: 
      {
        margin: 5, 
        borderColor: 'green', 
        borderBottomWidth: 1, 
        padding: 2, 
        color: 'white',
        fontSize: 20,
        width: '100%'
      },
      todoList:{
        flex:5
      },
      pressedItem: {
        color: 'red'
      }
    
  });