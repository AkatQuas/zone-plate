import { writable } from 'svelte/store';

const plates = writable<string[]>([]);

export const subscribe = plates.subscribe;

export const reset = () => {
  plates.set([]);
};

export const next = () => {
  plates.set(randomPlates(20));
};

/**
 *
 * @param count
 * @returns
 */
function randomPlates(count: number = 20): string[] {
  const list: string[] = [];
  for (let index = 0; index < count; index++) {
    const one = randomOnePlate(list);
    list.push(one);
  }
  return list;
}

/**
 * @private
 * @param exists
 * @returns
 */
function randomOnePlate(exists: string[]): string {
  while (true) {
    const candidate = Math.random() > 0.5 ? nanna() : nnaan();
    if (exists.includes(candidate)) {
      continue;
    }
    return candidate;
  }
}

const numbers = '0123456789';
const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ';

function randomChar(dict: string) {
  const idx = ~~(Math.random() * dict.length);
  return dict[idx];
}

function nanna() {
  return (
    randomChar(numbers) +
    randomChar(alphabet) +
    randomChar(numbers) +
    randomChar(numbers) +
    randomChar(alphabet)
  );
}
function nnaan() {
  return (
    randomChar(numbers) +
    randomChar(numbers) +
    randomChar(alphabet) +
    randomChar(alphabet) +
    randomChar(numbers)
  );
}
