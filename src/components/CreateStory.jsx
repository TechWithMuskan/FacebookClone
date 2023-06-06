import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Profile from '../assets/images/img1.jpeg';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../utils/Colors';

const CreateStory = () => {
  return (
    <View style={styles.createStoryContainer}>
      <Image source={Profile} style={styles.profileImg} />
      <View style={styles.iconContainer}>
        <VectorIcon
          name="circle-with-plus"
          type="Entypo"
          size={35}
          color={Colors.primaryColor}
        />
      </View>
      <Text style={styles.createStory}>Create story</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    height: 110,
    width: 110,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  createStoryContainer: {
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: 10,
    backgroundColor: Colors.storyImageBg,
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: '55%',
    backgroundColor: Colors.white,
    borderRadius: 50,
  },
  createStory: {
    fontSize: 14,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 25,
    width: '50%',
  },
});

export default CreateStory;
