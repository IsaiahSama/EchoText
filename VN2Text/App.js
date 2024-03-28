import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

const listItems = [
  {
    id: "item-1",
    content: '1. Open WhatsApp',
  },
  {
    id: "item-2",
    content: '2. Select the voice note you want to transcribe',
  },
  {
    id: "item-3",
    content: '3. Press share, and share it to this app',
  },
  {
    id: "item-4",
    content: '4. Watch the magic happen!',
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>VN 2 Text</Text>
        <Text style={styles.content}>
          Welcome to VN 2 Text, a simple application designed to transcribe WhatsApp voice notes into text!
        </Text>
        <Text style={styles.content}>
          To use it:
        </Text>
        
        {listItems.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={[styles.content, styles.listItems]}>{item.content}</Text>
          </View>
        ))}

        <Text style={styles.content}>
          Thanks for using it! Enjoy!
        </Text>

      </View>
      <View>
        <Button 
          onPress={() => alert('View Transcriptions')}
          title="View Transcriptions"
          accessibilityLabel='View Transcriptions'
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  heading : {
    fontSize: 30,
    textAlign: 'center',
  },
  fitContent: {
    maxHeight: 'fit-content',
    height: 'fit-content',
    border: '1px solid black',
  },
  content: {
    fontSize: 20,
  },
  listItems: {
    paddingLeft: 20,
    margin: 5,
  },  
  container: {
    margin: 5,
    marginTop: 40,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between'
  },
});
