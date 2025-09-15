import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const SubsidiaryScreen = ({ navigation }) => {
  // Dữ liệu mẫu (thay bằng props hoặc API)
  const subsidiaryData = {
    name: 'Photoism Subsidiary',
    slogan: 'Gallery - Photoism',
    description: 'Short description: Company introduction, vision, mission.',
    timeline: ['2015 – Company Established', '2018 – First Product Launch', '2020 – Expand to Korea & Vietnam', '2023 – Reach 1M+ Customers'],
    visionMission: 'Vision & Mission text here.',
    coreValues: 'Core Values: Innovation, Integrity, etc.',
    branches: [
      { name: 'Branch 1', desc: 'Brief introduction of the branch' },
      { name: 'Branch 2', desc: 'Brief introduction of the branch' }
    ],
    events: [
      { title: 'Event 1', desc: 'Has time, location, sample description of the event, and at the end a link to a page that describes the event in more detail.' },
      { title: 'Event 2', desc: 'Has time, location, simple introduction of the event with a link at the end to a page that describes the event.' },
      { title: 'Event 3', desc: 'Has time, location, simple introduction of the event that describes the event with a link to more detail.' }
    ],
    contactFranchise: {
      address: 'Address: Hanoi, Vietnam',
      phone: 'Phone: +84 123 456 789',
      email: 'email@photoism.co.kr',
      facebook: 'Facebook Link'
    },
    recruitment: [
      { position: 'Position to recruit 1', desc: 'Description' },
      { position: 'Position to recruit 2', desc: 'Description' }
    ],
    partners: [
      { title: 'Partner 1', desc: 'Description' },
      { title: 'Partner 2', desc: 'Description' },
      { title: 'Partner 3', desc: 'Description' }
    ]
  };

  const handleMenuPress = (item) => {
    alert(`Navigate to ${item}`);
  };

  const handleLanguagePress = (lang) => {
    alert(`Switch to ${lang}`);
    setLanguageDropdownVisible(false);
  };

  const handleButtonPress = () => {
    navigation.navigate('Game');
  };

  const handleBranchPress = (branch) => {
    alert(`View details for ${branch.name}`);
  };

  const handleEventPress = (event) => {
    alert(`View details for ${event.title}`);
  };

  const handleContactPress = () => {
    alert('Contact information copied or opened!');
  };

  const handleRecruitmentPress = (position) => {
    alert(`Apply for ${position.position}`);
  };

  const handlePartnerPress = (partner) => {
    alert(`Partner: ${partner.title}`);
  };

  const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header giống photoism.co.kr */}
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
        <Text>{subsidiaryData.description}</Text>
      </Card>

      {/* Historical Timeline */}
      <View style={styles.timelineContainer}>
        <Text style={styles.sectionTitle}>Historical Timeline</Text>
        {subsidiaryData.timeline.map((item, index) => (
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
          <Text>{subsidiaryData.visionMission}</Text>
        </Card>
        <Card style={styles.gridItem}>
          <Text style={styles.gridTitle}>Core Values</Text>
          <Text>{subsidiaryData.coreValues}</Text>
        </Card>
      </View>

      {/* Branches */}
      <Text style={styles.sectionTitle}>Branches</Text>
      <View style={styles.branchesGrid}>
        {subsidiaryData.branches.map((branch, index) => (
          <TouchableOpacity key={index} onPress={() => handleBranchPress(branch)} style={styles.branchCard}>
            <Image source={{ uri: 'https://via.placeholder.com/100x100?text=Screenshot' }} style={styles.placeholderImage} />
            <Text style={styles.branchName}>{branch.name}</Text>
            <Text>{branch.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Featured Events */}
      <Text style={styles.sectionTitle}>Featured Events</Text>
      <View style={styles.eventsGrid}>
        {subsidiaryData.events.map((event, index) => (
          <TouchableOpacity key={index} onPress={() => handleEventPress(event)} style={styles.eventCard}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text>{event.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contact for Franchise Cooperation */}
      <Card containerStyle={styles.card}>
        <Text style={styles.sectionTitle}>Contact for Franchise Cooperation</Text>
        <Text>Address: {subsidiaryData.contactFranchise.address}</Text>
        <Text>Phone: {subsidiaryData.contactFranchise.phone}</Text>
        <Text>Email: {subsidiaryData.contactFranchise.email}</Text>
        <Text>Facebook: {subsidiaryData.contactFranchise.facebook}</Text>
        <TouchableOpacity onPress={handleContactPress}>
          <Text style={styles.linkText}>Click to contact</Text>
        </TouchableOpacity>
      </Card>

      {/* Recruitment */}
      <Text style={styles.sectionTitle}>Recruitment</Text>
      <View style={styles.recruitmentGrid}>
        {subsidiaryData.recruitment.map((recruit, index) => (
          <TouchableOpacity key={index} onPress={() => handleRecruitmentPress(recruit)} style={styles.recruitmentCard}>
            <Text style={styles.recruitmentTitle}>{recruit.position}</Text>
            <Text>{recruit.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Partners Information */}
      <Text style={styles.sectionTitle}>Partners Information</Text>
      <View style={styles.partnersGrid}>
        {subsidiaryData.partners.map((partner, index) => (
          <TouchableOpacity key={index} onPress={() => handlePartnerPress(partner)} style={styles.partnerCard}>
            <Image source={{ uri: 'https://via.placeholder.com/80x80?text=Logo' }} style={styles.logoImage} />
            <Text style={styles.partnerTitle}>{partner.title}</Text>
            <Text>{partner.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
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
  menu: { flex: 2, flexDirection: 'row', justifyContent: 'space-around', marginLeft: -150 },
  menuItemContainer: {
    marginHorizontal: 10, // Giữ khoảng cách giữa các mục
  },
  menuItem: { color: '#333', fontSize: 14 },
  buttonGroup: {
    flex: 1, // Giữ nguyên vị trí và khoảng cách của Language và Selection
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Đảm bảo nút giữ nguyên bên phải
  },
  headerButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
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
  placeholderImage: { width: 100, height: 100, marginVertical: 5 },
  branchesGrid: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' },
  branchCard: { width: '45%', margin: 5, padding: 10, borderWidth: 1, borderColor: '#ddd' },
  branchName: { fontWeight: 'bold' },
  eventsGrid: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' },
  eventCard: { width: '30%', margin: 5, padding: 10, borderWidth: 1, borderColor: '#ddd' },
  eventTitle: { fontWeight: 'bold' },
  linkText: { color: '#4a90e2', textDecorationLine: 'underline', marginTop: 5 },
  recruitmentGrid: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' },
  recruitmentCard: { width: '45%', margin: 5, padding: 10, borderWidth: 1, borderColor: '#ddd' },
  recruitmentTitle: { fontWeight: 'bold' },
  partnersGrid: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' },
  partnerCard: { width: '30%', margin: 5, padding: 10, borderWidth: 1, borderColor: '#ddd' },
  partnerTitle: { fontWeight: 'bold' },
  logoImage: { width: 60, height: 60 },
});

export default SubsidiaryScreen;