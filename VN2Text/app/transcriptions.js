import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, Button, View, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import appStyle from './appstyle';

const transcriptionData = [
    {
        id: "transcription-1",
        content: "Hello World!"
    },
    {
        id: "transcription-2",
        content: "Goodbye World!"
    }
]

export default function Transcriptions() {
    return (
        <View style={appStyle.container}>
            <View>
                <Text style={appStyle.heading}>Transcriptions</Text>

                {transcriptionData.length > 0 ? (
                    <>
                        <Text style={appStyle.content}>Here are all your past transcriptions are available for you to view.</Text>
                        <FlatList
                            data={transcriptionData}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Text>{item.content}</Text>
                                    <View style={styles.itemOptions}>
                                        <Pressable>
                                            <FontAwesome name="eye" size={25}/>
                                        </Pressable>
                                        <Pressable>
                                            <FontAwesome name="pencil" size={25}/>
                                        </Pressable>
                                        <Pressable>
                                            <FontAwesome name="trash" size={25}/>
                                        </Pressable>
                                    </View>
                                </View>
                            )}
                        />
                    </>
                ): (
                    <Text>No transcriptions found</Text>
                )}

            </View>
            <View>
                <Link href="/" asChild>
                    <Button 
                        title="Home"
                        accessibilityLabel='Home'
                    />
                </Link>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        margin: 5,
        fontSize: 18,
        border: '1px solid lightgray',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    itemOptions: {
        display: "flex",
        justifyContent: "space-evenly"
    }
})