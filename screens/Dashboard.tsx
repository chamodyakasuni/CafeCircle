import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Dashboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.sidebar}>
          <TouchableOpacity style={styles.sidebarItem}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Welcome to the Dashboard</Text>
          <Text>This is the main content area.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#282c34',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 100,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  sidebarItem: {
    marginVertical: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  contentTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Dashboard;