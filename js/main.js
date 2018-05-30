jQuery(function($){

    correios.init( 'FV0b3vOApruQnkiH5QpnJvRzDuIkoaAp', 'Fg4myguo3TY9I3f80PxS6GZGhVvizgvtlLr06G0wBJKPJ66R' );
    $('#cep').correios( '#endereco', '#bairro', '#cidade', '#uf', '#loading', true, '#numero');

});

// class dos links que vão receber o click
$("#botao").on("click", function(event){

	// a animação vai ocorrer no html, body
	$('html, body').animate({

		// pega o atributo href do this (link que recebeu o click)
		// e faz a animação com velocidade 1000 para o destino do href;
		scrollTop: $($(this).attr("href")).offset().top
	}, 1200);

	// Faz com que o destino do link não vá para a url
	event.preventDefault();
});