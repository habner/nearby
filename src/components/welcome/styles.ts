import { colors } from '@/styles/colors'
import { textStyle } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginTop: 24,
    marginBottom: 28,
  },
  title: {
    ...textStyle.titleXl,
    color: colors.gray[600],
  },
  subtitle: {
    ...textStyle.textMd,
    color: colors.gray[500],
    marginTop: 12,
  },
})
