import { useState } from "react";
import {
    TextInput,
    Text,
    View,
    Pressable,
    ActivityIndicator,
} from "react-native";
import { verifyAccount } from "../api/account";
import { router } from "expo-router";

export default function Index() {
    const [accountNumber, setAccountNumber] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleContinue() {
        setLoading(true);
        setError('');
        try {
            const data = await verifyAccount(accountNumber);
            const balance = data.balance;
            router.push({ pathname: '/dashboard', params: { accountNumber, balance } });
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

                    <Text className="text-gray-500">Verifying account...</Text>
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
                <Text className="self-start">ENTER ACCOUNT NUMBER:</Text>

                <View className="h-4" />

                <TextInput
                    className="w-full bg-white p-2 border border-black"
                    // autoFocus
                    inputMode="numeric"
                    returnKeyType="done"
                    value={accountNumber}
                    onChangeText={setAccountNumber}
                />

                <View className="h-8" />

                <Pressable className="w-full bg-black p-2" onPress={handleContinue}>
                    <Text className="text-white text-center p-2">CONTINUE</Text>
                </Pressable>
            </View>
        </View>
    );
}
