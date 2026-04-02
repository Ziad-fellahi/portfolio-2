const fs = require('fs');
const file = 'c:/Users/ZiadF/Desktop/Projets/Portfolio/app/projet/govo-glitz/page.tsx';
let txt = fs.readFileSync(file, 'utf8');

const secStart = txt.indexOf('<section className="space-y-12">') + '<section className="space-y-12">'.length;
const secEnd = txt.indexOf('</section>', secStart);

const sectionContent = txt.substring(secStart, secEnd);
let blocks = sectionContent.split('{/* ');

let blockMeth = '{/* ' + blocks[1];
let blockGantt = '{/* ' + blocks[2];
let blockMongo = '{/* ' + blocks[3];
let blockAdmin = '{/* ' + blocks[4];
let blockClient = '{/* ' + blocks[5];
let blockCyber = '{/* ' + blocks[6];

blockAdmin = blockAdmin.replace('Section 2 : Un Dashboard Admin Décisionnel', '--- FRONTEND : L\\'interface visible ---\\n\\n            Section 1 : Un Dashboard Admin Décisionnel');
blockAdmin = blockAdmin.replace('border-[#EDEDF2] shadow-sm"', 'border-[#EDEDF2] shadow-sm border-l-4 border-l-blue-500">\\n              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">\\n                1. Frontend Admin • React / Next.js\\n              </div>');

blockClient = blockClient.replace('Section 3 : Une Porte', 'Section 2 : Une Porte');
blockClient = blockClient.replace('border-[#EDEDF2] shadow-sm"', 'border-[#EDEDF2] shadow-sm border-l-4 border-l-orange-500">\\n              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">\\n                2. Frontend Client • React / Next.js\\n              </div>');

blockMeth = blockMeth.replace('Section 1 : La Métho', '--- BACKEND & METHODOLOGIE ---\\n\\n            Section 3 : La Métho');
blockMeth = blockMeth.replace('border-[#EDEDF2] shadow-sm"', 'border-[#EDEDF2] shadow-sm mt-12 border-l-4 border-l-indigo-500">\\n              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">\\n                3. Conception & Méthodologie\\n              </div>');

blockGantt = blockGantt.replace('Section Nouvelle :', 'Section 4 :');
blockGantt = blockGantt.replace('border-[#EDEDF2] shadow-sm"', 'border-[#EDEDF2] shadow-sm border-l-4 border-l-teal-500">');

blockMongo = blockMongo.replace('Section Nouvelle :', 'Section 5 :');
blockMongo = blockMongo.replace('border-[#EDEDF2] shadow-sm"', 'border-[#EDEDF2] shadow-sm border-l-4 border-l-green-500">\\n              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">\\n                4. Backend & Base de Données\\n              </div>');

blockCyber = blockCyber.replace('Section 4 :', 'Section 6 :');

const newSectionContent = '\\n            ' + blockAdmin + blockClient + blockMeth + blockGantt + blockMongo + blockCyber;

const newTxt = txt.substring(0, secStart) + newSectionContent + txt.substring(secEnd);
fs.writeFileSync(file, newTxt, 'utf8');
console.log('done reordering');
