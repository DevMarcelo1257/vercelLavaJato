document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'pt-br',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }
    });

    calendar.render();

    var form = document.getElementById('form-agendamento');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var nome = document.getElementById('nome').value;
        var sobrenome = document.getElementById('sobrenome').value;
        var placa = document.getElementById('placa').value;
        var modelo = document.getElementById('modelo').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value;
        var tipoVeiculo = document.getElementById('tipoVeiculo').value;
        var servico = document.getElementById('servico').value;
        var data = document.getElementById('data').value;
        var horario = document.getElementById('horario').value;

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

        // Mostra a mensagem de confirmação
        var mensagem = document.getElementById('mensagem');
        mensagem.textContent = `Agendamento confirmado para ${nome} ${sobrenome} (${email}, ${telefone}) - Veículo ${tipoVeiculo} Placa ${placa} Modelo ${modelo} para ${servico} em ${data} às ${horario}.`;

        // Limpa o formulário
        form.reset();
    });
});
