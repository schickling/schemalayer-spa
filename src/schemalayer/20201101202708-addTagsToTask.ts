import { define, op } from 'schemalayer'
import * as parent from './20201030202708-addTasksToProject'

export namespace T20201101202708 {
  export type Project = {
    title: string
    description: string
    status: Status
    tasks: Task[]
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

export const transforms = define({ parent, version: '20201101202708' })(
  op.add('Task', { name: 'tags', type: 'string[]' }),
)
