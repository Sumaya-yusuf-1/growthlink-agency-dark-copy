import {
  ArrowRight,
  Check,
  Code2,
  Globe2,
  Layers3,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe2,
    title: "Företagshemsidor",
    text: "Strategiska, moderna hemsidor som stärker ditt varumärke och gör det lättare för kunder att välja dig.",
  },
  {
    icon: Layers3,
    title: "Landningssidor",
    text: "Fokuserade sidor för kampanjer, erbjudanden och leadgenerering med tydliga CTA:er.",
  },
  {
    icon: Code2,
    title: "Skräddarsydd utveckling",
    text: "Unika lösningar byggda efter din verksamhet — inte färdiga mallar som ser likadana ut.",
  },
  {
    icon: Sparkles,
    title: "Redesign",
    text: "Vi förvandlar äldre webbplatser till snabba, tydliga och visuellt starka digitala upplevelser.",
  },
];

const projects = [
  {
    title: "Nordic Build",
    category: "Bygg & entreprenad",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Maison Studio",
    category: "Interiör & design",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Aurelia Dining",
    category: "Restaurang",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function Home() {
  return (
    <main className='home-dark'>
      <section className='hero hero-dark'>
        <div className='hero-glow hero-glow-a' />
        <div className='hero-glow hero-glow-b' />
        <div className='container hero-grid'>
          <div className='hero-copy reveal-up'>
            <span className='eyebrow'>Digital byrå · Göteborg</span>
            <h1>
              Hemsidor som ser <span>professionella</span> ut och hjälper
              företag att växa.
            </h1>
            <p>
              Growthlink Agency skapar exklusiva, snabba och responsiva
              webbplatser med tydlig strategi, stark design och modern
              utveckling.
            </p>
            <div className='hero-actions'>
              <Link href='/kontakt' className='btn primary glow-btn'>
                Starta ett projekt <ArrowRight size={18} />
              </Link>
              <Link href='/projekt' className='btn ghost'>
                Se projekt
              </Link>
            </div>
            <div className='hero-points'>
              <span>
                <Check size={16} /> Modern design
              </span>
              <span>
                <Check size={16} /> Mobilanpassad
              </span>
              <span>
                <Check size={16} /> SEO-vänlig
              </span>
            </div>
          </div>

          <div className='hero-showcase reveal-scale'>
            <div className='browser-card'>
              <div className='browser-top'>
                <i />
                <i />
                <i />
                <span>growthlinkagency.se</span>
              </div>
              <div
                className='browser-image'
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=90')",
                }}
              >
                <div className='browser-overlay'>
                  <span>Premium digital presence</span>
                  <h3>Design that builds trust.</h3>
                </div>
              </div>
            </div>
            <div className='floating-badge badge-top'>+ Modern UI</div>
            <div className='floating-badge badge-bottom'>
              Built for growth ↗
            </div>
          </div>
        </div>
      </section>

      <section className='trust-strip'>
        <div className='container trust-inner'>
          <span>STRATEGI</span>
          <span>DESIGN</span>
          <span>UTVECKLING</span>
          <span>RESPONSIVITET</span>
          <span>RESULTAT</span>
        </div>
      </section>

      <section className='section dark-section'>
        <div className='container'>
          <div className='section-head left reveal-up'>
            <span className='eyebrow'>Våra tjänster</span>
            <h2>En komplett partner för din digitala närvaro.</h2>
            <p>
              Från första idé till lanserad webbplats — vi bygger en tydlig
              helhet som känns premium och professionell.
            </p>
          </div>
          <div className='card-grid four'>
            {services.map(({ icon: Icon, title, text }, index) => (
              <article
                className='service-card dark-card reveal-up'
                style={{ animationDelay: `${index * 90}ms` }}
                key={title}
              >
                <div className='icon-box dark-icon'>
                  <Icon size={23} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className='card-link'>
                  Läs mer <MoveUpRight size={16} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='section projects-section'>
        <div className='container'>
          <div className='section-head split reveal-up'>
            <div>
              <span className='eyebrow'>Utvalda projekt</span>
              <h2>Exempel på känslan vi kan skapa.</h2>
            </div>
            <p>
              Projektbilderna är exempelbilder tills du lägger in dina egna
              kundprojekt.
            </p>
          </div>
          <div className='project-showcase-grid'>
            {projects.map((project, index) => (
              <article
                className='visual-project reveal-up'
                style={{ animationDelay: `${index * 100}ms` }}
                key={project.title}
              >
                <div
                  className='project-photo'
                  style={{ backgroundImage: `url('${project.image}')` }}
                >
                  <div className='project-shade' />
                  <div className='project-meta'>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                    <Link href='/projekt'>
                      Visa projekt <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='section dark-section pricing-preview'>
        <div className='container pricing-feature'>
          <div className='pricing-copy reveal-up'>
            <span className='eyebrow'>Priser</span>
            <h2>Tydliga paket. Professionellt resultat.</h2>
            <p>
              Vi erbjuder flera nivåer beroende på hur stor hemsida och vilka
              funktioner ditt företag behöver.
            </p>
            <Link href='/priser' className='btn ghost'>
              Se alla priser <ArrowRight size={17} />
            </Link>
          </div>
          <div className='featured-price-card reveal-scale'>
            <span className='mini-label'>Mest populär</span>
            <h3>Business</h3>
            <div className='big-price'>8 900 kr</div>
            <p>
              En komplett företagshemsida för dig som vill se etablerad och
              professionell ut.
            </p>
            <ul>
              <li>
                <Check size={17} /> Upp till 6 sidor
              </li>
              <li>
                <Check size={17} /> Skräddarsydd design
              </li>
              <li>
                <Check size={17} /> Mobil & desktop
              </li>
              <li>
                <Check size={17} /> SEO-grund
              </li>
              <li>
                <Check size={17} /> Kontaktformulär
              </li>
            </ul>
            <Link href='/kontakt' className='btn primary glow-btn full'>
              Be om offert
            </Link>
          </div>
        </div>
      </section>

      <section className='cta-section dark-cta'>
        <div className='container cta-box premium-cta reveal-up'>
          <div>
            <span className='eyebrow'>Redo att växa?</span>
            <h2>
              Bygg en hemsida som känns lika professionell som ditt företag.
            </h2>
          </div>
          <Link href='/kontakt' className='btn white'>
            Starta ditt projekt <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
