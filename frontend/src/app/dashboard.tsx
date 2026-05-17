import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useBalance } from '../context/BalanceContext'

export default function Dashboard() {
    const { accountNumber, balance: initialBalance } = useLocalSearchParams<{ accountNumber: string; balance: string; }>();
    const { balance, setBalance } = useBalance();

    useEffect(() => {
        setBalance(initialBalance);
    }, []);

    const openDepositSheet = () => {
        router.push({ pathname: '/transaction-sheet', params: { type: 'deposit', accountNumber } });
    }

    const openWithdrawSheet = () => {
        router.push({ pathname: '/transaction-sheet', params: { type: 'withdraw', accountNumber } });
    }

    const logout = () => {
        router.replace('/');
    }

    return (
        <View className="flex-1 items-center justify-center p-5">
            <Text className="self-start font-semibold text-red-500" onPress={logout}>LOGOUT</Text>

            <View className="h-4" />

            <View className="w-full items-center bg-white py-8 px-4 border border-black">
                <Text className="text-lg font-black">Welcome to the Dashboard</Text>

                <View className="h-4" />

                <Text className="text-gray-500">Your Account Number: {accountNumber}</Text>
                <Text className="text-gray-500">Your Balance: {balance}</Text>

                <View className="h-12" />

                <View className="flex-row gap-4">
                    <Pressable className="bg-black items-center justify-center h-[60px] w-[140px]" onPress={openDepositSheet}>
                        <Text className="text-white font-semibold">DEPOSIT</Text>
                    </Pressable>

                    <Pressable className="bg-black items-center justify-center h-[60px] w-[140px]" onPress={openWithdrawSheet}>
                        <Text className="text-white font-semibold">WITHDRAW</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )

}