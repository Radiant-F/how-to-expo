import Background from "@/components/Background";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ExampleFinal() {
  const [selectedFont, setSelectedFont] = useState("Default");

  const fontFamilies = [
    "Lexend",
    "LexendBold",
    "Cause",
    "Mansalva",
    "Bitcount",
    "Default",
  ];

  return (
    <View style={{ flex: 1 }}>
      <Background />

      <View style={styles.item}>
        {fontFamilies.map((font) => (
          <TouchableOpacity
            key={font}
            style={styles.button}
            onPress={() => setSelectedFont(font)}
            activeOpacity={0.75}
          >
            <Text style={{ fontFamily: font, color: "white" }}>{font}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ ...styles.text, fontFamily: selectedFont }}>
        {`soft glow screen in da midnight hue ✨\nclicky-clack keys go tap-tap uwu\nkitty headphones, neon pink light\nlost in da pixels all through da night\n\nsparkly stickers on my tiny cam\ntrying to look cute but i’m just a spam\nstill if u notice me, just a lil bit…\ni’d melt like ice cream and quietly quit\n\nso here i stay in my cozy zone\nhalf-online but not alone\nin this soft world of beep-boop dreams\nloving u quietly between the streams 💜`}
      </Text>
    </View>
  );
}

function ExampleOne() {
  return (
    <View style={{ flex: 1 }}>
      <Background />

      <Text style={{ ...styles.text, fontFamily: "" }}>
        {`soft glow screen in da midnight hue ✨\nclicky-clack keys go tap-tap uwu\nkitty headphones, neon pink light\nlost in da pixels all through da night\n\nsparkly stickers on my tiny cam\ntrying to look cute but i’m just a spam\nstill if u notice me, just a lil bit…\ni’d melt like ice cream and quietly quit\n\nso here i stay in my cozy zone\nhalf-online but not alone\nin this soft world of beep-boop dreams\nloving u quietly between the streams 💜`}
      </Text>
    </View>
  );
}

export default ExampleFinal;

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },

  item: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5,
    marginTop: 20,
  },
  button: {
    backgroundColor: "dodgerblue",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
