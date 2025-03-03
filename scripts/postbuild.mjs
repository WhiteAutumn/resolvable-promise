import path from 'node:path';
import fs from 'node:fs/promises';

const mjsPath = './dist/esm';
const cjsPath = './dist/cjs';

await Promise.all([
	fs.writeFile(path.join(mjsPath, 'package.json'), JSON.stringify({
		type: 'module'
	})),
	fs.writeFile(path.join(cjsPath, 'package.json'), JSON.stringify({
		type: 'commonjs'
	}))
]);
