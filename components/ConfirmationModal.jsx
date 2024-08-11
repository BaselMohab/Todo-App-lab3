import React from 'react';  
import { Modal, View, Text, Button } from 'react-native';
import styles from "../styles";  


const ConfirmationModal = ({ visible, onConfirm, onCancel }) => {  
    return (  
        <Modal  
            transparent={true}  
            animationType="slide"  
            visible={visible}  
            onRequestClose={onCancel}  
        >  
            <View style={styles.modalOverlay}>  
                <View style={styles.modalContent}>  
                    <Text style={styles.modalTitle}>Confirm Deletion</Text>  
                    <Text>Are you sure you want to delete this todo?</Text>  
                    <View style={styles.buttonContainer}>  
                        <Button title="Cancel" onPress={onCancel} />  
                        <Button title="Delete" onPress={onConfirm} color="red" />  
                    </View>  
                </View>  
            </View>  
        </Modal>  
    );  
};  



export default ConfirmationModal;