import { colors } from "@/styles/colors";
import { categoriesIcons } from "@/utils/categories-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { categoryStyles } from "./styles";

type CategoryProps = PressableProps & {
    name: string
    iconId: string
    isSelected?: boolean
}

export function Category({ name, iconId, isSelected = false, ...rest }: CategoryProps) {
    const Icon = categoriesIcons[iconId]

    return (
        <Pressable
            style={[categoryStyles.container, isSelected && categoryStyles.containerSelected]}
            {...rest}
        >
            <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />

            <Text style={[categoryStyles.name, isSelected && categoryStyles.nameSelected]}>
                {name}
            </Text>
        </Pressable>
    )
}