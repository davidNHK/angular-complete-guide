export function hasEventTarget<T extends HTMLElement>(
  event: Event,
): event is Event & { target: T } {
  return event.target !== null;
}
