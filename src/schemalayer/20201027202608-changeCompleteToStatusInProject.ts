import { define, op } from 'schemalayer'
import * as parent from './20201026202608-renameFieldsInProject'

export namespace T20201027202608 {
  export type Project = {
    title: string
    description: string
    status: Status
  }

  export type Status = 'todo' | 'inProgress' | 'done' | 'default'
}

export const transforms = define({ parent, version: '20201027202608' })(
  op.newStaticType({
    name: 'Status',
    definition: {
      union: [
        { literal: 'inProgress' },
        { literal: 'todo' },
        { literal: 'done' },
        { literal: 'default' },
      ],
    },
  }),
  op.rename('Project', { oldName: 'complete', newName: 'status' }),
  op.convert('Project', {
    name: 'status',
    newType: 'Status',
    mapping: (_) =>
      _([
        [false, ['todo', 'inProgress']],
        [true, ['done', 'default']],
      ]),
  }),
)
