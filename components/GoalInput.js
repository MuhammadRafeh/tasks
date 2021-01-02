import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    return (
        <View style={styles.inputContainer} >
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                value={props.enteredGoal}
                onChangeText={props.goalInputHandler}
            />
            <Button title="Add" onPress={props.addGoalHandler} />
      </View>
    );
};

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
})
