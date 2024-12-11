import { colors } from '@/styles/colors'
import { textStyle } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: { gap: 12 },
  title: {
    ...textStyle.subtitle,
    color: colors.gray[500],
  },
  content: {
    flexDirection: 'row',
    backgroundColor: colors.green.soft,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    gap: 10,
  },
  code: {
    ...textStyle.titleSm,
    color: colors.gray[600],
    textTransform: 'uppercase',
  },
})
