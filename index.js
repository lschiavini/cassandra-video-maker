const readLine = require('readline-sync')


function start() {
	const content = {}	
	content.searchTerm = askAndReturnSearchItem()
	content.prefix = askAndReturnPrefix()
	function askAndReturnSearchItem(){	
		return readLine.question('Type a Wikipedia search term: ') 
	}

	function askAndReturnPrefix(){
		const prefixes = [
			'Who is',
			'What is',
			'The history of'
		]
		const selectedPrefixIndex = readLine.keyInSelect(prefixes)
		return prefixes[selectedPrefixIndex]

	}
	console.log(content)

}


start()
