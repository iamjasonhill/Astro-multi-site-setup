import { spawn } from 'node:child_process';
const [,, cmd, site] = process.argv;
if (!cmd || !site) {
  console.error('Usage: pnpm dev:site <site-folder-name> | build:site | preview:site');
  process.exit(1);
}
const child = spawn('pnpm', [cmd], { cwd: `sites/${site}`, stdio: 'inherit', shell: true });
child.on('exit', code => process.exit(code ?? 0));
