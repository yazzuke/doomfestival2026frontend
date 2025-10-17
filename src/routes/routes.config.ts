// Configuración centralizada de rutas
export const ROUTES = {
  HOME: '/',
  EVENT_DETAIL: '/event/:id',
  EVENT: (id: number | string) => `/event/${id}`,
  NOT_FOUND: '*'
} as const;

// Tipos para las rutas
export type RouteParams = {
  eventId?: string;
};