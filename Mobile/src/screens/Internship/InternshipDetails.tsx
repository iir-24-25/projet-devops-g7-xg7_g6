import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { RootStackParamList } from '../../types/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
type InternshipDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'InternshipDetails'>;

const InternshipDetails = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const navigation = useNavigation<InternshipDetailsNavigationProp>();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return (
          <View style={styles.contentSection}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Text>
              </View>
            </View>
          </View>
        );
      case 'Qualification':
        return (
          <View style={styles.contentSection}>
            <Text style={styles.sectionTitle}>Qualification</Text>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Text>
              </View>
            </View>
          </View>
        );
      case 'Skills':
        return (
          <View style={styles.contentSection}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              <View style={styles.skillTag}>
                <Text style={styles.skillText}>Graphic Designing</Text>
              </View>
              <View style={styles.skillTag}>
                <Text style={styles.skillText}>Adobe XD</Text>
              </View>
              <View style={styles.skillTag}>
                <Text style={styles.skillText}>Web design</Text>
              </View>
              <View style={styles.skillTag}>
                <Text style={styles.skillText}>Adobe Photoshop</Text>
              </View>
              <View style={styles.skillTag}>
                <Text style={styles.skillText}>Figma</Text>
              </View>
              <View style={styles.skillTag}>
                <Text style={styles.skillText}>Illustrator</Text>
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView style={styles.scrollView}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Icon name="user" size={24} color="#e91e63" />
          </View>
          <Text style={styles.jobTitle}>Graphic Designer</Text>
          <Text style={styles.jobSubtitle}>Web design</Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Icon name="map-pin" size={16} color="#4299e1" style={styles.infoIcon} />
              <Text style={styles.infoText}>Marrakesh, Morocco</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="dollar-sign" size={16} color="#4299e1" style={styles.infoIcon} />
              <Text style={styles.infoText}>$500 / month</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="clock" size={16} color="#4299e1" style={styles.infoIcon} />
              <Text style={styles.infoText}>1 Month ago</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.applyButton} onPress={() => {navigation.navigate('ApplyForInternship', { id: 1,visible:true })}}>
            <Text style={styles.applyButtonText}>Apply For Internship</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          {['Profile', 'Qualification', 'Skills'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        {renderTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    padding: 8,
  },
  profileCard: {
    margin: 40,
    marginBottom: 12,
    padding: 24,
    borderRadius: 24,
    alignItems: 'center',
    borderStyle:"dotted",
    borderColor:"#e5e7eb",
    borderWidth: 2,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,

    backgroundColor: '#f8fafc',
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    alignItems: 'center',

  },
  jobSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    alignItems: 'center',

  },
  infoContainer: {
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',

  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoIcon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
  },
  applyButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    marginTop: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3b82f6',
  },
  tabText: {
    fontSize: 14,
    color: '#6b7280',
  },
  activeTabText: {
    color: '#3b82f6',
    fontWeight: '500',
  },
  contentSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  bulletList: {
    marginTop: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  bulletPoint: {
    marginRight: 8,
    fontSize: 14,
    color: '#6b7280',
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  skillTag: {
    backgroundColor: '#dbeafe',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: '#3b82f6',
    fontSize: 14,
  },
});

export default InternshipDetails;