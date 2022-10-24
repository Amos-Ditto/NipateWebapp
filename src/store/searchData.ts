import { defineStore } from "pinia";
import { ref } from "vue";
import { Category, County } from "../Types/ServiceTypes";


interface SearchData {
    searchdata: string
    category: Category
    county: County
}

export const useSearch = defineStore('search', () => {
    const searchdata = ref<SearchData>({
        searchdata: "",
        category: {
            id: 0, Name: "All Categories"
        },
        county: {
            id: 0, Name: "All Regions"
        }
    })

    const updateSearchData = (payload: SearchData): void => {
        searchdata.value = payload;
    }

    return { searchdata, updateSearchData };
})