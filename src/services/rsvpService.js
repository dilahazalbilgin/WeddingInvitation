const statusLabels = {
  attending: 'Katılacağım',
  notAttending: 'Katılmayacağım',
  unsure: 'Belirsiz',
};

export async function sendRsvp({ status, fullName, guestCount }) {
  const recipientEmail = (
    import.meta.env.VITE_RSVP_RECIPIENT_EMAIL ||
    'berataktas57@gmail.com'
  ).trim();

  if (!recipientEmail || !recipientEmail.includes('@')) {
    throw new Error('Alıcı e-posta adresi geçersiz.');
  }

  const statusLabel = statusLabels[status];

  const people =
    status === 'attending'
      ? `${guestCount} kişi`
      : '-';

  const submittedAt = new Date().toLocaleString('tr-TR');

  const response = await fetch(
    `https://formsubmit.co/ajax/${recipientEmail}`,
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify({
        _subject: `Düğün Katılım Yanıtı — ${fullName}`,
        _template: 'table',
        _captcha: 'false',

        Ad_Soyad: fullName,
        Katilim_Durumu: statusLabel,
        Kisi_Sayisi: people,
        Gonderim_Zamani: submittedAt,

        Mesaj:
          status === 'attending'
            ? `${fullName} — ${statusLabel} — ${guestCount} kişi`
            : `${fullName} — ${statusLabel}`,
      }),
    }
  );

  const result = await response.json().catch(() => null);

  if (!response.ok || result?.success === false) {
    console.error('FormSubmit error:', result);

    throw new Error(
      result?.message ||
        'Yanıt gönderilemedi. Lütfen kısa bir süre sonra tekrar deneyin.'
    );
  }

  return result;
}