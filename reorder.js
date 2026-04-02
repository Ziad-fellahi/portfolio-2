const fs = require('fs');
const path = 'c:\\Users\\ZiadF\\Desktop\\Projets\\Portfolio\\app\\projet\\govo-glitz\\page.tsx';
let data = fs.readFileSync(path, 'utf8');

const sMeth = data.indexOf('{/* Section 1 : La Méthodologie Avant le Code */}');
const sGantt = data.indexOf('{/* Section Nouvelle : Planification Gantt */}');
const sMongo = data.indexOf('{/* Section Nouvelle : MongoDB */}');
const sAdmin = data.indexOf('{/* Section 2 : Un Dashboard Admin Décisionnel */}');
const sClient = data.indexOf('{/* Section 3 : Une Porte d\\'Entrée Client Sécurisée */}');
const sCyber = data.indexOf('{/* Section 4 : L\\'Exigence Cybersécurité (Hardening) */}');
const sEnd = data.indexOf('</section>', sCyber);

const blockMeth = data.substring(sMeth, sGantt);
const blockGantt = data.substring(sGantt, sMongo);
const blockMongo = data.substring(sMongo, sAdmin);
const blockAdmin = data.substring(sAdmin, sClient);
const blockClient = data.substring(sClient, sCyber);
const blockCyber = data.substring(sCyber, sEnd);

const modAdmin = blockAdmin.replace(
  '<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm">',
  '<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm border-l-4 border-l-blue-500">\\n              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">\\n                1. Frontend Admin • React / Next.js\\n              </div>'
).replace('{/* Section 2 : Un Dashboard Admin Décisionnel */}', '{/* --- FRONTEND : L\\'interface visible ---\\n\\n            Section 1 : Un Dashboard Admin Décisionnel */}');

const modClient = blockClient.replace(
  '<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm">',
  '<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm border-l-4 border-l-orange-500">\\n              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">\\n                2. Frontend Client • React / Next.js\\n              </div>'
).replace('{/* Section 3 : Une Porte d\\'Entrée Client Sécurisée */}', '{/* Section 2 : Une Porte d\\'Entrée Client Sécurisée */}');

const modMeth = blockMeth.replace(
  '<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm">',
  '<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm mt-12 border-l-4 border-l-green-500">\\n              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-800 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">\\n                3. Conception & Méthodologie\\n              </div>'
).replace('{/* Section 1 : La Méthodologie Avant le Code */}', '{/* --- BACKEND & METHODOLOGIE ---\\n\\n            Section 3 : La Méthodologie Avant le Code */}');

const modGantt = blockGantt.replace(
  '<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm">',
  '<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm border-l-4 border-l-green-500">'
).replace('{/* Section Nouvelle : Planification Gantt */}', '{/* Section 4 : Planification Gantt */}');

const modMongo = blockMongo.replace(
  '<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm">',
  '<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm border-l-4 border-l-green-500">\\n              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">\\n                4. Backend & Base de Données\\n              </div>'
).replace('{/* Section Nouvelle : MongoDB */}', '{/* Section 5 : MongoDB */}');

const modCyber = blockCyber.replace('{/* Section 4 : L\\'Exigence Cybersécurité (Hardening) */}', '{/* Section 6 : L\\'Exigence Cybersécurité (Hardening) */}');

const newSection = modAdmin + modClient + modMeth + modGantt + modMongo + modCyber;

const newData = data.substring(0, sMeth) + newSection + data.substring(sEnd);

fs.writeFileSync(path, newData, 'utf8');
console.log('Reordered successfully!');
