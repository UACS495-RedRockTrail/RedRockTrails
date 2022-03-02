import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { WebView } from "react-native-webview";

const VolunteerDetails = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
      <View style={style.container}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={style.title}>Adopt-a-Trail Program</Text>
            <Text>
              Adopting a trail is a fantastic way for neighborhoods, scout
              troops, businesses, book clubs, families — groups of all kinds —
              to make Birmingham a cleaner, greener, more beautiful place. As a
              volunteer, you’ll serve as an ambassador for your community’s
              existing and future trails. Plus, your group will have a regular
              excuse to spend time together outside in the fresh air and
              sunshine!
            </Text>
            <Text style={style.subTitle}>Time Commitment</Text>
            <Text>
              Each group commits to at least two hours of work, every other
              month, for one year.
            </Text>

            <Button
              onPress={() => navigation.navigate("AdoptATrailFormScreen")}
              title="Adopt-a-Trail Interest Form"
              color="green"
            />

            <Text style={style.title}>Group Workdays</Text>
            <Text>
              Join our team for a fun, hands-on experience conserving Alabama’s
              land and water. We facilitate workdays for corporate teams and
              other groups, providing the tools and instruction for projects
              that match each group’s ability and interest. Potential volunteer
              activities include:
            </Text>
            <Text>- Woods and water cleanup</Text>
            <Text>- Trail maintenance</Text>
            <Text>- Invasive species removal</Text>
            <Text>- Stream bank stabilization</Text>

            <Text style={style.title}>Individual Volunteers</Text>

            <Text style={style.subTitle}>Trail User Counts and Surveys</Text>
            <Text>
              We are always looking for individuals to conduct counts and
              surveys of our Red Rock Trail System users. We provide you with
              training and materials — you help us gather invaluable data and
              feedback on our trails.
            </Text>
            <Text style={style.subTitle}>Annual Workdays</Text>
            <Text>
              Several times each year, we have workdays open to individual
              volunteers.
            </Text>
            <Text style={style.subTitle}>Eagle Scout And Service Projects</Text>
            <Text>
              We welcome service projects where scouts and volunteers can solve
              a specific problem or meet a specific need on our properties and
              trails. In your email, share your plans with us and be as specific
              as possible about your goals.
            </Text>

            <Text
              style={{
                fontSize: 17,
                color: "red",
                marginTop: 15,
                textAlign: "center",
              }}
            >
              After exploring the above opportunities contact us below.
            </Text>
            <Button
              onPress={() =>
                Linking.openURL("mailto:sally.sperling@freshwaterlandtrust.org")
              }
              title="sally.sperling@freshwaterlandtrust.org"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    position: "absolute",
    height: "84.5%",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "darkgreen",
    textAlign: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "brown",
    textAlign: "center",
    marginVertical: 5,
  },
});

export default VolunteerDetails;
