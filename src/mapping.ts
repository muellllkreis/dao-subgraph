import { SummonComplete } from '../generated/MolochSummoner/MolochSummoner'
import { Dao } from '../generated/schema'

export function handleNewDAO(event: SummonComplete): void {
  let dao = new Dao('_' + Math.random().toString(36).substr(2, 9))
  dao.gracePeriod = event.params.gracePeriodLength
  dao.dilutionBond = event.params.dilutionBound
  dao.save()
}
