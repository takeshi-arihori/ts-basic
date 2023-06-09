export default function genericsAdvancedSample(): void {
  // map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers: Map<string, number> = (array: string[], fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const numbers = mapStringsToNumbers(['123', '456', '789'], (item) => Number(item))
  console.log('Generics advanced sample 1:', numbers)

  const mapNumbersToStrings: Map<number, string> = (array: number[], fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const strings = mapNumbersToStrings(numbers, (item) => String(item))
  console.log('Generics advanced sample 2:', strings)
}
