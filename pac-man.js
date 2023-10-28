//const canvas = document.getElementById("gamecanvas");
//const ctx = canvas.getContext("2d");
/*function gameloop()
{
    console.log("gameloop");
}

setInterval(gameloop,1000/75);*/

document.addEventListener('DOMContentLoaded', () => {
  //total box 20*20=400
      const width = 20
      const grid = document.querySelector('.grid')
      const layout = [
          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,   //0
          1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,   //1
          1,0,3,1,0,1,1,1,1,1,1,1,1,1,1,0,1,3,0,1,   //2
          1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,   //3
          1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,   //4
          1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,   //5
          1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,   //6
          1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,   //7
          1,0,1,0,0,0,0,0,1,2,2,1,0,0,0,1,0,0,0,1,   //8
          1,0,1,0,0,0,1,1,1,2,2,1,1,1,0,1,0,1,0,1,   //9
          1,0,0,0,1,0,1,2,2,2,2,2,2,1,0,1,0,1,0,1,   //9
          1,1,1,0,1,0,1,2,2,2,2,2,2,1,0,0,0,0,0,1,   //8
          1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,   //7
          1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,   //6
          1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,   //5
          1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,   //4
          1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,   //3
          1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,   //2
          1,3,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,3,1,   //1
          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1    //0
      /*  0,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,0*/
         ]
      const squares = []
    
  
  
  
      function createBoard() {
        for (let i = 0; i < layout.length; i++) {
          const square = document.createElement('div')
          grid.appendChild(square)
          squares.push(square)
  
          if(layout[i] === 0) 
          {
            squares[i].classList.add('dots')
          } 
  
          else if (layout[i] === 1)
           {
            squares[i].classList.add('wall')
           } 
  
           else if (layout[i] === 2)
           {
            squares[i].classList.add('empty')
           } 
          
          else if (layout[i] === 3) 
          {
            squares[i].classList.add('power-pellet')
          }
          
        }
      }
      createBoard()
    
      //starting position of pac-man
      let pacmanCurrentplace = 372

      squares[pacmanCurrentplace].classList.add('pacman')  
  
      function movement(e) {
        squares[pacmanCurrentplace].classList.remove('pacman')
        switch(e.key) {
         case 'ArrowLeft'://left move
  
           if(pacmanCurrentplace % width !== 0 && !squares[pacmanCurrentplace -1].classList.contains('wall')) 
            {
               pacmanCurrentplace = pacmanCurrentplace - 1
            }
              break
  
         case 'ArrowUp'://up move
            
            if(pacmanCurrentplace - width >= 0 && !squares[pacmanCurrentplace - width].classList.contains('wall')) 
            {
              pacmanCurrentplace = pacmanCurrentplace - width
            }  
            break
  
          case 'ArrowRight'://right move
  
            if(pacmanCurrentplace % width < width -1 && !squares[pacmanCurrentplace + 1].classList.contains('wall'))
            {
              pacmanCurrentplace = pacmanCurrentplace + 1
            }  
            break
  
          case 'ArrowDown'://down move
            
            if (pacmanCurrentplace + width < width * width && !squares[pacmanCurrentplace + width].classList.contains('wall'))
            {
              pacmanCurrentplace = pacmanCurrentplace+width
            }  
            break
            
        }
        squares[pacmanCurrentplace].classList.add('pacman')
       
      }
      document.addEventListener('keyup', movement)
    
  
  })
  
