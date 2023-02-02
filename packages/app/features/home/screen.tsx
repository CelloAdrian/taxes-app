import React, { useState, useRef } from 'react'
import { StatusBar, Pressable, TextInput } from 'react-native'
import { XStack, YStack, Text, Button, ScrollView } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'
import { Edit } from '@tamagui/lucide-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const houseValue = 500000
const landValue = 1000000
const waterYieldValue = 1000

export function HomeScreen() {
  const houseSizeRef = useRef<TextInput>(null)
  const landSizeRef = useRef<TextInput>(null)
  const monthlyEarningsRef = useRef<TextInput>(null)
  const waterUsageRef = useRef<TextInput>(null)

  const [houseSize, setHouseSize] = useState(0)
  const [landSize, setLandSize] = useState(0)
  const [monthlyEarnings, setMonthlyEarnings] = useState(0)
  const [waterUsage, setWaterUsage] = useState(0)
  const [monthlyTaxValue, setMonthlyTaxValue] = useState(0)

  const calculateMonthlyTax = () => {
    const houseTax = houseSize * houseValue
    const landTax = landSize * landValue
    const NJOP = houseTax + landTax
    const NJKP = NJOP * 0.2
    const earningTax = monthlyEarnings * 0.05
    const waterTax = waterUsage * waterYieldValue * 0.1
    const totalTax = (NJKP * 0.005) + earningTax + waterTax
    setMonthlyTaxValue(totalTax)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFC" />
      <KeyboardAwareScrollView>
        <YStack flex={1} backgroundColor="#FDFDFC" padding={20} space="$5">
          <LinearGradient
            style={{
              height: 150,
              backgroundColor: 'transparent',
              overflow: 'hidden',
              borderRadius: 15,
            }}
            locations={[0, 1]}
            colors={['#953de8a3', '#ff7f50']}
          >
            <XStack padding={20}>
              <Text color="#FDFDFC" fontFamily="Inter" fontSize={20} fontWeight="700">
                Taxes this month
              </Text>
            </XStack>
            <XStack flex={1} justifyContent="center" alignItems="center" space="$2">
              <Text color="#FDFDFC" fontFamily="Inter" fontSize={40} fontWeight="700">
                IDR.
              </Text>
              <Text color="#FDFDFC" fontFamily="Inter" fontSize={40} fontWeight="700">
                {monthlyTaxValue}
              </Text>
            </XStack>
          </LinearGradient>
          <YStack space="$5" overflow="visible">
            <XStack justifyContent="space-between">
              <Text color="#333333" fontFamily="Inter" fontSize={32} fontWeight="700">
                Assets
              </Text>
              <Button fontWeight="700" color="#FDFDFC" onPress={calculateMonthlyTax}>
                Calculate
              </Button>
            </XStack>
            <YStack overflow="visible">
              {/* input components here */}
              <XStack backgroundColor="#FFFFFF" height={110} borderRadius={15} alignItems="center">
                <YStack flex={1} justifyContent="center" padding={20}>
                  <Text color="#333333" fontFamily="Inter" fontSize={20} fontWeight="700">
                    House size
                  </Text>
                  <XStack space="$2">
                    <TextInput
                      ref={houseSizeRef}
                      keyboardType="numeric"
                      style={{
                        color: '#333333',
                        fontFamily: 'InterBold',
                        fontSize: 32,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                      }}
                      defaultValue={houseSize.toString()}
                      onChangeText={(text) => setHouseSize(parseInt(text))}
                    />
                    <Text color="#333333" fontFamily="Inter" fontSize={32} fontWeight="700">
                      m²
                    </Text>
                  </XStack>
                </YStack>
                <Pressable
                  style={{ padding: 10 }}
                  onPress={() => {
                    houseSizeRef.current?.focus()
                  }}
                >
                  <Edit color="#333333" size={48} />
                </Pressable>
              </XStack>
              {/* input components here */}
              {/* input components here */}
              <XStack backgroundColor="#FFFFFF" height={110} borderRadius={15} alignItems="center">
                <YStack flex={1} justifyContent="center" padding={20}>
                  <Text color="#333333" fontFamily="Inter" fontSize={20} fontWeight="700">
                    Land size
                  </Text>
                  <XStack space="$2">
                    <TextInput
                      ref={landSizeRef}
                      keyboardType="numeric"
                      style={{
                        color: '#333333',
                        fontFamily: 'InterBold',
                        fontSize: 32,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                      }}
                      defaultValue={landSize.toString()}
                      onChangeText={(text) => setLandSize(parseInt(text))}
                    />
                    <Text color="#333333" fontFamily="Inter" fontSize={32} fontWeight="700">
                      m²
                    </Text>
                  </XStack>
                </YStack>
                <Pressable
                  style={{ padding: 10 }}
                  onPress={() => {
                    landSizeRef.current?.focus()
                  }}
                >
                  <Edit color="#333333" size={48} />
                </Pressable>
              </XStack>
              {/* input components here */}
              {/* input components here */}
              <XStack backgroundColor="#FFFFFF" height={110} borderRadius={15} alignItems="center">
                <YStack flex={1} justifyContent="center" padding={20}>
                  <Text color="#333333" fontFamily="Inter" fontSize={20} fontWeight="700">
                    Monthly earnings
                  </Text>
                  <XStack space="$2">
                    <TextInput
                      ref={monthlyEarningsRef}
                      keyboardType="numeric"
                      style={{
                        color: '#333333',
                        fontFamily: 'InterBold',
                        fontSize: 32,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                      }}
                      defaultValue={monthlyEarnings.toString()}
                      onChangeText={(text) => setMonthlyEarnings(parseInt(text))}
                    />
                    <Text color="#333333" fontFamily="Inter" fontSize={32} fontWeight="700">
                      IDR
                    </Text>
                  </XStack>
                </YStack>
                <Pressable
                  style={{ padding: 10 }}
                  onPress={() => {
                    monthlyEarningsRef.current?.focus()
                  }}
                >
                  <Edit color="#333333" size={48} />
                </Pressable>
              </XStack>
              {/* input components here */}
              {/* input components here */}
              <XStack backgroundColor="#FFFFFF" height={110} borderRadius={15} alignItems="center">
                <YStack flex={1} justifyContent="center" padding={20}>
                  <Text color="#333333" fontFamily="Inter" fontSize={20} fontWeight="700">
                    Water usage
                  </Text>
                  <XStack space="$2">
                    <TextInput
                      ref={waterUsageRef}
                      keyboardType="numeric"
                      style={{
                        color: '#333333',
                        fontFamily: 'InterBold',
                        fontSize: 32,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                      }}
                      defaultValue={waterUsage.toString()}
                      onChangeText={(text) => setWaterUsage(parseInt(text))}
                    />
                    <Text color="#333333" fontFamily="Inter" fontSize={32} fontWeight="700">
                      L
                    </Text>
                  </XStack>
                </YStack>
                <Pressable
                  style={{ padding: 10 }}
                  onPress={() => {
                    waterUsageRef.current?.focus()
                  }}
                >
                  <Edit color="#333333" size={48} />
                </Pressable>
              </XStack>
              {/* input components here */}
            </YStack>
          </YStack>
        </YStack>
      </KeyboardAwareScrollView>
    </>
  )
}
