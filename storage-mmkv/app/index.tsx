import { storage } from "@/utils";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Button
        title="Set string"
        onPress={() => {
          storage.set("user.rain", "is cute");
          console.log("✨ data disimpan");
        }}
      />
      <Button
        title="Get string"
        onPress={() => {
          const data = storage.getString("user.rain");
          console.log(data);
        }}
      />

      <Button
        title="Set number"
        onPress={() => {
          storage.set("data.number", 67);
          console.log("✨ data disimpan");
        }}
      />
      <Button
        title="Get number"
        onPress={() => {
          const data = storage.getNumber("data.number");
          console.log(data);
        }}
      />

      <Button
        title="Set boolean"
        onPress={() => {
          storage.set("rain is cute", true);
          console.log("✨ data disimpan");
        }}
      />
      <Button
        title="Get boolean"
        onPress={() => {
          const data = storage.getBoolean("rain is cute");
          console.log(data);
        }}
      />

      <Button
        title="Set object as string"
        onPress={() => {
          const you = { name: "rain", is: "cute" };
          storage.set("rain.bio", JSON.stringify(you));
          console.log("✨ data object disimpan");
        }}
      />
      <Button
        title="Get stringified object"
        onPress={() => {
          const data = storage.getString("rain.bio");
          console.log(data ? JSON.parse(data) : undefined);
        }}
      />

      <Button
        title="Set array as string"
        onPress={() => {
          const meow = ["rain", "meow", "mrrp"];
          storage.set("rain.cute", JSON.stringify(meow));
          console.log("✨ data array disimpan");
        }}
      />
      <Button
        title="Get stringified array"
        onPress={() => {
          const data = storage.getString("rain.cute");
          console.log(data ? JSON.parse(data) : undefined);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
