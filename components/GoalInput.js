import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType={'slide'}>
            <View style={styles.inputContainer} >
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    value={enteredGoal}
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <Button title="Cancel" color={'red'} onPress={props.resetAddMode}/>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttons: {
        width: '30%'
    }
})
