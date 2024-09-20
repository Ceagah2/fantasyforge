import React from "react";
import "./styles.css";

const TermsOfUse: React.FC = () => {
  return (
    <div className="content-container">
      <h1 className="title">Termos de Uso</h1>

      <section className="section">
        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao acessar e utilizar o aplicativo Pro Bidder (doravante referido como
          "App"), você concorda com os seguintes Termos de Uso. Caso não
          concorde com qualquer um dos termos, por favor, não utilize o App.
        </p>
      </section>

      <section className="section">
        <h2>2. Modificações dos Termos</h2>
        <p>
          A empresa Fantasy Forge Tecnologias reserva-se o direito de modificar,
          a qualquer momento, os Termos de Uso. Quaisquer alterações serão
          comunicadas por meio do App. O uso contínuo do App após tais
          modificações constituirá sua aceitação dos novos Termos.
        </p>
      </section>

      <section className="section">
        <h2>3. Uso do Aplicativo</h2>
        <p>
          O App Pro Bidder é destinado a freelancers e profissionais autônomos
          para gerenciar orçamentos e projetos. Ao utilizar o App, você concorda
          que:
        </p>
        <ul>
          <li>
            Não irá utilizar o App para qualquer atividade ilegal ou não
            autorizada.
          </li>
          <li>
            Não irá violar qualquer lei local, nacional ou internacional
            enquanto usa o App.
          </li>
          <li>
            Não tentará hackear, explorar vulnerabilidades ou obter acesso não
            autorizado ao sistema.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>4. Cadastro e Acesso</h2>
        <p>
          Para utilizar o App, é necessário criar uma conta e fornecer
          informações precisas e atualizadas. Você é responsável por manter a
          confidencialidade de sua senha e informações de login. A empresa
          Fantasy Forge Tecnologias não será responsável por qualquer perda ou
          dano decorrente do uso não autorizado de sua conta.
        </p>
      </section>

      <section className="section">
        <h2>5. Planos de Assinatura</h2>
        <p>
          O App oferece opções de planos de assinatura mensal e anual. Os
          preços, funcionalidades e condições de pagamento estão descritos na
          tela de seleção de planos. Reservamo-nos o direito de alterar os
          preços a qualquer momento, mas notificaremos você sobre quaisquer
          mudanças antes de aplicar novos valores.
        </p>
      </section>

      <section className="section">
        <h2>6. Cancelamento e Reembolso</h2>
        <p>
          Usuários podem cancelar suas assinaturas a qualquer momento através da
          loja de aplicativos correspondente (Google Play Store ou Apple App
          Store). Não oferecemos reembolso por períodos não utilizados após o
          cancelamento.
        </p>
      </section>

      <section className="section">
        <h2>7. Conteúdo Gerado pelo Usuário</h2>
        <p>
          O App permite que os usuários insiram dados, como orçamentos, tarefas
          e projetos. Ao adicionar qualquer conteúdo ao App, você declara que
          detém todos os direitos sobre esse conteúdo e que ele não viola
          direitos de terceiros. A Fantasy Forge Tecnologias não assume
          responsabilidade pelo conteúdo gerado pelos usuários.
        </p>
      </section>

      <section className="section">
        <h2>8. Limitação de Responsabilidade</h2>
        <p>
          O App Pro Bidder é fornecido "como está". Não garantimos que o App
          estará disponível de forma ininterrupta ou livre de erros. Não seremos
          responsáveis por quaisquer danos indiretos, incidentais ou
          consequenciais decorrentes do uso ou incapacidade de usar o App.
        </p>
      </section>

      <section className="section">
        <h2>9. Privacidade</h2>
        <p>
          Sua privacidade é importante para nós. Leia nossa Política de
          Privacidade para entender como coletamos, usamos e compartilhamos suas
          informações.
        </p>
      </section>

      <section className="section">
        <h2>10. Propriedade Intelectual</h2>
        <p>
          Todos os direitos de propriedade intelectual sobre o conteúdo e
          software do App pertencem a Fantasy Forge Tecnologias. É proibida a
          cópia, distribuição, modificação ou criação de trabalhos derivados sem
          autorização prévia.
        </p>
      </section>

      <section className="section">
        <h2>11. Encerramento</h2>
        <p>
          Podemos suspender ou encerrar seu acesso ao App a qualquer momento,
          sem aviso prévio, caso consideremos que você violou estes Termos de
          Uso.
        </p>
      </section>

      <section className="section">
        <h2>12. Legislação Aplicável</h2>
        <p>
          Estes Termos de Uso serão regidos pelas leis do Brasil, e você
          concorda em submeter- se à jurisdição exclusiva dos tribunais da
          referida região.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
