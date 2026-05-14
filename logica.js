// Configuração da conexão
const _supabaseUrl = 'https://arfqywwdpmgpvokvobng.supabase.co';
// A chave agora começa corretamente com 'eyJ'
const _supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyZnF5d3dkcG1ncHZva3ZvYm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3MDI1MTUsImV4cCI6MjA5NDI3ODUxNX0.sToNJ8t0jNkJj3MSEw3HiprDRD6yPd1OTfOvC-aAeZU';

const supabaseClient = supabase.createClient(_supabaseUrl, _supabaseKey);

async function logar() {
    const email = document.getElementById('name').value; 
    const senha = document.getElementById('senha').value;

    console.log("Tentando logar...");

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: senha,
    });

    if (error) {
        alert("Erro: a sua credencial está incorreta" );
    } else {
        document.querySelector('button').innerText = "Logado! ✅";
        document.querySelector('button').style.background = "#28a745"; 
        
        console.log("Usuário autenticado:", data.user);
        alert("Sucesso! Você está validado pelo banco de dados.");
        
    }
}