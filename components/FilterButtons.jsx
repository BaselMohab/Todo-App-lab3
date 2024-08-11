import React from "react";  
import { View, TouchableOpacity, Text } from "react-native";  
import styles from "../styles";  

const FilterButtons = ({ onFilter }) => {  
    return (  
        <View style={styles.filterContainer}>  
            <TouchableOpacity onPress={() => onFilter('all')} style={styles.filterButton}>  
                <Text style={styles.filterButtonText}>All</Text>  
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => onFilter('active')} style={styles.filterButton}>  
                <Text style={styles.filterButtonText}>Active</Text>  
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => onFilter('done')} style={styles.filterButton}>  
                <Text style={styles.filterButtonText}>Done</Text>  
            </TouchableOpacity>  
        </View>  
    );  
};  

export default FilterButtons;