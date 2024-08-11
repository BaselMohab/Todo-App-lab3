import React from "react";  
import { View, Text } from "react-native";  
import styles from "../styles";  

const TodoDetails = ({ route }) => {  
  const { todo } = route.params;  

  if (!todo) {  
    return (  
      <View style={styles.todoDetailscontainer}>  
        <Text style={styles.title}>Todo not found</Text>  
      </View>  
    );  
  }  

  return (  
    <View style={styles.todoDetailscontainer}>  
      <Text style={styles.title}>{todo.title}</Text>  
      <Text style={styles.comment}>{todo.comment}</Text>  
    </View>  
  );  
};  

export default TodoDetails;