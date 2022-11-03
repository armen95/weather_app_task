
<template>
    <div class="dropdown-style">
        <button @click="show = !show">{{ selectedItem.name }}</button>
        <div v-if="show">
            <input type="search" v-model="text" placeholder="Search" />
            <div v-for="country in filteredCountry" :key="country.id" @click="changeSelectedCountry(country.id)">{{
                    country.name
            }}</div>
        </div>
    </div>
</template>
<style>
.dropdown-style {
    background: rgb(168, 107, 107);
    width: 200px;
    border: 2px solid;
}
</style>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "DropDown",
    data() {

        return {
            show: false,
            text: '',
            countries: [
                { id: 1, name: "New York", selected: false },
                { id: 2, name: "London", selected: false },
                { id: 3, name: "Berlin", selected: false },
                { id: 4, name: "Paris", selected: false },
                { id: 5, name: "Madrid", selected: false },

            ]
        }
    },
    methods: {
        changeSelectedCountry(id) {
            this.countries = this.countries.map(el => {
                if (el.id === id) {
                    el.selected = true
                }
                else {
                    el.selected = false
                }
                return el
            })
            this.show = !this.show

        }
    },
    computed: {
        filteredCountry() {
            return this.countries.filter(el => el.name.startsWith(this.text))
        },
        selectedItem() {
            let item = this.countries.find(el => el.selected)
            return item ? item : this.countries[0]
        }
    }

})
</script>