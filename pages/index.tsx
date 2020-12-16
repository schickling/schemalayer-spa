import { FC, useEffect, useState } from 'react'
import { Project, transform } from '../src/schemalayer'

const Home: FC = () => {
  const data = useLocalStorage('test')
  if (data === undefined) {
    return <div>No data found</div>
  }
  return (
    <div>
      {/* <div>Raw JSON {}</div> */}
      {data.title}
    </div>
  )
}

function useLocalStorage(key: string): Project | undefined {
  const [data, setData] = useState<Project | undefined>(undefined)

  useEffect(() => {
    const rawData = localStorage.getItem(key)
    if (rawData) {
      const rawJsonData = JSON.parse(rawData)
      if (rawJsonData.version && rawJsonData.data) {
        setData(
          transform({
            fromVersion: rawJsonData.version,
            type: 'Project',
            data: rawJsonData.data,
          }),
        )
      } else {
        console.error(`No valid schemalayer data: ${rawJsonData}`)
      }
    } else {
      console.error(`No data found for key: ${key}`)
    }
  }, [key])

  return data
}

export default Home
