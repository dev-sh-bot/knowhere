let pendingService: string | null = null;

export function setPendingService(name: string): void {
  pendingService = name;
}

export function takePendingService(): string | null {
  const v = pendingService;
  pendingService = null;
  return v;
}
