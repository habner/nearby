import { Text, View } from 'react-native'
import { IconProps } from '@tabler/icons-react-native'
import { s } from './styles'
import { colors } from '@/styles/colors'

type Props = {
  title: string
  description: string
  icon?: React.ComponentType<IconProps>
}

export function Step(props: Props) {
  const { title, description, icon: Icon } = props
  return (
    <View style={s.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={{ flex: 1 }}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  )
}
