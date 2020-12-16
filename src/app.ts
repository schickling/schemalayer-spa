import { transform } from './schemalayer'

const res = transform({
  fromVersion: '20201026202608',
  type: 'Project',
  data: { description: 'test desc', complete: true, title: 'hello world' },
  // toVersion: '20201105202708'
})
console.log(res.metadata.objective)
