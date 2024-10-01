import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import imagePath from '../../../theme/imagePath';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
export default function TermsScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={imagePath.backButtonImage} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Terms & Conditions</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={imagePath.icon}
          style={styles.image}
        />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit.
        </Text>
        <Text style={styles.text}>
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </Text>
      </ScrollView>
    </View>
  );
} 