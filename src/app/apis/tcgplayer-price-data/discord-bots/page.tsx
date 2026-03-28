import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Build a Pokemon Price Bot for Discord — TCGPlayer API Tutorial',
  description:
    'Step-by-step guide to building a Discord bot that looks up trading card prices from TCGPlayer. Get real-time Pokemon, MTG, and Yu-Gi-Oh prices in your server.',
  keywords: [
    'pokemon price bot discord',
    'discord card price bot',
    'tcgplayer discord bot',
    'mtg price bot',
    'yugioh price bot discord',
    'trading card discord bot tutorial',
    'card price lookup bot',
    'pokemon price checker discord',
  ],
  openGraph: {
    title: 'Build a Pokemon Price Bot for Discord',
    description:
      'Tutorial: build a Discord bot that returns real-time TCGPlayer card prices. Free API tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/tcgplayer-price-data?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=tcg-discord-bots';

const jsExample = `// discord.js v14 — /price command handler
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("price")
    .setDescription("Look up a card price on TCGPlayer")
    .addStringOption((opt) =>
      opt.setName("card").setDescription("Card name").setRequired(true)
    )
    .addStringOption((opt) =>
      opt
        .setName("game")
        .setDescription("Game")
        .addChoices(
          { name: "Pokemon", value: "pokemon" },
          { name: "MTG", value: "mtg" },
          { name: "Yu-Gi-Oh", value: "yugioh" }
        )
    ),

  async execute(interaction) {
    await interaction.deferReply();
    const card = interaction.options.getString("card");
    const game = interaction.options.getString("game") || "pokemon";

    const resp = await fetch(
      \`https://tcgplayer-price-data.p.rapidapi.com/cards/search?query=\${encodeURIComponent(card)}&game=\${game}&limit=3\`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "tcgplayer-price-data.p.rapidapi.com",
        },
      }
    );
    const data = await resp.json();

    if (!data.results?.length) {
      return interaction.editReply(\`No results for "\${card}".\`);
    }

    const embed = new EmbedBuilder()
      .setColor(0x3498db)
      .setTitle(\`TCGPlayer: \${card}\`);

    for (const r of data.results) {
      embed.addFields({
        name: r.name,
        value: \`Market: $\${r.marketPrice} | Low: $\${r.lowestPrice} | Listings: \${r.totalListings}\\n[View](\${r.url})\`,
      });
    }

    if (data.results[0]?.imageUrl) embed.setThumbnail(data.results[0].imageUrl);
    await interaction.editReply({ embeds: [embed] });
  },
};`;

export default function DiscordBotsPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-violet-100 text-violet-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Bot Developers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Build a Pokemon Price Bot for Discord
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Add a <strong>/price</strong> command to your Discord server. Look up
          real-time card prices from TCGPlayer for Pokemon, MTG, and Yu-Gi-Oh
          with a simple API call.
        </p>
        <a
          href={RAPIDAPI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Get Free API Key
        </a>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          What Your Bot Can Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Price Lookup</h3>
            <p className="text-gray-600 text-sm">
              Users type <code>/price charizard</code> and get an embed with
              market price, lowest listing, and a link to buy on TCGPlayer.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Price Alerts</h3>
            <p className="text-gray-600 text-sm">
              Let users set price alerts. Poll the API periodically and DM
              users when a card drops below their target price.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Collection Tracking</h3>
            <p className="text-gray-600 text-sm">
              Let server members register their collections and check total
              value on demand. Great for trading communities.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Discord.js /price Command
        </h2>
        <CodeBlock language="javascript" code={jsExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How many price lookups can my bot do?
            </h3>
            <p className="text-gray-600 text-sm">
              Free tier: 200/month. For active servers, the Pro plan ($9.99/mo)
              gives 5,000/month — enough for a server with 100+ daily users.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Is the API fast enough for Discord?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. Average response time is under 500ms. Use{' '}
              <code>interaction.deferReply()</code> to avoid the 3-second
              timeout while the API responds.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I monetize my bot?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. Many bot developers offer free basic lookups and premium
              features (alerts, history, bulk search) via subscription. The
              API supports this with tiered rate limits.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-violet-50 to-blue-50 border border-violet-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Building Your Price Bot
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Free API key. 200 requests/month. No credit card.
        </p>
        <a
          href={RAPIDAPI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Get Free API Key
        </a>
      </section>
    </>
  );
}
