import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native';
import { COLORS } from '../constants/colors';
import ProductModal from '../components/ProductModal';

const products = [
  { id: '1', name: 'Smart Watch', price: 129.99, image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', description: 'Track your fitness and stay connected with this state-of-the-art smart watch.' },
  { id: '2', name: 'Yoga Mat Pro', price: 45.00, image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', description: 'High-quality, non-slip yoga mat for your daily practice. Eco-friendly material.' },
  { id: '3', name: 'Dumbbells', price: 299.00, image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', description: 'Adjustable dumbbell set, perfect for a full-body workout at home.' },
  { id: '4', name: 'Protein Powder', price: 59.99, image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', description: '25g of high-quality whey protein per serving. Delicious chocolate flavor.' },
];

const StoreScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => openModal(item)}>
      <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Affiliate Store</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
      <ProductModal visible={modalVisible} product={selectedProduct} onClose={closeModal} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  listContainer: {
    padding: 10,
  },
  productCard: {
    flex: 1,
    margin: 10,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  productPrice: {
    fontSize: 14,
    color: COLORS.primary,
    marginTop: 5,
  },
});

export default StoreScreen;