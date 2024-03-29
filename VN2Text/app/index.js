import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useShareIntent } from 'expo-share-intent';
import { Link } from "expo-router";
import appStyle from '../appstyle';

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

  const { hasShareIntent, shareIntent, resetShareIntent, error } = useShareIntent({debug: true, resetOnBackground: true});

  return (
    <View style={appStyle.container}>
      <View>
        <Text style={appStyle.heading}>VN 2 Text</Text>
        <Text style={appStyle.content}>
          Welcome to VN 2 Text, a simple application designed to transcribe WhatsApp voice notes into text!
        </Text>
        <Text style={appStyle.content}>
          To use it:
        </Text>
        
        {listItems.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={[appStyle.content, styles.listItems]}>{item.content}</Text>
          </View>
        ))}

        <Text style={appStyle.content}>
          Thanks for using it! Enjoy!
        </Text>

      </View>
      <View>
        <Text>
          {hasShareIntent ? "SHARE INTENT FOUND!" : "SHARE INTENT NOT FOUND"}
        </Text>
      </View>
      <View>
        <Link href="/transcriptions" asChild>
          <Button 
            title="View Transcriptions"
            accessibilityLabel='View Transcriptions'
          />
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  fitContent: {
    maxHeight: 'fit-content',
    height: 'fit-content',
    border: '1px solid black',
  },
  listItems: {
    paddingLeft: 20,
    margin: 5,
  },  
  
});
