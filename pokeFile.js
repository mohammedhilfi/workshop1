let pokeArray = [
    {name: 'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  
  ];
  let index = 0
  let button = document.getElementById('button');
  button.addEventListener('click',function() {
      console.log('click');
      let targetPictureElement= document.getElementById('picture');
      targetPictureElement.src = pokeArray[index].image;
      let targetNameElement= document.getElementById('name');
      targetNameElement.innerHTML= pokeArray[index].name;
      index++;

      if (index > pokeArray.length){
          index = 0;
      }
  }) 