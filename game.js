// game.js — Come Come SITI WEB 🟡

// 1. Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfLHR2iWnu86uqdAxeML8DbHJk9gOfIl0",
  authDomain: "sinuca-olaine.firebaseapp.com",
  projectId: "sinuca-olaine",
  storageBucket: "sinuca-olaine.firebasestorage.app",
  messagingSenderId: "580716617922",
  appId: "1:580716617922:web:222a96c6e40261407c1b5b",
  measurementId: "G-T528DB9MW6"
};

// 2. Inicialização do Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

// 3. Login Anônimo (Necessário para as Regras do seu Banco de Dados)
auth.signInAnonymously().catch((error) => {
    console.error("Erro ao autenticar:", error.message);
});

// 4. Variáveis Globais do Jogo
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('startBtn');
const overlay = document.getElementById('overlay');
const nameInput = document.getElementById('nameInput');

canvas.width = 600; // Ajuste conforme necessário
canvas.height = 400;

// 5. Lógica do Botão de Início
startBtn.addEventListener('click', () => {
    const playerName = nameInput.value.trim();
    
    if (playerName !== "") {
        console.log("Iniciando jogo para:", playerName);
        
        // Esconde a tela de entrada
        overlay.style.display = 'none';
        
        // Inicia o Loop do Jogo
        startGame();
    } else {
        alert("Por favor, digite seu nome para jogar!");
    }
});

// 6. Função para Iniciar o Jogo
function startGame() {
    // Aqui entra a lógica de renderização do Canvas
    // Exemplo básico de desenho para teste:
    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenha o Come Come (Pac-Man) simplificado
    ctx.beginPath();
    ctx.arc(300, 200, 20, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(300, 200);
    ctx.fillStyle = "#FFD700";
    ctx.fill();
    ctx.closePath();
    
    requestAnimationFrame(gameLoop);
}
