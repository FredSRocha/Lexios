$(document).ready(function() {
    $("#enviarTexto").click(function() {
        var texto = $("#inputTexto").val();
        $("#loading").show();
        $.get("http://localhost/lexios/api/v1/index.php", { texto: texto }, function(data) {
            var resposta = JSON.parse(data);
            var textoResposta = resposta.choices[0].message.content;
            $("#loading").hide();
            var paragrafos = textoResposta.split('\n');
            $("#resposta").empty();
            paragrafos.forEach(function(paragrafo) {
                if (paragrafo.trim() !== '') {
                    $("#resposta").append('<p>' + paragrafo + '</p>');
                }
            });
        });
    });
});