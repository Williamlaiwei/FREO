// Membership helpers. Real profile loading will live here later.
import { getMemberPlaceholder } from '../../services/api'
import type { Member } from '../../types/member'

export function getCurrentMember(): Member {
  return getMemberPlaceholder()
}
