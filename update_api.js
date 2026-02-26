const fs = require('fs');
let t = fs.readFileSync('d:/AeroTalk/LIN/lin-frontend/lib/api.ts', 'utf8');
t = t.replace("import { config } from './config';", "const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';");
t = t.replace("const API_BASE_URL = config.apiUrl;", "");
fs.writeFileSync('d:/AeroTalk/KarzwalaTransfered/lib/api.ts', t);
console.log('Script completed');
