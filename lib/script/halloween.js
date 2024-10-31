// https://halloween.dev
// Challenge 1
function createMagicPotion(potions, target) {
  let r = undefined
  for(let i = 0; i < potions.length - 1; i++) {
    for(let j = i; j < potions.length - 1; j++) {
      console.log(`${potions[i]} + ${potions[j+1]}`)
      if(potions[i] + potions[j+1] == target) {
        if (r == undefined) {
          r = [i, j+1] 
        } else {
          if (r[1] > j +1) {
            r = [i, j+1]
          } 
        }
        
      };
    }
  }

  return r
}

// Challenge 2
function battleHorde(zombies, humans) {
  zombies = [...zombies].map(Number)
  humans = [...humans].map(Number)

  let pZ = 0, pH = 0;

  for (let i = 0; i < zombies.length; i++) {
    let z = zombies[i] + pZ
    let h = humans[i] + pH
    
    pZ = 0;
    pH =0;

    if (z > h) {
      pZ += z - h
    } else if(z < h) {
      pH +=  h - z
    }
  }
  zombies.forEach((z,i) => {
  });

  console.log(pZ,pH)

  if (pZ>pH) {
    return `${pZ}z`
  } else if (pH > pZ) {
    return `${pH}h`
  }
  return 'x'
}

// Challenge 3
function findSafestPath(dream) {
  let paths = []

  const n = dream.length;
  const m = dream[0].length;

  function ir(f,c, path) {
    
    if (f === n - 1 && c === m - 1) {
      paths.push([...path, dream[f][c]]);
      return 
    }
      
    if (c + 1 < m) ir(f, c + 1, [...path, dream[f][c]]);
    if (f + 1 < n) ir(f + 1, c, [...path, dream[f][c]]);
  }

  ir(0,0,[])

  let tasaDePeligros = paths.map((z)=>{
    let suma = 0
    for (let i = 0; i < z.length; i++) suma += z[i];
    return suma
  })

  return Math.min(...tasaDePeligros)
}

// Challenge 4
function findTheKiller(whisper, suspects) {
  let killers = []
  for (const killer of suspects) {
    if (whisper.endsWith('$')) {
      if (whisper.length - 1 == killer.length) {
        whisper = whisper.slice(0,-1)
      } else continue;
    } 

    if (whisper.length > killer.length) continue;

    let lettersKiller = [...killer]
    let tru = [...whisper].every((l,i)=>{
      
      if (l == '~') return true
      else if(l.toLowerCase() == lettersKiller[i].toLowerCase()) return true;
      
      return false;
    });

    if (tru) killers.push(killer);
  }
  return killers.join(',')
}

// Challenge 5
function escapePyramidHead(room) {
  const [rows, columns] = [room.length, room[0].length];

  let pyramidHead = null;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      if (room[y][x] == "▲") {
        pyramidHead = [y, x];
        break;
      }
    }
    if (pyramidHead != null) break;
  }

  let recorrido = [];

  function entry(f, c, history) {

    for (const [y, x] of history) {
      if (x == c && y == f) return;
    }
    
    if (room[f][c] == "T") {
      recorrido.push([[f,c],...history]);
      return;
    }

    if (room[f][c] == "#") return;

    const puntoAVisitar = [[f,c],...history]
    
    // Cuando va hacia arriba
    if (0 <= f - 1) entry(f - 1, c, puntoAVisitar); 
    
    // Cuando va a la izquierda
    if (0 <= c - 1) entry(f, c - 1, puntoAVisitar);

    // Cuando va hacia abajo
    if (f + 1 < rows) entry(f + 1, c, puntoAVisitar);

    // Cuando va a la derecha
    if (c + 1 < columns) entry(f, c + 1, puntoAVisitar);
  }

  entry(pyramidHead[0], pyramidHead[1], []);

  if (recorrido.length < 1) return -1;

  recorrido = recorrido.map(pts => pts.length);

  return Math.min(...recorrido) - 1;
}