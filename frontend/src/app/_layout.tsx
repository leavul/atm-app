import { StatusBar } from "react-native";
import "../../global.css";

import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <>
            <StatusBar barStyle={"dark-content"} />

            <Stack screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#e5e7eb' },
            }}>
                <Stack.Screen name="index" />
            </Stack>
        </>
    );
}
