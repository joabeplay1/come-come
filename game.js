// game.js — Come Come SITI WEB 🟡[cite: 2]

// 1. Configuração Firebase[cite: 2]
const firebaseConfig = {
  apiKey: "AIzaSyCfLHR2iWnu86uqdAxeML8DbHJk9gOfIl0",
  authDomain: "sinuca-olaine.firebaseapp.com",
  projectId: "sinuca-olaine",
  storageBucket: "sinuca-olaine.firebasestorage.app",
  messagingSenderId: "580716617922",
  appId: "1:580716617922:web:222a96c6e40261407c1b5b",
  measurementId: "G-T528DB9MW6"
};

// 2. Inicialização do Firebase[cite: 2]
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

// 3. Login Anônimo[cite: 2]
auth.signInAnonymously().catch((error) => {
    console.error("Erro ao autenticar:", error.message);
});

// Aguarda o HTML carregar completamente antes de buscar os elementos
document.addEventListener('DOMContentLoaded', () => {
    
    // 4. Variáveis Globais do Jogo[cite: 2, 3]
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const startBtn = document.getElementById('startBtn');
    const overlay = document.getElementById('overlay');
    const nameInput = document.getElementById('nameInput');

    // Configura o tamanho do Canvas
    canvas.width = 600; 
    canvas.height = 400;

    // 5. Lógica do Botão de Início[cite: 2, 3]
    if (startBtn) {
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
    }

    // 6. Função para Iniciar o Jogo[cite: 2]
    function startGame() {
        requestAnimationFrame(gameLoop);
    }

    function gameLoop() {
        // Limpa o canvas para o próximo frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Desenha o Come Come (Pac-Man) simplificado[cite: 2]
        ctx.beginPath();
        ctx.arc(300, 200, 20, 0.2 * Math.PI, 1.8 * Math.PI);
        ctx.lineTo(300, 200);
        ctx.fillStyle = "#FFD700";
        ctx.fill();
        ctx.closePath();
        
        requestAnimationFrame(gameLoop);
    }
});
