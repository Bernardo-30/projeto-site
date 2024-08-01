function toggleMode () {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a img
    const img = document.querySelector("#profile img")
    
    // substituir a img 
     if (html.classList.contains("light")){
    
        // se tiver light mode, adicionar a imagem light
            img.setAttribute("src","./assets/assets/avatar-light.png")
    }
    else {
        // se tiver sem light mode, manter a imagem padrão
            img.setAttribute("src","./assets/assets/avatar.png")

    }

    if (html.classList.contains("light")) {
        img.setAttribute("alt", "Foto do treinador pokemon Red e seu pikachu, COM óculos de sol" )
    }
    else {
        img.setAttribute("alt", "Foto do treinador pokemon Red e seu pikachu, SEM óculos de sol" )
    }
    
}








// if (html.classList.contains('light') ) {
//      html.classList.remove('light')
//    }
// else (html.classList.add('light') )
    
//    }

