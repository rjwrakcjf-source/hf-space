class SeccompManager {
  getDefaultProfile() {
    return { defaultAction: 'SCMP_ACT_ERRNO', syscalls: [] };
  }
  applyProfile(pid, profile) { return { applied: true, pid }; }
}
module.exports = { SeccompManager };
