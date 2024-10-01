import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imagePath from '../../../theme/imagePath';
import styles from './styles';

const DetailsScreen = () => {
  const navigation = useNavigation();

  // Sample product details and comments
  const deal = {
    id: '1',
    user: 'Winter',
    userImg: 'https://example.com/user1.jpg',
    date: 'Feb 24, 2024',
    description: 'Hunter come has an insane deal',
    price: '$56.99',
    productImg: 'https://example.com/product1.jpg',
    liked: true,
  };

  const [liked, setLiked] = useState(deal.liked);
  const [comments, setComments] = useState([
    { id: '1', text: 'I agree, I think we should', userImg: 'https://example.com/user1.jpg' },
    { id: '2', text: 'It depends though', userImg: 'https://example.com/user2.jpg' },
    { id: '3', text: 'Awesome!', userImg: 'https://example.com/user3.jpg' },
  ]);

  // Toggle like state for the product
  const toggleLike = () => {
    setLiked(!liked);
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={imagePath.userimage} style={styles.commentUserImage} />
      <View style={styles.commentBubble}>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity 
          onPress={() => {
            console.log('Go back pressed'); 
            navigation.goBack();
          }} 
          style={styles.backButton}
        >
          <Image source={imagePath.backButtonImage} style={styles.backButton} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Item Details</Text>
      </View>

      {/* Product Info */}
      <View style={styles.productInfoContainer}>
        <View style={styles.userInfo}>
          <Image source={imagePath.userimage} style={styles.userImage} />
          <View>
            <Text style={styles.userName}>{deal.user}</Text>
            <Text style={styles.description}>{deal.description}</Text>
          </View>
          <Text style={styles.date}>{deal.date}</Text>
        </View>

        {/* Product Image and Like */}
        <View style={styles.productImageContainer}>
          <Image source={imagePath.Product} style={styles.productImage} />
          <TouchableOpacity style={styles.heartIcon} onPress={toggleLike}>
            <Image
              source={liked ? imagePath.like : imagePath.dislike}
              style={styles.likeIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{deal.price}</Text>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewText}>View items</Text>
          </TouchableOpacity>
        </View>

        {/* Product Description */}
        <Text style={styles.productDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum is simply dummy text of the printing and 
          <Text style={styles.linkText}> www.Rel.com/wintercost</Text>
        </Text>
      </View>

      {/* Comment Section */}
      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.commentsList}
      />

      {/* Comment Input */}
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add Comment"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Image source={imagePath.sendIcon} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
