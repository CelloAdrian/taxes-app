import React, { useState, useRef } from 'react'
import { StatusBar, Pressable, TextInput } from 'react-native'
import { XStack, YStack, Text, Button, ScrollView } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'
import { Edit } from '@tamagui/lucide-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export function HomeScreen() {
  const houseSizeRef = useRef<TextInput>(null)
  const landSizeRef = useRef<TextInput>(null)
  const monthlyEarningsRef = useRef<TextInput>(null)
  const waterUsageRef = useRef<TextInput>(null)

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
                1000000
              </Text>
            </XStack>
          </LinearGradient>
          <YStack space="$5" overflow="visible">
            <XStack justifyContent="space-between">
              <Text color="#333333" fontFamily="Inter" fontSize={32} fontWeight="700">
                Assets
              </Text>
              <Button fontWeight="700" color="#FDFDFC">
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
                    >
                      100
                    </TextInput>
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
                    >
                      100
                    </TextInput>
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
                    >
                      1000000
                    </TextInput>
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
                    >
                      100
                    </TextInput>
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
