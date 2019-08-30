
addEventListener('keydown', (e)=>{
    //console.log(e.keyCode)
    if(e.keyCode===38){//UP
        diamond.y -= 50
    }
    if(e.keyCode===40){//DOWN
        diamond.y += 50
    }
    if(e.keyCode===39){//Right
        diamond.x += 50
    }
    if(e.keyCode===37){//Left
        diamond.x -= 50
    }
        
})


