## Requirements
- Node.js 12 or 14 and above

## How to configure:

1. Clone repository
2. Open repository in file explorer
3. Open Command Prompt
4. Type *npm install* in Command Prompt
5. Test are default configured to run with 1920x1080 resolution:
- To run tests in default resolution type *npx cypress run* in Command Prompt
- To run tests in resolution 820x1180 type *npx cypress run --config-file .\cypress\configs\mediumResolution.ts* in Command Prompt
- To run tests in resolution 576x960 type *npx cypress run --config-file .\cypress\configs\smallResolution.ts* in Command Prompt