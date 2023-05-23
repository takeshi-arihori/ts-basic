export default function arraySample(){
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123);
  console.log('Array array sample 1:', colors)

  // 型推論された配列の型定義
  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push("10");
  console.log('Array array sample 2:', even)

  // 合併型を用いた配列の型定義
  const ids: (string | number)[] = ["ABC", 123]
  ids.push("DEF")
  ids.push(456)
  // ids.push(true)
  console.log('Array array sample 3:', ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]として推論される
    _someArray.push("ABC") // (string | number)[]として推論される
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('Array array sample 4:', someArray)

  // イミュータブルな配列を作る
  const commands: readonly string[] = ["git add", "git commit", "git push"]
  // commands.push("git fetch")
  // commands[2] = "git pull"
  console.log('Array array sample 5:', commands)

  // 読み取り専用の定義方法
  const immutableNumbers: ReadonlyArray<number> = [1, 2, 3]
  // immutableNumbers.push(4)
  console.log('Array array sample 6:', immutableNumbers)
  
}