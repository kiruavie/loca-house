import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import houseList from "@/assets/datas/datas-appartement.json";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const home: React.FC = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Découvrir</Text>
        <AntDesign name="search1" size={31} color="black" />
      </View>

      <FlatList
        data={houseList}
        contentContainerStyle={{ gap: 20 }}
        horizontal
        keyExtractor={(item) =>
          item.cover_image_url.toLowerCase().toString() +
          Math.floor(Math.random() * 1000)
        }
        renderItem={({ item }) => (
          <View style={styles.imageBlock}>
            <ImageBackground
              source={{
                uri: item.cover_image_url,
              }}
              resizeMode="cover"
              style={styles.ImageBackground}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Enregistrer Nouvellement</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.rowBetween}>
              <Text style={{ fontSize: 25 }}>{item.location_city}</Text>
              <View style={styles.tagContainer}>
                <Text style={styles.tagStar}>
                  {item.propriétaire.totalStars}.00{" "}
                  <FontAwesome name="star" size={18} color="orange" />
                </Text>
              </View>
            </View>
            <View style={styles.rowBetween}>
              <Text style={{ fontSize: 25, color: "gray" }}>
                ${item.month_price}
              </Text>
              <View style={styles.tagContainer}>
                <FontAwesome name="user" size={18} color="orange" />
                <Text style={styles.tagStar}>3 visiteurs</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  greetingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 50,
  },
  greetingText: {
    fontSize: 30,
    fontWeight: "semibold",
  },

  ImageBackground: {
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    padding: 15,
  },
  imageBlock: {
    width: 320,
  },
  tag: {
    backgroundColor: "skyblue",
    padding: 7,
    borderRadius: 8,
  },
  tagText: {
    color: "white",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tagStar: {
    fontSize: 18,
    color: "white",
  },
  tagContainer: {
    backgroundColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 5,
    padding: 5,
  },
});

export default home;
