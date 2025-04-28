import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
// import { Search, MapPin, Clock, Bookmark } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { RootStackParamList } from '../../types/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

interface JobPost {
  id: string;
  company: {
    name: string;
    logo: string;
    industry: string;
  };
  title: string;
  location: string;
  experience: string;
  postedTime: string;
  description: string;
  requirements: string[];
  duration: string;
  isRemote: boolean;
}
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const JOBS: JobPost[] = [
  {
    id: '1',
    company: {
      name: 'Microsoft Corporation',
      logo: 'https://images.unsplash.com/photo-1642132652075-2f0ae955cdf0?w=100&h=100&fit=crop',
      industry: 'Technology',
    },
    title: 'UX Design Intern',
    location: 'California, United States',
    experience: 'No experience',
    postedTime: '2 days ago',
    description: 'Join our UX team to create intuitive and engaging user experiences for Microsoft products.',
    requirements: ['Basic knowledge of design tools', 'Creative thinking', 'Team player'],
    duration: '3 months',
    isRemote: false,
  },
  {
    id: '2',
    company: {
      name: 'Google LLC',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop',
      industry: 'Technology',
    },
    title: 'Software Engineering Intern',
    location: 'New York, United States',
    experience: 'Student',
    postedTime: '1 week ago',
    description: 'Work on real-world projects with Google engineers and learn about software development practices.',
    requirements: ['Programming knowledge', 'Problem-solving skills', 'Currently enrolled in CS program'],
    duration: '6 months',
    isRemote: false,
  },
  
 
];

const CATEGORIES = ['All', 'Tech', 'Design', 'Business', 'Engineering'];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = React.useState(0);
    const navigation = useNavigation<HomeScreenNavigationProp>();
  

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome to</Text>
          <Text style={styles.name}>Internship Dream</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <EvilIcons name="bell" size={28} color="#18181b" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <EvilIcons name='search' size={24} color="#71717a" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search internships..."
            placeholderTextColor="#71717a"
          />
          <Ionicons onPress={()=>navigation.navigate("FilterInternships")} name='options-outline' size={24} color="#71717a" />

        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Featured Internships</Text>
        <TouchableOpacity  onPress={()=>{navigation.navigate('ViewInternships')}}>
          <Text style={styles.viewAll} >View all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesScroll}
        style={styles.categoriesWrapper}>
        {CATEGORIES.map((category, index) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(index)}
            style={[
              styles.categoryButton,
              selectedCategory === index && styles.activeCategoryButton,
            ]}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === index && styles.activeCategoryText,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.jobsContainer}>
        {JOBS.map((job) => (
          <View key={job.id} style={styles.jobCard}>
            <View style={styles.jobHeader}>
              <Image source={{ uri: job.company.logo }} style={styles.companyLogo} />
              <View style={styles.jobTitleContainer}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.companyName}>{job.company.name}</Text>
              </View>
              <TouchableOpacity style={styles.bookmarkButton}>
                <EvilIcons name='heart' size={23} color="#71717a" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("InternshipDetails",{internshipId:job.id})} style={styles.jobDetails}>
              <View style={styles.locationContainer}>
                <EvilIcons name='location' size={16} color="#71717a" />
                <Text style={styles.locationText}>{job.location} {job.isRemote && '• Remote'}</Text>
              </View>

              <Text style={styles.description} numberOfLines={2}>{job.description}</Text>

              <View style={styles.jobFooter}>
                <View style={styles.experienceContainer}>
                  <Text style={styles.experienceText}>{job.experience}</Text>
                </View>
                <View style={styles.durationContainer}>
                  <Text style={styles.durationText}>{job.duration}</Text>
                </View>
                <View style={styles.postedTimeContainer}>
                  <EvilIcons name='clock' size={14} color="#71717a" />
                  <Text style={styles.postedTimeText}>{job.postedTime}</Text>
                </View>
              </View>
            </TouchableOpacity>
            </View>
          
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 14,
    color: '#71717a',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#18181b',
    marginTop: 4,
  },
  searchContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 9,
    padding: 7,
    flex: 1,
    
    shadowColor: '#919191',
    shadowOffset: { width: 0, height: 0 },  // Adjust height
    shadowOpacity: 0.01,  // Increase opacity
    shadowRadius: 0, // Reduce radius for better visibility
  
    // Shadow for Android
    elevation: 15,  // Increase elevation
  },
  
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#919191',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    shadowRadius: 0,
    elevation: 15,
  },
  notificationBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#ef4444',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#18181b',
    
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#18181b',
  },
  viewAll: {
    fontSize: 14,
    color: '#71717a',
    cursor: 'pointer',
  },
  categoriesWrapper: {
    marginTop: 16,
  },
  categoriesScroll: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: '#f0f9ff',
    marginRight: 8,
  },
  activeCategoryButton: {
    backgroundColor: '#0066ff',
  },
  categoryText: {
    fontSize: 14,
    color: '#0066ff',
  },
  activeCategoryText: {
    color: 'white',
  },
  jobsContainer: {
    padding: 16,
    
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#919191',
    shadowOffset: { width: 0, height: 2 },  // Adjust height
    shadowOpacity: 0.01,  // Increase opacity
    shadowRadius: 0, // Reduce radius for better visibility
  
    // Shadow for Android
    elevation: 7,
    
    
 
  },
  jobHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  companyLogo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#f4f4f5',
  },
  jobTitleContainer: {
    flex: 1,
    marginLeft: 12,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#18181b',
  },
  companyName: {
    fontSize: 14,
    color: '#71717a',
    marginTop: 2,
  },
  bookmarkButton: {
    padding: 8,
  },
  jobDetails: {
    gap: 12,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#71717a',
  },
  salary: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0066ff',
  },
  jobFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  experienceContainer: {
    backgroundColor: '#f4f4f5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  experienceText: {
    fontSize: 12,
    color: '#71717a',
  },
  postedTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postedTimeText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#71717a',
  },
  description: {
      fontSize: 14,
      color: '#4b5563',
      marginBottom: 8,
    },
    durationContainer: {
      backgroundColor: '#e0f2fe',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
    },
    durationText: {
      fontSize: 12,
      color: '#0066ff',
    },
});