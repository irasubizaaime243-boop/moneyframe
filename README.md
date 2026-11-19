# Moneyframe

Moneyframe ni MVP y’urubuga rw’Ikinyarwanda ruhuza abantu n’amahirwe yo gukora imirimo mito, kwiga no kumenyekanisha serivisi. Ubu ni **starter project**: nta konti z’abakoresha, kwishyura, cyangwa kubikuza nyakuri birimo.

## Ikoranabuhanga

- Frontend: Next.js + React (`apps/web`)
- Backend: Express API (`apps/api`)
- Database: PostgreSQL
- Imigaragarire: Ikinyarwanda, igendanwa na mudasobwa

## Gutangira kuri mudasobwa

Ibisabwa: Node.js 20+ na Docker Compose.

1. Fungura PostgreSQL hamwe n’imbonerahamwe n’amakuru y’icyitegererezo:
   ```bash
   docker compose up -d
   ```
2. Shyiraho dependencies:
   ```bash
   npm install
   ```
3. Tangiza frontend na API:
   ```bash
   npm run dev
   ```
4. Fungura `http://localhost:3000`. API iboneka kuri `http://localhost:4000/api/health`.

API ikoresha `DATABASE_URL` (default ni `postgres://moneyframe:moneyframe@localhost:5432/moneyframe`), `PORT` (default `4000`), na `WEB_ORIGIN` (default `http://localhost:3000`). Frontend ishobora guhabwa `API_URL` (default `http://localhost:4000`).

## Ibyo turakora mbere yo kujya kuri production

- Kwiyandikisha no kwinjira mu buryo burinzwe, gucunga uruhushya n’amakuru bwite.
- Imirimo igenzurwa, kwemeza ko yarangiye, no kurinda ikoreshwa nabi.
- Ibaruramari ry’amafaranga rikoresha transactions n’amateka atahindurwa.
- Kwemeza ibyangombwa n’amategeko, no guhuza abatanga serivisi zemewe za MTN/Airtel cyangwa Binance.
- HTTPS, secrets z’ibanga, logging/monitoring, backups, rate limiting, tests, no gusuzuma umutekano.

**Icyitonderwa:** amafaranga agaragara mu mirimo y’icyitegererezo ni demo gusa; ntabwo ari amafaranga yishyurwa cyangwa yizewe. Ntushyiremo amakuru ya banki, Mobile Money, Binance, passwords cyangwa API keys nyakuri. Withdrawals na payment integrations ntibirubakwa.
