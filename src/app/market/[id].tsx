import { useEffect, useState, useRef } from 'react'
import { Alert, Modal, ScrollView, StatusBar, View } from 'react-native'
import { Redirect, router, useLocalSearchParams } from 'expo-router'
import { api } from '@/services/api'
import { Loading } from '@/components/loading'
import { Cover } from '@/components/market/cover'
import { Details, PropsDetails } from '@/components/market/details'
import { Button } from '@/components/button'
import { IconArrowLeft, IconScan } from '@tabler/icons-react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { colors } from '@/styles/colors'

type DataProps = PropsDetails & { cover: string }

export default function Market() {
  const [_, requestPermission] = useCameraPermissions()
  const params = useLocalSearchParams<{ id: string }>()
  const [coupon, setCoupon] = useState<string | null>(null)
  const [data, setData] = useState<DataProps>()
  const [isLoading, setIsLoading] = useState(true)
  const [isCouponFetching, setIsCouponFetching] = useState(false)
  const [isVisibleCameraModal, setisVisibleCameraModal] = useState(false)
  const qrLock = useRef(false)

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`)
      setData(data)
      console.log(params.id)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível carregar os dados', [
        { text: 'OK', onPress: () => router.back() },
      ])
    }
  }

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission()
      if (!granted) {
        return Alert.alert('Camera', 'Você precisa habilitar o uso da câmera')
      }
      qrLock.current = false
      setisVisibleCameraModal(true)
    } catch (error) {
      console.log(error)
      Alert.alert('Câmera', 'Não foi possível utilizar a câmera')
    }
  }

  async function getCoupon(id: string) {
    try {
      setIsCouponFetching(true)
      const { data } = await api.patch(`/coupons/${id}`)
      setCoupon(data.coupon)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível utilizar o cupom')
    } finally {
      setIsCouponFetching(false)
    }
  }

  function handleUseCoupon(id: string) {
    setisVisibleCameraModal(false)
    Alert.alert(
      'Cupom',
      'Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?',
      [
        { style: 'cancel', text: 'Não' },
        { text: 'Sim', onPress: () => getCoupon(id) },
      ]
    )
  }

  useEffect(() => {
    fetchMarket()
  }, [params.id, coupon])

  if (isLoading) return <Loading />
  if (!data) return <Redirect href='/home' />

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='default' hidden={isVisibleCameraModal} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={data.cover} />
        <Details data={{ ...data, coupon: coupon }}></Details>
      </ScrollView>
      <View style={{ flex: 1 }} />
      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Icon icon={IconScan} />
          <Button.Label>Ler QR Code</Button.Label>
        </Button>
      </View>
      <Modal visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1, padding: 24, paddingTop: 56 }}
          facing='back'
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true
              setTimeout(() => handleUseCoupon(data), 500)
            }
          }}
        >
          <Button
            style={{ width: 40, height: 40, borderRadius: 8 }}
            onPress={() => setisVisibleCameraModal(false)}
            isLoading={isCouponFetching}
          >
            <Button.Label>
              <IconArrowLeft color={colors.gray[100]} />
            </Button.Label>
          </Button>
        </CameraView>
      </Modal>
    </View>
  )
}
