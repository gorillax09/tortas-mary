// Requisito para que el celular ofrezca "Instalar app". No guarda nada: la app siempre se carga en línea,
// así los registros se hacen con la hora real del servidor.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', ev => ev.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
