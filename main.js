$(document).ready(function() {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const novoNomeTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<p> </p><div class="overlay-imagem-link"> <a title="Tarefa"> ${novoNomeTarefa}</a> </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#nome-tarefa').val("");
        $('ul#lista-tarefas li:last-child a').click(function() {
            $(this).css('text-decoration', 'line-through');
          });
    })

})