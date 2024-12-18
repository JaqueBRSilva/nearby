import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { useRef } from "react"
import { Text, useWindowDimensions } from "react-native"
import { Place, PlaceProps } from "../place"
import { placesStyle } from "./styles"

type Props = {
    data: PlaceProps[]
}

export function Places({ data }: Props) {

    const dimensions = useWindowDimensions()
    const bottomSheetRef = useRef<BottomSheet>(null)

    const snapPoints = {
        min: 278,
        max: dimensions.height - 128
    }

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[snapPoints.min, snapPoints.max]}
            handleIndicatorStyle={placesStyle.indicator}
            backgroundStyle={placesStyle.container}
            enableOverDrag={false}
        >
            <BottomSheetFlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Place data={item} />}
                contentContainerStyle={placesStyle.content}
                ListHeaderComponent={() => (
                    <Text style={placesStyle.title}>
                        Explore locais perto de você
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </BottomSheet>
    )
}