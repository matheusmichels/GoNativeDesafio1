import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Post from 'components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        key: 0,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ex eget velit gravida dignissim vitae in lectus. Nunc suscipit aliquet enim. Nulla ac tellus ex. Praesent et varius sem. Ut metus est, pharetra vitae accumsan sit amet, suscipit eu turpis. Nunc mattis interdum diam ac efficitur. Quisque nulla tellus, molestie ac fermentum sit amet.',
      },
      {
        key: 1,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ex eget velit gravida dignissim vitae in lectus. Nunc suscipit aliquet enim. Nulla ac tellus ex. Praesent et varius sem. Ut metus est, pharetra vitae accumsan sit amet, suscipit eu turpis. Nunc mattis interdum diam ac efficitur. Quisque nulla tellus, molestie ac fermentum sit amet.',
      },
      {
        key: 2,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ex eget velit gravida dignissim vitae in lectus. Nunc suscipit aliquet enim. Nulla ac tellus ex. Praesent et varius sem. Ut metus est, pharetra vitae accumsan sit amet, suscipit eu turpis. Nunc mattis interdum diam ac efficitur. Quisque nulla tellus, molestie ac fermentum sit amet.',
      },
    ],
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            GoNative App
          </Text>
        </View>
        <ScrollView style={styles.body}>
          {this.state.posts.map(post => <Post key={post.key} {...post} />)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE7777',
    flex: 1,
  },
  header: {
    backgroundColor: '#ffffff',
    top: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    padding: 20
  },
});
