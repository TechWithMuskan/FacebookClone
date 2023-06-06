import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Colors';
import {StoryData} from '../data/StoryData';

const FriendStories = () => {
  return (
    <>
      {StoryData.map(item => (
        <View key={item.id} style={styles.friendStoryContainer}>
          <Image source={item.storyImg} style={styles.storyImg} />
          <View style={styles.profileImgContainer}>
            <Image source={item.profileImg} style={styles.profileImg} />
          </View>
          <View style={styles.friendNameContainer}>
            <Text style={styles.friendName}>{item.name}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  friendStoryContainer: {
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: 10,
    marginLeft: 5,
    position: 'relative',
  },
  storyImg: {
    height: 180,
    width: 110,
    borderRadius: 10,
  },
  profileImg: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  profileImgContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
    borderWidth: 2,
    borderColor: Colors.primaryColor,
    borderRadius: 50,
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  friendNameContainer: {
    position: 'absolute',
    left: 8,
    bottom: 8,
  },
  friendName: {
    color: Colors.white,
    fontSize: 14,
  },
});

export default FriendStories;
