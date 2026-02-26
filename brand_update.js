const fs = require('fs');
const dirs = ['dsa-dashboard', 'affiliate-dashboard', 'bc-dashboard', 'dashboard'];
dirs.forEach(d => {
    const p2 = `d:/AeroTalk/KarzwalaTransfered/app/${d}/page.tsx`;
    if (fs.existsSync(p2)) {
        let t = fs.readFileSync(p2, 'utf8');
        t = t.replace(/loaninneed\.in/gi, 'karzwala.in');
        t = t.replace(/LoanInNeed/g, 'Karzwala');
        t = t.replace(/LOANINNEED/g, 'KARZWALA');
        fs.writeFileSync(p2, t);
        console.log(`Branded ${d}`);
    }
});
