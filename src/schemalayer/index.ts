import { T20201105202708 } from './20201105202708-changeGoalToObjectiveInMetadata'

// NOTE re-exports type definitions of latest schema
export type Project = T20201105202708.Project
export type Metadata = T20201105202708.Metadata
export type Task = T20201105202708.Task
export type Status = T20201105202708.Status


import { TransformsMap, transform as transform_, NoExtraProperties } from 'schemalayer'
import { transforms as M20201023202606 } from './20201023202606-zero'
import { transforms as M20201025202608 } from './20201025202608-createProject'
import { transforms as M20201026202608 } from './20201026202608-renameFieldsInProject'
import { transforms as M20201027202608 } from './20201027202608-changeCompleteToStatusInProject'
import { transforms as M20201029202608 } from './20201029202608-createTask'
import { transforms as M20201030202608 } from './20201030202608-changeCompleteToStatusInTask'
import { transforms as M20201030202708 } from './20201030202708-addTasksToProject'
import { transforms as M20201101202708 } from './20201101202708-addTagsToTask'
import { transforms as M20201102202708 } from './20201102202708-addMembersToProject'
import { transforms as M20201103202708 } from './20201103202708-addAssigneeToTask'
import { transforms as M20201104202708 } from './20201104202708-addMetadata'
import { transforms as M20201105202708 } from './20201105202708-changeGoalToObjectiveInMetadata'

const transformsMap = new TransformsMap()
transformsMap.set(M20201023202606.version, M20201023202606)
transformsMap.set(M20201025202608.version, M20201025202608)
transformsMap.set(M20201026202608.version, M20201026202608)
transformsMap.set(M20201027202608.version, M20201027202608)
transformsMap.set(M20201029202608.version, M20201029202608)
transformsMap.set(M20201030202608.version, M20201030202608)
transformsMap.set(M20201030202708.version, M20201030202708)
transformsMap.set(M20201101202708.version, M20201101202708)
transformsMap.set(M20201102202708.version, M20201102202708)
transformsMap.set(M20201103202708.version, M20201103202708)
transformsMap.set(M20201104202708.version, M20201104202708)
transformsMap.set(M20201105202708.version, M20201105202708)

export function transform<
  /** From version */
  FV extends keyof SchemalayerGen,
  /** Type */
  T extends keyof SchemalayerGen[FV] & keyof SchemalayerGen[TV] & string,
  /** Input data object */
  D extends SchemalayerGen[FV][T],
  /** To version (defaults to last version) */
  TV extends keyof SchemalayerGen = '20201105202708'
>({
	fromVersion,
  type,
  data,
	toVersion,
}: {
  fromVersion: FV
  type: T,
  data: NoExtraProperties<SchemalayerGen[FV][T], D>
  toVersion?: TV
}): SchemalayerGen[TV][T] {
	return transform_({transformsMap, fromVersion, type, data, toVersion})
}

