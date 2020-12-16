import { define, op } from 'schemalayer'
import * as parent from './20201104202708-addMetadata'

export namespace T20201105202708 {
  export type Project = {
    title: string
    description: string
    status: Status
    tasks: Task[]
    members: string[]
    metadata: Metadata
  }

  export type Metadata = {
    objective: string
  }

  export type Task = {
    title: string
    description: string
    status: Status
    // -> date
    archived: boolean
    tags: string[]
    // -> one to many
    assignee: string | null
  }

  export type Status = 'todo' | 'inProgress' | 'done' | 'default'
}

export const transforms = define({ parent, version: '20201105202708' })(
  op.rename('Metadata', { oldName: 'goal', newName: 'objective' }),
)
