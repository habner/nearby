import { ImageBackground, View } from 'react-native'
import { router } from 'expo-router'
import { Button } from '@/components/button'
import { s } from './styles'
import { IconArrowLeft } from '@tabler/icons-react-native'

type Props = {
  uri: string
}

export function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} style={s.container}>
      <View style={s.header}>
        <Button
          style={{ width: 40, height: 40, borderRadius: 8 }}
          onPress={() => router.back()}
        >
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  )
}
