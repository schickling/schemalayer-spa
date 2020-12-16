import { define, op } from 'schemalayer'
import * as parent from './20201103202708-addAssigneeToTask'

export namespace T20201104202708 {
  export type Project = {
    title: string
    description: string
    status: Status
    tasks: Task[]
    members: string[]
    metadata: Metadata
  }

  export type Metadata = {
    goal: string
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

export const transforms = define({ parent, version: '20201104202708' })(
  op.newObjectType({ name: 'Metadata' }),
  op.add('Metadata', { name: 'goal', type: 'string' }),
  op.add('Project', { name: 'metadata', type: 'Metadata' }),
)
