import { StyleSheet } from 'react-native';  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        padding: 20,    
        backgroundColor: 'rgba(255, 255, 255, 0.8)',   
    },
    background: {  
        flex: 1,  
        resizeMode: 'cover',   
        justifyContent: 'center',   
    },
    input: {  
        borderWidth: 1,  
        borderColor: '#ccc',  
        borderRadius: 8,  
        paddingVertical: 15,  
        paddingHorizontal: 12,  
        marginVertical: 10,  
        backgroundColor: '#ffffff',  
        elevation: 2,  
    },  
    todoContainer: {  
        flexDirection: 'row', 
        justifyContent: 'space-between',   
        alignItems: 'center',  
        padding: 12,  
        borderBottomWidth: 1,  
        borderBottomColor: '#ccc',  
        backgroundColor: '#ffffff',   
        borderRadius: 8,   
        marginVertical: 8,   
        elevation: 1,  
    },  
    todoContent: {  
        flex: 1,  
        paddingRight: 10, 
    },  
    todoText: {  
        fontSize: 18,  
        marginBottom: 5,  
        color: '#333',  
    },  
    done: {  
        textDecorationLine: 'line-through',  
        color: 'gray',  
    },  
    submitBtn: {  
        backgroundColor: '#007BFF',   
        width: '100%',  
        borderRadius: 8,  
        alignItems: 'center',  
        marginTop: 20,  
        paddingVertical: 15,  
        shadowColor: '#000',   
        shadowOffset: { width: 0, height: 2 },  
        shadowOpacity: 0.8,  
        shadowRadius: 3,  
        elevation: 5,   
    },  
    submitText: {  
        color: 'white',   
        fontSize: 20,   
        fontWeight: 'bold',  
    },  
    buttonsContainer: {  
        flexDirection: 'row',  
        justifyContent: 'space-between',  
        alignItems: 'center',  
    }, 
    button: {
        marginLeft: 20
    },
    todoDetailscontainer: {  
        padding: 20,  
        backgroundColor: '#f9f9f9',   
        borderRadius: 10,  
        shadowColor: '#000',   
        shadowOffset: { width: 0, height: 2 },  
        shadowOpacity: 0.5,  
        shadowRadius: 4,  
        elevation: 2,  
    },  
    title: {  
        fontSize: 24,  
        fontWeight: 'bold',  
        color: '#222',   
    },  
    comment: {  
        fontSize: 16,  
        marginTop: 10,  
        color: '#444',  
    },  
    filterContainer: {  
        flexDirection: 'row',  
        justifyContent: 'space-around',  
        margin: 20,  
    },  
    filterButton: {  
        padding: 10,  
        backgroundColor: '#007BFF',  
        borderRadius: 6,   
        elevation: 2,  
        width: '30%',   
    },  
    filterButtonText: {  
        color: 'white',  
        fontSize: 16,  
        fontWeight: 'bold',  
        textAlign: 'center',  
    },
    modalOverlay: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  
    },  
    modalContent: {  
        width: '80%',  
        padding: 20,  
        backgroundColor: 'white',  
        borderRadius: 10,  
        alignItems: 'center',  
    },  
    modalTitle: {  
        fontSize: 18,  
        fontWeight: 'bold',  
        marginBottom: 10,  
    },  
    buttonContainer: {  
        flexDirection: 'row',  
        justifyContent: 'space-between',  
        width: '100%',  
        marginTop: 20,  
    },     
});  

export default styles;