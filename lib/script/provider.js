class Provider{
	constructor(valueInitial){
		this.value = valueInitial
		this.updates = []
	}
	set(newValue){
		this.value = newValue
		for (const up of this.updates) {
			up(newValue)
		}
	}
	onUpdate(callback){
		this.updates.push(callback)
	}
}
export {StateGlobal}