const SUPABASE_URL = 'https://izjsoqcpzqxbmluzsepu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_IlWbqiVDMdfAL1hOnPGr8g_-7PkHpuv';

// "Remember me": by default the login is kept on this device (localStorage).
// If the user unticks it at login, the session lives only until the browser is closed (sessionStorage).
const REMEMBER_FLAG = 'emphile_remember_me';
const authStorage = {
  getItem(key) {
    try { return localStorage.getItem(key) ?? sessionStorage.getItem(key); } catch (e) { return null; }
  },
  setItem(key, value) {
    try {
      if (localStorage.getItem(REMEMBER_FLAG) === '0') {
        sessionStorage.setItem(key, value);
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
        sessionStorage.removeItem(key);
      }
    } catch (e) { /* storage unavailable */ }
  },
  removeItem(key) {
    try { localStorage.removeItem(key); sessionStorage.removeItem(key); } catch (e) { /* ignore */ }
  },
};

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { storage: authStorage } });
