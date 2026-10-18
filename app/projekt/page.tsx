import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Byggföretag",
    cat: "Företagshemsida",
    text: "Modern hemsida med tjänster, projekt, om företaget och kontakt.",
    className: "project-a",
    image: "/bygg.png",
  },
  {
    title: "Konsultverksamhet",
    cat: "B2B",
    text: "Ren och professionell webbplats med fokus på expertis och förtroende.",
    className: "project-b",
    image: "/Konsultverksamhet.png",
  },
  {
    title: "Restaurang",
    cat: "Hospitality",
    text: "Elegant restauranghemsida med meny, boknings-CTA och starka bilder.",
    className: "project-c",
    image: "/Restaurang.png",
  },
  {
    title: "E-handel",
    cat: "Webbutik",
    text: "Modern produktupplevelse med kategorier, produktkort och shoppingflöde.",
    className: "project-d",
    image: "/E-handel.png",
  },
  {
    title: "Digital studio",
    cat: "Kreativ verksamhet",
    text: "Varumärkesdriven hemsida för digitala produkter och tjänster.",
    className: "project-e",
    image: "/digital.png",
  },
  {
    title: "Bokningstjänst",
    cat: "Service",
    text: "Tjänstesida med priser, bokningsinformation och tydlig konvertering.",
    className: "project-f",
    image: "/project-b.jpg",
  },
];

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Projekt</span>

          <h1>Utvalda digitala projekt</h1>

          <p>
            Exempel på olika typer av hemsidor och koncept som Growthlink Agency
            kan skapa.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container project-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className={`project-visual ${p.className}`}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="project-image"
                />
              </div>

              <div className="project-copy">
                <span>{p.cat}</span>

                <h3>{p.title}</h3>

                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <h2>Vill du bli nästa projekt?</h2>

            <p>
              Berätta vad du behöver så tar vi fram en lösning för dig.
            </p>
          </div>

          <Link href="/kontakt" className="btn white">
            Starta ditt projekt
          </Link>
        </div>
      </section>
    </main>
  );
}