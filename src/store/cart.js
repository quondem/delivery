export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        cartEmpty: state => state.items.length == 0,
        all: state => state.items,
        getCnt: state => id => state.items.find(item => item.id == id).cnt,
        one: state => id => state.items.find(item => item.id == id),
        inCart: state => id => Boolean(state.items.find(item => item.id == id)),
        itemsDetailed: (state, getters, rootState, rootGetters) => {
            return state.items.map(item => {
                let product = rootGetters['products/one'](item.id);
                return { ...product, cnt: item.cnt };
            })
        },
        total: (state, getters) => getters.itemsDetailed.reduce((t, i) => t + i.cost * i.cnt, 0)
    },
    mutations: {
        add(state, id) {
            state.items.push({ id, cnt: 1 });
        },
        setCnt(state, id, cnt) {
            let item = state.items.find(item => item.id == id)
            item.cnt = cnt
        },
        remove(state, id) {
            state.items = state.items.filter(item => item.id != id)
        },
        increment(state, id) {
            state.items.find(item => item.id == id).cnt++
        },
        decrement(state, id) {
            state.items.find(item => item.id == id).cnt--
        }
    },
    actions: {
        add({ getters, commit }, id) {
            !getters.inCart(id) ? commit('add', id) : 0
        },
        setCnt({ getters, commit }, id, cnt) {
            if (getters.one(id).cnt-- < 1) {
                commit('remove', id)
            } else {
                commit('setCnt', id, cnt)
            }
        },
        increment({ getters, commit }, id) {
            commit('increment', id)
        },
        decrement({ getters, commit }, id) {
            if (getters.one(id).cnt == 1) {
                commit('remove', id)
            } else {
                commit('decrement', id)
            }
        }
    }
}