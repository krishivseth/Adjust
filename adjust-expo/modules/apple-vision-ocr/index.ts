// Reexport the native module. On web, it will be resolved to AppleVisionOCRModule.web.ts
// and on native platforms to AppleVisionOCRModule.ts
export { default } from './src/AppleVisionOCRModule';
export { default as AppleVisionOCRView } from './src/AppleVisionOCRView';
export * from  './src/AppleVisionOCR.types';
