import { StyleSheet } from "react-native"
import { colors } from '@/styles/theme'

export const loadStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray[100]
    },
})