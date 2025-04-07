// Supabase config
const SUPABASE_URL = 'https://ygfrgtbzgzxrxucyvcmz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnZnJndGJ6Z3p4cnh1Y3l2Y216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMzM2MzAsImV4cCI6MjA1OTYwOTYzMH0.v7xB2Gf1K36RT0VGP4DBdfytCHS0_QLM0Jm-ruB3gKU';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Elementos da interface
const alunoInput = document.getElementById('aluno');
const dataInput = document.getElementById('data');
const presenteBtn = document.getElementById('presente-btn');
const faltaBtn = document.getElementById('faltou-btn');
const historico = document.getElementById('historico');

// Data padrão: hoje
dataInput.valueAsDate = new Date();

//Evento para salvar presença
presenteBtn.addEventListener('click', () => registrarPresenca('presente'));
faltaBtn.addEventListener('click', () => registrarPresenca('faltou'));

async function registrarPresenca(status) {
    const nome = alunoInput.value.trim();
    const data = dataInput.value;

    if (!nome|| !data) {
        alert('Preencha o nome e a data.');
        return;
    }
    
    const { error } = await supabase
            .from('presencas')
            .insert([{ nome, data, status }]);

    if (error) {
      console.error(error);
      alert('Erro ao registrar presença.');
    } else {
      alunoInput.value = ''; // Limpa o campo de entrada
      listarPresencas(); // Atualiza a lista de presenças
    }
}

async function listarPresencas() {
    const { data, error } = await supabase
        .from('presencas')
        .select('*')
        .order('data', { ascending: false });

    if (error) {
        console.error(error);
        return;
    }

    historico.innerHTML = ''; // Limpa o histórico atual
    data.forEach(registro => {
        const li = document.createElement('li');
        li.innerHTML = `
          span><strong>${registro.nome}</strong> - ${registro.data}</span>
          <span class="$registro.status}">${registro.status.toUpperCase()}</span>
          `;
          historico.appendChild(li);
    });
}

// Carregar ao abrir a página
listarPresencas();