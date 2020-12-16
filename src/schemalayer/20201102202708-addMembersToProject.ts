import { define, op } from 'schemalayer'
import * as parent from './20201101202708-addTagsToTask'

export namespace T20201102202708 {
  export type Project = {
    title: string
    description: string
    status: Status
    tasks: Task[]
    members: string[]
  }

  export type Task = {
    title: string
    description: string
    status: Status
    archived: boolean
    tags: string[]
  }

  export type Status = 'todo' | 'inProgress' | 'done' | 'default'
}

export const transforms = define({ parent, version: '20201102202708' })(
  op.add('Project', { name: 'members', type: 'string[]' }),
)
