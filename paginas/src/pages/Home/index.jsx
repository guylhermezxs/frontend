import { Link } from "react-router-dom";
import "./style.css";
import logo from '../../assets/logo.png'
import equipe from '../../assets/equipe.png'

export default function Home() {
  return (
    <div className="home">
      <section className="logo">
        <div>
          <h1>Contabilidade descomplicada para o seu negócio</h1>
          <p>
            Economize tempo e foque no que importa. Cuidamos de folha de
            pagamento , impostos e obrigações com tecnologia e atendimento
            humano
          </p>
          <div>
            <Link to="/fale-conosco">Fale com um especialista</Link>
          </div>
        </div>
        <div>
          <img src={logo} alt="Logo da empresa" />
        </div>
      </section>

      <section>
        <h2> Por que nos escolher</h2>
        <div>
          <div className="card">
            <h3>Atendimento prómixo</h3>
            <p>
              Suporte rápido por WhatsApp , e-mail e reuniões online sempre que
              precisar.
            </p>
          </div>
          <div className="card">
            <h3>Tecnologia</h3>
            <p>
              Integrações com bancos e plataformas para automatizar lançamentos
              e reduzir erros.
            </p>
          </div>
          <div className="card">
            <h3>Planejamento tributário</h3>
            <p>
              Escolha do regime ideal e estratégias legais para pagar menos
              impostos.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <div>
          <div>
            <img src={equipe} alt="Equipe de Contabilidade" />
          </div>
          <div>
            <h2>Mais de 200 empresa atendidas</h2>
            <p>
              De MEIs a pequenas e médias empresa em todo o Brasil. Cases em
              comércio , serviços e tecnologia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
