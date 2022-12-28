var lista_de_img = ["https://www.esportelandia.com.br/wp-content/uploads/2020/07/raze-valorant.jpg", "https://t.ctcdn.com.br/lAkj1bFc6ytOiToCHn_PwGIgpzQ=/1024x0/smart/filters:format(webp)/i592102.png", "https://t.ctcdn.com.br/iqV4kxWjrv6x9rmDUUOf5Fae5Ic=/1024x0/smart/filters:format(webp)/i584752.jpeg", "https://sm.ign.com/t/ign_br/screenshot/default/neon-valorant-1_ut7y.h960.jpg","https://s2.glbimg.com/0VGNyGrbBQEd80jU1umLLYjEbbg=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/6/B/Do8zTERvCJ9N8CkXCrIw/sage-valorant.jpg"]
var lista_nome = ["raze", "chamber", "fade", "neon", "sage"]
var indice = 0;
 function trocar_personagem(){
    indice = indice + 1;
    var comprimento_da_lista = lista_de_img.length;
    if (indice > comprimento_da_lista ){
        indice = 0;
    }
    document.getElementById("img_dos_personagens").src = lista_de_img[indice];
    document.getElementById("nomes").innerHTML = lista_nome[indice];
 }