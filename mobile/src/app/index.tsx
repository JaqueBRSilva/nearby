import { Button } from '@/components/button'
import { Steps } from '@/components/steps'
import { Welcome } from '@/components/welcome'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function Index() {
    return (
        <View style={styles.indexContainer}>
            <Welcome />

            <Steps />

            <Button onPress={() => router.navigate("/home")}>
                <Button.Title>Começar</Button.Title>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    indexContainer: {
        flex: 1,
        padding: 40,
        gap: 40,
    }
})