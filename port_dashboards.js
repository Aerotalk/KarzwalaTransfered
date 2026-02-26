const fs = require('fs');
const dirs = ['dsa-dashboard', 'affiliate-dashboard', 'bc-dashboard', 'dashboard'];
dirs.forEach(d => {
    const p1 = `d:/AeroTalk/LIN/lin-frontend/app/${d}/page.tsx`;
    const p2 = `d:/AeroTalk/KarzwalaTransfered/app/${d}/page.tsx`;
    if (fs.existsSync(p1)) {
        let t = fs.readFileSync(p1, 'utf8');
        t = t.replace(/EF4444/g, 'F46300');
        t = t.replace(/red-500/g, 'orange-500');
        t = t.replace(/red-600/g, 'orange-600');
        t = t.replace(/red-50/g, 'orange-50');
        t = t.replace(/red-100/g, 'orange-100');
        t = t.replace(/red-200/g, 'orange-200');
        if (!fs.existsSync(`d:/AeroTalk/KarzwalaTransfered/app/${d}`)) fs.mkdirSync(`d:/AeroTalk/KarzwalaTransfered/app/${d}`, { recursive: true });
        fs.writeFileSync(p2, t);
        console.log(`Copied ${d}`);
    }
});
