// _layout.jsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const _Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {children}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default _Layout;
