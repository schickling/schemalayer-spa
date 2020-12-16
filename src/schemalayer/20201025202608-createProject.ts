import { define, op } from 'schemalayer'
import * as parent from './20201023202606-zero'

export namespace T20201025202608 {
  export type Project = {
    title: string
    summary: string
  }
}

export const transforms = define({ parent, version: '20201025202608' })(
  op.add('Project', { name: 'title', type: 'string' }),
  op.add('Project', { name: 'summary', type: 'string' }),
)
