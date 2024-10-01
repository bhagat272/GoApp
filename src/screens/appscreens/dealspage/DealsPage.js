import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal,
} from 'react-native';
import imagePath from '../../../theme/imagePath';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../../../components/commonButtons/GradientButton';

const DealsPage = () => {
  const navigation = useNavigation();

  // State to control modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  const trendingDealsData = [
    { id: '1', image: imagePath.dealImage, price: '$56.99' },
    { id: '2', image: imagePath.dealImage, price: '$49.99' },
    { id: '3', image: imagePath.dealImage, price: '$62.99' },
  ];

  const latestDealsData = [
    {
      id: '1',
      userImage: imagePath.userimage,
      userName: 'Winter',
      description: 'Hunter come has a insane de...',
      date: 'Feb 24, 2024',
      productImage: imagePath.Product,
      price: '$56.99',
    },
    {
      id: '2',
      userImage: imagePath.userimage,
      userName: 'Summer',
      description: 'Explore the new summer collection...',
      date: 'Mar 10, 2024',
      productImage: imagePath.Product,
      price: '$49.99',
    },
  ];

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Function to render each trending deal item
  const renderTrendingDealItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsScreen', { deal: item })} // Navigate on image press
    >
      <View style={styles.dealItem}>
        <Image source={item.image} style={styles.dealImage} />
        <View style={styles.dealPriceContainer}>
          <Text style={styles.dealPrice}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.heartIconContainer}>
          <Image source={imagePath.heartIcon} style={styles.heartIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  // Function to render each latest deal item
  const renderLatestDealItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsScreen', { deal: item })} // Navigate on image press
    >
      <View style={styles.latestDealItem}>
        <View style={styles.latestDealHeader}>
          <Image source={item.userImage} style={styles.latestDealUserImage} />
          <View style={styles.latestDealText}>
            <Text style={styles.latestDealUserName}>{item.userName}</Text>
            <Text style={styles.latestDealDescription}>{item.description}</Text>
          </View>
          <Text style={styles.latestDealDate}>{item.date}</Text>
        </View>
        <View style={styles.latestDealImageContainer}>
          <Image source={item.productImage} style={styles.latestDealImage} />
          <TouchableOpacity style={styles.heartIconContainer}>
            <Image source={imagePath.heartIcon} style={styles.heartIcon} />
          </TouchableOpacity>
          <View style={styles.latestDealPriceContainer}>
            <Text style={styles.latestDealPrice}>{item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  // Combine both sections into a single list
  const data = [
    { title: 'Trending Deals', data: trendingDealsData },
    { title: 'Latest Deals', data: latestDealsData },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.userInfo}>
                <Image source={imagePath.userimage} style={styles.userImage} />
                <View style={styles.userText}>
                  <Text style={styles.greeting}>Hi,</Text>
                  <Text style={styles.userName}>John Doe</Text>
                </View>
              </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchSection}>
              <View style={styles.searchContainer}>
                <Image
                  source={imagePath.searchIcon}
                  style={styles.searchIcon}
                />
                <TextInput
                  placeholder="Search Here"
                  style={styles.searchInput}
                />
              </View>
              <TouchableOpacity onPress={toggleModal}>
                <Image
                  source={imagePath.GroupButton}
                  style={styles.menuButtonOnSearch}
                />
              </TouchableOpacity>
            </View>
          </>
        }
        data={data}
        renderItem={({ item }) => {
          if (item.title === 'Trending Deals') {
            return (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>{item.title}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('TrendingDeals')}
                  >
                    <Text style={styles.viewAll}>View all</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  horizontal
                  data={item.data}
                  renderItem={renderTrendingDealItem}
                  keyExtractor={(deal) => deal.id}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            );
          }
          return (
            <>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{item.title}</Text>
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View all</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={item.data}
                renderItem={renderLatestDealItem}
                keyExtractor={(deal) => deal.id}
              />
            </>
          );
        }}
        keyExtractor={(item) => item.title}
      />

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={toggleModal}
              style={styles.modalCloseButton}
            >
              <Text style={styles.modalCloseText}>×</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Filter</Text>
            <Text style={styles.modalSubtitle}>Select Category</Text>
            <View style={styles.modalCategories}>
              <TouchableOpacity style={styles.modalCategory}>
                <Text style={styles.categoryText}>Item Category</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalCategory}>
                <Text style={styles.categoryText}>Item Category</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalCategory}>
                <Text style={styles.categoryText}>Item</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalCategory}>
                <Text style={styles.categoryText}>Item</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.clearButton}>
                <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
              <View style={{ marginTop: -10 }}>
                <GradientButton
                  text="Apply"
                  buttonStyle={{ borderRadius: 12 }} // Will now apply correctly
                  width={160.09} // Width of the button
                  height={44} // Height of the button
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default DealsPage;
