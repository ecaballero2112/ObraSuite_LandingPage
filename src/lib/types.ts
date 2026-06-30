export interface Module {
  id: string
  name: string
  tagline: string
  description: string
  logoPath: string
  phase: 1 | 2 | 3
}

export interface Benefit {
  id: string
  title: string
  description: string
  imagePath: string
  videoPath?: string
  alt: string
  reversed: boolean
}

export interface ValueProp {
  id: string
  title: string
  description: string
  icon: string
}

export interface Phase {
  id: number
  title: string
  modules: string[]
  description: string
}
