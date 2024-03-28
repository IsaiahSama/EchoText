import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, Button, View } from 'react-native';
import appStyle from './appstyle';

export default function Transcriptions() {

    return (
        <View style={appStyle.container}>
            <View>
                <Text style={appStyle.heading}>Transcriptions</Text>
                <Text style={appStyle.content}>Here, all your past transcriptions are available for you to view.</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
