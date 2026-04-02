import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../../firebase';

export default function AuthLayout() {
  if (auth.currentUser) return <Redirect href="/(tabs)" />;

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
      </Stack>
    </>
  );
}