type ToastFn = (msg: string) => void;

const fns: ToastFn[] = [];

export function subscribeToast(fn: ToastFn): () => void {
  fns.push(fn);
  return () => {
    const i = fns.indexOf(fn);
    if (i >= 0) fns.splice(i, 1);
  };
}

export function toast(msg: string): void {
  fns.forEach((fn) => fn(msg));
}
