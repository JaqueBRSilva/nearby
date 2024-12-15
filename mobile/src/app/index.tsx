import { Steps } from '@/components/steps'
import { Welcome } from '@/components/welcome'
import { StyleSheet, View } from 'react-native'

export default function Index() {
    return (
        <View style={styles.indexContainer}>
            <Welcome />

            <Steps />
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