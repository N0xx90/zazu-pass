const exec = require('child_process').exec

self = {
  get: (PASSWORD_STORE_DIR) => {
      return new Promise((resolve, reject) => {
	let child = exec('cd '+PASSWORD_STORE_DIR+' && echo **/*.gpg && echo *.gpg');
	let passwords =  ""
	child.stderr.on('data', function(data){
		reject(data)
	})
	child.stdout.on('data', function(data) {
		passwords += data;	
	})

	child.on('close', function(code){
		let dataArray = []
		passwords.split(/\n/).forEach(function(item){
			if( item.match(/.*\.gpg/)) {
				dataArray.push(item.replace('.gpg', ''))
			}
		})	
		resolve(dataArray)
	})
      })
  },
}

module.exports = self

