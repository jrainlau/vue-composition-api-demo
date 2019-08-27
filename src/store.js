import { reactive, toRefs } from '@vue/composition-api'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

const rawState = reactive({
  count: 0
})

export const state = toRefs(rawState)

export const mutations = {
  INCREMENT () {
    state.count++
  }
}
