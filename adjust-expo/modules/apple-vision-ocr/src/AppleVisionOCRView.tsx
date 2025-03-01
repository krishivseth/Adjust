import { requireNativeView } from 'expo';
import * as React from 'react';

import { AppleVisionOCRViewProps } from './AppleVisionOCR.types';

const NativeView: React.ComponentType<AppleVisionOCRViewProps> =
  requireNativeView('AppleVisionOCR');

export default function AppleVisionOCRView(props: AppleVisionOCRViewProps) {
  return <NativeView {...props} />;
}
