import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  // Dữ liệu mẫu (thay bằng props hoặc API)
  const companyInfo = {
    name: 'Photoism',
    slogan: 'Gallery - Photoism',
    description: 'Short description: Company introduction, vision, mission.',
    timeline: ['2018 – Company Established', '2020 – First Product Launch', '2023 – Reach Korea & Vietnam'],
    visionMission: 'Vision & Mission text here.',
    coreValues: 'Core Values: Innovation, Integrity, etc.',
    services: 'Services provided description.',
    projects: [
      { title: 'Project 1', desc: 'Has time, location, simple description of the event with a link to the event page that describes the event in more detail.' },
      { title: 'Project 2', desc: 'Has time, location 2, simple introduction of the event with a link at the end to a page that describes the event.' },
      { title: 'Project 3', desc: 'Has time, location 3, simple introduction of the event that describes the event with a link to more detail.' }
    ],
    news: [
      { title: 'News 1', info: 'Information about news' },
      { title: 'News 2', info: 'Information about news' },
      { title: 'News 3', info: 'Information about news' }
    ],
    partners: [
      { title: 'Partner 1', desc: 'Description' },
      { title: 'Partner 2', desc: 'Description' },
      { title: 'Partner 3', desc: 'Description' }
    ],
    contact: {
      address: 'Address: Hanoi, Vietnam',
      email: 'email@photoism.co.kr',
      facebook: 'Facebook Link'
    }
  };

  const handleMenuPress = (item) => {
    if (item === 'Subsidiary') {
        navigation.navigate('Subsidiary'); // Chuyển đến trang SubsidiaryScreen khi nhấn Subsidiary
      } else {
        alert(`Navigate to ${item}`); // Giữ alert cho các mục khác
      }
    };

  const handleLanguagePress = (lang) => {
    alert(`Switch to ${lang}`);
    setLanguageDropdownVisible(false); // Đóng dropdown sau khi chọn
  };

  const handleButtonPress = () => {
    // Nút chọn ở header (giả định submit form hoặc navigate)
    navigation.navigate('Game'); // Ví dụ chuyển đến màn Game
  };

  const handleProjectPress = (project) => {
    alert(`View details for ${project.title}`);
  };

  const handleNewsPress = (news) => {
    alert(`Read ${news.title}`);
  };

  const handlePartnerPress = (partner) => {
    alert(`Partner: ${partner.title}`);
  };

  const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header giống photoism.co.kr: Fixed top, logo left, menu center, language right, button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.logo}>
          <Text style={styles.logoText}>LOGO</Text>
        </TouchableOpacity>
        <View style={styles.menu}>
          {['Subsidiary', 'Branches', 'Partners', 'Projects', 'News'].map((item) => (
            <TouchableOpacity key={item} onPress={() => handleMenuPress(item)} style={styles.menuItemContainer}>
              <Text style={styles.menuItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            onPress={() => setLanguageDropdownVisible(!isLanguageDropdownVisible)}
            style={styles.headerButton}
          >
            <Text style={styles.buttonText}>Language</Text>
          </TouchableOpacity>
          {isLanguageDropdownVisible && (
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() => handleLanguagePress('Korean')}>
                <Text style={styles.dropdownItem}>Korean</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLanguagePress('English')}>
                <Text style={styles.dropdownItem}>English</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.headerButton} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Selection</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image source={{ uri: 'https://via.placeholder.com/400x200?text=Banner+Image' }} style={styles.bannerImage} />
        <Text style={styles.companyName}>Company Name</Text>
        <Text style={styles.slogan}>Company Slogan</Text>
      </View>

      {/* Company Information */}
      <Card containerStyle={styles.card}>
        <Text style={styles.sectionTitle}>Company Information</Text>
        <Text>{companyInfo.description}</Text>
      </Card>

      {/* Historical Timeline */}
      <View style={styles.timelineContainer}>
        <Text style={styles.sectionTitle}>Historical Timeline</Text>
        {companyInfo.timeline.map((item, index) => (
          <Text key={index} style={styles.timelineItem}>{item}</Text>
        ))}
      </View>

      {/* Method of Operation, Vision & Mission, Core Values (Grid row) */}
      <View style={styles.gridRow}>
        <Card style={styles.gridItem}>
          <Text style={styles.gridTitle}>Method of Operation</Text>
        </Card>
        <Card style={styles.gridItem}>
          <Text style={styles.gridTitle}>Vision & Mission</Text>
          <Text>{companyInfo.visionMission}</Text>
        </Card>
        <Card style={styles.gridItem}>
          <Text style={styles.gridTitle}>Core Values</Text>
          <Text>{companyInfo.coreValues}</Text>
        </Card>
      </View>

      {/* Services Provided */}
      <Card containerStyle={styles.card}>
        <Text style={styles.sectionTitle}>Services Provided</Text>
        <Text>{companyInfo.services}</Text>
        {/* Screenshot placeholder */}
        <Image source={{ uri: 'https://via.placeholder.com/300x200?text=Screenshot' }} style={styles.placeholderImage} />
      </Card>

      {/* Featured Projects (Grid) */}
      <Text style={styles.sectionTitle}>Featured Projects</Text>
      <View style={styles.projectsGrid}>
        {companyInfo.projects.map((project, index) => (
          <TouchableOpacity key={index} onPress={() => handleProjectPress(project)} style={styles.projectCard}>
            <Image source={{ uri: 'https://via.placeholder.com/150x150?text=Project' }} style={styles.placeholderImage} />
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text>{project.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* News (Grid) */}
      <Text style={styles.sectionTitle}>News</Text>
      <View style={styles.newsGrid}>
        {companyInfo.news.map((newsItem, index) => (
          <TouchableOpacity key={index} onPress={() => handleNewsPress(newsItem)} style={styles.newsCard}>
            <Image source={{ uri: 'https://via.placeholder.com/100x100?text=News' }} style={styles.placeholderImage} />
            <Text style={styles.newsTitle}>{newsItem.title}</Text>
            <Text>{newsItem.info}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Partners Information (Grid) */}
      <Text style={styles.sectionTitle}>Partners Information</Text>
      <View style={styles.partnersGrid}>
        {companyInfo.partners.map((partner, index) => (
          <TouchableOpacity key={index} onPress={() => handlePartnerPress(partner)} style={styles.partnerCard}>
            <Image source={{ uri: 'https://via.placeholder.com/80x80?text=Logo' }} style={styles.logoImage} />
            <Text style={styles.partnerTitle}>{partner.title}</Text>
            <Text>{partner.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contact */}
      <Card containerStyle={styles.card}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text>Address: {companyInfo.contact.address}</Text>
        <Text>Email: {companyInfo.contact.email}</Text>
        <Text>Facebook: {companyInfo.contact.facebook}</Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  logo: { flex: 1 },
  logoText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  menu: { flex: 2, flexDirection: 'row', justifyContent: 'space-around', marginLeft: -700 },
  menuItemContainer: {
    marginHorizontal: 10,
  },
  menuItem: { color: '#333', fontSize: 14 },
  buttonGroup: { flexDirection: 'row', alignItems: 'center' },
  headerButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10, // Khoảng cách giữa 2 nút
  },
  buttonText: { color: 'white', fontSize: 12 },
  dropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    width: 100,
    zIndex: 1001,
  },
  dropdownItem: {
    fontSize: 12,
    padding: 5,
    color: '#333',
    textAlign: 'center',
  },
  banner: { height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd', marginTop: 60 },
  bannerImage: { width: '100%', height: 150 },
  companyName: { fontSize: 24, fontWeight: 'bold', position: 'absolute', top: 20 },
  slogan: { fontSize: 16, position: 'absolute', bottom: 20 },
  card: { margin: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  timelineContainer: { margin: 10 },
  timelineItem: { fontSize: 14, marginVertical: 5 },
  gridRow: { flexDirection: 'row', justifyContent: 'space-around', margin: 10 },
  gridItem: { width: '30%', padding: 10 },
  gridTitle: { fontSize: 16, fontWeight: 'bold' },
  placeholderImage: { width: 150, height: 100, marginVertical: 5 },
  projectsGrid: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' },
  projectCard: { width: '30%', margin: 5, padding: 10, borderWidth: 1, borderColor: '#ddd' },
  projectTitle: { fontWeight: 'bold' },
  newsGrid: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' },
  newsCard: { width: '30%', margin: 5, padding: 10, borderWidth: 1, borderColor: '#ddd' },
  newsTitle: { fontWeight: 'bold' },
  partnersGrid: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' },
  partnerCard: { width: '30%', margin: 5, padding: 10, borderWidth: 1, borderColor: '#ddd' },
  partnerTitle: { fontWeight: 'bold' },
  logoImage: { width: 60, height: 60 },
});

export default HomeScreen;