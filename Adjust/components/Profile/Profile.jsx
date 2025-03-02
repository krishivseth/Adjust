import * as React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ProfileHeader from "./ProfileHeader";
import UpcomingFlights from "./UpcomingFlights";
import SystemPreferences from "./SystemPreferences";
import LogoutButton from "./LogOutButton.jsx";

function Profile() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <ProfileHeader />
        <UpcomingFlights />
        <SystemPreferences />
        <LogoutButton />
      </View>
    </ScrollView>
  );
}

export default Profile;
