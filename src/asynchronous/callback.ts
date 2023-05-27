export default function callbackSample(): void {
  const url = 'https://api.github.com/users/takeshi-arihori'

  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    fetch(url) // fetchを使って、APIを呼び出す
      .then((res) => {
        // レスポンスのBodyをJSONで読み取った結果を返す
        res
          .json()
          .then((json) => {
            console.log('Asynchronous Callback Sample 1:', json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      }) // レスポンスをJSONとして読み取った結果を返す
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log('Asynchronous Callback Sample 2:', profile)
}
