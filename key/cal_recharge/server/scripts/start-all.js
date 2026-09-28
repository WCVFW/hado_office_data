const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Calzone Pay Platform...\n');

// Determine if we're on Windows
const isWindows = process.platform === 'win32';

// Start Backend Server
console.log('📦 Starting Backend Server on http://localhost:3000...');
// Use node directly to run the server in a stable mode without automatic restarts.
const nodeCmd = isWindows ? 'node.exe' : 'node';
// Run server.js from the parent directory
const backendProcess = spawn(nodeCmd, ['server.js'], {
    cwd: path.join(__dirname, '..'), // Run from server root (one level up from scripts)
    stdio: 'inherit',
    shell: true
});

backendProcess.on('error', (error) => {
    console.error('❌ Backend Server Error:', error);
    process.exit(1);
});

backendProcess.on('exit', (code) => {
    if (code !== 0) {
        console.log(`\n❌ Backend server exited with code ${code}`);
    }
    frontendProcess.kill();
    process.exit(code);
});

let frontendProcess;

// Wait a bit for backend to start, then start frontend
setTimeout(() => {
    console.log('🎨 Starting Frontend Server on http://localhost:5173...\n');
    // Client is two levels up from scripts (server/scripts -> server -> root -> client)
    const clientPath = path.join(__dirname, '..', '..', 'client');

    const npmCmd = isWindows ? 'npm.cmd' : 'npm';
    frontendProcess = spawn(npmCmd, ['run', 'dev'], {
        cwd: clientPath,
        stdio: 'inherit',
        shell: true
    });

    frontendProcess.on('error', (error) => {
        console.error('❌ Frontend Server Error:', error);
        backendProcess.kill();
        process.exit(1);
    });

    frontendProcess.on('exit', (code) => {
        if (code !== 0) {
            console.log(`\n❌ Frontend server exited with code ${code}`);
        }
        backendProcess.kill();
        process.exit(code);
    });

    // Handle graceful shutdown
    process.on('SIGINT', () => {
        console.log('\n\n🛑 Shutting down servers...');
        frontendProcess.kill();
        backendProcess.kill();
        process.exit(0);
    });

    process.on('SIGTERM', () => {
        console.log('\n\n🛑 Shutting down servers...');
        frontendProcess.kill();
        backendProcess.kill();
        process.exit(0);
    });

    console.log('\n✅ Both servers are running!');
    console.log('📍 Backend:  http://localhost:3000');
    console.log('📍 Frontend: http://localhost:5173');
    console.log('\n💡 Press Ctrl+C to stop all servers.\n');
}, 2000);
