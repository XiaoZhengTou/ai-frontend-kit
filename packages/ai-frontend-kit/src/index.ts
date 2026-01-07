export const version = '1.0.0';

export interface StreamOptions {
  onChunk?: (chunk: string) => void;
  onComplete?: () => void;
  onError?: (error: Error) => void;
}

export class StreamRenderer {
  private options: StreamOptions;

  constructor(options: StreamOptions) {
    this.options = options;
  }

  async render(text: string, delay: number = 50): Promise<void> {
    let index = 0;
    
    const processNext = (): Promise<void> => {
      return new Promise((resolve) => {
        if (index < text.length) {
          const chunk = text.slice(0, index + 1);
          this.options.onChunk?.(chunk);
          index++;
          setTimeout(() => {
            processNext().then(resolve);
          }, delay);
        } else {
          this.options.onComplete?.();
          resolve();
        }
      });
    };

    await processNext();
  }
}

export function createAIStream(text: string): AsyncGenerator<string, void, unknown> {
  let index = 0;
  
  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    async next(): Promise<{ done: boolean; value: string }> {
      if (index < text.length) {
        const char = text[index];
        index++;
        return { done: false, value: char };
      }
      return { done: true, value: '' };
    }
  } as AsyncGenerator<string, void, unknown>;
}

export const AI_SDK_VERSION = version;
export * from './types';