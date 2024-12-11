import { colors } from '@/styles/colors'
import { textStyle } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    padding: 8,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  image: {
    width: 116,
    height: 104,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  content: {
    flex: 1,
    paddingVertical: 8,
    gap: 4,
  },
  name: {
    ...textStyle.titleSm,
    color: colors.gray[600],
  },
  description: {
    ...textStyle.textXs,
    color: colors.gray[500],
  },
  footer: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 10,
  },
  tickets: {
    ...textStyle.textXs,
    color: colors.gray[400],
  },
})
