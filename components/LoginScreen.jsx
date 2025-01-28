// import React from 'react';
// import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
// import * as WebBrowser from 'expo-web-browser';
// import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
// import { useOAuth } from '@clerk/clerk-expo';
// import * as Linking from 'expo-linking';

// WebBrowser.maybeCompleteAuthSession();

// const LoginScreen = () => {
//     useWarmUpBrowser();
//     const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

//     const onPress = React.useCallback(async () => {
//         try {
//             const { createdSessionId, setActive } = await startOAuthFlow({
//                 redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
//             });

//             if (createdSessionId) {
//                 !setActive({ session: createdSessionId });
//             }
//         } catch (err) {
//             console.error(JSON.stringify(err, null, 2));
//         }
//     }, []);

//     return (
//         <View style={styles.container}>
//             {/* Background Wave */}
//             <View style={styles.backgroundWave} />
            
//             {/* Content Container */}
//             <View style={styles.content}>
//                 {/* Illustration */}
//                 <Image
//                     source={{uri:'https://www.pngall.com/wp-content/uploads/2016/06/Business-PNG-Image.png'}} // Add your illustration here
//                     style={styles.illustration}
//                     resizeMode="contain"
//                 />

//                 {/* Welcome Text */}
//                 <Text style={styles.title}>Welcome!</Text>
//                 <Text style={styles.subtitle}>
//                     We're glad you're here.{'\n'}Let's get started.
//                 </Text>

//                 {/* Get Started Button */}
//                 <TouchableOpacity style={styles.button} onPress={onPress}>
//                     <Text style={styles.buttonText}>GET STARTED</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#ffffff',
//     },
//     backgroundWave: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: '#F8F7FF',
//         borderRadius: 1000,
//         transform: [{ scaleX: 2 }, { translateX: -50 }],
//     },
//     content: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 24,
//     },
//     illustration: {
//         width: '80%',
//         height: 200,
//         marginBottom: 40,
//     },
//     title: {
//         fontSize: 32,
//         fontWeight: '700',
//         color: '#5B21B6', // Deep purple color
//         marginBottom: 16,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: '#6B7280', // Gray color
//         textAlign: 'center',
//         lineHeight: 24,
//         marginBottom: 48,
//     },
//     button: {
//         backgroundColor: '#5B21B6', // Deep purple color
//         paddingVertical: 16,
//         paddingHorizontal: 32,
//         borderRadius: 12,
//         width: '100%',
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: '#ffffff',
//         fontSize: 16,
//         fontWeight: '600',
//         letterSpacing: 0.5,
//     },
// });

// export default LoginScreen;



import React from "react"
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native"
import * as WebBrowser from "expo-web-browser"
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser"
import { useOAuth } from "@clerk/clerk-expo"
import * as Linking from "expo-linking"

WebBrowser.maybeCompleteAuthSession()

const LoginScreen = () => {
  useWarmUpBrowser()
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
      })

      if (createdSessionId) {
        setActive({ session: createdSessionId })
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }, [])

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.quote}>
            "Find the Perfect Place to Stay and Work, Wherever Your Business Takes You."
          </Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 48,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 24,
    textAlign: "center",
  },
  quote: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 48,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#4CAF50", // Green color
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
})

export default LoginScreen

