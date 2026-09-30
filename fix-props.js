const fs = require('fs'); 
let code = fs.readFileSync('app/page.tsx', 'utf8'); 
code = code.replace(/style=""/g, ''); 
code = code.replace(/onsubmit=/g, 'onSubmit='); 
code = code.replace(/<option selected>/g, '<option>'); 
code = code.replace(/<option selected="[^"]*"/g, '<option'); 
fs.writeFileSync('app/page.tsx', code);
