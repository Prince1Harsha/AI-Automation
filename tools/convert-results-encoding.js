const fs = require('fs');
const path = require('path');
const p = path.resolve(process.cwd(), 'playwright-report', 'results.json');
if (!fs.existsSync(p)) {
  console.error('results.json not found at', p);
  process.exit(2);
}
const b = fs.readFileSync(p);
function isUtf8(buf){
  try{
    JSON.parse(buf.toString('utf8'));
    return true;
  }catch(e){
    return false;
  }
}
if (isUtf8(b)){
  console.log('OK: results.json is valid UTF-8 JSON');
  process.exit(0);
}

// Attempt to decode as utf16le and be forgiving to stray bytes
let s = b.toString('utf16le');
// Trim anything before first '{' and after last '}' to recover JSON if there are stray chars
const firstBrace = s.indexOf('{');
const lastBrace = s.lastIndexOf('}');
if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
  s = s.slice(firstBrace, lastBrace + 1);
}

try{
  JSON.parse(s); // validate
  fs.writeFileSync(p, s, 'utf8');
  console.log('Converted: results.json decoded as UTF-16LE (trimmed) and rewritten as UTF-8');
  process.exit(0);
}catch(e){
  console.error('Failed to parse results.json after attempting UTF-16LE decode:', e && e.message ? e.message : e);
  console.log('First 16 bytes (hex):', b.slice(0,16).toString('hex'));
  // print a small excerpt (utf16le) for debugging
  try{
    console.log('Excerpt (utf16le):', s.slice(0,256));
  }catch(_){}
  process.exit(1);
}
