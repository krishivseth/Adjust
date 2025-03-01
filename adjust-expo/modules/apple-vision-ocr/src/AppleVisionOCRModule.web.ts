import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './AppleVisionOCR.types';

type AppleVisionOCRModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class AppleVisionOCRModule extends NativeModule<AppleVisionOCRModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(AppleVisionOCRModule);
