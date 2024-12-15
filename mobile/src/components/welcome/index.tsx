import { Image, Text, View } from "react-native";
import { welcomeStyles } from "./styles";

export function Welcome() {
    return (
        <View style={{}}>
            <Image
                source={require("@/assets/logo.png")}
                style={welcomeStyles.logo}
            />

            <Text style={welcomeStyles.title}>
                Boas vindas ao Nearby!
            </Text>

            <Text style={welcomeStyles.subtitle}>
                Tenha cupons de vantagem para usar em {'\n'}
                seus estabelecimentos favoritos.
            </Text>
        </View>
    )
}