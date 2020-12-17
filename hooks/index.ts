import { useEffect, useState } from 'react'
import { transform, Version } from '../src/schemalayer'

export function useLocalStorage<T extends any = any>(
  key: string,
): T | undefined {
  const [data, setData] = useState<T | undefined>(undefined)

  useEffect(() => {
    const rawData = localStorage.getItem(key)
    if (rawData) {
      const rawJsonData = JSON.parse(rawData)
      setData(rawJsonData)
    } else {
      console.error(`No data found for key: ${key}`)
    }
  }, [key])

  return data
}

export function useSchemalayerLocalStorage<
  TV extends Version,
  T extends keyof SchemalayerGen[TV] & string
>({ key, toVersion, type }: { key: string; toVersion: TV; type: T }) {
  const [data, setData] = useState<
    { data: SchemalayerGen[TV][T]; version: TV }[] | undefined
  >(undefined)
  const rawJsonData = useLocalStorage<{ version: string; data: any }[]>(key)
  useEffect(() => {
    if (rawJsonData) {
      const transformedData = rawJsonData.map(({ data, version }) =>
        transform({
          fromVersion: version as any,
          type,
          toVersion,
          data,
        }),
      )
      setData(transformedData)
    }
  }, [rawJsonData])

  return data
}

