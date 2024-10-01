import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import imagePath from '../../../theme/imagePath';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const FavoritesScreen = () => {
  const navigation = useNavigation();
  
  // Sample deals
  const deals = [
    {
      id: '1',
      user: 'Winter',
      userImg: 'https://example.com/user1.jpg',
      date: 'Feb 24, 2024',
      description: 'Hunter come has an insane deal',
      price: '$56.99',
      productImg: 'https://example.com/product1.jpg',
      liked: true,
    },
    {
      id: '2',
      user: 'Winter',
      userImg: 'https://example.com/user2.jpg',
      date: 'Feb 24, 2024',
      description: 'Hunter come has an insane deal',
      price: '$56.99',
      productImg: 'https://example.com/product2.jpg',
      liked: false,
    },
    {
      id: '3',
      user: 'Winter',
      userImg: 'https://example.com/user1.jpg',
      date: 'Feb 24, 2024',
      description: 'Hunter come has an insane deal',
      price: '$56.99',
      productImg: 'https://example.com/product1.jpg',
      liked: true,
    },
  ];

  // Toggle like state for individual items
  const [likedDeals, setLikedDeals] = useState(deals);

  const toggleLike = (id) => {
    const updatedDeals = likedDeals.map((deal) =>
      deal.id === id ? { ...deal, liked: !deal.liked } : deal
    );
    setLikedDeals(updatedDeals);
  };

  const renderDeal = ({ item }) => {
    return (
      <View style={styles.dealContainer} >
        <View style={styles.header} >
          <Image source={imagePath.userimage} style={styles.userImage} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{item.user}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <Text style={styles.date}>{item.date}</Text>
        </View>

        {/* Image with heart icon */}
        <View style={styles.imageContainer}>
          <Image source={imagePath.Product} style={styles.productImage} />
          <TouchableOpacity
            style={styles.heartIcon}
            onPress={() => toggleLike(item.id)}>
            <Image
              source={item.liked ? imagePath.like : imagePath.dislike}
              style={styles.likeIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewText}>View items</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.headerContainer}>
        

        <Text style={styles.title}>Favorites</Text>
      </View>

      {/* Deals List */}
      <FlatList showsVerticalScrollIndicator={false}
        data={likedDeals}
        renderItem={renderDeal}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};


export default FavoritesScreen;
