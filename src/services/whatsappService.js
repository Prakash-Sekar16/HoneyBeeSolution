export function openWhatsApp(message) {
    const number = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');
    if (!number) { alert('Please configure VITE_WHATSAPP_NUMBER in your .env file.'); return; }
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}
