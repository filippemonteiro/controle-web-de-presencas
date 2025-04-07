// Supabase config
const SUPABASE_URL = "https://ygfrgtbzgzxrxucyvcmz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnZnJndGJ6Z3p4cnh1Y3l2Y216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMzM2MzAsImV4cCI6MjA1OTYwOTYzMH0.v7xB2Gf1K36RT0VGP4DBdfytCHS0_QLM0Jm-ruB3gKU";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

//Pega o nome do aluno via URL
const params = new URLSearchParams(window.location.search);
const nome = params.get("nome");

const nomeAluno = document.getElementById("nomeAluno");
const percentualPresenca = document.getElementById("percentualPresenca");
const listaPresencas = document.getElementById("listaPresencas");

if (!nome) {
  nomeAluno.innerText = "Nome do aluno não encontrado.";
} else {
  nomeAluno.innerText = nome;
  carregarPresencas(nome);
}

async function carregarPresencas(nome) {
  const { data, error } = await supabase
    .from("presencas")
    .select("*")
    .eq("nome", nome);

  if (error) {
    console.error(error);
    percentualPresenca.innerText = "Erro ao carregar presenças.";
    return;
  }

  if (data.length === 0) {
    percentualPresenca.innerText = "Nenhuma presença registrada.";
    return;
  }

  let presencas = 0;
  data.forEach((registro) => {
    const li = document.createElement("li");
    li.innerHTML = `{registro.data} - ${registro.status.toUpperCase()}`;
    li.className = registro.status;
    listaPresencas.appendChild(li);

    if (registro.status === "presente") presentes++;
  });

  const percentual = ((presentes / data.length) * 100).toFixed(1);
  percentualPresenca.innerText = `Percentual de presença: ${percentual}%`;
}
