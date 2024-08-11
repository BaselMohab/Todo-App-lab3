import React, { useState, useEffect } from "react";  
import { View, FlatList, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";  
import AsyncStorage from '@react-native-async-storage/async-storage';  
import TodoItem from "../components/TodoItem";  
import FilterButtons from "../components/FilterButtons";  
import styles from "../styles";
import backgroundImage from '../assets/images/bgImage.jpg'  

const Home = ({ navigation }) => {  
  const [todos, setTodos] = useState([]);  
  const [title, setTitle] = useState("");  
  const [comment, setComment] = useState("");  
  const [filter, setFilter] = useState('all');   

  useEffect(() => {  
    loadTodos();  
  }, []);  

  const loadTodos = async () => {  
    try {  
      const jsonValue = await AsyncStorage.getItem('@todos');  
      jsonValue != null ? setTodos(JSON.parse(jsonValue)) : setTodos([]);  
    } catch (e) {  
      console.error(e);  
    }  
  };  

  const saveTodos = async (newTodos) => {  
    try {  
      const jsonValue = JSON.stringify(newTodos);  
      await AsyncStorage.setItem('@todos', jsonValue);  
    } catch (e) {  
      console.error(e);  
    }  
  };  

  const addTodo = () => {  
    const newTodo = { id: Date.now().toString(), title, comment, done: false };  
    const newTodos = [...todos, newTodo];  
    setTodos(newTodos);  
    saveTodos(newTodos);  
    setTitle("");  
    setComment("");  
  };  

  const removeTodo = (id) => {  
    const newTodos = todos.filter(todo => todo.id !== id);  
    setTodos(newTodos);  
    saveTodos(newTodos);  
  };  

  const toggleTodo = (id) => {  
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);  
    setTodos(newTodos);  
    saveTodos(newTodos);  
  };  

  const filteredTodos = () => {  
    if (filter === 'active') {  
      return todos.filter(todo => !todo.done);  
    } else if (filter === 'done') {  
      return todos.filter(todo => todo.done);  
    }  
    return todos;
  };  

  return ( 
    <ImageBackground   
      source={backgroundImage} 
            style={styles.background}  
        >
    <View style={styles.container}>  
      <View>  
        <TextInput   
          placeholder="Todo Title"   
          value={title}   
          onChangeText={setTitle}   
          style={styles.input}   
        />  
        <TextInput   
          placeholder="Comment"   
          value={comment}   
          onChangeText={setComment}   
          style={styles.input}   
        />  
        <TouchableOpacity style={styles.submitBtn} onPress={addTodo}>  
          <Text style={styles.submitText}>Add Todo</Text>  
        </TouchableOpacity>  
      </View>  

      <FilterButtons onFilter={setFilter} />   

      <FlatList   
        data={filteredTodos()} 
        renderItem={({ item }) => (  
          <TodoItem   
            todo={item}   
            onRemove={removeTodo}   
            onToggle={toggleTodo}   
            onPress={() => navigation.navigate('TodoDetails', { todo: item })}  
          />  
        )}   
        keyExtractor={item => item.id}   
      />  
    </View>
    </ImageBackground>  
  );  
};  

export default Home;