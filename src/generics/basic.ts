export default function genericsBasicSample() {
  // ジェネリック型を使わない場合1: string型しか受け取れない
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 1:', stringReduce(['May ', 'the ', 'force', 'be ', 'with ', 'you'], ''))

  // ジェネリック型を使わない場合2: number型しか受け取れない
  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 2:', numberReduce([100, 200, 300], 1000))

  // ジェネリック型を使わない場合
  type Reduce = {
    (array: string[], initialValue: string): string
    (array: number[], initialValue: number): number
  }

  // 型エイリアスを作成する
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  // ジェネリック型を使った場合: 型引数によって受け取る型を制限できる
  const genericStringReduce: GenericReduce<string> = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('Generics basic sample 3:', genericStringReduce(['MAKE ', 'TYPESCRIPT ', 'GREAT ', 'AGAIN'], ''))


  const genericNumberReduce: GenericReduce<number> = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('Generics basic sample 4:', genericNumberReduce([-100, -200, -300], 1000))


  // 色々ばジェネリック型の定義方法
  // 完全な呼び出しシグネチャー(ここのシグネチャにジェネリック型を割り当てる)
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  // 呼び出しシグネチャの省略記法
  // 全体にジェネリック型を割り当てる
  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  // 個々の呼び出しシグネチャにジェネリック型を割り当てる
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T

}

