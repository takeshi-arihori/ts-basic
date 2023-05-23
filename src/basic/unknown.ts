export default function unknownSample(): void {
  const maybeNumber: unknown = 10 // unknown型の宣言
  console.log('unknown sample 1:', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('unknown sample 2:', typeof isFoo, isFoo)

  // const sum = maybeNumber + 10; // 'maybeNumber''は 'unknown' 型です。ts(2571)

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3:', typeof sum, sum)
  }
}
