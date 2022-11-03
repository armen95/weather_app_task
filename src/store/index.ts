import { createStore } from 'vuex'
import axios from "axios";
export interface State {
  country: object,
}
export interface test {
  temperature_2m_max: number,
  windspeed_10m:number,
  relativehumidity_2m:number,
}
export default createStore<State>({
  state: {
    country:{}
  },
  getters: {
    allcountry(state) {
      return state.country;
    },
  },
  mutations: {
  },
  actions: {
    async sendCordinats({state},{lat,long, startDate, endDate}) {
      const result=await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,windspeed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto&start_date=${startDate}&end_date=${endDate}`);
      state.country=result.data
   
      },
  },
  modules: {
  }
})
