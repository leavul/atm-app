import {
    StatusBar,
    TextInput,
    Text,
    View,
    KeyboardAvoidingView,
    Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center p-8">
            <StatusBar barStyle={"dark-content"} />

            <KeyboardAvoidingView
                className="w-full h-1/2 items-center justify-center bg-white p-4 border border-black"
                behavior={"padding"}
            >
                <Text className="self-start">ENTER ACCOUNT NUMBER:</Text>

                <View className="h-4" />

                <TextInput
                    className="w-full bg-white p-2 border border-black"
                    autoFocus
                    inputMode="numeric"
                    returnKeyType="done"
                />

                <View className="h-8" />

                <Pressable className="w-full bg-black p-2" onPress={() => { }}>
                    <Text className="text-white text-center p-2">CONTINUE</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
