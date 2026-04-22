import { Image, StyleSheet, View } from "react-native";

export default function Background() {
  return (
    <>
      <Image
        source={require("@/assets/images/nate-rayfield-unsplash.jpg")}
        style={styles.bg}
        blurRadius={10}
      />
      <View style={styles.overlay} />
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.25,
  },
  bg: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
