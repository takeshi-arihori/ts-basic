export default function promiseSample(): void {
  const url = 'https://api.github.com/users/takeshi-arihori'

  type Profile = {
    login: string
    id: number
  }

  // Profile型を持つPromiseを返す関数fetchProfileを定義する
  type FetchProfile = () => Promise<Profile | null>

  // fetchProfile関数はPromiseを返す
  const fetchProfile: FetchProfile = () => {
    // Promiseインスタンスを作成する(resolveとrejectを引数に持つ関数を渡す)
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          res
            .json()
            // jsonの結果をthenで受け取る(型をProfileに定義する)
            .then((json: Profile) => {
              console.log('Asynchronous Promise Sample 1:', json)
              // jsonの結果をresolveで返す
              resolve(json)
            })
            .catch((error) => {
              // errorをrejectで返す
              console.error(error)
              reject(null)
            })
        })
        .catch((error) => {
          // errorをrejectで返す
          console.error(error)
          reject(null)
        })
    })
  }

  // fetchProfile関数の戻り値の型をFetchProfile型にする
  fetchProfile()
    .then((profile: Profile | null) => {
      // Profile型であることを保証するためにnullチェックをする
      if (profile) {
        // プロパティが存在するか確認する
        console.log('Asynchronous Promise Sample 2:', profile)
      }
    })
    .catch(() => {
      // console.error('Asynchronous Promise Sample 3: error')
    })
}
