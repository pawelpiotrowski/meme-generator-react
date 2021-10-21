import { uniqueId } from "lodash";

export function getUniqueRefId(prefix = "ref"): string {
  return prefix + uniqueId(Math.random().toString(36).substr(2, 5));
}
