// Print the operating system platform
// Possible values:
//   - darwin  → macOS
//   - win32   → Windows
//   - linux   → Linux
console.log("Operating System:", process.platform);


// Print CPU architecture
// Common values:
//   - x64   → 64-bit Intel/AMD processor
//   - arm64 → ARM processor (Apple Silicon, etc.)
console.log("CPU Architecture:", process.arch);


// Print currently installed Node.js version
console.log("Node Version:", process.version);