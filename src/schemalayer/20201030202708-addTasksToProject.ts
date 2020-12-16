import { define, op } from 'schemalayer'
import * as parent from './20201030202608-changeCompleteToStatusInTask'

export namespace T20201030202708 {
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
  }

  export type Status = 'todo' | 'inProgress' | 'done' | 'default'
}

export const transforms = define({ parent, version: '20201030202708' })(
  op.add('Project', { name: 'tasks', type: 'Task[]' }),
)
