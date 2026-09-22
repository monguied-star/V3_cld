const Store = {
  key: 'mfp_v2_data',
  defaults: { movements: [], budgets: [], goals: [], settings: { theme: 'light', pin: '' } },
  normalize(raw) {
    const d = raw || {};
    return {
      movements: Array.isArray(d.movements) ? d.movements : [],
      budgets: Array.isArray(d.budgets) ? d.budgets : [],
      goals: Array.isArray(d.goals) ? d.goals : [],
      settings: { ...this.defaults.settings, ...(d.settings && typeof d.settings === 'object' ? d.settings : {}) }
    };
  },
  load() {
    try {
      const parsed = JSON.parse(localStorage.getItem(this.key) || '{}');
      return this.normalize(parsed);
    } catch {
      return structuredClone(this.defaults);
    }
  },
  save(data) { localStorage.setItem(this.key, JSON.stringify(data)); },
  backup(data) { return JSON.stringify({ app: 'Mis Finanzas Pro', version: 2, exportedAt: new Date().toISOString(), data }, null, 2); },
  restore(text) {
    const x = JSON.parse(text);
    if (!x || !x.data || !Array.isArray(x.data.movements)) throw new Error('Copia no válida');
    return this.normalize(x.data);
  }
};
