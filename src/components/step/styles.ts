import { colors } from '@/styles/colors'
import { textStyle } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
  },
  title: {
    ...textStyle.titleMd,
    color: colors.gray[600],
    flexWrap: 'wrap',
  },
  description: {
    ...textStyle.textSm,
    color: colors.gray[500],
    marginTop: 4,
    flexWrap: 'wrap',
  },
})
