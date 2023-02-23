export default {
	namespaced: true,
	state: {
		items: [
			{
				id: 100, cost: 250, info: 'Рис, угорь, соус унагикунжут, водоросли нори.', name: 'Ролл угорь стандарт', img: 'card-1.png'
			},
			{
				id: 101, cost: 395,
				info: 'Рис, лосось, авокадо, огурец, майонезикра масаго, водоросли нори.',
				name: 'Калифорния лосось стандарт',
				img: 'card-2.png'
			},
			{
				id: 102, cost: 250,
				info: 'Рис, креветка отварная, сырсливочный, лосось, огурец свежий...',
				name: 'Окинава стандарт',
				img: 'card-3.png'
			},
			{
				id: 103, cost: 250,
				info: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
				name: 'Цезарь маки хl',
				img: 'card-4.png'
			},
			{
				id: 104, cost: 250,
				info: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
				name: 'Ясай маки стандарт 185 г',
				img: 'card-5.png'
			},
			{
				id: 105, cost: 250,
				info: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
				name: 'Ролл с креветкой стандарт',
				img: 'card-6.png'
			},
		],
	},
	getters: {
		all: (state) => state.items,
		one: (state) => (id) => state.items.find((item) => item.id === id),
	},
	mutations: {
		setItems(state, products) {
			state.items = products;
		},
	},
	actions: {},
};
