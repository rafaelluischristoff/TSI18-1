//VETOR SIMPLES - ARRAY 1 DIMENSÃO

var menu = [
			{'titulo':'Home'       ,'link':'index.html'},
			{'titulo':'Produtos'   ,'link':'produtos.html'},
			{'titulo':'Localização','link':'local.html'},
			{'titulo':'Contato'    ,'link':'contato.html'}
		   ];
//pega o tamanho do array
texto = "";
var tamanho = menu.length; 
for (i=0; i < tamanho; i++) {
	texto+='<li><a href="'+menu[i].link+'">'+menu[i].titulo+'</a></li>';
}
document.getElementById("menu").innerHTML = texto;


// var menu = [ ['Ford', 'Ka']  ,
// 		     ['VW', 'Gol']   ,
// 		     ['Fiat', 'Uno'] ,
// 		     ['GM', 'Celta']  ];

// var tamanho = menu.length; //tamanho

// for(i=0; i<tamanho; i++){
// 	for (j=0; j<2; j++){
// 		alert(menu[i][j]);
// 	}
// }























var menu2 = [
			  {'id':'1', 'titulo':'Home', 'link':'index.html'},
			  {'id':'2', 'titulo':'Produtos', 'link':'produtos.html'},
			  {'id':'3', 'titulo':'Localização', 'link':'localizacao.html'},
			  {'id':'4', 'titulo':'Contato', 'link':'contato.html'}
			];
