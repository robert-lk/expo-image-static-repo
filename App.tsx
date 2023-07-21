/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image as RNImage,
  Text,
  StyleSheet,
} from 'react-native';
import {Image as ExpoImage} from 'expo-image';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <View
          style={{
            backgroundColor: 'white',
            gap: 20
          }}>
          <View style={styles.row}>
            <View>
              <Text>Expo Remote Image:</Text>
              <ExpoImage
                source={{
                  uri: 'https://source.unsplash.com/collection/190727/200x200',
                }}
                style={styles.image}
              />
            </View>
            <View>
              <Text>Expo static Image:</Text>
              <ExpoImage
                source={{
                  uri: 'test_image',
                }}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Text>RN Remote Image</Text>
              <RNImage
                source={{
                  uri: 'https://source.unsplash.com/collection/190727/200x200',
                }}
                style={styles.image}
              />
            </View>
            <View>
              <Text>RN Static Image</Text>
              <RNImage
                source={{
                  uri: 'test_image',
                }}
                style={styles.image}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default App;
