import { defineBuildConfig } from 'unbuild'

export const createUnbuildConfig = (options = {}) => defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true
  },
  failOnWarn: false,
  ...options
})

// Config spécifique pour les packages de types
export const createTypesConfig = (options = {}) => createUnbuildConfig({
  declaration: true,
  emitDeclarationOnly: true,
  rollup: {
    emitCJS: false // Pas besoin de CJS pour les types
  },
  ...options
})