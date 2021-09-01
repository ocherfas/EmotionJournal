import AsyncStorage from '@react-native-async-storage/async-storage';


export interface EmotionEntry {
    key: number,
    emotion: string,
    event: string,
    date: Date
}

const entriesKey = "@entries"
class EmotionEntries {

    async getEntries(): Promise<EmotionEntry[]>{
        const jsonValue = await AsyncStorage.getItem(entriesKey)
        const json = jsonValue != null ? JSON.parse(jsonValue) : []
        const jsonWithDate = json.map((entry: any) => {
            return {
                ...entry,
                date: new Date(entry.date)
            }
        })
        return jsonWithDate as EmotionEntry[]
    }

    async addEntry(entry: {
        emotion: string,
        event: string,
        date: Date
    }){
        const entries = await this.getEntries();
        const newEntries = [{...entry, key: entries.length}, ...entries]
        const value = JSON.stringify(newEntries);
        return AsyncStorage.setItem(entriesKey, value)
    }
}

const data = new EmotionEntries();

export default data;