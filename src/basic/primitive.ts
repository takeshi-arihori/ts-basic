export default function primitiveSample(): void {
  const name = 'Takeshi Arihori'
  // name = 123;
  console.log('primitive sample 1:', typeof name, name)

  const age = 36
  // age = "age";
  console.log('primitive sample 2:', typeof age, age)

  const isSingle = true
  // isSingle = 36;
  console.log('primitive sample 3:', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log('primitive sample 4:', typeof isOver20, isOver20)
}
