import { useSingleAnnotationController } from '@atoms/Models/AnnotationsAtom/Hooks/useAnnotationsController';
import { AnnotationAtom } from '@atoms/Models/AnnotationsAtom/Types';
import { useAtomValue } from 'jotai';

export const useRegionOrder = (annotationAtom: AnnotationAtom) => {
  const annotationController = useSingleAnnotationController(annotationAtom)!;

  return useAtomValue(annotationController.result.orderingAtom);
};
