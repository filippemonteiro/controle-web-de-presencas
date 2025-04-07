deixe formatado para o readme do github:
📋 Controle Web de Presenças
Uma aplicação web minimalista e responsiva para controle de presenças e faltas em sala de aula de programação. Desenvolvida com foco em simplicidade, usabilidade mobile e facilidade de uso por professores, monitores e alunos.
🚀 Funcionalidades
- 👨‍🏫 Professores podem registrar presenças ao vivo ou lançar retroativamente.
- 📱 Monitores podem marcar presença com facilidade usando o celular.
- 👩‍🎓 Alunos têm acesso a um link de leitura com suas faltas, datas e percentual de presença.
- ☁️ Integração com Supabase como banco de dados (sem backend tradicional).
- 🧠 Interface 100% frontend, utilizando apenas HTML, CSS e JavaScript puro.

🌐 Acesso à Aplicação
Acesse diretamente a aplicação pelo GitHub Pages:
🔗 https://filippemonteiro.github.io/controle-web-de-presencas/
📁 Estrutura do Projeto
controle-web-de-presencas/
│
├── index.html # Página principal (professor e monitor)
├── aluno.html # Página de consulta para alunos
├── css/
│ └── style.css # Estilo com variáveis e responsividade
└── js/
├── main.js # Lógica para professor e monitor
└── aluno.js # Lógica para leitura de presenças pelos alunos

⚙️ Como Utilizar
- Clone o projeto:git clone https://github.com/filippemonteiro/controle-web-de-presencas.git

Configure o Supabase:
Crie um projeto no https://supabase.com
Configure as tabelas: presencas, aulas, alunos
Habilite o RLS (Row Level Security)
Crie as permissões para leitura/escrita com base nos papéis
Copie o anon key e project URL e insira no seu JavaScript
Publique com GitHub Pages:
Acesse o repositório no GitHub
Vá em: ⚙️ Settings > Pages
Em Source, selecione a branch main (ou master) e a pasta /root
Clique em Save
Acesse pelo link gerado!

📘 Sobre o Projeto Este projeto foi desenvolvido como parte das atividades práticas do curso Geração Tech 2.0 - Turma 15, sob orientação do professor Luan Oliveira (in100tiva).
O desafio era criar uma aplicação web funcional, com foco em simplicidade, responsividade e usabilidade mobile, utilizando tecnologias puras (HTML, CSS e JS) e integração com o Supabase como backend.

🧑‍🎓 Licença deste projeto é livre para fins educacionais e pessoais. Modificações são bem-vindas.
Desenvolvido por @filippemonteiro
