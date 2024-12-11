import { Text, View } from 'react-native'
import { s } from './styles'
import { Info } from '@/components/market/info'
import {
  IconMapPin,
  IconPhone,
  IconPoint,
  IconTicket,
} from '@tabler/icons-react-native'
import { colors } from '@/styles/colors'
import { textStyle } from '@/styles/font-family'
import { Coupon } from '../coupon'
import { useState } from 'react'

export type PropsDetails = {
  name: string
  description: string
  address: string
  phone: string
  coupons: number
  rules: {
    id: string
    description: string
  }[]
}

type Props = {
  data: PropsDetails & { coupon: string | null }
}

export function Details({ data }: Props) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.name}>{data.name}</Text>
        <Text style={s.description}>{data.description}</Text>
        <View style={s.cupons}>
          <IconTicket color={colors.red.base} />
          <Text style={{ ...textStyle.titleSm, color: colors.gray[600] }}>
            {data.coupons}
          </Text>
          <Text style={{ ...textStyle.textSm, color: colors.gray[600] }}>
            cupons disponíveis
          </Text>
        </View>
      </View>
      <View style={{ gap: 16 }}>
        <View style={s.group}>
          <Text style={s.title}>Regulamento</Text>
          <View>
            {data.rules.map((rule) => (
              <Info
                icon={IconPoint}
                key={rule.id}
                description={rule.description}
              />
            ))}
          </View>
        </View>
        <View style={s.rule} />
        <View style={s.group}>
          <Text style={s.title}>Informações</Text>
          <View>
            <Info icon={IconMapPin} description={data.address} />
            <Info icon={IconPhone} description={data.phone} />
          </View>
        </View>
        <View style={s.rule} />
        {data.coupon && <Coupon code={data.coupon} />}
      </View>
    </View>
  )
}
