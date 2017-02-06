const exec = require('child_process').exec
const fs = require('fs')

module.exports = (pluginContext) => {
    return (value, env = {}) => {
        return new Promise((resolve, reject) => {
		const clipboard = pluginContext.clipboard
		setTimeout(function(){
			clipboard.clear()
		}, 45000)
	})
    }
}
