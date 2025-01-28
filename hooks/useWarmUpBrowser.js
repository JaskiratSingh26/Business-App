
// import * as WebBrowser from 'expo-web-browser'
// import { useEffect } from 'react'


// export  const useWarmUpBrowser = () => {
// useEffect(() => {
//       // Warm up the android browser to improve UX
//       // https://docs.expo.dev/guides/authentication/#improving-user-experience
//       void WebBrowser.warmUpAsync()
//       return () => {
//         void WebBrowser.coolDownAsync()
//       }
//     }, [])
//   }

import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';
import { Platform } from 'react-native';

export const useWarmUpBrowser = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync();
    }
    return () => {
      if (Platform.OS === 'android') {
        void WebBrowser.coolDownAsync();
      }
    };
  }, []);
};