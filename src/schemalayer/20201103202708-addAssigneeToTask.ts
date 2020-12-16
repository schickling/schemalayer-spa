import { define, op } from 'schemalayer'
import * as parent from './20201102202708-addMembersToProject'

export namespace T20201103202708 {
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
    assignee: string | null
  }

  export type Status = 'todo' | 'inProgress' | 'done' | 'default'
}

export const transforms = define({ parent, version: '20201103202708' })(
  op.add('Task', { name: 'assignee', type: 'string | null' }),
)
