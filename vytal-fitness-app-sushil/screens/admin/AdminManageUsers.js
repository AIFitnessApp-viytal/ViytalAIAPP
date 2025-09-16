import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { COLORS } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const users = [
  { id: '1', name: 'John Doe', email: 'john.d@example.com', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane.s@example.com', status: 'Active' },
  { id: '3', name: 'Sam Wilson', email: 'sam.w@example.com', status: 'Banned' },
  { id: '4', name: 'Peter Parker', email: 'peter.p@example.com', status: 'Active' },
  { id: '5', name: 'Bruce Wayne', email: 'bruce.w@example.com', status: 'Active' },
];

const AdminManageUsers = () => {

  const renderUser = ({ item }) => (
    <View style={styles.userCard}>
      <View>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="pencil-outline" size={20} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="trash-outline" size={20} color={COLORS.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  listContainer: {
    padding: 20,
  },
  userCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  userEmail: {
    fontSize: 14,
    color: COLORS.gray,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 15,
    padding: 5,
  },
});

export default AdminManageUsers;