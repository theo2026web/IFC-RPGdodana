import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redireciona imediatamente para o jogo estático
    window.location.replace("/game/index.html");
  }, []);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0a0612",
      color: "#f4e9d8",
      fontFamily: "monospace"
    }}>
      Carregando IFC Sombrio...
    </div>
  );
}

export default App;
