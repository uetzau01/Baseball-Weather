"use strict"

class GamesView {
	constructor(model){
		let self = this
		model.subscribe(function(a,b){
			self.redrawMap(a,b)
		})
	}

	redrawMap(gamesList, msg){
		//TODO
	}

}
