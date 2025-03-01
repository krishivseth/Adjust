import { NativeModule, requireNativeModule } from 'expo';

import { AppleVisionOCRModuleEvents } from './AppleVisionOCR.types';

declare class AppleVisionOCRModule extends NativeModule<AppleVisionOCRModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AppleVisionOCRModule>('AppleVisionOCR');
