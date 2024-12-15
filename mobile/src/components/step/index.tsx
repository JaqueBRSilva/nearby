import { colors } from "@/styles/colors";
import { IconProps } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { stepStyles } from "./styles";

type StepProps = {
    icon: React.ComponentType<IconProps>
    title: string
    description: string
}

export function Step({ icon: Icon, title, description }: StepProps) {
    return (
        <View style={stepStyles.container}>
            {Icon && <Icon size={32} color={colors.red.base} />}

            <View style={stepStyles.details}>
                <Text style={stepStyles.title}>
                    {title}
                </Text>

                <Text style={stepStyles.description}>
                    {description}
                </Text>
            </View>
        </View>
    )
}