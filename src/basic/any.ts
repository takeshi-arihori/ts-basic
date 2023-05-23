export default function anySample(): void {
  // let name: any = 'Takeshi Arihori' // stringを代入
  // console.log('any sample 1:', typeof name, name)

  // name = 36
  // console.log('any sample 2:', typeof name, name)

  /* any型を使用するとESLintでエラーが起こるため、型を明示的に */
  const name = 'Takeshi Arihori' // stringを代入
  console.log('any sample 1:', typeof name, name)
}
