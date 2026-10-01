export function appendToStorage(key, item) {
  if (typeof window === 'undefined') return;
  const current = JSON.parse(localStorage.getItem(key) || '[]');
  current.push({ ...item, createdAt: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(current));
}

export function setPreference(key, value) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
}

export function getPreference(key, fallback = null) {
  if (typeof window === 'undefined') return fallback;
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
}
