function solution(names) {
    const map = new Map();
    const result = [];
  
    for (const name of names) {
      if (map.has(name)) {
        let suffix = map.get(name) + 1;
        let newName = ${name}(${suffix});
  
        while (map.has(newName)) {
          suffix++;
          newName = ${name}(${suffix});
        }
  
        map.set(name, suffix);
        map.set(newName, 0);
        result.push(newName);
      } else {
        map.set(name, 0);
        result.push(name);
      }
    }
  
    return result;
  }
  