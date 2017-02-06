const fuzzyfind = require('fuzzyfind')

const passList = require('./passList.js')
module.exports = (pluginContext) => {
	return {
		respondsTo: (query) => {
			return query.match(/pass.*/g)
		},
		search: (query, env = {}) => {
			return new Promise((resolve,reject) => {	
				  passList.get(env.PASSWORD_STORE_DIR).then((passArray) => {
				  let finded = fuzzyfind(query, passArray)
				  let ret_array = []
				  fuzzyfind(query.split(' ')[1], passArray).forEach((item) => {
				  	obj = {
				  		title: item,
				  		value: item
				  	}
				  	ret_array.push(obj)
				  })
				  resolve(ret_array)
				})
			})
		},
	}
}
