export interface ExtensionManifest {
  id: string;
  name: string;
  version: string;
  description?: string;
  author?: string;
  main: string;
  permissions: Permission[];
  contributes?: ExtensionContributions;
}

export type Permission =
  | 'storage'
  | 'network'
  | 'filesystem'
  | 'ipc'
  | 'notifications'
  | 'camera'
  | 'microphone';

export interface ExtensionContributions {
  commands?: Command[];
  menus?: Menu[];
  views?: View[];
}

export interface Command {
  id: string;
  title: string;
  category?: string;
}

export interface Menu {
  id: string;
  when?: string;
}

export interface View {
  id: string;
  name: string;
  location: 'sidebar' | 'panel' | 'editor';
}
