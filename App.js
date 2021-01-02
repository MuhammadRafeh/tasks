import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="Add" />
      </View>
      <View>

      </View>
    </View>
  );
}

// export default function App() {
//   return (
//     <View style={{paddingTop: 30, flex: 1, backgroundColor: 'black', flexDirection: 'column', alignItems: 'flex-start'}}>
//       <View
//         style={{
//           backgroundColor: 'red',
//           justifyContent: 'center',
//           alignSelf: 'stretch',
//           // flex: 1, //take space along main axes
//           // width: 100,
//           height: 100,
//           alignItems: 'center'}}
//       >
//         <Text>1</Text>
//       </View>
//       <View 
//         style={{
//           // flex: 1,
//           backgroundColor: 'orange',
//           justifyContent: 'center',
//           height: 100,
//           // flex: 1,
//           width: 150,
//           // alignSelf: 'flex-end',
//           alignItems: 'center'}}
//       >
//         <Text>2</Text>
//       </View>
//       <View 
//         style={{
//           backgroundColor: 'green',
//           justifyContent: 'center',
//           height: 100,
//           // flex: 3,
//           // alignSelf: 'center',
//           width: 100,
//           alignItems: 'center'}}
//       >
//         <Text>3</Text>
//       </View>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: { 
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10 }
});
