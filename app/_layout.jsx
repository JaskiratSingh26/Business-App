import { Stack } from "expo-router";
import { ClerkProvider, SignedIn, SignedOut, } from '@clerk/clerk-expo'
import { StatusBar, Text } from "react-native";
import LoginScreen from '../components/LoginScreen'
import { tokenCache } from "@/utlis/cache";

export default function RootLayout() {


  if (!process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    throw new Error(
      'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
    )
  }

  return (

    <ClerkProvider
    tokenCache={tokenCache}
      publishableKey={
        process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
      } >
<StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <SignedIn>

        <Stack
          screenOptions={{
            headerShown: false
          }}
        >

          <Stack.Screen name="(Tabs)"

            options={
              {
                headerShown: false
              }
            }
          />



        </Stack>
      </SignedIn>


      <SignedOut>

        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  )
}
