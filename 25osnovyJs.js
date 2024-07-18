function areArraysSame(a, b) {
    if (a.length !== b.length) {
      return false; // Массивы разной длины не могут быть равны
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false; // Если элементы на одинаковых позициях не равны, массивы не равны
      }
    }
    return true; // Все элементы равны
  }
  
  console.log(areArraysSame([1, 2], [1, 2])); // true
  console.log(areArraysSame([1, 2], [1, 3])); // false
  