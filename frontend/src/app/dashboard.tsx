import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Dashboard() {
    const { accountNumber, balance } = useLocalSearchParams();

    return (
        <View className="flex-1 items-center justify-center p-5">
            <View className="w-full items-center bg-white py-8 px-4 border border-black">
                <Text className="text-lg font-black">Welcome to the Dashboard</Text>

                <View className="h-4" />

                <Text className="text-gray-500">Your Account Number: {accountNumber}</Text>
                <Text className="text-gray-500">Your Balance: {balance}</Text>

                <View className="h-12" />

                <View className="flex-row gap-4">
                    <Pressable className="bg-black items-center justify-center h-[60px] w-[140px]" onPress={() => { }}>
                        <Text className="text-white font-semibold">WITHDRAW</Text>
                    </Pressable>

                    <Pressable className="bg-black items-center justify-center h-[60px] w-[140px]" onPress={() => { }}>
                        <Text className="text-white font-semibold">DEPOSIT</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )

}