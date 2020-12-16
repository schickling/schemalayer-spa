import { define, op } from 'schemalayer'
import * as parent from './20201027202608-changeCompleteToStatusInProject'

export namespace T20201029202608 {
  export type Project = {
    title: string
    description: string
    status: Status
  }

  export type Task = {
    title: string
    description: string
    complete: boolean
    archived: boolean
  }

  export type Status = 'todo' | 'inProgress' | 'done' | 'default'
}

export const transforms = define({ parent, version: '20201029202608' })(
  op.newObjectType({ name: 'Task' }),
  op.add('Task', { name: 'title', type: 'string', defaultValue: '' }),
  op.add('Task', { name: 'description', type: 'string', defaultValue: '' }),
  op.add('Task', { name: 'complete', type: 'boolean', defaultValue: false }),
  op.add('Task', { name: 'archived', type: 'boolean', defaultValue: false }),
)
