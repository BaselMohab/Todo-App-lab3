import React, { useState } from 'react';  
import { View, TouchableOpacity, Text } from 'react-native';  
import Ionicons from 'react-native-vector-icons/Ionicons';  
import styles from '../styles';  
import ConfirmationModal from './ConfirmationModal';

const TodoItem = ({ todo, onRemove, onToggle, onPress }) => {  
    const [isModalVisible, setModalVisible] = useState(false);  

    const handleDelete = () => {  
        onRemove(todo.id);  
        setModalVisible(false);  
    };  

    return (  
        <TouchableOpacity style={styles.todoContainer} onPress={onPress}>  
            <View style={styles.todoContent}>  
                <Text style={[styles.todoText, todo.done && styles.done]} onPress={onPress}>  
                    {todo.title}  
                </Text>  
                <Text style={styles.comment}>{todo.comment}</Text>  
            </View>  
            <View style={styles.buttonsContainer}>  
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>  
                    <Ionicons name="trash-bin" size={24} color="red" />  
                </TouchableOpacity>  
                <TouchableOpacity onPress={() => onToggle(todo.id)} style={styles.button}>  
                    <Ionicons   
                        name={todo.done ? 'checkmark-circle' : 'ellipse-outline'}   
                        size={24}   
                        color={todo.done ? 'green' : 'gray'}   
                    />  
                </TouchableOpacity>  
            </View>  
            <ConfirmationModal  
                visible={isModalVisible}  
                onConfirm={handleDelete}  
                onCancel={() => setModalVisible(false)}  
            />  
        </TouchableOpacity>  
    );  
};  

export default TodoItem;