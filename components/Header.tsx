import { FC } from 'react'
import Link from 'next/link'
import { versions } from '../src/schemalayer'

export const Header: FC = () => {
  return (
    <div>
      <ul>
        {versions.map((v) => (
          <li>
            <Link href={`/${v}`}>
              <a>{v}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
