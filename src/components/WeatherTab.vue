<template>
    <div class="weather_div">
        <h1>{{contName}}</h1>
        <span class="weather_title">Weather App</span>
        <div
            class=" flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
            <a rel="noopener noreferrer" 
             href="#" @click="Countryname = 'New York', clikName()"
                class="flex items-center flex-shrink-0 px-5 py-3 space-x-2"
                :class="Countryname == 'New York' ? 'border  border-b-0 rounded-t-lg dark:border-black-400 dark:text-gray-50' : 'border-b'">
                <span>New York</span>
            </a>
            <a rel="noopener noreferrer"  href="#" @click="Countryname = 'London', clikName()"
                class="flex items-center flex-shrink-0 px-5 py-3 space-x-2"
                :class="Countryname == 'London' ? 'border border-b-0 rounded-t-lg dark:border-black-400 dark:text-gray-50' : 'border-b'">
                <span>London</span>
            </a>
            <a rel="noopener noreferrer" href="#" @click="Countryname
             = 'Berlin', clikName()"
                class="flex items-center flex-shrink-0 px-5 py-3 space-x-2"
                :class="Countryname == 'Berlin' ? 'border border-b-0 rounded-t-lg dark:border-black-400 dark:text-gray-50' : 'border-b'">
                <span>Berlin</span>
            </a>
            <a rel="noopener noreferrer" href="#" @click="Countryname = 'Paris', clikName()"
                class="flex items-center flex-shrink-0 px-5 py-3 space-x-2"
                :class="Countryname == 'Paris' ? 'border border-b-0 rounded-t-lg dark:border-black-400 dark:text-gray-50' : 'border-b'">
                <span>Paris</span>
            </a>
            <a rel="noopener noreferrer" href="#" @click="Countryname='Madrid',clikName()"
                class="flex items-center flex-shrink-0 px-5 py-3 space-x-2"
                :class="Countryname == 'Madrid' ? 'border border-b-0 rounded-t-lg dark:border-black-400 dark:text-gray-50' : 'border-b'">
                <span>Madrid</span>
            </a>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
let date = new Date();
let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0];

export default defineComponent({
    name: 'WeatherTab',
    props: ['convertedDate'],
    data() {
        return {
            Countryname: "New York",
            contName:""
        }
    },
    computed: mapGetters(["allcountry"]),
    methods: {
        ...mapActions(["sendCordinats"]),
        clikName() {
            if (this.Countryname == 'London') {
                const payload = {
                    long: "-0.1262",
                    lat: "51.5002",
                    startDate: dateString,
                    endDate: dateString
                }
                this.sendCordinats(payload)
            }
            if (this.Countryname == 'New York') {
                const payload = {
                    long: "-74.01",
                    lat: "40.71",
                    startDate: dateString,
                    endDate: dateString
                }
                this.sendCordinats(payload)
            }
            if (this.Countryname == 'Berlin') {
                const payload = {
                    long: "13.4115",
                    lat: "52.5235",
                    startDate: dateString,
                    endDate: dateString
                }
                this.sendCordinats(payload)
            }
            if (this.Countryname == 'Paris') {
                const payload = {
                    long: "2.3510",
                    lat: "48.8567",
                    startDate: dateString,
                    endDate: dateString
                }
                this.sendCordinats(payload)
            }
            if (this.Countryname == 'Madrid') {
                const payload = {
                    long: "-3.7033",
                    lat: "40.4167",
                    startDate: dateString,
                    endDate: dateString
                }
                this.sendCordinats(payload)
            }
        }
    },
    mounted() {
        let date = new Date();
        let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0];
        this.sendCordinats({
            long: "-74.01",
            lat: "40.71",
            startDate: dateString,
            endDate: dateString
        })
    },
    watch: {
        convertedDate(val) {
            if (this.Countryname == 'London') {
                this.sendCordinats({
                    long: "-0.1262",
                    lat: "51.5002",
                    startDate: val,
                    endDate: val
                })
            }
            if (this.Countryname == 'New York') {
                this.sendCordinats({
                    long: "-74.01",
                    lat: "40.71",
                    startDate: val,
                    endDate: val
                })
            }
            if (this.Countryname == 'Berlin') {
                this.sendCordinats({
                    long: "13.4115",
                    lat: "52.5235",
                    startDate: val,
                    endDate: val
                })
            }
            if (this.Countryname == 'Paris') {
                this.sendCordinats({
                    long: "2.3510",
                    lat: "48.8567",
                    startDate: val,
                    endDate: val
                })
            }
            if (this.Countryname == 'Madrid') {
                this.sendCordinats({
                    long: "-3.7033",
                    lat: "40.4167",
                    startDate: val,
                    endDate: val
                })
            }
        }
    }
})
</script>
<style>
.weather_div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 25px
}
.weather_title {
    font-size: 55px;
}
</style>