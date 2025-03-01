import * as React from 'react';

import { AppleVisionOCRViewProps } from './AppleVisionOCR.types';

export default function AppleVisionOCRView(props: AppleVisionOCRViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
