export function setSessionStorage(key, value) {
  return sessionStorage.setItem(key, value);
}

export function getSessionStorage(key) {
  return sessionStorage.getItem(key);
}

export function removeSessionStorage(key) {
  return sessionStorage.removeItem(key);
}

export function removeAllSessionStorage() {
  sessionStorage.clear();
}
