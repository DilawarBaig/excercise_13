// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favorite_transportation:string[] =  ["Kawasaki motorcyle", "Yamaha motorcycle ", "Mercedes car", "Corolla car", "Honda car"];

for (let i = 0; i<favorite_transportation.length; i++){
    console.log(`I would like to own a ${favorite_transportation[i]}`)
}

