import { colors } from '@/styles/colors'
import { textStyle } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...textStyle.textSm,
    color: colors.gray[500],
  },
})
