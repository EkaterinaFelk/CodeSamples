'use client';

import { ErrorMessage } from '@/components/error-message/errorMessage';

export default function GlobalError(props) {
  return (
    <html>
      <body>
        <ErrorMessage {...props} />;
      </body>
    </html>
  );
}
