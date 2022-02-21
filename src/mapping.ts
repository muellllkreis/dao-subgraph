import { SummonComplete } from '../generated/MolochSummoner/MolochSummoner'
import { Dao } from '../generated/schema'

export function handleNewDAO(event: SummonComplete): void {
  let dao = new Dao(event.params.moloch.toHexString())
  event.params.
  dao.gracePeriod = event.params.gracePeriodLength
  dao.dilutionBond = event.params.dilutionBound
  dao.save()
}
