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
});

export default home;
