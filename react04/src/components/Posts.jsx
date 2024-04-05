import styles from "../components/Posts.module.css";
import fotoPerfil from '../assets/fotode perfil.jpeg';

console.log(styles);
export function Posts() {
  return (
    <article className={styles.posts}>
      <header>
        <div className={styles.autor}>
          <img
            className={styles.avatar}
            src={fotoPerfil}
            alt=""
          />
          <div className={styles.autorInfo}>
            <strong>Tecnico do projeto</strong>
            <span>web Developer</span>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        <p> Ola eu sou </p>

        <div  >
          <div>Nome completo: Rômulo Valente</div>
          <div>Endereço: Rua Espírito Santo</div>
          <div>Número de telefone: 32 988986927</div>
          <p>
            {" "}
            Objetivo Profissional: Busco oportunidades na área e TI se houver,
            utilizando minha formação em Pedagogia e meu conhecimento técnico em
            Administração para contribuir efetivamente com o crescimento da
            empresa.{" "}
          </p>
          <p>
            Formação Acadêmica: Graduação em Pedagogia Instituição de Ensino
            UEMG e Técnico em Administração
          </p>

          <p>
            Experiência Profissional: Vendedor - Cauzim Tintas Responsável pela
            venda e entrega de tintas, garantindo a satisfação do cliente.
            Execução de atividades administrativas no escritório, como controle
            de estoque, emissão de notas fiscais e atendimento ao cliente.
            Efetuação de entregas dentro do prazo estabelecido, garantindo a
            qualidade do serviço prestado.
          </p>

          <p>
            {" "}
            Habilidades: <br />
            Excelente habilidade de comunicação e relacionamento interpessoal,
            adquirida por meio da experiência como vendedor. Conhecimento
            técnico em administração, incluindo gestão de estoque, emissão de
            notas fiscais e atendimento ao cliente. Capacidade de trabalhar de
            forma eficiente tanto de forma independente quanto em equipe.
            Organização e habilidades multitarefa para lidar com as demandas do
            ambiente de trabalho.
          </p>
        </div>
        <p>
          {" "}
          <a href=""> WEb.design/projeto</a>{" "}
        </p>
        <p>
          {" "}
          <a href="">https://github.com/RomuloDsouza</a>{" "}
        </p>
      </div>
    </article>
  );
}
