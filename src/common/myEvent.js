class Event {

  on(type, listener) {
    if(type in this){
    this[type].push(listener)
    }
    else this[type] = [listener]
  }

  emit(type, eventArgument) {
    if(type in this) {
      for(let i = 0;  i < this[type].length; i++)
        if(typeof this[type][i] === 'object'){
          this[type][i].onlyOnce.forEach(func => func(eventArgument))
          delete this[type][i]
          i--
        }
        this[type].forEach(func => func(eventArgument))
    }
  }
  
  once(type, listener) {
    
    if(type in this){
      type.onlyOnce in this?
      this[type].onlyOnce.push(listener):
      this[type].push({onlyOnce: [listener]})
    }
    else this[type] = [{onlyOnce: [listener]}]

  }
}

export default Event