import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 依旧，不能所有人共享一个vuex数据，所以导出一个函数
export default () => {
  let store = new Vuex.Store({
    state: {
      name: 'ss',
    },
    mutations: {
      setName(state) {
        state.name = 'yy00000'
      }
    },
    actions: {
      setName({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('setName');
            resolve();
          }, 2000)
        })
      }
    }
  });
  // 将客户单store替换成服务端的
  if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
  }
  return store;
}