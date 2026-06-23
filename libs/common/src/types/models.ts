export interface Model {
  id: string;
  name: string;
  type: ModelType;
  description?: string;
  license: string;
  size?: number;
  tags: string[];
  url: string;
  capabilities: string[];
}

export type ModelType =
  | 'text-generation'
  | 'text-classification'
  | 'token-classification'
  | 'question-answering'
  | 'summarization'
  | 'translation'
  | 'image-classification'
  | 'object-detection'
  | 'text-to-image'
  | 'speech-recognition'
  | 'audio-classification'
  | 'embeddings'
  | 'code-generation'
  | 'multimodal';
