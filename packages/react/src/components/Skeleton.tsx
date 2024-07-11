import { ComponentProps } from 'react'
import SkeletonScreen from '@mui/material/Skeleton'

export type SkeletonProps = ComponentProps<typeof SkeletonScreen>

export function Skeleton(props: SkeletonProps) {
  return (
      <SkeletonScreen {...props} sx={{ bgcolor: '#202024' }}/>
  )
}

Skeleton.displayName = 'Skeleton'

