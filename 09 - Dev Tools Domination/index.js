const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('You are a %s string!', '💩');

    // Styled
    console.log('%cI am some great text', 'background-color : blue')
    
    // warning!
    console.warn('Be warned')
    
    // Error :|
    console.error('Fake eror here')

    // Info
    console.info('Not working lol')

    // Testing
    console.assert(1==2, "Only fire if it is false")

    // clearing
    console.clear();

    // Viewing DOM Elements
     console.log(p)
     console.dir(p)

    // Grouping together
    dogs.forEach(dog=>{
        console.groupCollapsed(`${dog.name}`)
        console.log(`This is ${dog.name}`)
        console.log(`${dog.name} is ${dog.age} years old`)
        console.log(`${dog.name} is ${dog.age * 7} dog years old`)
        console.groupEnd(`${dog.name}`)
    })

    // counting
    console.count('Dan')
    console.count('Dan')
    console.count('Dan')

    // timing
    console.time('fetching data')
    fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
    });

    console.table(dogs);
