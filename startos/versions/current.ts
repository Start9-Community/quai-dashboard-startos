import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:21',
  releaseNotes: {
    en_US:
      '- StartOS package improvements.\n- The Confirmed rewards action says what answering yes or no changes.',
    es_ES:
      '- Mejoras del paquete de StartOS.\n- La acción Recompensas confirmadas explica qué cambia al responder sí o no.',
    de_DE:
      '- Verbesserungen am StartOS-Paket.\n- Die Aktion Bestätigte Belohnungen erklärt, was ein Ja oder Nein ändert.',
    pl_PL:
      '- Ulepszenia pakietu StartOS.\n- Akcja Potwierdzone nagrody wyjaśnia, co zmienia odpowiedź tak lub nie.',
    fr_FR:
      '- Améliorations du paquet StartOS.\n- L’action Récompenses confirmées indique ce que change une réponse oui ou non.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
