export default function SaibaMais() {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "white", backgroundColor: "#121212", height: "100vh" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "20px", color: "#ff0000" }}>Mais Informações sobre IA</h1>
        <p style={{ fontSize: "20px", maxWidth: "600px", margin: "0 auto" }}>
          Aqui você encontra mais detalhes sobre Inteligência Artificial e suas aplicações incríveis!
        </p>
        <button
          onClick={() => window.history.back()}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "#ff0000",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          Voltar
        </button>
      </div>
    );
  }