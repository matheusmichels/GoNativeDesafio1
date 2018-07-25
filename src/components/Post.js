import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Post = props => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {props.title}
    </Text>
    <Text style={styles.author}>
      {props.author}
    </Text>
    <View style={styles.div} />
    <Text style={styles.text}>
      {props.text}
    </Text>
  </View>
);

Post.defaultProps = {
  title: 'Title',
  author: 'Author',
  text: 'Text',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 20,
    padding: 20,
    flex: 1,
  },
  title: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  div: {
    borderColor: '#eeeeee',
    borderWidth: 1,
    marginVertical: 10,
  },
  text: {
    color: '#666666',
  },
});

export default Post
