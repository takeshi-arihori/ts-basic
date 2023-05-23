export default function objectSample() {
  const a: object = {
    name: 'Takeshi Arihori',
    age: 36,
  }
  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const takeshi: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 36,
    lastName: 'Arihori',
    firstName: 'Takeshi',
  }

  takeshi.gender = 'male'
  takeshi.lastName = 'ARIHORI'
  // takeshi.firstName = 'ARIHORI';

  console.log('Object object sample 3:', takeshi)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4:', capitals)

}
