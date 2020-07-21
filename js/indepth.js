var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;

function countMaxValue(array_elements) {

	var maxValue = 0;
	var maxNum = -1;

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                
                if(cnt > maxValue ){
                	maxValue = cnt;
                	maxNum = current;
                }
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        if(cnt > maxValue ){
           maxNum = current;
        }
    }

    return maxNum;

}

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "<img src='images/preguntas/1.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>Delantero, lo importante es meter goles</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>Defensa, es la que gana los campeonatos</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Medio, la pura creatividad</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Portero, sin mí no ganan</p>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='images/preguntas/2.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>Obvio El Comandante</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>Mi capi Ramos</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>El Fantasmita Iniesta</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Mi Alisson de toda la vidaaaa</p>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='images/preguntas/3.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>Llegas 10 minutos después, la puntualidad no es lo tuyo</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>Siempre te bajas del barco a última hora</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Llegas una hora antes, disque para calentar</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Llegas apenas empieza el partido</p>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='images/preguntas/4.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>No hablas con nadie</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>Le gritas a todo el mundo sobre lo que tienen que hacer</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Sacas tu lado Pep Guardiola</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Te la pasas quejándote</p>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='images/preguntas/5.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>Juegas todo el partido</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>Te cansas a los 10 minutos, pero te enojas si sales</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>No duras ni 5 minutos</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Sales a cada rato para tomar agua</p>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='images/preguntas/6.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>Presumes los goles que metiste</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>Te quedas discutiendo con el árbitro</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Te andas peleando con los del otro equipo</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Arreglas tus cosas y te vas como si nada</p>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='images/preguntas/7.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>A tu novia obvio</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>A toda tu familia</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>A algún amigo</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>A nadie, eres un forever alone</p>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='images/preguntas/8.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>Se la pasa mandando videos de sus mejores goles</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>Manda frases motivacionales</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Manda las tácticas para el siguiente partido</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Sólo confirma su asistencia</p>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='images/preguntas/9.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>Pagas por adelantado</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>Pagas al día</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Te tienen que andar correteando</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Siempre pides prestado</p>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='images/preguntas/10.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>9, papá</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>El 4, defensa que se respeta usa ese</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Los números me dan igual</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>El 1</p>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='images/preguntas/11.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>Rojo</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>Azul</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Amarillo</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>Negro</p>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='images/preguntas/12.png' />",
				      "respuestas": [
				        {
				          "respuesta": "<p>En el Real Madrid</p>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<p>En la Juve</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>En el Manchester City</p>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<p>En el Barcelona</p>",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.png" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto",
			"display": "block"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").animate({
			top: 0
		},2000); 
		var respuesta = new Array();
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			$(this).addClass("select");
			respuesta.push(respuesta_num);
			console.log(respuesta);
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
				
				if(respuesta.length == preguntas.length){
					var total = countMaxValue(respuesta);
					console.log(total);
					window.setTimeout(function(){
						console.log(total);
						finish_test(total);
					});
				}
			return respuesta;
		});
		
		
		
});

var totalfb = "";
function finish_test(total){

	console.log("time2");
	console.log(total);
	
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	var img = total;
	console.log(total);

	if (img == 0) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"display": "block",
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/0.png'>");
		totalfb = "farol"
	} else if (img == 1) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"display": "block",
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/1.png'>");
		totalfb = "capitan";
	} else if (img == 2) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"display": "block",
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/2.png'>");
		totalfb = "crack";
	} else if (img == 3) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"display": "block",
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/3.png'>");
		totalfb = "tronco";
	}

	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$("#indepth_twittear").click(function(){
  		var text = "";
		if (total == 0) {
			text = encodeURIComponent("A ti lo que te importa es verte bien?m="+totalfb);
		} else if (total == 1) {
			text = encodeURIComponent("Eres el capitán de tu equipo?m="+totalfb);
		} else if (total == 2) {
			text = encodeURIComponent("Eres el mago del equipo?m="+totalfb);
		} else if (total == 3) {
			text = encodeURIComponent("La verdad estás en el equipo por ser buena onda?m="+totalfb);
		}
		
		var url = encodeURIComponent("http://juanfutbol.com/indepth/quien-eres-en-las-retas");
		window.open("https://twitter.com/share?text="+text+"&hashtags=JFQuizz&url="+url,"","width=500, height=300");
	});

	$("#indepth_facebook").click(function(){
		var url = encodeURIComponent("http://juanfutbol.com/indepth/quien-eres-en-las-retas?m="+totalfb);
		window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
	});

	$("#indepth_whatsapp").click(function(){
		var text = "";
		if (total == 0) {
			text = encodeURIComponent("A ti lo que te importa es verte bien?m="+totalfb);
		} else if (total == 1) {
			text = encodeURIComponent("Eres el capitán de tu equipo?m="+totalfb);
		} else if (total == 2) {
			text = encodeURIComponent("Eres el mago del equipo?m="+totalfb);
		} else if (total == 3) {
			text = encodeURIComponent("La verdad estás en el equipo por ser buena onda?m="+totalfb);
		}

		var url = encodeURIComponent("http://juanfutbol.com/indepth/quien-eres-en-las-retas?m="+totalfb);
		window.open("https://wa.me/?text="+url+" "+text);
	});
}

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	/*$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});*/
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    /*$("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});*/
});


