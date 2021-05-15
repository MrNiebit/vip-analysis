import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 设置全局访问的state对象
        // 要设置的初始值

        // player 实例
        player: "",


    },
    mutations: {
        initPlayer(state, player) {
            state.player = player
        },
        changeInfo(state, res) {
            const data = {}
            let m3u8 = res.m3u8;
            if (m3u8.indexOf('https') == -1) {
                m3u8 = m3u8.replace("http", "https")
            }
            data.url = m3u8 + '&reset=0'
            data.pic = res.info.pic
            document.title = res.info.title
            console.log('current video : ' + data.type)
            state.player.switchVideo(data)
        }
    },
    // action 类似于mutation，不同于：action提交的是mutation，而不是直接变更状态，
    // action可以包含任意异步操作
    actions: {
        initPlayer(context, player) {
            context.commit('initPlayer', player)
        },
        changeInfo(context, res) {
            context.commit('changeInfo', res)
        }
    },
    getters: {
        changeInfo(state) {
            return state.player
        }
    }
})
