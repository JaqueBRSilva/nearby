import { colors } from "@/styles/colors";
import { IconTicket } from "@tabler/icons-react-native";
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { placeStyle } from "./styles";

export type PlaceProps = {
    id: string
    name: string
    description: string
    coupons: number
    cover: string
    address: string
}

type Props = TouchableOpacityProps & {
    data: PlaceProps
}

export function Place({ data, ...rest }: Props) {

    return (
        <TouchableOpacity style={placeStyle.container} {...rest}>
            <Image
                style={placeStyle.image}
                source={{ uri: data.cover }}
            />

            <View style={placeStyle.content}>
                <Text style={placeStyle.name}>
                    {data.name}
                </Text>

                <Text style={placeStyle.description}>
                    {data.description}
                </Text>

                <View style={placeStyle.footer}>
                    <IconTicket size={16} color={colors.red.base} />

                    <Text style={placeStyle.tickets}>
                        {data.coupons} cupons disponíveis
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}