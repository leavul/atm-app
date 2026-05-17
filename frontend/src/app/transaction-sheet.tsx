import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, ActivityIndicator, TextInput, Pressable } from "react-native";
import { depositMoney, withdrawMoney } from "../api/account";
import { useBalance } from "../context/BalanceContext";

export default function TransactionSheet() {
    const { type, accountNumber } = useLocalSearchParams<{ type: string; accountNumber: string }>();
    const { setBalance } = useBalance();

    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleContinue() {
        setLoading(true);
        setError('');
        try {
            if (type === 'deposit') {
                const data = await depositMoney(accountNumber, amount);
                setBalance(String(data.balance));
                router.back();
            }

            if (type === 'withdraw') {
                const data = await withdrawMoney(accountNumber, amount);
                setBalance(String(data.balance));
                router.back();
            }
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View className="flex-1 items-center justify-center p-5">
            {loading && (
                <>
                    <ActivityIndicator color="#6b7280" />

                    <View className="h-4" />

                    <Text className="text-gray-500">Performing the transaction...</Text>
                </>
            )}

            {error && (
                <>
                    <Text className="text-center text-red-500">{error}</Text>

                    <View className="h-8" />
                </>
            )}

            <View
                className="w-full items-center justify-center bg-white py-8 px-4 border border-black"
            >
                <Text className="self-start">ENTER THE AMOUNT FOR {type.toUpperCase()}:</Text>

                <View className="h-4" />

                <TextInput
                    className="w-full bg-white p-2 border border-black"
                    autoFocus
                    inputMode="numeric"
                    returnKeyType="done"
                    value={amount}
                    onChangeText={setAmount}
                />

                <View className="h-8" />

                <Pressable className="w-full bg-black p-2" onPress={handleContinue}>
                    <Text className="text-white text-center p-2">CONTINUE</Text>
                </Pressable>
            </View>
        </View>
    );
}
