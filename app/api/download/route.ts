import { NextResponse } from 'next/server';
import { createZipFile } from '@diegoaltoworks/zipper';

export async function GET() {
  const files = [
    { url: 'https://diegoaltoworks.github.io/zipper/data/A0.pdf', name: 'A.pdf' },
    { url: 'https://diegoaltoworks.github.io/zipper/data/B0.pdf', name: 'B.pdf' },
  ];

  const zipData = await createZipFile(files, {
    onProgress: (current, total) => {
      console.log(`[API Route] Server: Downloaded ${current}/${total} files`);
    },
  });

  // Convert to Uint8Array which NextResponse accepts
  const buffer = zipData instanceof Blob
    ? new Uint8Array(await zipData.arrayBuffer())
    : new Uint8Array(zipData);

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="server-side.zip"',
    },
  });
}
