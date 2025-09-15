import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Switch, StatusBar } from 'react-native';
import { COLORS } from '../../constants/colors';

const AdminApiControl = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <View style={styles.card}>
            <View style={styles.settingRow}>
                <Text style={styles.label}>Global API Access</Text>
                <Switch
                    trackColor={{ false: '#767577', true: COLORS.success }}
                    thumbColor={isEnabled ? COLORS.white : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>

        <View style={styles.card}>
            <Text style={styles.label}>Daily Limit Per User</Text>
            <TextInput
            style={styles.input}
            keyboardType="numeric"
            defaultValue="100"
            />
        </View>
        
        <View style={styles.card}>
            <Text style={styles.label}>Rate Limit (Requests / Minute)</Text>
            <TextInput
            style={styles.input}
            keyboardType="numeric"
            defaultValue="20"
            />
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
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
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: COLORS.dark,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AdminApiControl;