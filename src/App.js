  export const hello = () => 'Hello'

  export const add = (x,y) => {
    if(typeof x != 'number' || typeof y != 'number'){
      return null
    }
    return x + y
  }

  export const removeSNames = (names) => {
    names.forEach(x => {
      if(x.toLowerCase().charAt(0) == 's'){
        names.splice(names.indexOf(x),1)
      }
    });
    return names
  }