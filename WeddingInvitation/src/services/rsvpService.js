const statusLabels = {
  attending: 'Katılacağım',
  notAttending: 'Katılmayacağım',
  unsure: 'Belirsiz',
};

export async function sendRsvp({ status, fullName, guestCount }) {
  const recipientEmail = import.meta.env.VITE_RSVP_RECIPIENT_EMAIL;

  if (!recipientEmail) {
    throw new Error('Alıcı e-posta adresi yapılandırılmadı.');
  }

  const statusLabel = statusLabels[status];
  const people = status === 'attending' ? `${guestCount} kişi` : '-';
  const submittedAt = new Date().toLocaleString('tr-TR');

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
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
      Mesaj: `${fullName} — ${statusLabel}${status === 'attending' ? ` — ${guestCount} kişi` : ''}`,
    }),
  });

  if (!response.ok) {
    throw new Error('Yanıt gönderilemedi. Lütfen kısa bir süre sonra tekrar deneyin.');
  }

  const result = await response.json().catch(() => null);

  if (result?.success === false) {
    throw new Error(result.message || 'Yanıt gönderilemedi.');
  }

  return result;
}
