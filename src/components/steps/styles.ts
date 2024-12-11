import { colors } from '@/styles/colors'
import { textStyle } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    gap: 24,
    flex: 1,
  },
  title: {
    ...textStyle.textMd,
    color: colors.gray[500],
  },
})
