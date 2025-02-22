# Sistema de Agendamento de Lavagem de Veículos

Este repositório contém o código de um **sistema de agendamento de lavagem de veículos** desenvolvido como parte de um projeto pessoal para testar e aprender mais sobre o uso de diferentes tecnologias e adaptações de linguagens.

## Descrição

Este sistema foi criado para permitir que os usuários agendem a lavagem de seus veículos, com a possibilidade de escolher a data, horário, tipo de serviço e informações pessoais. A interface é simples e foi feita para proporcionar uma experiência básica de agendamento online.

### Funcionalidades

- **Agendamento Online**: Permite aos usuários agendarem o serviço de lavagem de veículos com informações como nome, telefone, placa do veículo, tipo de serviço, etc.
- **Calendário Interativo**: Utiliza o FullCalendar para mostrar os agendamentos feitos, permitindo que os usuários vejam os horários disponíveis.
- **Integração com E-mail**: O sistema envia os detalhes do agendamento para um e-mail especificado (PHP para processamento).
- **Validação de Formulário**: Valida campos obrigatórios e exibe mensagens de erro ou sucesso utilizando a biblioteca SweetAlert2.

## Tecnologias Usadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
  - FullCalendar (para o calendário)
  - SweetAlert2 (para notificações)
  
- **Backend**:
  - PHP (para enviar o agendamento por e-mail)

## Objetivo do Projeto

Este projeto foi feito **somente como um teste de experiência** com as linguagens e as adaptações de tecnologias envolvidas, para:
- Praticar o uso de **JavaScript**, **PHP** e **CSS**.
- Explorar o funcionamento de bibliotecas externas como **FullCalendar** e **SweetAlert2**.
- Adquirir mais experiência no processo de integração entre o **frontend** e o **backend**.
- Testar a manipulação de formulários e a comunicação assíncrona com **AJAX**.

### Notas Importantes

- Este é um protótipo simples e não foi desenvolvido para produção.
- O sistema de e-mail é básico e requer configuração adequada no servidor PHP para funcionar corretamente.
- Algumas funcionalidades podem não estar completamente otimizadas para uso em um ambiente de produção.
- O código pode não seguir as melhores práticas de segurança ou desempenho, já que o objetivo principal foi a aprendizagem e a experiência.
