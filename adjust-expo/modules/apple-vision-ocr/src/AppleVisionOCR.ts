// AppleVisionOCR.ts
import { NativeModules } from 'react-native';

const { AppleVisionOCR } = NativeModules;
export default AppleVisionOCR as {
    recognizeText(imagePath: string): Promise<string[]>;
  };