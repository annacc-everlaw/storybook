import { createContext } from 'react';

import type {
  StoryId,
  StoryName,
  AnyFramework,
  StoryContextForLoaders,
  ComponentTitle,
} from '@storybook/csf';
import type { Story } from '@storybook/store';
import { PreviewWeb } from './PreviewWeb';

export interface DocsContextProps<TFramework extends AnyFramework = AnyFramework> {
  id: StoryId;
  title: ComponentTitle;
  name: StoryName;
  storyById: (id: StoryId) => Story<TFramework>;
  componentStories: () => Story<TFramework>[];
  loadStory: (id: StoryId) => Promise<Story<TFramework>>;
  renderStoryToElement: PreviewWeb<TFramework>['renderStoryToElement'];
  getStoryContext: (story: Story<TFramework>) => StoryContextForLoaders<TFramework>;

  /**
   * mdxStoryNameToKey is an MDX-compiler-generated mapping of an MDX story's
   * display name to its story key for ID generation. It's used internally by the `<Story>`
   * and `Preview` doc blocks.
   */
  mdxStoryNameToKey?: Record<string, string>;
  mdxComponentAnnotations?: any;
}

// FIXME -- should we change the above to legacy?
export interface ModernDocsContextProps<TFramework extends AnyFramework = AnyFramework> {
  id: StoryId;
  title: ComponentTitle;
  name: StoryName;
  storyIdByRef: (ref: any) => StoryId;

  // FIXME: do we still want these?
  componentStories: () => Story<TFramework>[];
  loadStory: (id: StoryId) => Promise<Story<TFramework>>;

  renderStoryToElement: PreviewWeb<TFramework>['renderStoryToElement'];
  getStoryContext: (story: Story<TFramework>) => StoryContextForLoaders<TFramework>;
}

// FIXME -- we can't have a dependency on react here
export const ModernDocsContext = createContext<ModernDocsContextProps>(null);
