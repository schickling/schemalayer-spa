import { define, op } from 'schemalayer'
import * as parent from './20201025202608-createProject'

export namespace T20201026202608 {
  export type Project = {
    title: string
    description: string
    complete: boolean
  }
}

export const transforms = define({ parent, version: '20201026202608' })(
  op.add('Project', { name: 'complete', type: 'boolean', defaultValue: false }),
  op.rename('Project', { oldName: 'summary', newName: 'description' }),
)
