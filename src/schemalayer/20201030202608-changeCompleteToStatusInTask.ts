import { define, op } from 'schemalayer'
import * as parent from './20201029202608-createTask'

export namespace T20201030202608 {
  export type Project = {
    title: string
    description: string
    status: Status
  }

  export type Task = {
    title: string
    description: string
    status: Status
    archived: boolean
  }

  export type Status = 'todo' | 'inProgress' | 'done' | 'default'
}

export const transforms = define({ parent, version: '20201030202608' })(
  op.rename('Task', { oldName: 'complete', newName: 'status' }),
  op.convert('Task', {
    name: 'status',
    newType: 'Status',
    mapping: (_) =>
      _([
        [false, ['todo', 'inProgress']],
        [true, ['done', 'default']],
      ]),
  }),
)
