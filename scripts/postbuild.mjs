import path from 'path';
import fs from 'fs/promises';

const mjsPath = './dist/mjs';
const cjsPath = './dist/cjs';

await Promise.all([
	fs.writeFile(path.join(mjsPath, 'package.json'), JSON.stringify({
		type: 'module'
	})),
	fs.writeFile(path.join(cjsPath, 'package.json'), JSON.stringify({
		type: 'commonjs'
	}))
]);
