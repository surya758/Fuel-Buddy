import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error)
  }
}

const getData = async (key: string) => {
  try {
    const data = AsyncStorage.getItem(key);
    return data;
  } catch (error) {
    console.error(error)
  }
}

export { storeData, getData }
