import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(null, props.id)}>
            <View style={ styles.listItem }>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
})