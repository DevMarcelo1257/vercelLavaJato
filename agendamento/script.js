document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'pt-br',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [] // Inicializa sem eventos, serão adicionados dinamicamente
    });

    calendar.render();

    var form = document.getElementById('agendamento-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var nome = document.getElementById('nome').value.trim();
        var sobrenome = document.getElementById('sobrenome').value.trim();
        var placa = document.getElementById('placa').value.trim();
        var modelo = document.getElementById('modelo').value.trim();
        var email = document.getElementById('email').value.trim();
        var telefone = document.getElementById('telefone').value.trim();
        var tipoVeiculo = document.getElementById('tipo').value.trim();
        var servico = document.getElementById('servico').value.trim();
        var data = document.getElementById('data').value.trim();
        var horario = document.getElementById('horario').value.trim();

        if (!nome || !sobrenome || !placa || !modelo || !email || !telefone || !tipoVeiculo || !servico || !data || !horario) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, preencha todos os campos obrigatórios!',
            });
            return;
        }

        // Envia os dados do formulário para o PHP via AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'enviar_email.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var response = JSON.parse(this.responseText);
            if (xhr.status >= 200 && xhr.status < 400) {
                if (response.status === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Agendamento enviado!',
                        text: 'Em breve entraremos em contato para confirmar seu agendamento.',
                    });
                    // Adiciona o evento ao calendário somente se o email for enviado com sucesso
                    calendar.addEvent({
                        title: `${servico} - ${placa}`,
                        start: `${data}T${horario}`,
                        extendedProps: {
                            nome: nome,
                            sobrenome: sobrenome,
                            modelo: modelo,
                            email: email,
                            telefone: telefone,
                            tipoVeiculo: tipoVeiculo
                        }
                    });
                    // Limpa o formulário
                    form.reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Falha ao enviar o agendamento. Por favor, tente novamente mais tarde.',
                    });
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Erro de conexão. Por favor, verifique sua conexão de internet e tente novamente.',
                });
            }
        };
        xhr.onerror = function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro de conexão. Por favor, verifique sua conexão de internet e tente novamente.',
            });
        };
        xhr.send(
            'nome=' + encodeURIComponent(nome) +
            '&sobrenome=' + encodeURIComponent(sobrenome) +
            '&placa=' + encodeURIComponent(placa) +
            '&modelo=' + encodeURIComponent(modelo) +
            '&email=' + encodeURIComponent(email) +
            '&telefone=' + encodeURIComponent(telefone) +
            '&tipo=' + encodeURIComponent(tipoVeiculo) +
            '&servico=' + encodeURIComponent(servico) +
            '&data=' + encodeURIComponent(data) +
            '&horario=' + encodeURIComponent(horario)
        );
    });
});