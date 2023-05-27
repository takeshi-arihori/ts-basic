export default async function asyncAwaitSample(): Promise<void> {
  const url = 'https://api.github.com/users/takeshi-arihori'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  // async/awaitでコールバック関数を同期的な処理に置き換える
  const fetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.error(error)
        return null
      })

    if (!response) {
      return null
    }

    const json = await response
      .json()
      .then((json: Profile) => {
        console.log('Asynchronous Async/Await Sample 1:', json)
        return json
      })
      .catch((error) => {
        console.error(error)
        return null
      })

    if (!json) {
      return null
    }

    return json
  }

  const profile = await fetchProfile()
  if (profile) {
    console.log('Asynchronous Async/Await Sample 2:', profile)
  }
}
