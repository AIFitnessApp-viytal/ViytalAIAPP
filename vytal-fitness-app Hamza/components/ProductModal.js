import React from 'react';
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/colors';

const ProductModal = ({ visible, product, onClose }) => {
  if (!product) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.closeAction]} onPress={onClose}>
              <Text style={styles.buttonTextClose}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.addAction]}>
              <Text style={styles.buttonTextAdd}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  closeButtonText: {
    fontSize: 30,
    color: COLORS.gray,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: COLORS.lightGray,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 10,
  },
  productDescription: {
      fontSize: 16,
      color: COLORS.gray,
      textAlign: 'center',
      marginBottom: 15,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  closeAction: {
    backgroundColor: COLORS.lightGray,
  },
  addAction: {
    backgroundColor: COLORS.primary,
  },
  buttonTextClose: {
    color: COLORS.dark,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextAdd: {
      color: COLORS.white,
      fontWeight: 'bold',
      fontSize: 16,
  }
});

export default ProductModal;