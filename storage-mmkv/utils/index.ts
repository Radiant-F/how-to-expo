import { Platform } from "react-native";
import { createMMKV } from "react-native-mmkv";

export const storage = createMMKV({
  id: "mmkv.default",
  encryptionType: "AES-256",
  encryptionKey:
    Platform.OS == "web"
      ? undefined
      : "Dy2g+YLdN5dTFVRhue34m0Km4HgI+85aHgXKWXqf5Bc=",
});
