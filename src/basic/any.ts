export default function anySample() {
  let name: any = 'Takeshi Arihori' // stringを代入
  console.log('any sample 1:', typeof name, name)

  name = 36;
  console.log('any sample 2:', typeof name, name)
}