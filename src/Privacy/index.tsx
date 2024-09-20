import React from "react";
import "./styles.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="content-container">
      <h1 className="title">Política de Privacidade</h1>
      <p className="last-updated">Última atualização: 05 de setembro de 2024</p>

      <section className="section">
        <p>
          No Pro-Bidder, sua privacidade é importante para nós. Esta política
          explica como coletamos, usamos e protegemos suas informações pessoais
          quando você utiliza nosso aplicativo.
        </p>
      </section>

      <section className="section">
        <h2>1. Informações que Coletamos</h2>
        <p>
          Quando você usa o Pro-Bidder, podemos coletar as seguintes
          informações:
        </p>
        <ul>
          <li>
            <strong>Informações de Conta:</strong> Nome, e-mail, e foto de
            perfil quando você faz login via Google, Apple ou Github.
          </li>
          <li>
            <strong>Informações de Uso:</strong> Dados sobre como você utiliza o
            aplicativo, incluindo as funcionalidades que você acessa e como
            interage com elas.
          </li>
          <li>
            <strong>Localização:</strong> Podemos coletar informações de
            localização, com sua permissão, para melhorar a experiência de uso
            do app, como sugerir pontos de referência próximos.
          </li>
          <li>
            <strong>Informações Técnicas:</strong> Dados como o modelo do
            dispositivo, sistema operacional, endereço IP, e identificadores de
            dispositivo.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>2. Como Utilizamos Suas Informações</h2>
        <p>Utilizamos as informações coletadas para:</p>
        <ul>
          <li>
            Fornecer e melhorar nossos serviços: Usamos os dados para
            personalizar a experiência e garantir que o app funcione
            adequadamente.
          </li>
          <li>
            Comunicar com você: Podemos enviar notificações sobre atualizações,
            mudanças nos Termos de Serviço ou outras informações relevantes.
          </li>
          <li>
            Cumprir requisitos legais: Podemos utilizar suas informações para
            cumprir com obrigações legais, como retenção de dados.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>3. Compartilhamento de Informações</h2>
        <p>
          Não compartilhamos suas informações pessoais com terceiros, exceto:
        </p>
        <ul>
          <li>
            <strong>Provedores de Serviço:</strong> Podemos compartilhar dados
            com provedores terceirizados que nos ajudam a operar o aplicativo,
            como serviços de autenticação (Google, Apple, Github).
          </li>
          <li>
            <strong>Cumprimento da Lei:</strong> Podemos divulgar informações se
            acreditarmos que tal ação é necessária para cumprir uma obrigação
            legal, proteger a segurança de qualquer pessoa, ou proteger os
            direitos e propriedade do Pro-Bidder.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>4. Segurança dos Dados</h2>
        <p>
          Tomamos medidas de segurança para proteger suas informações, incluindo
          criptografia e armazenamento seguro. No entanto, nenhuma transmissão
          de dados pela internet é 100% segura, e não podemos garantir total
          segurança das informações.
        </p>
      </section>

      <section className="section">
        <h2>5. Seus Direitos</h2>
        <p>
          Dependendo da jurisdição, você pode ter os seguintes direitos em
          relação às suas informações pessoais:
        </p>
        <ul>
          <li>
            <strong>Acesso e correção:</strong> Você pode acessar e corrigir
            informações que temos sobre você.
          </li>
          <li>
            <strong>Exclusão:</strong> Você pode solicitar a exclusão de suas
            informações pessoais, sujeito a certas exceções.
          </li>
          <li>
            <strong>Revogação de consentimento:</strong> Você pode revogar seu
            consentimento para o uso de suas informações, como a coleta de dados
            de localização.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>6. Retenção de Dados</h2>
        <p>
          Mantemos suas informações pessoais enquanto sua conta estiver ativa ou
          conforme necessário para fornecer serviços. Podemos reter e usar suas
          informações conforme necessário para cumprir nossas obrigações legais
          ou resolver disputas.
        </p>
      </section>

      <section className="section">
        <h2>7. Alterações a Esta Política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente.
          Notificaremos você sobre quaisquer alterações significativas, seja por
          meio de notificação dentro do aplicativo ou por e-mail.
        </p>
      </section>

      <section className="section">
        <h2>8. Contato</h2>
        <p>
          Se você tiver dúvidas ou preocupações sobre esta Política de
          Privacidade, entre em contato conosco em:{" "}
          <a href="mailto:dev.ceagah@gmail.com">dev.ceagah@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
