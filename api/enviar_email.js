// api/enviarEmail.js

const nodemailer = require('nodemailer');

async function enviarEmail(req, res) {
    const { nome, sobrenome, placa, modelo, email, telefone, tipoVeiculo, servico, data, horario } = req.body;

    // Configurações de transporte para o serviço SMTP (substitua pelos seus próprios dados)
    let transporter = nodemailer.createTransport({
        host: 'olaranjao2010@gmail.com', // Altere para o host SMTP desejado
        port: 587,
        secure: false, // true para 465, false para outros portos
        auth: {
            user: 'olaranjao2010@gmail.com', // Seu email remetente
            pass: '12415874' // Sua senha do email remetente
        }
    });

    // Configurações do email a ser enviado
    let info = await transporter.sendMail({
        from: email,
        to: 'seu_email@example.com', // Altere para o email destinatário
        subject: 'Novo agendamento de lavagem de veículo',
        text: `Nome: ${nome} ${sobrenome}\nEmail: ${email}\nTelefone: ${telefone}\n\nDetalhes do Veículo\nPlaca: ${placa}\nModelo: ${modelo}\nTipo de Veículo: ${tipoVeiculo}\n\nAgendamento\nServiço: ${servico}\nData: ${data}\nHorário: ${horario}`
    });

    console.log('Email enviado: %s', info.messageId);
    res.status(200).send('Email enviado com sucesso.');
}

module.exports = enviarEmail;
