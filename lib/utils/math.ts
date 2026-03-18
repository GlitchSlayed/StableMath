export const round = (value: number, digits = 4) => {
  const factor = 10 ** digits
  return Math.round(value * factor) / factor
}

export const inRange = (value: number, target: number, tolerance = 1e-4) => Math.abs(value - target) <= tolerance

export const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b))
