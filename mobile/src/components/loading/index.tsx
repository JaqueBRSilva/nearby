import { colors } from "@/styles/colors";
import { ActivityIndicator } from "react-native";
import { loadStyles } from "./styles";

export default function Loading() {
    return (
        <ActivityIndicator
            color={colors.green.base}
            style={loadStyles.container}
        />
    )
}