import sharp from "sharp";
export async function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#1d1f21"/><text x="96" y="245" font-family="monospace" font-size="72" fill="#c9cacc">Hao Yu</text><text x="96" y="330" font-family="monospace" font-size="30" fill="#2bbc8a">Ph.D Student, Tongji University</text><text x="96" y="390" font-family="monospace" font-size="26" fill="#c9cacc">Shanghai, China</text><text x="96" y="530" font-family="monospace" font-size="24" fill="#888">clover-saber.github.io</text></svg>`;
  const image = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(image), { headers: { "Content-Type": "image/png" } });
}
