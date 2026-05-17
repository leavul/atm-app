import { StatusBar } from "react-native";
import "../../global.css";

import { Stack } from "expo-router";
import { BalanceProvider } from "../context/BalanceContext";

export default function RootLayout() {
    return (
        <BalanceProvider>
            <StatusBar barStyle={"dark-content"} />

            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: '#e5e7eb' },
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="transaction-sheet" options={{
                    presentation: 'formSheet',
                    sheetAllowedDetents: 'fitToContents',
                    contentStyle: { backgroundColor: '#e5e7eb' },
                }} />
            </Stack>
        </BalanceProvider>
    );
}
