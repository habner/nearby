import { colors } from '@/styles/colors'
import { textStyle } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    padding: 32,
    paddingTop: 40,
    paddingBottom: 0,
    gap: 32,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.gray[100],
  },
  header: {
    gap: 12,
  },
  cupons: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.red.light,
    paddingHorizontal: 8,
    paddingVertical: 10,
    gap: 8,
    borderRadius: 8,
  },
  name: {
    ...textStyle.titleLg,
    color: colors.gray[600],
  },
  description: {
    ...textStyle.textMd,
    color: colors.gray[500],
  },
  group: {
    width: '100%',
    gap: 12,
  },
  title: {
    ...textStyle.subtitle,
    color: colors.gray[500],
  },
  rule: { borderBottomColor: colors.gray[200], borderBottomWidth: 1 },
})
