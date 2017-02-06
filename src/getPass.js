const exec = require('child_process').exec

module.exports = (pluginContext) => {
    return (value, env = {}) => {
        return new Promise((resolve, reject) => {
		command = "PASSWORD_STORE_DIR="+env.PASSWORD_STORE_DIR+" PATH=" +env.PATH + " pass " + value
		exec(command, (error, stdout, stderr) => {
			if(error) reject(error)
			const clipboard = pluginContext.clipboard
			clipboard.writeText(stdout)
			resolve(stdout)
		})
	})
    }
}
