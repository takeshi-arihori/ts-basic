export default function typeAilasSample(): void {
  // 型エイリアスで型定義を再利用
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 1:', japan)
  console.log('Object object sample 2:', america)
}


