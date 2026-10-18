# Growthlink Agency

Komplett svensk Next.js-hemsida för en webbyrå.

## Starta projektet

```bash
npm install
npm run dev
```

Öppna http://localhost:3000

Sidor: /, /tjanster, /projekt, /priser, /om-oss, /kontakt

## Kontaktformulär

Kontaktformuläret skickar via [EmailJS](https://www.emailjs.com/). Skapa en
EmailJS-tjänst och mall och kopiera `.env.example` till `.env.local`. Fyll i
värdena från EmailJS:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: Public Key från EmailJS Account
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: ID:t för EmailJS-tjänsten
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: ID:t för e-postmallen

Mallen behöver använda formulärfält med namnen `name`, `company`, `email`,
`service`, `budget` och `message`. Starta om utvecklingsservern efter att
`.env.local` har ändrats.
