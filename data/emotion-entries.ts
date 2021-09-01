import { Moment } from "moment";


export interface EmotionEntry {
    key: number,
    emotion: string,
    event: string,
    moment: Moment
}

class EmotionEntries {
    data: EmotionEntry[] = []

    async getEntries(){
        return [...this.data]
    }

    async addEntry(entry: {
        emotion: string,
        event: string,
        moment: Moment
    }){
        this.data = [{...entry, key: this.data.length}, ...this.data];
        return;
    }
}

const data = new EmotionEntries();

export default data;