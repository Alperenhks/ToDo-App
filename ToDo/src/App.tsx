import React,{useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert
} from 'react-native';
import SaveTodo from './components/SaveToDo';
import TodoCounter from './components/ToDoCounter';
import TodoList from './components/ToDoList';


const App = () => {
const [todo,setTodo]=useState("")
const [list,setList]=useState([])

const handleSaveTodo=()=>{
  if(todo.length>0){
 const newTodo={
    id:(Math.random().toFixed(4)),
    text:todo,
    isDone:false
  };
 setList([newTodo ,...list]);
setTodo("");
  }else{
    Alert.alert("Boş bir ekleme yapamazsınız...")
  }
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TodoCounter list={list}/>
      <TodoList todoList={list} setList={setList}/>
        <SaveTodo setTodo={setTodo} handleSaveTodo={handleSaveTodo} text={todo}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027"
  }

});

export default App;