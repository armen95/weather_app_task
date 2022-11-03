<template>
  <div class="home">
    <Dropdown/>
    <WeatherTab :convertedDate="convertedDate" />
    <div class="main_div">
      <div class="main_div2">
      <div class="weather">
        <div><img src="../assets/1.png" /></div>
        <div><span>temprature:{{ allcountry.daily?.temperature_2m_max[0]}}°C</span><br>
          <span>wind:{{ allcountry.hourly?.windspeed_10m[0]}} km/h</span><br>
          <span>humidity:{{ allcountry.hourly?.relativehumidity_2m[0]}} km/h</span>
        </div>
      </div>
      <div class="weather">
        <div><img src="../assets/2.png" /></div>
        <div><span>temprature:{{ allcountry.daily?.temperature_2m_min[0]}}°C</span><br>
          <span>wind:{{ allcountry.hourly?.windspeed_10m[0]}} km/h</span><br>
          <span>humidity:{{ allcountry.hourly?.relativehumidity_2m[0]}} km/h</span>
        </div>
        
      </div>
    </div>
      <div>
        <DatePicker v-model="range" mode="date" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import WeatherTab from '@/components/WeatherTab.vue';
import Dropdown from '@/components/Dropdown.vue';
import { defineComponent } from 'vue';
import { DatePicker } from 'v-calendar';
import { mapActions, mapGetters } from 'vuex';


export default defineComponent({
  name: "HomeView",
  components: {
    WeatherTab,
    DatePicker,
    Dropdown
    
  },
  data() {
    return {
      range: new Date(),
      convertedDate: ""
    }
  },
  computed: mapGetters(["allcountry"]),
  methods: {
    ...mapActions(["sendCordinats"]),

  },
  watch: {
    range(val) {
      let date = new Date(val);
      console.log(date);
      let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0];
      this.convertedDate = dateString
    }
  }
});
</script>
<style>
.main_div {
  width: 1000px;
  justify-content: space-between;
  display: flex;
  margin: auto;
}

.home {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.main_div2{
  display: flex;
  flex-direction: column;
  gap:30px
}

.weather {
  display: flex;
}

.weather img {
  width: 70px;
  height: 70px;
}
</style>
