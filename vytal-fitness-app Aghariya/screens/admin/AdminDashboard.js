import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { COLORS } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';

const DashboardCard = ({ icon, title, value, color }) => (
  <View style={styles.card}>
    <Ionicons name={icon} size={32} color={color} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </View>
);

const AdminDashboard = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.cardGrid}>
          <DashboardCard icon="people" title="Total Users" value="1,254" color={COLORS.primary} />
          <DashboardCard icon="chatbubbles" title="API Usage" value="8,721" color={COLORS.success} />
          <DashboardCard icon="storefront" title="Total Products" value="4" color="#F59E0B" />
          <DashboardCard icon="trending-up" title="Sales" value="$12,345" color={COLORS.danger} />
        </View>

        <Text style={styles.sectionTitle}>Management</Text>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AdminManageUsers')}>
          <Ionicons name="people-circle-outline" size={24} color={COLORS.dark} />
          <Text style={styles.menuItemText}>Manage Users</Text>
          <Ionicons name="chevron-forward-outline" size={24} color={COLORS.gray} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AdminApiControl')}>
          <Ionicons name="options-outline" size={24} color={COLORS.dark} />
          <Text style={styles.menuItemText}>Control AI API Limits</Text>
          <Ionicons name="chevron-forward-outline" size={24} color={COLORS.gray} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Ionicons name="log-out-outline" size={22} color={COLORS.white} />
            <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  content: {
    padding: 20,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    color: COLORS.gray,
    marginTop: 10,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginTop: 20,
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  menuItemText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 15,
    color: COLORS.dark,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.danger,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  logoutButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default AdminDashboard;