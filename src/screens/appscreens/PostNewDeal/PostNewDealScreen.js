import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import imagePath from '../../../theme/imagePath'; // Assuming you have an image path for the camera icon
import { Image } from 'react-native-elements';
import GradientButton from '../../../components/commonButtons/GradientButton';
import fonts from '../../../theme/fonts';
import { useNavigation } from '@react-navigation/native';
 
const PostNewDealScreen = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState('Shoes & Footwear');
  const [title, setTitle] = useState('');
  const [postMessage, setPostMessage] = useState('');
  const [dealUri, setDealUri] = useState('');

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={imagePath.backButtonImage} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Post New Deal</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Category</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.pickerContent}>
            <Picker.Item label="Shoes & Footwear" value="Shoes & Footwear" />
            <Picker.Item label="Clothing" value="Clothing" />
            <Picker.Item label="Accessories" value="Accessories" />
          </Picker>
        </View>

        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Post Message</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          value={postMessage}
          onChangeText={setPostMessage}
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>Deal URI</Text>
        <TextInput
          style={styles.uri}
          placeholder="Enter Link"
          value={dealUri}
          onChangeText={setDealUri}
        />

        <Text style={styles.label}>Item Photo</Text>
        <TouchableOpacity style={styles.photoButton}>
          <Image source={imagePath.camera} style={{ width: 23.01, height: 20 }} />
        </TouchableOpacity>

        <GradientButton
          text="Create Post"
          onPress={() => {
            // Your post creation logic here
            console.log("Post created");
          }}
          buttonStyle={styles.createPostButton}
          textStyle={styles.createPostButtonText}
          // Optional: Customize gradient colors if needed
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:15,
    backgroundColor: '#F8F8F8',
  },
  scrollContainer: {
    padding: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: '#3B4750',
    fontFamily: fonts.Montserrat_Medium,
  },
  inputContainer: {
    borderColor: '#E4E4E4',
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor:"#FFFFFF",
    marginBottom: 20,
    overflow: 'hidden', // Ensures the borderRadius is respected
  },
  pickerContent: {
    height: 50,
    width: '100%',
    color: '#3B4750', // Example color for picker text
  },
  input: {
    height: 56,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  uri: {
    height: 56,
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    height: 109,
  },
  photoButton: {
    backgroundColor: "#FFFFFF",
    borderColor: '#E4E4E4',
    borderWidth: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 85,
    width: 85,
    marginBottom: 20,
  },
  createPostButton: {
    backgroundColor: '#FFA500',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 15,
  },
  createPostButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: fonts.Montserrat_Medium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
     },
  headerText: {
    position: 'absolute', // Take the text out of the normal flow
    left: 0,  // Ensure the text starts at the left of the header
    right: 0,  // Ensure the text stretches to the right of the header
    textAlign: 'center',  // Center the text within the space
    fontSize: 18,
    color: '#1f2937',
    fontFamily: fonts.Montserrat_SemiBold,
  },
  backButton: {
    marginRight: 16,
    marginTop: 5,
    width: 44,
    height: 44,
  },
});

export default PostNewDealScreen;
