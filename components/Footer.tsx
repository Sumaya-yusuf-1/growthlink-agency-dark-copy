import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Image src="/growthlink-logo.png" alt="Growthlink Agency" width={170} height={100} className="footer-logo" />
          <p>Moderna, strategiska och visuellt starka hemsidor för företag som vill växa digitalt.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <Link href="/tjanster">Tjänster</Link>
          <Link href="/projekt">Projekt</Link>
          <Link href="/priser">Priser</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <div>
          <h4>Kontakt</h4>
          <p>org : 0401184718</p>
          
          <p>hello@growthlinkagency.se</p>
          <p>+46 73 971 20 61</p>
          <p>Göteborg, Sverige</p>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} Growthlink Agency. Alla rättigheter förbehållna.</div>
    </footer>
  );
}
