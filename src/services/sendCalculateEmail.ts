export async function sendCalculateEmail(body: any) {
  await fetch(`${location.origin}/api/calculate`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      ...body,
    }),
  });
}
