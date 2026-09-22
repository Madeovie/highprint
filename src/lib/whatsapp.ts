import { business } from '@/data/business';

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message || business.whatsappMessage);
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}
