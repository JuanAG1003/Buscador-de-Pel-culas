import neostandard from 'neostandard'

export default [
  // Esto reemplaza al 'globalIgnores' de Vite
  {
    ignores: ['dist', 'node_modules', 'public']
  },
  ...neostandard({
    // Activa reglas de React (sustituye a reactHooks y reactRefresh en la mayoría de casos)
    react: true,
    // Si quieres mantener el comportamiento de Vite para el "Fast Refresh" (recarga rápida)
    // puedes dejarlo así de simple:
  })
]
