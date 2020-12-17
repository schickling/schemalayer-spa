import { T20201105202708 } from './20201105202708-changeGoalToObjectiveInMetadata'

// NOTE re-exports type definitions of latest schema
export type Project = T20201105202708.Project
export type Metadata = T20201105202708.Metadata
export type Task = T20201105202708.Task
export type Status = T20201105202708.Status


export type { T20201023202606 } from './20201023202606-zero'
export type { T20201025202608 } from './20201025202608-createProject'
export type { T20201026202608 } from './20201026202608-renameFieldsInProject'
export type { T20201027202608 } from './20201027202608-changeCompleteToStatusInProject'
export type { T20201029202608 } from './20201029202608-createTask'
export type { T20201030202608 } from './20201030202608-changeCompleteToStatusInTask'
export type { T20201030202708 } from './20201030202708-addTasksToProject'
export type { T20201101202708 } from './20201101202708-addTagsToTask'
export type { T20201102202708 } from './20201102202708-addMembersToProject'
export type { T20201103202708 } from './20201103202708-addAssigneeToTask'
export type { T20201104202708 } from './20201104202708-addMetadata'
export type { T20201105202708 } from './20201105202708-changeGoalToObjectiveInMetadata'

import { TransformsMap, transform as transform_, NoExtraProperties } from 'schemalayer'
import { transforms as transforms20201023202606 } from './20201023202606-zero'
import { transforms as transforms20201025202608 } from './20201025202608-createProject'
import { transforms as transforms20201026202608 } from './20201026202608-renameFieldsInProject'
import { transforms as transforms20201027202608 } from './20201027202608-changeCompleteToStatusInProject'
import { transforms as transforms20201029202608 } from './20201029202608-createTask'
import { transforms as transforms20201030202608 } from './20201030202608-changeCompleteToStatusInTask'
import { transforms as transforms20201030202708 } from './20201030202708-addTasksToProject'
import { transforms as transforms20201101202708 } from './20201101202708-addTagsToTask'
import { transforms as transforms20201102202708 } from './20201102202708-addMembersToProject'
import { transforms as transforms20201103202708 } from './20201103202708-addAssigneeToTask'
import { transforms as transforms20201104202708 } from './20201104202708-addMetadata'
import { transforms as transforms20201105202708 } from './20201105202708-changeGoalToObjectiveInMetadata'

const transformsMap = new TransformsMap()
transformsMap.set(transforms20201023202606.version, transforms20201023202606)
transformsMap.set(transforms20201025202608.version, transforms20201025202608)
transformsMap.set(transforms20201026202608.version, transforms20201026202608)
transformsMap.set(transforms20201027202608.version, transforms20201027202608)
transformsMap.set(transforms20201029202608.version, transforms20201029202608)
transformsMap.set(transforms20201030202608.version, transforms20201030202608)
transformsMap.set(transforms20201030202708.version, transforms20201030202708)
transformsMap.set(transforms20201101202708.version, transforms20201101202708)
transformsMap.set(transforms20201102202708.version, transforms20201102202708)
transformsMap.set(transforms20201103202708.version, transforms20201103202708)
transformsMap.set(transforms20201104202708.version, transforms20201104202708)
transformsMap.set(transforms20201105202708.version, transforms20201105202708)

export type Version = keyof SchemalayerGen
export const versions = [transforms20201023202606.version, transforms20201025202608.version, transforms20201026202608.version, transforms20201027202608.version, transforms20201029202608.version, transforms20201030202608.version, transforms20201030202708.version, transforms20201101202708.version, transforms20201102202708.version, transforms20201103202708.version, transforms20201104202708.version, transforms20201105202708.version]

export function transform<
  /** From version */
  FV extends keyof SchemalayerGen,
  /** Type */
  T extends keyof SchemalayerGen[FV] & keyof SchemalayerGen[TV] & string,
  /** Input data object */
  D extends SchemalayerGen[FV][T],
  /** To version (defaults to last version) */
  TV extends keyof SchemalayerGen = '20201105202708',
  /** Return data (needs extends to "bind" TV default value) */
  R extends { data: SchemalayerGen[TV][T]; version: TV } = {
    data: SchemalayerGen[TV][T]
    version: TV
  }
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
}): R {
	return transform_({transformsMap, fromVersion, type, data, toVersion}) as R
}

