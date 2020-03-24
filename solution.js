function solution(N) {
  var data = []

  for (var i = 1; i <= N; i++) {
    data.push(i.toString())
  }

  let count = data.reduce((acc, element) => {
    let array = element.split('').filter(x => x == 1).length

    const countLocal = array || 0

    return Number(acc) + Number(countLocal)
  })

  return count

}

function solution(){
    const tables = document.querySelectorAll('table');
    
    const lengths = 
      Array.from(tables)
        .map(table => table.querySelectorAll('td').length)
    
    const max = Math.max(...lengths);
    
    return max
    }
    