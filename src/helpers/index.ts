import { Row } from "../models/EntitiesTree";


function depthOfChilds(row: Row, level = 0) {
  if (row.child?.length === 0 && level === 0) {
    level = 1;
    return level;
  }

  row.child?.forEach((el) => {
    level++;
    if (el.child && el.child.length > 0) {
      level += depthOfChilds(el);
    }
  });
  return level;
}

export function checkDepth(row: Row | null) {
  if (!row) return 'depth-no';
  const depth = depthOfChilds(row);

  return `depth-${depth}`;
}
