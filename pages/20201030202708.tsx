import { FC } from 'react'
import JSONTree from 'react-json-tree'
import { Header } from '../components/Header'
import { useLocalStorage, useSchemalayerLocalStorage } from '../hooks'

const Home: FC = () => {
  const jsonData = useLocalStorage('projects')
  const newData = useSchemalayerLocalStorage({
    key: 'projects',
    toVersion: '20201030202708',
    type: 'Project',
  })
  if (jsonData === undefined || newData === undefined) {
    return <div>No data found</div>
  }

  return (
    <div>
      <Header />
      {/* <div>Raw JSON {}</div> */}
      <JSONTree data={jsonData} hideRoot shouldExpandNode={() => true} />
      <JSONTree data={newData} hideRoot shouldExpandNode={() => true} />
    </div>
  )
}

export default Home
