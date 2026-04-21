import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ExampleFinal() {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "id", label: "Indonesia" },
    { code: "su", label: "Sunda" },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 45 }}>{t("greeting")}</Text>

      <Text>{t("welcome")}</Text>

      <Text style={{ marginTop: 20 }}>{t("changeLanguage")}:</Text>

      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          onPress={() => i18n.changeLanguage(lang.code)}
          style={styles.button}
        >
          <Text style={{ color: "white" }}>{lang.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function ExampleTwo() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 45 }}>{t("greeting")}</Text>

      <Text>{t("welcome")}</Text>

      <Text style={{ marginTop: 20 }}>{t("changeLanguage")}:</Text>
    </View>
  );
}

function ExampleOne() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 45 }}>Halo!</Text>

      <Text>Selamat datang!</Text>

      <Text style={{ marginTop: 20 }}>Ganti bahasa:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 50 / 2,
    margin: 5,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
