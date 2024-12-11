import { useRef } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { Place, PlaceProps } from '../place'
import { s } from './styles'
import { router } from 'expo-router'

type Props = {
  data: PlaceProps[]
}

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      enableDynamicSizing={false}
      enableOverDrag={false}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Place
            onPress={() => router.navigate(`/market/${item.id}`)}
            data={item}
          />
        )}
        contentContainerStyle={s.content}
        ListHeaderComponent={() => (
          <Text style={s.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  )
}
